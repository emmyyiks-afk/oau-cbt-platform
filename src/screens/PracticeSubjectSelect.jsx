// src/screens/PracticeSubjectSelect.jsx - FIXED (No React Router)
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  ChevronRight,
  Clock,
  Brain,
  Beaker,
  Atom,
  Globe,
  Landmark,
  Library,
  BookText,
  Calculator,
  GraduationCap,
  Languages,
  Briefcase,
  Eye,
  Zap
} from 'lucide-react';

const PracticeSubjectSelect = ({ onSelectSubject, onBack }) => {
  const subjects = [
    { id: 'aptitude', name: 'Aptitude', icon: Brain, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', textColor: 'text-purple-600', description: 'Logical, Numerical & Verbal Reasoning', count: 230 },
    { id: 'english', name: 'English', icon: BookText, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600', description: 'Grammar, Comprehension & Vocabulary', count: 50 },
    { id: 'mathematics', name: 'Mathematics', icon: Calculator, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', textColor: 'text-green-600', description: 'Algebra, Calculus & Statistics', count: 50 },
    { id: 'physics', name: 'Physics', icon: Atom, color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600', description: 'Mechanics, Optics & Thermodynamics', count: 50 },
    { id: 'chemistry', name: 'Chemistry', icon: Beaker, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', textColor: 'text-orange-600', description: 'Organic, Inorganic & Physical', count: 50 },
    { id: 'biology', name: 'Biology', icon: Globe, color: 'from-teal-500 to-green-500', bgColor: 'bg-teal-50', textColor: 'text-teal-600', description: 'Cells, Genetics & Ecology', count: 50 },
    { id: 'government', name: 'Government', icon: Landmark, color: 'from-red-500 to-rose-500', bgColor: 'bg-red-50', textColor: 'text-red-600', description: 'Politics, Constitution & History', count: 50 },
    { id: 'history', name: 'History', icon: Library, color: 'from-amber-500 to-yellow-500', bgColor: 'bg-amber-50', textColor: 'text-amber-600', description: 'Nigerian & World History', count: 50 },
    { id: 'literature', name: 'Literature', icon: BookOpen, color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-50', textColor: 'text-pink-600', description: 'Poetry, Prose & Drama', count: 50 },
    { id: 'economics', name: 'Economics', icon: GraduationCap, color: 'from-violet-500 to-purple-500', bgColor: 'bg-violet-50', textColor: 'text-violet-600', description: 'Micro & Macro Economics', count: 50 },
    { id: 'commerce', name: 'Commerce', icon: Briefcase, color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-50', textColor: 'text-cyan-600', description: 'Business, Trade & Finance', count: 50 },
    { id: 'religiousStudies', name: 'Religious Studies', icon: BookOpen, color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600', description: 'CRK & IRK', count: 50 },
    { id: 'geology', name: 'Geology', icon: Globe, color: 'from-lime-500 to-green-500', bgColor: 'bg-lime-50', textColor: 'text-lime-600', description: 'Rocks, Minerals & Earth Science', count: 50 },
    { id: 'yoruba', name: 'Yoruba', icon: Languages, color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600', description: 'Language, Literature & Culture', count: 50 },
    { id: 'yorubaPassage', name: 'Yoruba Passage', icon: Eye, color: 'from-rose-500 to-pink-500', bgColor: 'bg-rose-50', textColor: 'text-rose-600', description: 'Yoruba Comprehension Passages', count: 6 },
    { id: 'currentAffairs', name: 'Current Affairs', icon: Zap, color: 'from-red-500 to-orange-500', bgColor: 'bg-red-50', textColor: 'text-red-600', description: 'Nigeria & World Current Affairs', count: 50 }
  ];

  // 🔥 Use onSelectSubject prop instead of navigate
  const handleStartPractice = (subjectId) => {
    if (onSelectSubject) {
      onSelectSubject(subjectId);
    }
  };

  // 🔥 Use onBack prop instead of navigate
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
                <span className="font-medium">Back</span>
              </button>
              <div className="h-6 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Practice by Subject</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>16 Subjects Available</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Choose a Subject to Practice
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Select any subject below and get <span className="font-semibold text-blue-600">random questions</span> to practice. 
            Each session gives you a fresh set of questions from the selected subject.
          </p>
        </motion.div>

        {/* All Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <motion.button
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + index * 0.02 }}
              whileHover={{ y: -4, scale: 1.01 }}
              onClick={() => handleStartPractice(subject.id)}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 text-left group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}></div>
              
              <div className="flex items-start justify-between relative">
                <div>
                  <div className={`inline-flex p-3 ${subject.bgColor} rounded-xl`}>
                    <subject.icon className={`w-6 h-6 ${subject.textColor}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mt-3">{subject.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{subject.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      {subject.count} questions
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Random
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🎯</div>
              <div>
                <h4 className="font-bold text-lg">How It Works</h4>
                <p className="text-white/80 text-sm">
                  Each subject has <span className="font-bold text-yellow-300">randomized questions</span>. 
                  Practice as many times as you want — every session is unique!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
                📚 16 Subjects
              </span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
                🎲 Random Questions
              </span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1">
                💡 Instant Feedback
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PracticeSubjectSelect;