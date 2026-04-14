import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Coffee, MapPin } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { getRandomQuestions, mbtiDescriptions } from '../../data/mbtiData';
import { MBTIType } from '../../types';

const OnboardingFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleting, setIsCompleting] = useState(false);
  const [quizQuestions] = useState(getRandomQuestions()); // Generate questions once for onboarding
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const steps = [
    {
      id: 'welcome',
      title: 'Namaskara, Future Amigo! 🙏',
      description: 'Ready to find your perfect college squad in this beautiful namma city?',
      component: WelcomeStep
    },
    {
      id: 'personality',
      title: 'The Sorting Hat (Bangalore Style)',
      description: 'Answer these questions to discover your personality type - no tension, just be yourself!',
      component: PersonalityQuiz
    },
    {
      id: 'results',
      title: 'Your Adventurer Type',
      description: 'Discover your unique personality and quest style, machaa!',
      component: ResultsStep
    },
    {
      id: 'interests',
      title: 'Your Quest Interests',
      description: 'Tell us what kind of adventures you\'re seeking - from Cubbon Park walks to hackathons!',
      component: InterestsStep
    },
    {
      id: 'location',
      title: 'Your Bangalore Base',
      description: 'Where do you usually hang out in namma Bengaluru?',
      component: LocationStep
    }
  ];

  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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

  const completeOnboarding = async () => {
    setIsCompleting(true);
    
    const mbtiType = calculateMBTI();
    const selectedInterests = Object.keys(answers).filter(key => 
      key.startsWith('interest_') && answers[key] === 'true'
    ).map(key => key.replace('interest_', ''));

    const selectedLocation = answers['location'] || 'Koramangala';

    updateUser({
      mbtiType,
      interests: selectedInterests,
      location: selectedLocation,
      points: (user?.points || 0) + 200 // Bonus points for completing onboarding
    });

    // Simulate completion delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    navigate('/dashboard');
  };

  function WelcomeStep() {
    return (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center animate-pulse-slow">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-800 mb-4">
            Ayy {user?.name?.split(' ')[0] || 'Machaa'}! Welcome to Amigo! 🌟
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tired of eating alone at the mess? Want someone to explore namma Bengaluru with? 
            We're here to help you find your perfect college squad - no more FOMO, only good vibes!
          </p>
        </div>
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-2">What's Next, Guru?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✨ Discover your personality type (better than horoscope, promise!)</li>
            <li>🎯 Find your ideal quest companions</li>
            <li>🏆 Earn badges and become campus famous</li>
            <li>🚀 Start your Bangalore college adventure</li>
          </ul>
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Coffee className="w-4 h-4" />
          <span>Grab a chai, this will be fun!</span>
        </div>
      </div>
    );
  }

  function PersonalityQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = quizQuestions[currentQuestion];

    const handleAnswer = (answer: 'a' | 'b') => {
      setAnswers(prev => ({
        ...prev,
        [question.id]: answer
      }));

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz completed, move to results
        setTimeout(() => handleNext(), 500);
      }
    };

    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-primary-600">
            {Math.round(progress)}% Complete
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold text-lg text-gray-800 mb-6">
            {question.question}
          </h3>

          <div className="space-y-4">
            <button
              onClick={() => handleAnswer('a')}
              className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-primary-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500 group-hover:text-primary-600">A</span>
                </div>
                <span className="text-gray-700 group-hover:text-gray-800">{question.options.a}</span>
              </div>
            </button>

            <button
              onClick={() => handleAnswer('b')}
              className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-primary-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-500 group-hover:text-primary-600">B</span>
                </div>
                <span className="text-gray-700 group-hover:text-gray-800">{question.options.b}</span>
              </div>
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>No right or wrong answers, machaa! Just be yourself 😊</p>
        </div>
      </div>
    );
  }

  function ResultsStep() {
    const mbtiType = calculateMBTI();
    const typeInfo = mbtiDescriptions[mbtiType];

    return (
      <div className="text-center space-y-6">
        <div className="relative">
          <div className={`w-32 h-32 mx-auto ${typeInfo.color} rounded-full flex items-center justify-center text-4xl animate-bounce-slow`}>
            {typeInfo.emoji}
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning-400 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gray-800 mb-2">
            Ayy! You're {typeInfo.name}!
          </h2>
          <p className="text-lg text-gray-600 mb-4">{mbtiType} - Totally your vibe!</p>
          <p className="text-gray-700 leading-relaxed">{typeInfo.description}</p>
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-3">Your Superpowers, Guru!</h3>
          <div className="flex flex-wrap gap-2 justify-center">
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
          <p className="text-gray-700 text-sm">{typeInfo.questStyle}</p>
        </div>

        <div className="text-sm text-gray-500">
          <p>This is just the beginning of your Bangalore adventure! 🚀</p>
        </div>
      </div>
    );
  }

  function InterestsStep() {
    const interests = [
      'Study Groups', 'Gym & Fitness', 'Creative Arts', 'Tech & Coding', 'Music Jamming',
      'Photography', 'Trekking & Outdoors', 'Gaming', 'Food Adventures', 'Reading Clubs',
      'Startup Ideas', 'Volunteering', 'Travel Planning', 'Dance', 'Theater',
      'Cafe Hopping', 'Biking', 'Badminton', 'Cricket', 'Football'
    ];

    const handleInterestToggle = (interest: string) => {
      const key = `interest_${interest}`;
      setAnswers(prev => ({
        ...prev,
        [key]: prev[key] === 'true' ? 'false' : 'true'
      }));
    };

    const selectedCount = Object.keys(answers).filter(key => 
      key.startsWith('interest_') && answers[key] === 'true'
    ).length;

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
            What gets you excited, machaa?
          </h2>
          <p className="text-gray-600">
            Select your interests to find like-minded companions in Bangalore
          </p>
          <p className="text-sm text-primary-600 mt-2">
            {selectedCount} interests selected
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {interests.map(interest => (
            <button
              key={interest}
              onClick={() => handleInterestToggle(interest)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                answers[`interest_${interest}`] === 'true'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <span className="text-sm font-medium">{interest}</span>
            </button>
          ))}
        </div>

        {selectedCount === 0 && (
          <div className="text-center text-gray-500 text-sm">
            Select at least one interest to continue, guru!
          </div>
        )}
      </div>
    );
  }

  function LocationStep() {
    const bangaloreAreas = [
      'Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'Marathahalli',
      'BTM Layout', 'Jayanagar', 'Rajajinagar', 'Malleshwaram', 'HSR Layout',
      'Banashankari', 'JP Nagar', 'Yelahanka', 'Hebbal', 'Sarjapur Road'
    ];

    const handleLocationSelect = (location: string) => {
      setAnswers(prev => ({
        ...prev,
        location
      }));
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
            Which part of Bengaluru do you call home?
          </h2>
          <p className="text-gray-600">
            This helps us find companions near you for easy meetups!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {bangaloreAreas.map(area => (
            <button
              key={area}
              onClick={() => handleLocationSelect(area)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-2 ${
                answers['location'] === area
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{area}</span>
            </button>
          ))}
        </div>

        {!answers['location'] && (
          <div className="text-center text-gray-500 text-sm">
            Select your area to continue
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-primary-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <h1 className="font-display text-2xl font-bold text-gray-800 mb-2">
            {currentStepData.title}
          </h1>
          <p className="text-gray-600">{currentStepData.description}</p>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <currentStepData.component />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>

          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Step {currentStep + 1} of {steps.length}</span>
          </div>

          <button
            onClick={handleNext}
            disabled={
              (currentStep === steps.length - 2 && Object.keys(answers).filter(key => 
                key.startsWith('interest_') && answers[key] === 'true'
              ).length === 0) || 
              (currentStep === steps.length - 1 && !answers['location']) || 
              isCompleting
            }
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:from-primary-600 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              {isCompleting ? 'Setting up your profile...' : currentStep === steps.length - 1 ? 'Start Adventure!' : 'Next'}
            </span>
            {!isCompleting && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;