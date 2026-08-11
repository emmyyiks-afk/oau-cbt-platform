// src/App.js - FIXED VERSION (forced fresh login, race condition fixed)
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

// Import lightweight screens normally
import Dashboard from './screens/Dashboard';

// 🔥 Lazy-load the heavy screens — their question-bank imports (15 subjects
// each) now only load when the user actually navigates there, instead of
// bloating the very first page load.
const AdminDashboard = lazy(() => import('./screens/AdminDashboard'));
const PracticeMode = lazy(() => import('./screens/PracticeMode'));
const ExamScreen = lazy(() => import('./screens/ExamScreen'));
const SubjectSelection = lazy(() => import('./screens/SubjectSelection'));
const PracticeSubjectSelect = lazy(() => import('./screens/PracticeSubjectSelect'));

// 🔐 ADMIN CONFIGURATION
const ADMIN_CONFIG = {
  adminEmail: 'admin@example.com',
  adminUid: 'wcsv5xGdcdO2y5CwUNEKJcvqO7m1',
  adminEmails: ['admin@example.com', 'superadmin@example.com']
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

  // 🔥 True once the one-time "clear any cached session" check has fully
  // finished. Until then we show a loader — never the dashboard, never
  // the login form — so nothing can flash on screen prematurely.
  const [authReady, setAuthReady] = useState(false);

  // 🔥 Ref, not state: needs to update synchronously *inside* the
  // onAuthStateChanged callback itself, and must NOT trigger a re-render
  // or re-subscribe the listener. Tracks whether we've already performed
  // the one-time forced sign-out for this page load.
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

  // 🔥 THE ACTUAL FIX: onAuthStateChanged is the ONLY reliable way to know
  // whether Firebase has restored a cached session, because auth.currentUser
  // is not guaranteed to be populated synchronously on page load — checking
  // it directly (the previous attempt) missed the cached session because it
  // ran before Firebase finished restoring it.
  //
  // Instead: the FIRST time this listener ever reports a user, on this page
  // load, we immediately sign them out WITHOUT touching any UI state (no
  // dashboard, no user data set — nothing). That sign-out then triggers
  // another callback with `firebaseUser = null`, which is when we finally
  // mark auth as ready and show the login screen. A real, explicit login
  // later (via handleLogin) works normally, because by then
  // hasForcedSignOutRef.current is already true.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser && !hasForcedSignOutRef.current) {
        hasForcedSignOutRef.current = true;
        try {
          await auth.signOut();
        } catch (err) {
          console.log('Error forcing fresh sign-out:', err);
          setAuthReady(true); // don't get stuck on a loader forever if this fails
        }
        // Do nothing else here — wait for the resulting null callback below.
        return;
      }

      hasForcedSignOutRef.current = true;

      if (firebaseUser) {
        // A real login (explicit, post-forced-signout) — process normally.
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
      
      let docSnap = null;
      if (!isAdminLogin) {
        const docRef = doc(db, 'users', firebaseUser.uid);
        docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          setError('❌ Account not found. Please contact admin for access.');
          setLoading(false);
          await auth.signOut();
          return;
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
      setError(error.message || '❌ Login failed. Please check your credentials.');
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

  const renderLogin = () => (
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

  // Still checking / force-clearing any cached session — show a loader,
  // never the dashboard, never the login form yet.
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