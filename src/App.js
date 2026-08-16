// src/App.js - COMPLETE WITH LOCK MODAL (FULLY CORRECTED)
import React, { useState, useEffect, useCallback, useRef, Suspense, lazy } from 'react';
import './App.css';
import { 
  auth, 
  db, 
  signInWithEmailAndPassword, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc 
} from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

// 🔥 IMPORT LUCIDE ICONS - ALL NEEDED ICONS
import { 
  Lock, Eye, EyeOff, ChevronRight, GraduationCap,
  Lightbulb, Trophy, UserPlus, Headphones, Mail,
  Shield, AlertCircle, XCircle, Banknote, Phone
} from 'lucide-react';

// Import lightweight screens normally
import Dashboard from './screens/Dashboard';

// 🔥 Lazy-load the heavy screens
const AdminDashboard = lazy(() => import('./screens/AdminDashboard'));
const PracticeMode = lazy(() => import('./screens/PracticeMode'));
const ExamScreen = lazy(() => import('./screens/ExamScreen'));
const SubjectSelection = lazy(() => import('./screens/SubjectSelection'));
const PracticeSubjectSelect = lazy(() => import('./screens/PracticeSubjectSelect'));

// 🔐 ADMIN CONFIGURATION
const ADMIN_CONFIG = {
  adminEmail: 'adebisi@gmail.com',
  adminUid: '2yQRKgq0fBPR94XpY2nHGmFSs3m1',
  adminEmails: ['admin400@gmail.com', 'superadmin400@gmail.com', 'adebisi@gmail.com']
};

// 🔥 ADMIN BANK DETAILS - UPDATE THESE WITH YOUR ACTUAL DETAILS
const ADMIN_BANK_DETAILS = {
  bankName: 'Opay Bank',
  accountName: 'Akinyemi Oluwayinka Ayomide',
  accountNumber: '9151485641',
  phoneNumber: '+2349151485641',
  whatsappMessage: '09151485641'
};

const ScreenLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="loading-text">Loading…</div>
  </div>
);

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 🔥 Lock modal state
  const [showLockModal, setShowLockModal] = useState(false);
  const [lockMessage, setLockMessage] = useState('');
  const [lockEmail, setLockEmail] = useState('');

  const [authReady, setAuthReady] = useState(false);
  const hasForcedSignOutRef = useRef(false);

  // Quiz states
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedExamSubjects, setSelectedExamSubjects] = useState([]);
  const [userProgress, setUserProgress] = useState(null);
  
  const [currentMode, setCurrentMode] = useState('dashboard');
  const [examMode, setExamMode] = useState(false);
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);
  const [showPracticeSubjectSelect, setShowPracticeSubjectSelect] = useState(false);

  const checkIfAdmin = useCallback((firebaseUser) => {
    if (firebaseUser.uid === ADMIN_CONFIG.adminUid) return true;
    if (ADMIN_CONFIG.adminEmails.includes(firebaseUser.email)) return true;
    if (firebaseUser.email === ADMIN_CONFIG.adminEmail) return true;
    return false;
  }, []);

  const loadUserProgress = useCallback(async (uid, email, displayName) => {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserProgress(data.progress || {});
      } else {
        await setDoc(docRef, {
          email: email || '',
          displayName: displayName || 'User',
          createdAt: new Date().toISOString(),
          progress: {
            totalAttempted: 0,
            correctAnswers: 0,
            subjectsCompleted: {},
            currentSubject: null,
            lastActivity: new Date().toISOString()
          }
        });
        setUserProgress({});
      }
    } catch (error) {
      console.log('Firebase progress load failed:', error);
      setUserProgress({});
    }
  }, []);

  // 🔥 onAuthStateChanged listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser && !hasForcedSignOutRef.current) {
        hasForcedSignOutRef.current = true;
        try {
          await auth.signOut();
        } catch (err) {
          console.log('Error forcing fresh sign-out:', err);
          setAuthReady(true);
        }
        return;
      }

      hasForcedSignOutRef.current = true;

      if (firebaseUser) {
        const isUserAdmin = checkIfAdmin(firebaseUser);
        
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          isAdmin: isUserAdmin
        };
        
        setUser(userData);
        setIsAdmin(isUserAdmin);
        setShowLogin(false);
        setAuthReady(true);
        
        await loadUserProgress(firebaseUser.uid, firebaseUser.email, userData.displayName);
      } else {
        setUser(null);
        setIsAdmin(false);
        setShowLogin(true);
        setUserProgress(null);
        setShowAdminLogin(false);
        setCurrentMode('dashboard');
        setExamMode(false);
        setShowSubjectSelection(false);
        setShowPracticeSubjectSelect(false);
        setSelectedSubject(null);
        setAuthReady(true);
      }
    });

    return () => unsubscribe();
  }, [checkIfAdmin, loadUserProgress]);

  useEffect(() => {
    const flagsToRemove = [
      'startPractice', 'isAuthenticated', 'userEmail',
      'userUid', 'userName', 'isAdmin', 'userAccess'
    ];
    flagsToRemove.forEach(flag => {
      if (localStorage.getItem(flag)) {
        localStorage.removeItem(flag);
      }
    });
  }, []);

  const updateUserProgress = async (data) => {
    if (!user) return;
    try {
      const docRef = doc(db, 'users', user.uid);
      const currentProgress = userProgress || {};
      const updatedProgress = {
        ...currentProgress,
        ...data,
        lastActivity: new Date().toISOString()
      };
      await updateDoc(docRef, { progress: updatedProgress });
      setUserProgress(updatedProgress);
    } catch (error) {
      console.log('Firebase progress update failed:', error);
      setUserProgress(prev => ({ ...prev, ...data }));
    }
  };

  // 🔥 Close lock modal
  const closeLockModal = () => {
    setShowLockModal(false);
    setLockEmail('');
    setLockMessage('');
  };

  // 🔥 handleLogin with lock check
  const handleLogin = async (email, password, isAdminLogin = false) => {
    setLoading(true);
    setError('');
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      const isUserAdmin = checkIfAdmin(firebaseUser);
      
      if (isAdminLogin && !isUserAdmin) {
        setError('❌ Access denied. You are not authorized as an admin.');
        setLoading(false);
        await auth.signOut();
        return;
      }
      
      // 🔥 Check if user is locked BEFORE proceeding (for regular users)
      let docSnap = null;
      if (!isAdminLogin && !isUserAdmin) {
        try {
          const docRef = doc(db, 'users', firebaseUser.uid);
          docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const userData = docSnap.data();
            
            // 🔥 CHECK IF USER IS LOCKED
            if (userData.status === 'locked') {
              setLockEmail(email);
              setLockMessage(userData.lockReason || 'Your account has been locked due to payment issues.');
              setShowLockModal(true);
              setLoading(false);
              await auth.signOut();
              return;
            }
            
            if (userData.status === 'inactive') {
              setError('❌ Your account has been suspended. Please contact admin.');
              setLoading(false);
              await auth.signOut();
              return;
            }
          } else {
            // Check localStorage fallback
            const storedUsers = localStorage.getItem('cbt_users');
            if (storedUsers) {
              const usersList = JSON.parse(storedUsers);
              const foundUser = usersList.find(u => u.email === email);
              if (foundUser && foundUser.status === 'locked') {
                setLockEmail(email);
                setLockMessage('Your account has been locked due to payment issues.');
                setShowLockModal(true);
                setLoading(false);
                await auth.signOut();
                return;
              }
              if (!foundUser) {
                setError('❌ Account not found. Please contact admin for access.');
                setLoading(false);
                await auth.signOut();
                return;
              }
            } else {
              setError('❌ Account not found. Please contact admin for access.');
              setLoading(false);
              await auth.signOut();
              return;
            }
          }
        } catch (firestoreError) {
          console.warn('⚠️ Firestore check failed:', firestoreError);
          // Check localStorage fallback
          const storedUsers = localStorage.getItem('cbt_users');
          if (storedUsers) {
            const usersList = JSON.parse(storedUsers);
            const foundUser = usersList.find(u => u.email === email);
            if (foundUser && foundUser.status === 'locked') {
              setLockEmail(email);
              setLockMessage('Your account has been locked due to payment issues.');
              setShowLockModal(true);
              setLoading(false);
              await auth.signOut();
              return;
            }
          }
        }
      }
      
      const displayName = firebaseUser.displayName || email.split('@')[0] || 'User';

      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName,
        isAdmin: isUserAdmin
      });
      setIsAdmin(isUserAdmin);
      
      setUserProgress(docSnap && docSnap.exists() ? (docSnap.data().progress || {}) : {});

      setShowLogin(false);
      setShowAdminLogin(false);
      
    } catch (error) {
      console.error('❌ Login error:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          setError('❌ No account found with this email.');
          break;
        case 'auth/wrong-password':
          setError('❌ Incorrect password. Please try again.');
          break;
        case 'auth/invalid-email':
          setError('❌ Invalid email address.');
          break;
        case 'auth/too-many-requests':
          setError('❌ Too many failed attempts. Please try again later.');
          break;
        default:
          setError(error.message || '❌ Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setIsAdmin(false);
      setShowLogin(true);
      setSelectedSubject(null);
      setSelectedExamSubjects([]);
      setUserProgress(null);
      setShowAdminLogin(false);
      setError('');
      setCurrentMode('dashboard');
      setExamMode(false);
      setShowSubjectSelection(false);
      setShowPracticeSubjectSelect(false);
      localStorage.removeItem('startPractice');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSetMode = (mode) => {
    setCurrentMode(mode);
    if (mode === 'exam') {
      setShowSubjectSelection(true);
    } else if (mode === 'practice') {
      setShowPracticeSubjectSelect(true);
    }
  };

  // 🔥 RENDER LOGIN WITH LOCK MODAL
  const renderLogin = () => (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>📚 JOAS CBT</h1>
            <p>Post-UTME Practice Platform</p>
          </div>
          
          <h2>{showAdminLogin ? '🛡️ Admin Login' : 'Welcome Back!'}</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleLogin(email, password, showAdminLogin);
          }}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? '⏳ Logging in...' : (showAdminLogin ? '🔑 Admin Login' : '🔑 Login')}
            </button>
          </form>
          
          <div className="login-options">
            <button onClick={() => setShowAdminLogin(!showAdminLogin)} className="toggle-admin-btn">
              {showAdminLogin ? '👤 Switch to User Login' : '🛡️ Admin Login'}
            </button>
          </div>
          
          <p className="login-hint">
            {showAdminLogin ? 'Enter your admin credentials' : 'Contact admin for your credentials'}
          </p>
        </div>
      </div>

      {/* 🔥 LOCK MODAL - Shows when user is locked */}
      {showLockModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-100 max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button 
              onClick={closeLockModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <XCircle className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Account Locked 🔒</h2>
              <p className="text-gray-500 text-sm mt-1">
                Your account has been temporarily locked
              </p>
            </div>

            {/* Message */}
            <div className="bg-red-50 p-4 rounded-xl border border-red-200 mb-6">
              <p className="text-sm text-red-700 text-center">
                {lockMessage || 'Your account has been locked due to payment issues.'}
              </p>
              <p className="text-xs text-red-500 text-center mt-1">
                Account: <span className="font-medium">{lockEmail}</span>
              </p>
            </div>

            {/* Admin Bank Details */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mb-6">
              <h3 className="text-sm font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Banknote className="w-4 h-4" />
                Payment Instructions
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                To unlock your account, please make payment to the account below and contact admin for verification.
              </p>
              
              <div className="space-y-2 bg-white p-3 rounded-lg border border-blue-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Bank</span>
                  <span className="text-sm font-semibold text-gray-800">{ADMIN_BANK_DETAILS.bankName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Account Name</span>
                  <span className="text-sm font-semibold text-gray-800">{ADMIN_BANK_DETAILS.accountName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Account Number</span>
                  <span className="text-sm font-bold text-blue-600">{ADMIN_BANK_DETAILS.accountNumber}</span>
                </div>
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Phone className="w-3 h-3" /> Contact
                    </span>
                    <span className="text-sm font-semibold text-gray-800">{ADMIN_BANK_DETAILS.phoneNumber}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  window.location.href = `tel:${ADMIN_BANK_DETAILS.phoneNumber}`;
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Admin
              </button>
              <button
                onClick={closeLockModal}
                className="w-full px-4 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              After payment, contact admin to unlock your account.
            </p>
          </div>
        </div>
      )}
    </>
  );

  const renderUserDashboard = () => <Dashboard setCurrentMode={handleSetMode} />;

  const renderPracticeSubjectSelect = () => (
    <PracticeSubjectSelect 
      onSelectSubject={(subjectId) => {
        setShowPracticeSubjectSelect(false);
        setSelectedSubject(subjectId);
        setCurrentMode('dashboard');
      }}
      onBack={() => {
        setShowPracticeSubjectSelect(false);
        setCurrentMode('dashboard');
      }}
    />
  );

  const renderExamSubjectSelection = () => (
    <SubjectSelection 
      onSelectSubjects={(subjects) => {
        setShowSubjectSelection(false);
        setExamMode(true);
        setSelectedExamSubjects(subjects);
        setCurrentMode('dashboard');
      }}
      onBack={() => {
        setShowSubjectSelection(false);
        setCurrentMode('dashboard');
      }}
    />
  );

  // Still checking / force-clearing any cached session — show a loader
  if (!authReady) {
    return <ScreenLoader />;
  }

  if (showLogin) {
    return renderLogin();
  }

  if (isAdmin) {
    return (
      <Suspense fallback={<ScreenLoader />}>
        <AdminDashboard />
      </Suspense>
    );
  }

  if (examMode && selectedExamSubjects.length > 0) {
    return (
      <Suspense fallback={<ScreenLoader />}>
        <ExamScreen 
          selectedSubjects={selectedExamSubjects}
          onBack={() => {
            setExamMode(false);
            setSelectedExamSubjects([]);
            setCurrentMode('dashboard');
          }}
        />
      </Suspense>
    );
  }

  if (selectedSubject && !examMode) {
    return (
      <Suspense fallback={<ScreenLoader />}>
        <PracticeMode 
          subjectId={selectedSubject} 
          onBack={() => {
            setSelectedSubject(null);
            setCurrentMode('dashboard');
          }}
          mode="practice"
        />
      </Suspense>
    );
  }

  if (showPracticeSubjectSelect) {
    return (
      <Suspense fallback={<ScreenLoader />}>
        {renderPracticeSubjectSelect()}
      </Suspense>
    );
  }

  if (showSubjectSelection) {
    return (
      <Suspense fallback={<ScreenLoader />}>
        {renderExamSubjectSelection()}
      </Suspense>
    );
  }

  return renderUserDashboard();
}

export default App;