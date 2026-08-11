// src/screens/PracticeMode.jsx - COMPLETE FIXED VERSION
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, XCircle, Lightbulb,
  ChevronLeft, ChevronRight, RefreshCw, Target, Clock,
  Sparkles, Shuffle
} from 'lucide-react';

// 🔥 IMPORT ALL QUESTION BANKS
import { aptitudeQuestions } from '../data/aptitudeQuestions';
import { biologyQuestions } from '../data/biologyQuestions';
import { chemistryQuestions } from '../data/chemistryQuestions';
import { physicsQuestions } from '../data/physicsQuestions';
import { commerceQuestions } from '../data/commerceQuestions';
import { currentAffairsQuestions } from '../data/currentAffairsQuestions';
import { economicsQuestions } from '../data/economicsQuestions';
import { englishQuestions } from '../data/englishQuestions';
import { geologyQuestions } from '../data/geologyQuestions';
import { governmentQuestions } from '../data/governmentQuestions';
import { literatureQuestions } from '../data/literatureQuestions';
import { mathematicsQuestions } from '../data/mathematicsQuestions';
import { religiousStudiesQuestions } from '../data/religiousStudiesQuestions';
import { yorubaQuestions } from '../data/yorubaQuestions';
import { yorubaPassageQuestions } from '../data/yorubaPassageQuestions';

// 🔥 SUBJECT CONFIGURATION
const subjectConfig = {
  aptitude: { questions: aptitudeQuestions, name: 'Aptitude', icon: '🧠', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
  biology: { questions: biologyQuestions, name: 'Biology', icon: '🧬', color: 'from-teal-500 to-green-500', bgColor: 'bg-teal-50', textColor: 'text-teal-600' },
  chemistry: { questions: chemistryQuestions, name: 'Chemistry', icon: '🧪', color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
  physics: { questions: physicsQuestions, name: 'Physics', icon: '⚛️', color: 'from-indigo-500 to-purple-500', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600' },
  commerce: { questions: commerceQuestions, name: 'Commerce', icon: '💼', color: 'from-cyan-500 to-blue-500', bgColor: 'bg-cyan-50', textColor: 'text-cyan-600' },
  currentAffairs: { questions: currentAffairsQuestions, name: 'Current Affairs', icon: '🌍', color: 'from-red-500 to-rose-500', bgColor: 'bg-red-50', textColor: 'text-red-600' },
  economics: { questions: economicsQuestions, name: 'Economics', icon: '📊', color: 'from-violet-500 to-purple-500', bgColor: 'bg-violet-50', textColor: 'text-violet-600' },
  english: { questions: englishQuestions, name: 'English', icon: '📚', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
  geology: { questions: geologyQuestions, name: 'Geology', icon: '🌋', color: 'from-lime-500 to-green-500', bgColor: 'bg-lime-50', textColor: 'text-lime-600' },
  government: { questions: governmentQuestions, name: 'Government', icon: '🏛️', color: 'from-amber-500 to-yellow-500', bgColor: 'bg-amber-50', textColor: 'text-amber-600' },
  literature: { questions: literatureQuestions, name: 'Literature', icon: '📖', color: 'from-pink-500 to-rose-500', bgColor: 'bg-pink-50', textColor: 'text-pink-600' },
  mathematics: { questions: mathematicsQuestions, name: 'Mathematics', icon: '📐', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', textColor: 'text-green-600' },
  religiousStudies: { questions: religiousStudiesQuestions, name: 'Religious Studies', icon: '✝️', color: 'from-yellow-500 to-amber-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
  yoruba: { questions: yorubaQuestions, name: 'Yoruba', icon: '🗣️', color: 'from-emerald-500 to-teal-500', bgColor: 'bg-emerald-50', textColor: 'text-emerald-600' },
  yorubaPassage: { questions: yorubaPassageQuestions, name: 'Yoruba Passage', icon: '📜', color: 'from-rose-500 to-pink-500', bgColor: 'bg-rose-50', textColor: 'text-rose-600' }
};

const PracticeMode = ({ subjectId, onBack, mode = 'practice' }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0, total: 0 });
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subjectName, setSubjectName] = useState('');
  const [subjectIcon, setSubjectIcon] = useState('📚');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const hasLoaded = useRef(false);

  // 🔥 Shuffle array
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // 🔥 Load questions with visible loading
  useEffect(() => {
    // Prevent double loading
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    const targetSubject = subjectId || 'aptitude';
    const config = subjectConfig[targetSubject];
    
    if (!config) {
      onBack();
      return;
    }

    setSubjectName(config.name);
    setSubjectIcon(config.icon);
    setTotalQuestions(config.questions.length);

    const allQuestions = config.questions || [];
    const shuffledQuestions = shuffleArray(allQuestions);
    const maxQuestions = Math.min(shuffledQuestions.length, 50);
    const selectedQuestions = shuffledQuestions.slice(0, maxQuestions);

    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, wrong: 0, total: 0 });
    setLoading(false);
  }, [subjectId, onBack, shuffleArray]);

  // ... rest of handlers (handleAnswer, handleNext, etc.)
  const handleAnswer = (answer) => {
    if (showExplanation || loading) return;
    setSelectedAnswer(answer);
    const question = questions[currentQuestion];
    const isCorrect = answer === question.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }
    setScore(prev => ({ ...prev, total: prev.total + 1 }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const resetPractice = () => {
    setIsResetting(true);
    const config = subjectId ? subjectConfig[subjectId] : subjectConfig.aptitude;
    const allQuestions = config?.questions || [];
    const shuffledQuestions = shuffleArray(allQuestions);
    const maxQuestions = Math.min(shuffledQuestions.length, 50);
    const selectedQuestions = shuffledQuestions.slice(0, maxQuestions);
    
    setTimeout(() => {
      setQuestions(selectedQuestions);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore({ correct: 0, wrong: 0, total: 0 });
      setIsResetting(false);
    }, 500);
  };

  const handleFinish = () => {
    const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    alert(`📊 Practice Complete!\n\n✅ Correct: ${score.correct}\n❌ Wrong: ${score.wrong}\n📝 Total: ${score.total}\n🎯 Accuracy: ${percentage}%`);
    onBack();
  };

  const config = subjectId ? subjectConfig[subjectId] : subjectConfig.aptitude;

  // 🔥 LOADING SCREEN
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center max-w-md w-full px-4">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shuffle className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mt-6">
            Loading {subjectName} Questions
          </h3>
          
          <p className="text-gray-500 text-sm mt-2">
            🔄 Randomizing {totalQuestions} questions...
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            Preparing your practice session now. This should appear immediately.
          </div>
        </div>
      </div>
    );
  }

  // No Questions
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="text-6xl mb-4">😅</div>
          <h3 className="text-xl font-bold text-gray-800">No Questions Available</h3>
          <p className="text-gray-500 mt-2">This subject doesn't have questions yet.</p>
          <button onClick={onBack} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Choose Another Subject
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
                <span className="font-medium">Back</span>
              </button>
              <div className="h-6 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{subjectIcon}</span>
                <span className="font-semibold text-gray-800">{subjectName}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">📖 Practice</span>
              </div>
            </div>
            <button onClick={resetPractice} disabled={isResetting} className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition disabled:opacity-50">
              <RefreshCw className={`w-4 h-4 ${isResetting ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">New Questions</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Progress</span>
              <span className="text-xs font-bold text-blue-600">{currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1.5">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Correct</span>
              <span className="text-xs font-bold text-green-600">{score.correct}</span>
            </div>
            <div className="flex items-center gap-1 mt-1.5">
              <CheckCircle2 className="w-3 h-3 text-green-500" />
              <span className="text-xs text-gray-500">{accuracy}%</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Incorrect</span>
              <span className="text-xs font-bold text-red-600">{score.wrong}</span>
            </div>
            <div className="flex items-center gap-1 mt-1.5">
              <XCircle className="w-3 h-3 text-red-500" />
              <span className="text-xs text-gray-500">Keep going!</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Score</span>
              <span className="text-xs font-bold text-blue-600">{score.total}</span>
            </div>
            <div className="flex items-center gap-1 mt-1.5">
              <Target className="w-3 h-3 text-blue-500" />
              <span className="text-xs text-gray-500">Total</span>
            </div>
          </div>
        </div>

        {/* Subject Info */}
        <div className="flex items-center justify-between bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span>{totalQuestions} questions available</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <Shuffle className="w-3 h-3 text-purple-500" />
              {questions.length} randomly selected
            </span>
          </div>
          <div className="text-xs text-gray-400">{currentQuestion + 1} of {questions.length}</div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-white bg-gradient-to-r ${config?.color || 'from-blue-500 to-blue-600'} px-3 py-1 rounded-full`}>
                {subjectIcon} {subjectName}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-3 leading-relaxed">
                {question.question}
              </h3>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full flex-shrink-0 ml-4">
              <span>Q{currentQuestion + 1}</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 mt-6">
            {['A', 'B', 'C', 'D'].map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = question.correctAnswer === option;
              const showCorrect = showExplanation && isCorrect;
              const showWrong = showExplanation && isSelected && !isCorrect;
              
              return (
                <motion.button
                  key={option}
                  whileHover={{ scale: showExplanation ? 1 : 1.02 }}
                  whileTap={{ scale: showExplanation ? 1 : 0.98 }}
                  onClick={() => handleAnswer(option)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    showCorrect
                      ? 'border-green-400 bg-green-50 ring-2 ring-green-200'
                      : showWrong
                      ? 'border-red-400 bg-red-50 ring-2 ring-red-200'
                      : isSelected && !showExplanation
                      ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-blue-300'
                  } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showCorrect
                          ? 'bg-green-500 text-white'
                          : showWrong
                          ? 'bg-red-500 text-white'
                          : isSelected && !showExplanation
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {option}
                      </span>
                      <span className="text-gray-700">{question.options[option]}</span>
                    </div>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showWrong && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-900">Explanation</h4>
                    <div className="text-sm text-blue-800 mt-1 whitespace-pre-line leading-relaxed">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation - USER MUST CLICK */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            {showExplanation && currentQuestion < questions.length - 1 ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                className={`flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r ${config?.color || 'from-blue-600 to-indigo-600'} text-white rounded-lg hover:shadow-lg transition`}
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            ) : showExplanation && currentQuestion === questions.length - 1 ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">🎉 Practice complete!</span>
                <button
                  onClick={handleFinish}
                  className="px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition font-medium"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="text-sm text-gray-400">
                {!selectedAnswer ? 'Select an answer to continue ➡️' : ''}
              </div>
            )}
          </div>
        </motion.div>

        {/* Tips */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Target className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Focus on accuracy</p>
              <p className="text-xs text-gray-400">Read explanations carefully</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Clock className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Take your time</p>
              <p className="text-xs text-gray-400">Quality over speed</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Shuffle className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Random questions</p>
              <p className="text-xs text-gray-400">Each session is unique</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeMode;