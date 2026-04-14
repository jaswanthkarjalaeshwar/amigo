import React, { useState } from 'react';
import { Plus, Filter, Search, Users, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuestCategory } from '../../types';
import { mbtiDescriptions } from '../../data/mbtiData';
import { useApp } from '../../contexts/AppContext';
import { useAuth } from '../../contexts/AuthContext';

const QuestBoard: React.FC = () => {
  const { user } = useAuth();
  const { quests, joinQuest } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<QuestCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: (QuestCategory | 'All')[] = [
    'All', 'Study Buddy', 'Fitness Pal', 'Creative Project', 'Startup Idea', 'Just for Fun', 'Adventure'
  ];

  const mockQuests = [
    {
      id: '1',
      title: 'React Study Group - Advanced Hooks',
      description: 'Looking for fellow developers to dive deep into React hooks and create awesome projects together!',
      category: 'Study Buddy' as QuestCategory,
      tags: ['React', 'JavaScript', 'Web Dev', 'Hooks'],
      createdBy: {
        name: 'Alex Chen',
        mbtiType: 'ENTJ' as const,
        level: 3,
        university: 'Tech University'
      },
      participants: 3,
      maxParticipants: 6,
      location: 'CS Building - Room 201',
      deadline: '2024-01-15',
      createdAt: '2024-01-10',
      status: 'active' as const,
      difficulty: 'Intermediate',
      timeCommitment: '2-3 hours/week'
    },
    {
      id: '2',
      title: 'Morning Gym Squad',
      description: 'Early birds wanted! Join our morning workout crew. We meet at 6 AM and keep each other motivated!',
      category: 'Fitness Pal' as QuestCategory,
      tags: ['Fitness', 'Morning', 'Motivation', 'Strength Training'],
      createdBy: {
        name: 'Maya Rodriguez',
        mbtiType: 'ESFP' as const,
        level: 5,
        university: 'State University'
      },
      participants: 2,
      maxParticipants: 4,
      location: 'Campus Recreation Center',
      deadline: '2024-01-20',
      createdAt: '2024-01-08',
      status: 'active' as const,
      difficulty: 'Beginner',
      timeCommitment: '1 hour/day'
    },
    {
      id: '3',
      title: 'Photography Walk Downtown',
      description: 'Explore the city through your lens! Perfect for beginners and pros alike. Bring your camera!',
      category: 'Creative Project' as QuestCategory,
      tags: ['Photography', 'Art', 'Downtown', 'Exploration'],
      createdBy: {
        name: 'James Wilson',
        mbtiType: 'ISFP' as const,
        level: 2,
        university: 'Art Institute'
      },
      participants: 4,
      maxParticipants: 8,
      location: 'Downtown Arts District',
      deadline: '2024-01-18',
      createdAt: '2024-01-09',
      status: 'active' as const,
      difficulty: 'Beginner',
      timeCommitment: '3-4 hours/session'
    },
    {
      id: '4',
      title: 'Startup Pitch Competition Team',
      description: 'Building an app for sustainable living. Need passionate developers and designers!',
      category: 'Startup Idea' as QuestCategory,
      tags: ['Startup', 'Environment', 'App Development', 'Pitch'],
      createdBy: {
        name: 'Sarah Kim',
        mbtiType: 'ENFJ' as const,
        level: 4,
        university: 'Business School'
      },
      participants: 5,
      maxParticipants: 8,
      location: 'Innovation Hub',
      deadline: '2024-02-01',
      createdAt: '2024-01-05',
      status: 'active' as const,
      difficulty: 'Advanced',
      timeCommitment: '10+ hours/week'
    },
    {
      id: '5',
      title: 'Board Game Night Regulars',
      description: 'Love strategy games? Join our weekly board game nights. Currently obsessed with Wingspan!',
      category: 'Just for Fun' as QuestCategory,
      tags: ['Board Games', 'Strategy', 'Social', 'Weekly'],
      createdBy: {
        name: 'David Park',
        mbtiType: 'INTP' as const,
        level: 3,
        university: 'Liberal Arts College'
      },
      participants: 6,
      maxParticipants: 10,
      location: 'Student Union - Game Room',
      deadline: '2024-01-25',
      createdAt: '2024-01-07',
      status: 'active' as const,
      difficulty: 'Beginner',
      timeCommitment: '2 hours/week'
    }
  ];

  const allQuests = [...quests, ...mockQuests];

  const filteredQuests = allQuests.filter(quest => {
    const matchesCategory = selectedCategory === 'All' || quest.category === selectedCategory;
    const matchesSearch = quest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quest.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleJoinQuest = (questId: string) => {
    joinQuest(questId);
  };

  const getCategoryIcon = (category: QuestCategory) => {
    const icons = {
      'Study Buddy': '📚',
      'Fitness Pal': '💪',
      'Creative Project': '🎨',
      'Startup Idea': '🚀',
      'Just for Fun': '🎉',
      'Adventure': '🌟',
      'Food & Dining': '🍕',
      'Gaming': '🎮',
      'Music & Arts': '🎵'
    };
    return icons[category] || '🎯';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Beginner': 'bg-success-100 text-success-700',
      'Intermediate': 'bg-warning-100 text-warning-700',
      'Advanced': 'bg-error-100 text-error-700'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">Quest Board</h1>
            <p className="text-gray-600">Discover amazing adventures and find your perfect companions</p>
          </div>
          <Link
            to="/quests/create"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 mt-4 md:mt-0"
          >
            <Plus size={20} />
            <span>Create Quest</span>
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
                placeholder="Search quests, tags, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'All' ? '🎯' : getCategoryIcon(category as QuestCategory)} {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuests.map(quest => (
            <div key={quest.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
              {/* Quest Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{getCategoryIcon(quest.category)}</div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                      {quest.category}
                    </span>
                    {quest.difficulty && (
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getDifficultyColor(quest.difficulty)}`}>
                        {quest.difficulty}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-warning-600">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-medium">4.8</span>
                </div>
              </div>

              {/* Quest Title and Description */}
              <h3 className="font-display text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {quest.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {quest.description}
              </p>

              {/* Quest Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users size={14} />
                  <span>{quest.participants}/{quest.maxParticipants} participants</span>
                </div>
                {quest.timeCommitment && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{quest.timeCommitment}</span>
                  </div>
                )}
                {quest.location && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span className="truncate">{quest.location}</span>
                  </div>
                )}
              </div>

              {/* Creator Info */}
              {quest.createdBy && typeof quest.createdBy === 'object' && (
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-8 h-8 ${mbtiDescriptions[quest.createdBy.mbtiType].color} rounded-full flex items-center justify-center text-sm`}>
                    {mbtiDescriptions[quest.createdBy.mbtiType].emoji}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{quest.createdBy.name}</p>
                    <p className="text-xs text-gray-500">
                      {mbtiDescriptions[quest.createdBy.mbtiType].name} • Level {quest.createdBy.level}
                    </p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {quest.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    #{tag}
                  </span>
                ))}
                {quest.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{quest.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleJoinQuest(quest.id)}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 font-medium"
              >
                {quest.participants >= quest.maxParticipants ? 'Join Waitlist' : 'Join Quest'}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredQuests.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-800 mb-2">No quests found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms, or create a new quest!
            </p>
            <Link
              to="/quests/create"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200"
            >
              <Plus size={20} />
              <span>Create New Quest</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestBoard;