import React, { useState } from 'react';
import { Search, Filter, Users, MapPin, Star, MessageCircle, UserPlus } from 'lucide-react';
import { mbtiDescriptions, mbtiCompatibility } from '../../data/mbtiData';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';
import { MBTIType } from '../../types';

const Discover: React.FC = () => {
  const { user } = useAuth();
  const { createMatch } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'compatible' | 'nearby' | 'active'>('all');

  if (!user) return null;

  const mockUsers = [
    {
      id: '1',
      name: 'Emma Chen',
      mbtiType: 'INTJ' as MBTIType,
      university: 'Tech University',
      major: 'Computer Science',
      year: 'Senior',
      bio: 'Passionate about AI and machine learning. Always looking for study partners and project collaborators!',
      interests: ['Machine Learning', 'React', 'Chess', 'Photography'],
      level: 4,
      points: 1250,
      distance: '0.5 miles',
      compatibility: 92,
      activeQuests: ['Advanced Algorithms Study Group', 'AI Research Project'],
      lastActive: '2 hours ago',
      rating: 4.9
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      mbtiType: 'ENFP' as MBTIType,
      university: 'State College',
      major: 'Marketing',
      year: 'Junior',
      bio: 'Creative marketer who loves brainstorming sessions and outdoor adventures. Let\'s create something amazing!',
      interests: ['Marketing', 'Hiking', 'Photography', 'Startups'],
      level: 3,
      points: 980,
      distance: '1.2 miles',
      compatibility: 88,
      activeQuests: ['Startup Pitch Competition', 'Weekend Hiking Group'],
      lastActive: '30 minutes ago',
      rating: 4.7
    },
    {
      id: '3',
      name: 'Sophia Rodriguez',
      mbtiType: 'ISFJ' as MBTIType,
      university: 'Liberal Arts College',
      major: 'Psychology',
      year: 'Sophomore',
      bio: 'Psychology student interested in helping others and building meaningful connections. Love book clubs!',
      interests: ['Psychology', 'Reading', 'Volunteering', 'Yoga'],
      level: 2,
      points: 750,
      distance: '2.1 miles',
      compatibility: 75,
      activeQuests: ['Book Club', 'Community Service Project'],
      lastActive: '1 hour ago',
      rating: 4.8
    },
    {
      id: '4',
      name: 'David Kim',
      mbtiType: 'ESTP' as MBTIType,
      university: 'Engineering School',
      major: 'Mechanical Engineering',
      year: 'Senior',
      bio: 'Hands-on engineer who loves building things and staying active. Always up for sports and maker projects!',
      interests: ['Engineering', 'Basketball', 'Maker Projects', 'Fitness'],
      level: 5,
      points: 1680,
      distance: '0.8 miles',
      compatibility: 65,
      activeQuests: ['Basketball League', 'Robotics Competition'],
      lastActive: '15 minutes ago',
      rating: 4.6
    },
    {
      id: '5',
      name: 'Lily Zhang',
      mbtiType: 'INFP' as MBTIType,
      university: 'Art Institute',
      major: 'Graphic Design',
      year: 'Junior',
      bio: 'Creative soul who finds inspiration everywhere. Looking for fellow artists and creative collaborators!',
      interests: ['Graphic Design', 'Art', 'Music', 'Creative Writing'],
      level: 3,
      points: 1100,
      distance: '1.5 miles',
      compatibility: 85,
      activeQuests: ['Art Exhibition Planning', 'Creative Writing Circle'],
      lastActive: '45 minutes ago',
      rating: 4.9
    }
  ];

  const calculateCompatibility = (otherType: MBTIType): number => {
    const compatibility = mbtiCompatibility[user.mbtiType];
    if (compatibility.ideal.includes(otherType)) return 90 + Math.random() * 10;
    if (compatibility.compatible.includes(otherType)) return 70 + Math.random() * 20;
    if (compatibility.challenging.includes(otherType)) return 40 + Math.random() * 30;
    return 60 + Math.random() * 20;
  };

  const filteredUsers = mockUsers.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase())) ||
      person.major.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    switch (selectedFilter) {
      case 'compatible':
        return person.compatibility >= 80;
      case 'nearby':
        return parseFloat(person.distance) <= 1.0;
      case 'active':
        return person.lastActive.includes('minutes');
      default:
        return true;
    }
  });

  const getCompatibilityColor = (score: number) => {
    if (score >= 85) return 'text-success-600 bg-success-100';
    if (score >= 70) return 'text-warning-600 bg-warning-100';
    return 'text-gray-600 bg-gray-100';
  };

  const handleConnect = (userId: string) => {
    createMatch(userId);
  };

  const handleMessage = (userId: string) => {
    // Navigate to messages or create a conversation
    console.log('Starting conversation with:', userId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">Discover Companions</h1>
          <p className="text-gray-600">Find your perfect adventure partners based on personality and interests</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, interests, or major..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All', icon: Users },
                { key: 'compatible', label: 'Compatible', icon: Star },
                { key: 'nearby', label: 'Nearby', icon: MapPin },
                { key: 'active', label: 'Active', icon: MessageCircle }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setSelectedFilter(key as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedFilter === key
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(person => (
            <div key={person.id} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${mbtiDescriptions[person.mbtiType].color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-semibold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-800">{person.name}</h3>
                    <p className="text-sm text-gray-600">{person.year} • {person.major}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-warning-600">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-medium">{person.rating}</span>
                </div>
              </div>

              {/* MBTI and Compatibility */}
              <div className="flex items-center justify-between mb-4">
                <div className={`px-3 py-1 ${mbtiDescriptions[person.mbtiType].color} rounded-full text-white text-sm font-medium`}>
                  {person.mbtiType} - {mbtiDescriptions[person.mbtiType].name}
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCompatibilityColor(person.compatibility)}`}>
                  {person.compatibility}% match
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{person.bio}</p>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{person.distance}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={14} />
                  <span>Level {person.level}</span>
                </div>
                <span>{person.lastActive}</span>
              </div>

              {/* Interests */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {person.interests.slice(0, 3).map(interest => (
                    <span key={interest} className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {interest}
                    </span>
                  ))}
                  {person.interests.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{person.interests.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Active Quests */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-800 mb-2">Active Quests</h4>
                <div className="space-y-1">
                  {person.activeQuests.slice(0, 2).map(quest => (
                    <div key={quest} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                      {quest}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleConnect(person.id)}
                  className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white py-2 px-4 rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 text-sm font-medium flex items-center justify-center space-x-1"
                >
                  <UserPlus size={14} />
                  <span>Connect</span>
                </button>
                <button 
                  onClick={() => handleMessage(person.id)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <MessageCircle size={16} className="text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-800 mb-2">No companions found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to discover new people
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;