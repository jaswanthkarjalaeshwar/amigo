import React from 'react';
import { Edit, MapPin, Calendar, Trophy, Star, Users, Target, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { mbtiDescriptions } from '../../data/mbtiData';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const typeInfo = mbtiDescriptions[user.mbtiType];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className={`absolute -bottom-2 -right-2 w-10 h-10 ${typeInfo.color} rounded-full flex items-center justify-center border-4 border-white`}>
                <span className="text-xl">{typeInfo.emoji}</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="font-display text-2xl font-bold text-gray-800">{user.name}</h1>
                <div className="flex items-center space-x-1 bg-warning-100 px-2 py-1 rounded-full">
                  <Trophy size={14} className="text-warning-600" />
                  <span className="text-xs font-medium text-warning-800">Level {user.level}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{user.university}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{user.year} • {user.major}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <div className={`px-3 py-1 ${typeInfo.color} rounded-full text-white font-medium text-sm`}>
                  {user.mbtiType} - {typeInfo.name}
                </div>
                <div className="flex items-center space-x-1 text-warning-600">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-medium">{user.points} points</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{user.bio || 'No bio yet - add one to tell people about yourself!'}</p>

              <Link
                to="/profile/edit"
                className="inline-flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <Edit size={16} />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personality & Stats */}
          <div className="md:col-span-2 space-y-6">
            {/* Personality Section */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Personality Profile</h2>
              
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 ${typeInfo.color} rounded-full flex items-center justify-center text-2xl`}>
                    {typeInfo.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{typeInfo.name}</h3>
                    <p className="text-sm text-gray-600">{user.mbtiType}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-3">{typeInfo.description}</p>
                <p className="text-gray-600 text-sm">
                  <strong>Quest Style:</strong> {typeInfo.questStyle}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {typeInfo.strengths.map(strength => (
                    <span
                      key={strength}
                      className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Interests & Hobbies</h2>
              {user.interests.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {user.interests.map(interest => (
                    <span
                      key={interest}
                      className="px-3 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No interests added yet. Add some to help others find you!</p>
              )}
            </div>

            {/* Active Quests */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Active Quests</h2>
              {user.activeQuests.length > 0 ? (
                <div className="space-y-3">
                  {user.activeQuests.map(quest => (
                    <div key={quest.id} className="border border-gray-100 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{quest.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{quest.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                          {quest.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Users size={12} />
                          <span>{quest.participants.length}/{quest.maxParticipants}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No active quests. Create or join one to get started!</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Adventure Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-gray-700">Quests</span>
                  </div>
                  <span className="font-bold text-gray-800">{user.activeQuests.length + user.completedQuests.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-secondary-500" />
                    <span className="text-sm font-medium text-gray-700">Connections</span>
                  </div>
                  <span className="font-bold text-gray-800">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-accent-500" />
                    <span className="text-sm font-medium text-gray-700">Messages</span>
                  </div>
                  <span className="font-bold text-gray-800">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-warning-500" />
                    <span className="text-sm font-medium text-gray-700">Points</span>
                  </div>
                  <span className="font-bold text-gray-800">{user.points}</span>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Badges</h2>
              {user.badges.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {user.badges.map(badge => (
                    <div key={badge.id} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-1">{badge.icon}</div>
                      <h3 className="font-semibold text-xs text-gray-800">{badge.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No badges earned yet. Complete quests to earn your first badge!</p>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-success-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Earned Welcome Badge</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Joined Amigo</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;