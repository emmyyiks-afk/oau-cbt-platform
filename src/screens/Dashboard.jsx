// src/screens/Dashboard.jsx - COMPLETE WORKING VERSION
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Trophy, Target, Award, PlayCircle, GraduationCap,
  TrendingUp, Zap, Calendar, LogOut, Settings,
  Sparkles, ChevronRight,
} from 'lucide-react';

const Dashboard = ({ setCurrentMode }) => {
  const [stats, setStats] = useState({
    examsTaken: 0,
    averageScore: 0,
    bestScore: 0,
    questionsAnswered: 0,
    studyTime: '0h',
    rank: 0
  });

  useEffect(() => {
    // Load stats from localStorage or use defaults
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setStats({
          examsTaken: progress.examsTaken || 3,
          averageScore: progress.averageScore || 32,
          bestScore: progress.bestScore || 38,
          questionsAnswered: progress.questionsAnswered || 120,
          studyTime: progress.studyTime || '4.5h',
          rank: progress.rank || 12
        });
      } catch {
        setStats({
          examsTaken: 3,
          averageScore: 32,
          bestScore: 38,
          questionsAnswered: 120,
          studyTime: '4.5h',
          rank: 12
        });
      }
    }
  }, []);

  // Quick Actions - User must CLICK to navigate
  const quickActions = [
    {
      icon: PlayCircle,
      label: 'Start Exam',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      onClick: () => {
        if (setCurrentMode) {
          setCurrentMode('exam');
        }
      },
      description: '40 questions • 1 hour timed',
      stats: '⏱️ Ready'
    },
    {
      icon: BookOpen,
      label: 'Practice Mode',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      onClick: () => {
        if (setCurrentMode) {
          setCurrentMode('practice');
        }
      },
      description: 'Choose any subject to practice',
      stats: '📚 16 subjects'
    },
    {
      icon: Trophy,
      label: 'Leaderboard',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      onClick: () => {
        alert('🏆 Leaderboard coming soon! Stay tuned!');
      },
      description: 'See top performers',
      stats: '#12 🏆'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: '📐', progress: 75, color: 'blue', questions: 45, gradient: 'from-blue-400 to-cyan-500' },
    { name: 'English', icon: '📚', progress: 60, color: 'green', questions: 32, gradient: 'from-green-400 to-emerald-500' },
    { name: 'Physics', icon: '⚛️', progress: 45, color: 'purple', questions: 28, gradient: 'from-purple-400 to-pink-500' },
    { name: 'Chemistry', icon: '🧪', progress: 30, color: 'orange', questions: 18, gradient: 'from-orange-400 to-red-500' },
    { name: 'Aptitude', icon: '🧠', progress: 85, color: 'pink', questions: 56, gradient: 'from-pink-400 to-rose-500' },
  ];

  const recentActivity = [
    { type: 'exam', subject: 'Mathematics', score: 35, total: 40, date: '2 hours ago', status: 'completed' },
    { type: 'practice', subject: 'Physics', questions: 20, date: 'Yesterday', status: 'completed' },
    { type: 'exam', subject: 'English', score: 32, total: 40, date: '2 days ago', status: 'completed' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  // Handle starting practice - User must CLICK
  const startPractice = () => {
    if (setCurrentMode) {
      setCurrentMode('practice');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-3xl animate-bounce">🎓</div>
              <div>
                <h1 className="font-bold text-gray-800 text-lg">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">JOAS</span> CBT
                </h1>
                <p className="text-xs text-gray-500">Post-UTME Practice</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1.5 rounded-full border border-green-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-700 font-medium">Online</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 mb-8 text-white relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute top-4 right-4 text-6xl opacity-20">⭐</div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-white/90 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full inline-flex mb-3">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Welcome back! You're doing great! 🎉</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Hello, Student! 👋
              </h2>
              <p className="text-white/90 mt-1">
                Choose a mode below to start practicing!
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
              <Calendar className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: GraduationCap, label: 'Exams Taken', value: stats.examsTaken, color: 'blue', bg: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-200' },
            { icon: Target, label: 'Avg Score', value: `${stats.averageScore}/40`, color: 'green', bg: 'bg-green-100', text: 'text-green-600', ring: 'ring-green-200' },
            { icon: Award, label: 'Best Score', value: `${stats.bestScore}/40`, color: 'yellow', bg: 'bg-yellow-100', text: 'text-yellow-600', ring: 'ring-yellow-200' },
            { icon: TrendingUp, label: 'Your Rank', value: `#${stats.rank}`, color: 'purple', bg: 'bg-purple-100', text: 'text-purple-600', ring: 'ring-purple-200' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${stat.ring} hover:scale-105`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 ${stat.bg} rounded-xl ring-2 ${stat.ring}`}>
                  <stat.icon className={`w-6 h-6 ${stat.text}`} />
                </div>
                <span className={`text-xs font-bold ${stat.text} bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                  {index === 0 ? '+2' : index === 1 ? '+5%' : index === 2 ? '🏆' : '↑ 3'}
                </span>
              </div>
              <p className={`text-3xl font-bold ${stat.text} mt-3`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={action.onClick}
              className={`bg-gradient-to-r ${action.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-left`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <action.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl mt-3">{action.label}</h3>
                  <p className="text-white/80 text-sm">{action.description}</p>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-white/70 mt-2 bg-white/20 px-3 py-1 rounded-full">
                    {action.stats}
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-4xl opacity-20">→</div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject Progress */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800 text-lg">📊 Subject Progress</h3>
              <button 
                onClick={startPractice}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium bg-purple-50 px-4 py-1.5 rounded-full"
              >
                View All →
              </button>
            </div>
            <div className="space-y-5">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{subject.icon}</span>
                      <div>
                        <span className="font-semibold text-gray-700">{subject.name}</span>
                        <span className="text-xs text-gray-400 ml-2">({subject.questions} questions)</span>
                      </div>
                    </div>
                    <span className={`text-sm font-bold text-${subject.color}-600 bg-${subject.color}-100 px-3 py-1 rounded-full`}>
                      {subject.progress}%
                    </span>
                  </div>
                  <div className="relative w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.progress}%` }}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                      className={`h-3 rounded-full bg-gradient-to-r ${subject.gradient}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-800 text-lg">⚡ Recent Activity</h3>
              <div className="p-2 bg-yellow-100 rounded-xl">
                <Zap className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition border border-gray-100"
                >
                  <div className={`p-2 rounded-xl ${
                    activity.type === 'exam' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    {activity.type === 'exam' ? (
                      <Trophy className="w-4 h-4 text-blue-600" />
                    ) : (
                      <BookOpen className="w-4 h-4 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-gray-800">
                        {activity.type === 'exam' ? '📝 Exam' : '📖 Practice'}
                      </p>
                      <span className="text-xs text-gray-400">{activity.date}</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {activity.type === 'exam' 
                        ? `${activity.subject} • ${activity.score}/${activity.total}`
                        : `${activity.subject} • ${activity.questions} questions`}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        ✅ Completed
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-sm text-purple-600 hover:text-purple-700 py-2 border-t border-gray-100 font-medium">
              View All History →
            </button>
          </div>
        </div>

        {/* Motivation Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="text-5xl bg-white/20 p-3 rounded-2xl">⭐</div>
              <div>
                <h4 className="font-bold text-white text-lg">🎯 Daily Goal</h4>
                <p className="text-white/90 text-sm">
                  Complete 50 practice questions today • <span className="font-bold text-yellow-300">{Math.floor(Math.random() * 30) + 20}</span> more to go!
                </p>
              </div>
            </div>
            <button 
              onClick={startPractice}
              className="px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              Practice Now 🚀
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;