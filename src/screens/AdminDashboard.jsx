// src/screens/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { 
  collection, doc, setDoc, getDocs, deleteDoc, 
  updateDoc, query, where 
} from 'firebase/firestore';
import { 
  sendPasswordResetEmail,
  signOut,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { db, auth, secondaryAuth } from '../firebase/config';
import { motion } from 'framer-motion';
import { 
  Users, UserPlus, UserCheck, UserX, 
  LogOut, Plus, Trash2, Eye, EyeOff, Shield,
  Mail, Phone, Lock, User, GraduationCap, Database,
  RefreshCw, CheckCircle, XCircle, AlertCircle, Crown,
  Search, Filter
} from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jamb: '',
    username: '',
    password: 'password123',
    access: 'full',
    isAdmin: false
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersList = [];
      querySnapshot.forEach((docSnap) => {
        usersList.push({ id: docSnap.id, ...docSnap.data() });
      });
      setUsers(usersList);
    } catch (err) {
      console.error('Error loading users:', err);
      const stored = localStorage.getItem('cbt_users');
      if (stored) {
        setUsers(JSON.parse(stored));
      }
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    setError('');
    setSuccess('');

    try {
      const trimmedEmail = formData.email.trim();

      // Check if user already exists in Firestore
      const q = query(collection(db, 'users'), where('email', '==', trimmedEmail));
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        setError('❌ User with this email already exists in Firestore');
        setIsCreating(false);
        return;
      }

      // Safe creation using secondaryAuth to avoid revoking active Admin session
      const userCredential = await createUserWithEmailAndPassword(
        secondaryAuth,
        trimmedEmail,
        formData.password || 'password123'
      );
      const firebaseUser = userCredential.user;

      const userRole = formData.isAdmin ? 'admin' : 'student';

      // Store in Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        displayName: formData.fullName,
        email: trimmedEmail,
        phone: formData.phone || '',
        jamb: formData.jamb || '',
        username: formData.username,
        password: formData.password || 'password123',
        access: formData.access || 'full',
        isAdmin: formData.isAdmin || false,
        role: userRole,
        status: 'active',
        uid: firebaseUser.uid,
        createdAt: new Date().toISOString(),
        progress: {
          totalAttempted: 0,
          correctAnswers: 0,
          subjectsCompleted: {},
          currentSubject: null,
          lastActivity: new Date().toISOString()
        }
      });

      // Sign out from secondary app instance immediately
      await signOut(secondaryAuth);

      // Cache locally
      const storedUsers = localStorage.getItem('cbt_users');
      const localUsers = storedUsers ? JSON.parse(storedUsers) : [];
      localUsers.push({
        id: firebaseUser.uid,
        fullName: formData.fullName,
        email: trimmedEmail,
        username: formData.username,
        password: formData.password || 'password123',
        access: formData.access || 'full',
        isAdmin: formData.isAdmin || false,
        role: userRole,
        status: 'active',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('cbt_users', JSON.stringify(localUsers));

      setSuccess(`✅ ${formData.isAdmin ? 'Admin' : 'User'} "${formData.fullName}" created successfully!`);
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        jamb: '',
        username: '',
        password: 'password123',
        access: 'full',
        isAdmin: false
      });
      setShowCreateForm(false);
      await loadUsers();

    } catch (err) {
      console.error('❌ Error creating user:', err);
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('❌ This email is already registered in Firebase Authentication');
          break;
        case 'auth/invalid-email':
          setError('❌ Invalid email address format');
          break;
        case 'auth/weak-password':
          setError('❌ Password is too weak. Use at least 6 characters');
          break;
        default:
          setError(`❌ Failed to create user: ${err.message}`);
      }
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId));
      
      const storedUsers = localStorage.getItem('cbt_users');
      if (storedUsers) {
        const localUsers = JSON.parse(storedUsers);
        const updatedUsers = localUsers.filter(u => u.id !== userId);
        localStorage.setItem('cbt_users', JSON.stringify(updatedUsers));
      }
      
      setDeleteConfirm(null);
      await loadUsers();
      setSuccess('✅ User record removed from Firestore');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('❌ Failed to delete user: ' + err.message);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleToggleStatus = async (userId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    try {
      await updateDoc(doc(db, 'users', userId), { status: newStatus });
      await loadUsers();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleResetPassword = async (userId, newPassword) => {
    const targetUser = users.find(u => u.id === userId);
    if (!targetUser) return;
    
    try {
      await sendPasswordResetEmail(auth, targetUser.email);
      await updateDoc(doc(db, 'users', userId), { password: newPassword });
      
      const storedUsers = localStorage.getItem('cbt_users');
      if (storedUsers) {
        const localUsers = JSON.parse(storedUsers);
        const updatedUsers = localUsers.map(u => 
          u.id === userId ? { ...u, password: newPassword } : u
        );
        localStorage.setItem('cbt_users', JSON.stringify(updatedUsers));
      }
      
      setResetPasswordData(null);
      setSuccess('✅ Password reset email sent successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error resetting password:', err);
      setError('❌ Failed to reset password: ' + err.message);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      window.location.href = '/';
    } catch (err) {
      console.error('Logout error:', err);
      localStorage.clear();
      window.location.reload();
    }
  };

  const filteredUsers = users.filter(u => {
    const matchesSearch = 
      u.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.username?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || u.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: 'Total Users', value: users.length, icon: Users, bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { label: 'Active Users', value: users.filter(u => u.status === 'active').length, icon: UserCheck, bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { label: 'Inactive Users', value: users.filter(u => u.status === 'inactive').length, icon: UserX, bgColor: 'bg-red-50', textColor: 'text-red-600' },
    { label: 'Admins', value: users.filter(u => u.isAdmin || u.role === 'admin').length, icon: Shield, bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 px-4 py-3 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <p className="text-xs text-blue-200">JOAS CBT Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg">
              <Crown className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-200 font-medium border border-white/20"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {success && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {success}
          </motion.div>
        )}
        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {error}
          </motion.div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>
              <div className="relative">
                <Filter className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="pl-10 pr-8 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white appearance-none">
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <button onClick={() => setShowCreateForm(!showCreateForm)} className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 font-medium whitespace-nowrap">
              <Plus className="w-4 h-4" />
              {showCreateForm ? 'Close Form' : 'Create User'}
            </button>
          </div>
        </div>

        {showCreateForm && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-blue-600" />
                Create New User Account
              </h2>
              <button onClick={() => setShowCreateForm(false)} className="text-gray-400 hover:text-gray-600">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Full Name *" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="email" placeholder="Email *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Username *" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="JAMB Registration No." value={formData.jamb} onChange={(e) => setFormData({...formData, jamb: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type={showPassword ? 'text' : 'password'} placeholder="Password (min 6 chars)" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required minLength="6" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="relative md:col-span-1">
                <label className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl bg-white cursor-pointer hover:bg-gray-50 transition">
                  <input 
                    type="checkbox" 
                    checked={formData.isAdmin}
                    onChange={(e) => setFormData({...formData, isAdmin: e.target.checked})}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">👑 Make this user an Admin</span>
                </label>
              </div>
              
              <div className="relative md:col-span-2 lg:col-span-2">
                <select value={formData.access} onChange={(e) => setFormData({...formData, access: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                  <option value="full">Full Access (All Subjects)</option>
                  <option value="science">Science Only</option>
                  <option value="arts">Arts Only</option>
                  <option value="social">Social Sciences</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <button type="submit" disabled={isCreating} className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold disabled:opacity-50 flex items-center justify-center gap-2">
                  {isCreating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Creating User...
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      {formData.isAdmin ? 'Create Admin Account' : 'Create User Account'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {deleteConfirm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Confirm Delete</h3>
              </div>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this user record? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">Cancel</button>
                <button onClick={() => handleDeleteUser(deleteConfirm)} className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl font-medium">Delete User</button>
              </div>
            </motion.div>
          </div>
        )}

        {resetPasswordData && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Reset Password</h3>
              </div>
              <p className="text-gray-600 mb-4">Enter new password reference:</p>
              <input type="text" defaultValue="password123" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl outline-none mb-4" id="newPasswordInput" placeholder="New password..." />
              <div className="flex gap-3">
                <button onClick={() => setResetPasswordData(null)} className="flex-1 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium">Cancel</button>
                <button
                  onClick={() => {
                    const input = document.getElementById('newPasswordInput');
                    handleResetPassword(resetPasswordData, input?.value || 'password123');
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium"
                >
                  Send Reset Email
                </button>
              </div>
            </motion.div>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              Registered Users
              <span className="text-sm font-normal text-gray-500 ml-2">({filteredUsers.length} users)</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">User</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm hidden md:table-cell">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm hidden lg:table-cell">Username</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Access</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <Users className="w-12 h-12 text-gray-300" />
                        <p>No users found</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u, idx) => (
                    <motion.tr key={u.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                            u.isAdmin || u.role === 'admin' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                          }`}>
                            {u.displayName?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <span className="font-medium text-gray-800">
                            {u.displayName}
                            {(u.isAdmin || u.role === 'admin') && <span className="ml-2 text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">👑 Admin</span>}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 hidden md:table-cell text-gray-600 text-sm">{u.email}</td>
                      <td className="py-3 px-4 hidden lg:table-cell text-gray-600 text-sm">{u.username}</td>
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                          {u.access || 'full'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 w-fit ${
                          u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {u.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          {u.status || 'active'}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-1.5">
                          <button onClick={() => handleToggleStatus(u.id, u.status)} className={`p-1.5 rounded-lg ${u.status === 'active' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}`}>
                            {u.status === 'active' ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                          </button>
                          <button onClick={() => setResetPasswordData(u.id)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                            <Lock className="w-4 h-4" />
                          </button>
                          <button onClick={() => setDeleteConfirm(u.id)} className="p-1.5 bg-red-50 text-red-600 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;