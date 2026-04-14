import React, { useState } from 'react';
import { BookOpen, Users, Clock, MapPin, Search, Filter, Plus, GraduationCap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';

const StudyGroups: React.FC = () => {
  const { joinStudyGroup } = useApp();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = ['All', 'Mathematics', 'Computer Science', 'Physics', 'Chemistry', 'Biology', 'Economics', 'English', 'CAT/GMAT', 'GRE/TOEFL'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const studyGroups = [
    {
      id: '1',
      title: 'Advanced Data Structures & Algorithms',
      subject: 'Computer Science',
      level: 'Advanced',
      description: 'Preparing for tech interviews? Join us for intensive DSA practice with LeetCode problems and system design.',
      members: 8,
      maxMembers: 12,
      schedule: 'Mon, Wed, Fri - 7:00 PM',
      location: 'Central Library, Koramangala',
      duration: '2 hours',
      organizer: 'Priya Sharma',
      university: 'IISc Bangalore',
      tags: ['Coding', 'Interviews', 'LeetCode'],
      nextSession: '2024-01-22',
      difficulty: 'Hard',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Calculus Crash Course',
      subject: 'Mathematics',
      level: 'Intermediate',
      description: 'Struggling with calculus? We make derivatives and integrals easy to understand with practical examples.',
      members: 6,
      maxMembers: 10,
      schedule: 'Tue, Thu - 6:00 PM',
      location: 'Christ University Library',
      duration: '1.5 hours',
      organizer: 'Rahul Kumar',
      university: 'Christ University',
      tags: ['Calculus', 'Mathematics', 'Engineering'],
      nextSession: '2024-01-23',
      difficulty: 'Medium',
      rating: 4.6
    },
    {
      id: '3',
      title: 'CAT Quantitative Aptitude',
      subject: 'CAT/GMAT',
      level: 'Intermediate',
      description: 'Ace the CAT quant section! Daily practice with shortcuts, tricks, and mock tests.',
      members: 15,
      maxMembers: 20,
      schedule: 'Daily - 8:00 AM',
      location: 'Cafe Coffee Day, Brigade Road',
      duration: '2 hours',
      organizer: 'Sneha Reddy',
      university: 'St. Joseph\'s College',
      tags: ['CAT', 'MBA', 'Aptitude'],
      nextSession: '2024-01-21',
      difficulty: 'Medium',
      rating: 4.9
    },
    {
      id: '4',
      title: 'Organic Chemistry Simplified',
      subject: 'Chemistry',
      level: 'Beginner',
      description: 'Make organic chemistry fun! Visual learning with models and easy-to-remember mechanisms.',
      members: 4,
      maxMembers: 8,
      schedule: 'Sat, Sun - 10:00 AM',
      location: 'RV College Lab',
      duration: '3 hours',
      organizer: 'Arjun Nair',
      university: 'RV College',
      tags: ['Chemistry', 'NEET', 'JEE'],
      nextSession: '2024-01-22',
      difficulty: 'Easy',
      rating: 4.7
    },
    {
      id: '5',
      title: 'IELTS Speaking Practice',
      subject: 'English',
      level: 'Intermediate',
      description: 'Improve your IELTS speaking score with regular practice sessions and feedback from peers.',
      members: 7,
      maxMembers: 10,
      schedule: 'Wed, Sat - 5:00 PM',
      location: 'British Council, Indiranagar',
      duration: '1 hour',
      organizer: 'Maria D\'Souza',
      university: 'Mount Carmel College',
      tags: ['IELTS', 'Speaking', 'English'],
      nextSession: '2024-01-24',
      difficulty: 'Medium',
      rating: 4.5
    },
    {
      id: '6',
      title: 'Machine Learning Study Circle',
      subject: 'Computer Science',
      level: 'Advanced',
      description: 'Deep dive into ML algorithms, implement projects, and discuss latest research papers.',
      members: 10,
      maxMembers: 15,
      schedule: 'Fri - 7:00 PM, Sat - 2:00 PM',
      location: 'IIIT Bangalore',
      duration: '3 hours',
      organizer: 'Vikram Singh',
      university: 'IIIT Bangalore',
      tags: ['ML', 'AI', 'Python'],
      nextSession: '2024-01-26',
      difficulty: 'Hard',
      rating: 4.9
    }
  ];

  const filteredGroups = studyGroups.filter(group => {
    const matchesSubject = selectedSubject === 'All' || group.subject === selectedSubject;
    const matchesLevel = selectedLevel === 'All' || group.level === selectedLevel;
    const matchesSearch = group.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSubject && matchesLevel && matchesSearch;
  });

  const handleJoinGroup = (groupId: string) => {
    joinStudyGroup(groupId);
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Easy': 'bg-success-100 text-success-700',
      'Medium': 'bg-warning-100 text-warning-700',
      'Hard': 'bg-error-100 text-error-700'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">
              Study Groups 📚
            </h1>
            <p className="text-gray-600">Find your perfect study squad and ace those exams together, machaa!</p>
          </div>
          <Link
            to="/study-groups/create"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 mt-4 md:mt-0"
          >
            <Plus size={20} />
            <span>Create Study Group</span>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search study groups, subjects, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
            </div>

            {/* Subject Filter */}
            <div className="flex-1">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="flex-1">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Study Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <div key={group.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full font-medium">
                      {group.subject}
                    </span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full font-medium ${getDifficultyColor(group.difficulty)}`}>
                  {group.difficulty}
                </span>
              </div>

              {/* Title and Description */}
              <h3 className="font-display text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {group.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {group.description}
              </p>

              {/* Group Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users size={14} />
                  <span>{group.members}/{group.maxMembers} members</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-1 ml-2">
                    <div 
                      className="bg-primary-500 h-1 rounded-full" 
                      style={{ width: `${(group.members / group.maxMembers) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>{group.schedule}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin size={14} />
                  <span className="truncate">{group.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Target size={14} />
                  <span>Next: {formatDate(group.nextSession)}</span>
                </div>
              </div>

              {/* Organizer */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {group.organizer.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{group.organizer}</p>
                  <p className="text-xs text-gray-500">{group.university}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {group.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    #{tag}
                  </span>
                ))}
                {group.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{group.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Rating and Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-warning-600">
                  <GraduationCap size={14} />
                  <span className="text-xs font-medium">{group.rating} rating</span>
                </div>
                <button 
                  onClick={() => handleJoinGroup(group.id)}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 text-sm font-medium"
                >
                  {group.members >= group.maxMembers ? 'Join Waitlist' : 'Join Group'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-800 mb-2">No study groups found, guru!</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or create a new study group
            </p>
            <Link
              to="/study-groups/create"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200"
            >
              <Plus size={20} />
              <span>Create Study Group</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyGroups;