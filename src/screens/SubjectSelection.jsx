// src/screens/SubjectSelection.jsx - WITH DEPARTMENT CATEGORIES
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Info, ChevronRight, AlertCircle, Zap,
  FlaskConical, BookOpen, Briefcase, Filter
} from 'lucide-react';

const SubjectSelection = ({ onSelectSubjects, onBack }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState('all');

  const subjects = [
    // 🔬 SCIENCE SUBJECTS
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '📐',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      description: 'Algebra, Trigonometry, Calculus',
      questionCount: 2500,
      department: 'science',
      iconBg: 'bg-blue-50'
    },
    {
      id: 'physics',
      name: 'Physics',
      icon: '⚛️',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      description: 'Mechanics, Thermodynamics, Optics',
      questionCount: 2500,
      department: 'science',
      iconBg: 'bg-purple-50'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      icon: '🧪',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      description: 'Organic, Inorganic, Physical',
      questionCount: 2500,
      department: 'science',
      iconBg: 'bg-orange-50'
    },
    {
      id: 'biology',
      name: 'Biology',
      icon: '🧬',
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Cells, Genetics, Ecology',
      questionCount: 2500,
      department: 'science',
      iconBg: 'bg-green-50'
    },

    // 📚 ARTS SUBJECTS
    {
      id: 'english',
      name: 'English',
      icon: '📚',
      color: 'green',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Grammar, Vocabulary, Comprehension',
      questionCount: 2500,
      department: 'arts',
      iconBg: 'bg-green-50'
    },
    {
      id: 'literature',
      name: 'Literature',
      icon: '📖',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-600',
      description: 'Poetry, Prose, Drama',
      questionCount: 2500,
      department: 'arts',
      iconBg: 'bg-pink-50'
    },
    {
      id: 'history',
      name: 'History',
      icon: '📜',
      color: 'amber',
      gradient: 'from-amber-500 to-yellow-600',
      description: 'Nigerian & World History',
      questionCount: 2500,
      department: 'arts',
      iconBg: 'bg-amber-50'
    },
    {
      id: 'government',
      name: 'Government',
      icon: '🏛️',
      color: 'red',
      gradient: 'from-red-500 to-rose-600',
      description: 'Politics, Constitution, Governance',
      questionCount: 2500,
      department: 'arts',
      iconBg: 'bg-red-50'
    },
    {
      id: 'yoruba',
      name: 'Yoruba',
      icon: '🗣️',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600',
      description: 'Language, Literature, Culture',
      questionCount: 2500,
      department: 'arts',
      iconBg: 'bg-emerald-50'
    },
    {
      id: 'religiousStudies',
      name: 'Religious Studies',
      icon: '✝️',
      color: 'yellow',
      gradient: 'from-yellow-500 to-amber-600',
      description: 'CRK & IRK',
      questionCount: 2500,
      department: 'arts',
      iconBg: 'bg-yellow-50'
    },

    // 💼 COMMERCIAL SUBJECTS
    {
      id: 'economics',
      name: 'Economics',
      icon: '💰',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-600',
      description: 'Micro & Macro Economics',
      questionCount: 2500,
      department: 'commercial',
      iconBg: 'bg-violet-50'
    },
    {
      id: 'commerce',
      name: 'Commerce',
      icon: '📊',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Business, Trade, Finance',
      questionCount: 2500,
      department: 'commercial',
      iconBg: 'bg-cyan-50'
    },
    {
      id: 'geography',
      name: 'Geography',
      icon: '🌍',
      color: 'teal',
      gradient: 'from-teal-500 to-green-600',
      description: 'Physical & Human Geography',
      questionCount: 2500,
      department: 'commercial',
      iconBg: 'bg-teal-50'
    },
    {
      id: 'currentAffairs',
      name: 'Current Affairs',
      icon: '📰',
      color: 'rose',
      gradient: 'from-rose-500 to-red-600',
      description: 'Nigeria & World Current Affairs',
      questionCount: 2500,
      department: 'commercial',
      iconBg: 'bg-rose-50'
    },

    // 🧠 GENERAL (Always included)
    {
      id: 'aptitude',
      name: 'Aptitude',
      icon: '🧠',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-600',
      description: 'Logical, Numerical & Verbal',
      questionCount: 2500,
      department: 'general',
      isRequired: true,
      iconBg: 'bg-pink-50'
    }
  ];

  const departments = [
    { id: 'all', label: 'All Subjects', icon: Filter },
    { id: 'science', label: '🔬 Science', icon: FlaskConical },
    { id: 'arts', label: '📚 Arts', icon: BookOpen },
    { id: 'commercial', label: '💼 Commercial', icon: Briefcase }
  ];

  const toggleSubject = (subjectId) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject.isRequired) return;

    setSelectedSubjects(prev => {
      if (prev.includes(subjectId)) {
        return prev.filter(id => id !== subjectId);
      } else if (prev.length < 4) {
        return [...prev, subjectId];
      }
      return prev;
    });
  };

  const handleStartExam = () => {
    const allSelected = [...selectedSubjects, 'aptitude'];
    if (allSelected.length === 5) {
      if (onSelectSubjects) {
        onSelectSubjects(allSelected);
      }
    } else {
      alert('⚠️ Please select all 4 subjects');
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  const isSelected = (subjectId) => {
    return selectedSubjects.includes(subjectId) || 
      subjects.find(s => s.id === subjectId)?.isRequired;
  };

  const getSelectedCount = () => {
    return selectedSubjects.length + 1;
  };

  // Filter subjects based on active department
  const filteredSubjects = activeDepartment === 'all' 
    ? subjects 
    : subjects.filter(s => s.department === activeDepartment || s.department === 'general');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
              <span className="font-medium">Back</span>
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Step 1 of 2</span>
              <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '50%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            Select your subjects
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Choose Your Subjects
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Select 4 subjects to begin your exam. Aptitude is mandatory and will be automatically included.
          </p>
        </motion.div>

        {/* 🔥 DEPARTMENT FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {departments.map((dept) => {
            const Icon = dept.icon;
            const isActive = activeDepartment === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {dept.label}
                {isActive && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5].map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                  getSelectedCount() > index 
                    ? 'bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg shadow-green-200' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {getSelectedCount() > index ? '✓' : step}
                </div>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  {index === 0 ? 'Aptitude' : `Subject ${step - 1}`}
                </span>
              </div>
              {index < 4 && (
                <div className="w-8 h-0.5 bg-gray-200">
                  <div className={`h-full bg-green-400 transition-all duration-500 ${
                    getSelectedCount() > index + 1 ? 'w-full' : 'w-0'
                  }`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredSubjects.map((subject, index) => {
            const selected = isSelected(subject.id);
            const isRequired = subject.isRequired || false;
            
            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => toggleSubject(subject.id)}
                className={`relative group cursor-pointer ${isRequired ? 'cursor-default' : ''}`}
              >
                <div className={`p-5 bg-white rounded-2xl border-2 transition-all hover:shadow-xl ${
                  selected 
                    ? `border-${subject.color}-500 bg-${subject.color}-50/20 shadow-lg` 
                    : 'border-gray-100 hover:border-gray-300'
                } ${isRequired ? 'opacity-100' : ''}`}>
                  {/* Selection badge */}
                  <div className="absolute top-3 right-3">
                    {selected ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-7 h-7 bg-gradient-to-r ${subject.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </motion.div>
                    ) : (
                      <div className="w-7 h-7 border-2 border-gray-200 rounded-full group-hover:border-gray-400 transition flex items-center justify-center">
                        <span className="text-xs text-gray-400">+</span>
                      </div>
                    )}
                  </div>

                  {isRequired && (
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
                        Required
                      </span>
                    </div>
                  )}

                  {/* Department Badge */}
                  {subject.department && subject.department !== 'general' && (
                    <div className="absolute bottom-3 left-3">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        subject.department === 'science' ? 'bg-blue-100 text-blue-700' :
                        subject.department === 'arts' ? 'bg-pink-100 text-pink-700' :
                        'bg-cyan-100 text-cyan-700'
                      }`}>
                        {subject.department}
                      </span>
                    </div>
                  )}

                  <div className="mt-4">
                    <div className={`inline-flex p-2.5 ${subject.iconBg} rounded-xl text-2xl`}>
                      {subject.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 mt-2">{subject.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{subject.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-[10px] px-2 py-0.5 ${subject.iconBg} text-${subject.color}-600 rounded-full font-medium`}>
                        {subject.questionCount.toLocaleString()} questions
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Footer */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${
                getSelectedCount() === 5 ? 'bg-green-50' : 'bg-blue-50'
              }`}>
                {getSelectedCount() === 5 ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                ) : (
                  <Info className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {getSelectedCount() === 5 
                    ? '🎯 All subjects selected!' 
                    : `Select ${5 - getSelectedCount()} more subject${5 - getSelectedCount() > 1 ? 's' : ''}`}
                </p>
                <p className="text-xs text-gray-500">
                  {getSelectedCount() === 5 
                    ? 'You\'re ready to start the exam' 
                    : `${getSelectedCount()} of 5 subjects selected`}
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStartExam}
              disabled={getSelectedCount() !== 5}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all text-sm ${
                getSelectedCount() === 5
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200 hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {getSelectedCount() === 5 ? (
                <>
                  Start Exam
                  <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4" />
                  Select all subjects
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;