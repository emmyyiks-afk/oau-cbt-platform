// src/screens/ExamScreen.jsx - FIXED VERSION (results screen now actually renders)
import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, CheckCircle2, XCircle, ChevronLeft, ChevronRight,
  Send, Flag, Lightbulb, LogOut, Trophy, RotateCcw, Home
} from 'lucide-react';

// Import question banks
import { aptitudeQuestions } from '../data/aptitudeQuestions';
import { mathematicsQuestions } from '../data/mathematicsQuestions';
import { englishQuestions } from '../data/englishQuestions';
import { physicsQuestions } from '../data/physicsQuestions';
import { chemistryQuestions } from '../data/chemistryQuestions';
import { biologyQuestions } from '../data/biologyQuestions';
import { governmentQuestions } from '../data/governmentQuestions';
import { historyQuestions } from '../data/historyQuestions';
import { literatureQuestions } from '../data/literatureQuestions';
import { economicsQuestions } from '../data/economicsQuestions';
import { commerceQuestions } from '../data/commerceQuestions';
import { religiousStudiesQuestions } from '../data/religiousStudiesQuestions';
import { geologyQuestions } from '../data/geologyQuestions';
import { yorubaQuestions } from '../data/yorubaQuestions';
import { currentAffairsQuestions } from '../data/currentAffairsQuestions';

// ⚡ MEMOIZE the Option component to prevent unnecessary re-renders
const QuestionOption = memo(({ 
  option, 
  question, 
  isSelected, 
  showExplanation, 
  onSelect 
}) => {
  const isCorrect = question.correctAnswer === option;
  const showCorrect = showExplanation && isCorrect;
  const showWrong = showExplanation && isSelected && !isCorrect;

  return (
    <motion.button
      whileHover={{ scale: showExplanation ? 1 : 1.02 }}
      whileTap={{ scale: showExplanation ? 1 : 0.98 }}
      onClick={() => !showExplanation && onSelect(question.id, option)}
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
});

const ExamScreen = ({ selectedSubjects = ['aptitude'], onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);

  // ⚡ MEMOIZE the subject map - only created once
  const subjectQuestionMap = useMemo(() => ({
    aptitude: aptitudeQuestions,
    mathematics: mathematicsQuestions,
    english: englishQuestions,
    physics: physicsQuestions,
    chemistry: chemistryQuestions,
    biology: biologyQuestions,
    government: governmentQuestions,
    history: historyQuestions,
    literature: literatureQuestions,
    economics: economicsQuestions,
    commerce: commerceQuestions,
    religiousStudies: religiousStudiesQuestions,
    geology: geologyQuestions,
    yoruba: yorubaQuestions,
    currentAffairs: currentAffairsQuestions
  }), []);

  // ⚡ OPTIMIZED shuffling - only shuffle what you need
  const getRandomQuestions = useCallback((questionsList, count = 10) => {
    if (questionsList.length <= count) {
      return [...questionsList].sort(() => Math.random() - 0.5);
    }
    const shuffled = [...questionsList];
    for (let i = 0; i < count; i++) {
      const j = i + Math.floor(Math.random() * (shuffled.length - i));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }, []);

  // ⚡ LOAD QUESTIONS - only runs once on mount
  useEffect(() => {
    const loadQuestions = () => {
      const allQuestions = [];
      const subjects = selectedSubjects || ['aptitude'];
      
      subjects.forEach(subjectId => {
        const questionsList = subjectQuestionMap[subjectId] || [];
        const selected = getRandomQuestions(questionsList, 10);
        allQuestions.push(...selected);
      });

      const finalQuestions = allQuestions.sort(() => Math.random() - 0.5);
      setQuestions(finalQuestions);
      setLoading(false);
    };

    loadQuestions();
  }, [selectedSubjects, subjectQuestionMap, getRandomQuestions]);

  // ⚡ MEMOIZE timer functions
  const handleSubmitExam = useCallback(() => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setExamSubmitted(true);
    setShowResults(true);
  }, [questions, selectedAnswers]);

  // Timer with cleanup
  useEffect(() => {
    if (examSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examSubmitted, handleSubmitExam]);

  // ⚡ MEMOIZE handlers
  const handleAnswerSelect = useCallback((questionId, answer) => {
    if (examSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
    setShowExplanation(false);
  }, [examSubmitted]);

  const handleShowExplanation = useCallback(() => {
    setShowExplanation(true);
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowExplanation(false);
    }
  }, [currentQuestion, questions.length]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowExplanation(false);
    }
  }, [currentQuestion]);

  const handleQuestionNav = useCallback((index) => {
    setCurrentQuestion(index);
    setShowExplanation(false);
  }, []);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, []);

  // ⚡ MEMOIZE computed values
  const totalAnswered = useMemo(() => Object.keys(selectedAnswers).length, [selectedAnswers]);
  const progress = useMemo(() => {
    return questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  }, [currentQuestion, questions.length]);

  const timerColor = useMemo(() => {
    if (timeLeft < 300) return 'bg-red-100 text-red-700 animate-pulse';
    if (timeLeft < 600) return 'bg-yellow-100 text-yellow-700';
    return 'bg-blue-100 text-blue-700';
  }, [timeLeft]);

  const currentQuestionData = useMemo(() => {
    return questions[currentQuestion] || null;
  }, [questions, currentQuestion]);

  // 🔥 NEW: computed once for the results screen
  const scorePercentage = useMemo(() => {
    return questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  }, [score, questions.length]);

  const unanswered = useMemo(() => {
    return questions.length - totalAnswered;
  }, [questions.length, totalAnswered]);

  const handleRetakeExam = useCallback(() => {
    // Reshuffle a fresh set of questions and reset all exam state
    const allQuestions = [];
    selectedSubjects.forEach(subjectId => {
      const questionsList = subjectQuestionMap[subjectId] || [];
      const selected = getRandomQuestions(questionsList, 10);
      allQuestions.push(...selected);
    });
    const finalQuestions = allQuestions.sort(() => Math.random() - 0.5);

    setQuestions(finalQuestions);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setTimeLeft(3600);
    setExamSubmitted(false);
    setScore(0);
    setShowResults(false);
  }, [selectedSubjects, subjectQuestionMap, getRandomQuestions]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading your exam...</p>
          <p className="text-sm text-gray-400 mt-1">Preparing your questions 📝</p>
        </div>
      </div>
    );
  }

  // 🔥 FIXED: Results Screen now actually returns real JSX instead of an
  // empty block. Previously this `if` block was empty with no `return`,
  // so execution fell straight through to `if (examSubmitted) return null`
  // right below — which produced the blank white screen after submitting.
  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full border border-gray-100"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg shadow-blue-200">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Exam Complete! 🎉</h2>
            <p className="text-gray-500 mt-1">Here's how you performed</p>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-200">
              <div className="text-center text-white">
                <div className="text-4xl font-bold">{scorePercentage}%</div>
                <div className="text-xs font-medium opacity-90">Score</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
              <p className="text-2xl font-bold text-green-600">{score}</p>
              <p className="text-xs text-green-700 font-medium mt-1">Correct</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4 text-center border border-red-100">
              <p className="text-2xl font-bold text-red-600">{questions.length - score - unanswered}</p>
              <p className="text-xs text-red-700 font-medium mt-1">Wrong</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
              <p className="text-2xl font-bold text-gray-600">{unanswered}</p>
              <p className="text-xs text-gray-600 font-medium mt-1">Skipped</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
            <p className="text-sm text-blue-800">
              You answered <span className="font-bold">{score}</span> out of{' '}
              <span className="font-bold">{questions.length}</span> questions correctly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={handleRetakeExam}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-200 transition font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam
            </button>
            <button
              onClick={onBack}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition font-medium"
            >
              <Home className="w-4 h-4" />
              Back to Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (examSubmitted) {
    // This should no longer be reachable in normal flow since showResults
    // is always set true alongside examSubmitted, but kept as a safe
    // fallback loader instead of a blank screen just in case.
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Calculating your results...</p>
        </div>
      </div>
    );
  }

  // ⚡ Main render - with memoized components
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header - unchanged */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🎓</div>
              <div>
                <h1 className="font-bold text-gray-800 text-sm">JOAS POST-UTME</h1>
                <p className="text-xs text-gray-500">Exam Mode</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${timerColor}`}>
                <Clock className="w-4 h-4" />
                <span className="font-bold">{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={handleSubmitExam}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium text-sm"
              >
                <Send className="w-4 h-4" />
                Submit Exam
              </button>
              <button
                onClick={onBack}
                className="p-2 hover:bg-red-50 rounded-full transition"
              >
                <LogOut className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <span className="text-green-600 font-semibold">{totalAnswered}</span>
                    <span>answered</span>
                  </div>
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {currentQuestionData && (
                    <>
                      <div>
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          Q{currentQuestionData.id}/40
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800 mt-3 leading-relaxed">
                          {currentQuestionData.question}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {['A', 'B', 'C', 'D'].map((option) => {
                          const isSelected = selectedAnswers[currentQuestionData.id] === option;
                          return (
                            <QuestionOption
                              key={option}
                              option={option}
                              question={currentQuestionData}
                              isSelected={isSelected}
                              showExplanation={showExplanation}
                              onSelect={handleAnswerSelect}
                            />
                          );
                        })}
                      </div>

                      <AnimatePresence>
                        {showExplanation && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <Lightbulb className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-blue-900">Detailed Explanation:</h4>
                                <div className="text-sm text-blue-800 mt-2 whitespace-pre-line leading-relaxed">
                                  {currentQuestionData.explanation}
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                  <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                                    ✓ Correct Answer: {currentQuestionData.correctAnswer}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                        <button
                          onClick={handlePrev}
                          disabled={currentQuestion === 0}
                          className="flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Previous</span>
                        </button>

                        <div className="flex items-center gap-3">
                          {!showExplanation && selectedAnswers[currentQuestionData.id] && (
                            <button
                              onClick={handleShowExplanation}
                              className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition font-medium"
                            >
                              <Flag className="w-4 h-4" />
                              Check Answer
                            </button>
                          )}
                          {showExplanation && currentQuestion < questions.length - 1 && (
                            <button
                              onClick={handleNext}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                            >
                              Next Question
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Question Navigation Panel - unchanged */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 sticky top-24">
              <h4 className="font-bold text-gray-800 text-sm mb-4">Question Navigation</h4>
              <div className="grid grid-cols-4 gap-2">
                {questions.map((q, index) => {
                  const isAnswered = selectedAnswers[q.id];
                  const isCurrent = index === currentQuestion;

                  return (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionNav(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                          : isAnswered
                          ? 'bg-green-100 text-green-700 border-2 border-green-300'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span>Current Question</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 rounded"></div>
                  <span>Unanswered</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  Answered: <span className="font-bold text-gray-700">{totalAnswered}</span> / {questions.length}
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="h-full bg-green-500 rounded-full transition-all duration-300" style={{ width: `${(totalAnswered / questions.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamScreen;