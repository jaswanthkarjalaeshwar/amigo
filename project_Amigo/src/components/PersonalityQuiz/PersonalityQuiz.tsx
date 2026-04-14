import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, Share2, Download, Shuffle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getRandomQuestions, mbtiDescriptions, allMbtiQuestions } from '../../data/mbtiData';
import { MBTIType } from '../../types';

const PersonalityQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions());
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const calculateMBTI = (): MBTIType => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    quizQuestions.forEach(question => {
      const answer = answers[question.id.toString()];
      if (answer) {
        const dimension = question.dimension;
        if (dimension === 'EI') {
          scores[answer === 'a' ? 'E' : 'I'] += question.weight;
        } else if (dimension === 'SN') {
          scores[answer === 'a' ? 'N' : 'S'] += question.weight;
        } else if (dimension === 'TF') {
          scores[answer === 'a' ? 'F' : 'T'] += question.weight;
        } else if (dimension === 'JP') {
          scores[answer === 'a' ? 'J' : 'P'] += question.weight;
        }
      }
    });

    const type = `${scores.E >= scores.I ? 'E' : 'I'}${scores.S >= scores.N ? 'S' : 'N'}${scores.T >= scores.F ? 'T' : 'F'}${scores.J >= scores.P ? 'J' : 'P'}` as MBTIType;
    return type;
  };

  const handleAnswer = (answer: 'a' | 'b') => {
    const question = quizQuestions[currentQuestion];
    setAnswers(prev => ({
      ...prev,
      [question.id]: answer
    }));

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      setShowResults(true);
    }
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setQuizStarted(true);
    // Generate new random questions
    setQuizQuestions(getRandomQuestions());
  };

  const handleSaveResults = () => {
    const newType = calculateMBTI();
    updateUser({ mbtiType: newType });
    navigate('/profile');
  };

  const handleShareResults = () => {
    const newType = calculateMBTI();
    const typeInfo = mbtiDescriptions[newType];
    const shareText = `I just discovered I'm ${typeInfo.name} (${newType}) on Amigo! 🎯 ${typeInfo.description}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Personality Type',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Results copied to clipboard!');
    }
  };

  if (!quizStarted && !showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-8 px-4 pt-20 md:pt-28">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-3xl">🧠</span>
            </div>

            <h1 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Personality Quiz - Bangalore Style! 🎯
            </h1>
            
            <p className="text-gray-600 text-lg mb-6">
              Discover your MBTI personality type and find your perfect college companions in namma Bengaluru! 
              Each quiz gives you 20 random questions from our pool of 100 - perfect for a chai break! ☕
            </p>

            {user?.mbtiType && (
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <p className="text-primary-700 font-medium">
                  Your current type: {user.mbtiType} - {mbtiDescriptions[user.mbtiType].name}
                </p>
                <p className="text-primary-600 text-sm mt-1">
                  Retaking the quiz will give you different questions and may update your profile
                </p>
              </div>
            )}

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center text-success-600 font-bold text-sm">✓</span>
                <span>20 questions randomly selected from 100</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center text-success-600 font-bold text-sm">✓</span>
                <span>Bangalore-specific scenarios, machaa!</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center text-success-600 font-bold text-sm">✓</span>
                <span>Different questions every time you take it</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <span className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center text-success-600 font-bold text-sm">✓</span>
                <span>Instant results with detailed insights</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-50 to-secondary-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shuffle className="w-5 h-5 text-accent-600" />
                <span className="font-semibold text-accent-700">Smart Question Selection</span>
              </div>
              <p className="text-accent-600 text-sm">
                We have {allMbtiQuestions.length} questions in total! Each quiz randomly picks 5 questions from each personality dimension 
                to ensure accurate results while keeping it fresh and engaging.
              </p>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium py-4 px-6 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 text-lg"
            >
              Start Quiz - Let's Go! 🚀
            </button>

            <p className="text-gray-500 text-sm mt-4">
              No right or wrong answers, machaa! Just be yourself 😊
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const resultType = calculateMBTI();
    const typeInfo = mbtiDescriptions[resultType];

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-8 px-4 pt-20 md:pt-28">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className={`w-32 h-32 mx-auto ${typeInfo.color} rounded-full flex items-center justify-center text-5xl mb-4 animate-bounce-slow`}>
                {typeInfo.emoji}
              </div>
              <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">
                Ayy! You're {typeInfo.name}!
              </h1>
              <p className="text-xl text-gray-600 mb-4">{resultType}</p>
              <p className="text-gray-700 leading-relaxed">{typeInfo.description}</p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Your Superpowers</h3>
                <div className="flex flex-wrap gap-2">
                  {typeInfo.strengths.map(strength => (
                    <span
                      key={strength}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Your Quest Style</h3>
                <p className="text-gray-700">{typeInfo.questStyle}</p>
              </div>

              <div className="bg-warning-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Perfect for Bangalore Life</h3>
                <p className="text-gray-700 text-sm">{typeInfo.bangaloreVibe}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={handleRetakeQuiz}
                className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <RotateCcw size={18} />
                <span>New Questions</span>
              </button>

              <button
                onClick={handleShareResults}
                className="flex items-center justify-center space-x-2 px-4 py-3 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <Share2 size={18} />
                <span>Share Results</span>
              </button>

              <button
                onClick={handleSaveResults}
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200"
              >
                <Download size={18} />
                <span>Save & Continue</span>
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Want different questions? Click "New Questions" to get a fresh set of 20 questions from our pool of {allMbtiQuestions.length}!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-8 px-4 pt-20 md:pt-28">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <span className="text-sm font-medium text-primary-600">
            {Math.round(progress)}% Complete
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Shuffle size={12} />
                <span>Random set</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <h3 className="font-semibold text-xl text-gray-800 mb-8">
              {question.question}
            </h3>

            <div className="space-y-4">
              <button
                onClick={() => handleAnswer('a')}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-primary-500 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-500 group-hover:text-primary-600">A</span>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-800 text-lg">{question.options.a}</span>
                </div>
              </button>

              <button
                onClick={() => handleAnswer('b')}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-primary-500 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-500 group-hover:text-primary-600">B</span>
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-800 text-lg">{question.options.b}</span>
                </div>
              </button>
            </div>

            <div className="text-center text-sm text-gray-500 mt-6">
              <p>Choose the option that feels more like you, machaa! 😊</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityQuiz;