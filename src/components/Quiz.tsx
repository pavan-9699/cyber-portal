import React, { useState, useEffect } from 'react';
import { Gamepad as GamepadIcon, Timer, Award, TrendingUp, Play, RotateCcw, Eye } from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';
import { QuizQuestion, QuizResult } from '../types';
import { useAuth } from '../contexts/AuthContext';

const QUIZ_DURATION = 20 * 60;
const PASSING_SCORE = 70;

export function Quiz() {
  const { user } = useAuth();
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      finishQuiz();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  const startQuiz = () => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 15);
    setShuffledQuestions(shuffled);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTimeLeft(QUIZ_DURATION);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        finishQuiz(newAnswers);
      }
    }
  };

  const finishQuiz = (finalAnswers?: number[]) => {
    const answersToUse = finalAnswers || answers;
    const score = calculateScore(answersToUse);
    const categoryScores = calculateCategoryScores(answersToUse);
    const timeTaken = QUIZ_DURATION - timeLeft;

    const result: QuizResult = {
      id: Date.now().toString(),
      user_id: user?.id || 'anonymous',
      score,
      total_questions: shuffledQuestions.length,
      category_scores: categoryScores,
      completed_at: new Date().toISOString(),
      time_taken: timeTaken
    };

    setQuizResult(result);
    setGameState('finished');
  };

  const calculateScore = (userAnswers: number[]): number => {
    const correctAnswers = userAnswers.filter((answer, index) => 
      answer === shuffledQuestions[index]?.correctAnswer
    ).length;
    return Math.round((correctAnswers / shuffledQuestions.length) * 100);
  };

  const calculateCategoryScores = (userAnswers: number[]) => {
    const categoryStats: Record<string, { correct: number; total: number }> = {};

    shuffledQuestions.forEach((question, index) => {
      if (!categoryStats[question.category]) {
        categoryStats[question.category] = { correct: 0, total: 0 };
      }
      
      categoryStats[question.category].total++;
      if (userAnswers[index] === question.correctAnswer) {
        categoryStats[question.category].correct++;
      }
    });

    return categoryStats;
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGrade = (score: number): string => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  if (gameState === 'start') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-2xl inline-block mb-8">
              <GamepadIcon className="h-16 w-16 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cybersecurity <span className="text-purple-600">Challenge</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Test your cybersecurity knowledge with our gamified quiz. Answer questions across various security topics and get personalized feedback.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
              <div className="bg-blue-50 p-4 rounded-xl">
                <Timer className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">20 Minutes</div>
                <div className="text-gray-600">Time Limit</div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">15 Questions</div>
                <div className="text-gray-600">Mixed Difficulty</div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
              <p className="text-sm text-yellow-800">
                <strong>Passing Score:</strong> {PASSING_SCORE}% or higher to pass. 
                Get detailed performance analytics and personalized recommendations!
              </p>
            </div>

            <button
              onClick={startQuiz}
              disabled={!user}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="h-5 w-5 inline-block mr-2" />
              Start Challenge
            </button>

            {!user && (
              <p className="text-sm text-red-600 mt-4">Please sign in to take the quiz and save your results.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Quiz Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.category}
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
                </div>
              </div>
              <div className={`flex items-center space-x-2 ${timeLeft < 300 ? 'text-red-600' : 'text-gray-600'}`}>
                <Timer className="h-5 w-5" />
                <span className="font-mono text-lg font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{currentQuestion.question}</h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-purple-500 bg-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                      selectedAnswer === index
                        ? 'border-purple-500 bg-purple-500 text-white'
                        : 'border-gray-300 text-gray-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Eye className="h-4 w-4" />
              <span>{showExplanation ? 'Hide' : 'Show'} Explanation</span>
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200"
            >
              {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mt-4">
              <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gameState === 'finished' && quizResult) {
    const weakAreas = Object.entries(quizResult.category_scores)
      .filter(([_, scores]) => (scores.correct / scores.total) * 100 < 70)
      .map(([category]) => category);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Results Header */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 text-center">
            <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
              quizResult.score >= PASSING_SCORE 
                ? 'bg-green-100' 
                : 'bg-red-100'
            }`}>
              <Award className={`h-12 w-12 ${
                quizResult.score >= PASSING_SCORE 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`} />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>
            
            <div className={`text-6xl font-bold mb-4 ${getScoreColor(quizResult.score)}`}>
              {quizResult.score}%
            </div>
            
            <div className={`text-2xl font-bold mb-6 ${getScoreColor(quizResult.score)}`}>
              Grade: {getGrade(quizResult.score)}
            </div>

            {quizResult.score >= PASSING_SCORE ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">🎉 Congratulations!</h2>
                <p className="text-green-700">
                  You passed the cybersecurity challenge! You've demonstrated strong knowledge of cybersecurity concepts.
                </p>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-red-800 mb-2">Keep Learning!</h2>
                <p className="text-red-700 mb-4">
                  You scored below the passing threshold of {PASSING_SCORE}%. Don't worry - this is a great learning opportunity!
                </p>
                <p className="text-red-700">
                  We recommend watching our educational videos to strengthen your knowledge in weak areas.
                </p>
              </div>
            )}
          </div>

          {/* Detailed Analytics */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Performance Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
                Performance Statistics
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Correct Answers</span>
                  <span className="font-bold text-green-600">
                    {Math.round(quizResult.score * quizResult.total_questions / 100)} / {quizResult.total_questions}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time Taken</span>
                  <span className="font-bold text-blue-600">
                    {formatTime(quizResult.time_taken)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average per Question</span>
                  <span className="font-bold text-purple-600">
                    {Math.round(quizResult.time_taken / quizResult.total_questions)}s
                  </span>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Category Performance</h3>
              
              <div className="space-y-3">
                {Object.entries(quizResult.category_scores).map(([category, scores]) => {
                  const percentage = Math.round((scores.correct / scores.total) * 100);
                  const isWeak = percentage < 70;
                  
                  return (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{category}</span>
                        <span className={`font-bold ${isWeak ? 'text-red-600' : 'text-green-600'}`}>
                          {scores.correct}/{scores.total} ({percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${isWeak ? 'bg-red-500' : 'bg-green-500'}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {weakAreas.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">📚 Recommended Study Areas</h3>
              <p className="text-yellow-700 mb-4">
                Based on your performance, we recommend focusing on these topics:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {weakAreas.map(area => (
                  <span key={area} className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-yellow-700">
                Watch our educational videos covering these topics to improve your understanding!
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={startQuiz}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Retake Quiz</span>
            </button>
            
            {quizResult.score < PASSING_SCORE && (
              <button
                onClick={() => window.location.href = '/videos'}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <Play className="h-5 w-5" />
                <span>Watch Learning Videos</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}