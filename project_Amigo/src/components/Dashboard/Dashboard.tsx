import React from 'react';
import { Plus, Target, Users, MessageCircle, Trophy, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { mbtiDescriptions } from '../../data/mbtiData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const typeInfo = mbtiDescriptions[user.mbtiType];

  const stats = [
    { label: 'Active Quests', value: user.activeQuests.length || 0, icon: Target, color: 'bg-primary-500' },
    { label: 'Connections', value: 12, icon: Users, color: 'bg-secondary-500' },
    { label: 'Messages', value: 3, icon: MessageCircle, color: 'bg-accent-500' },
    { label: 'Points', value: user.points, icon: Trophy, color: 'bg-warning-500' }
  ];

  const recentActivity = [
    { type: 'match', message: 'Sarah matched for "Study Group - Calculus"', time: '2 hours ago' },
    { type: 'quest', message: 'New quest posted: "Hiking Buddy Wanted"', time: '4 hours ago' },
    { type: 'badge', message: 'You earned the "Social Butterfly" badge!', time: '1 day ago' }
  ];

  const suggestedQuests = [
    {
      id: '1',
      title: 'React Study Group',
      category: 'Study Buddy',
      participants: 3,
      maxParticipants: 6,
      createdBy: 'Alex Chen',
      mbtiType: 'ENTJ' as const,
      tags: ['React', 'JavaScript', 'Web Dev']
    },
    {
      id: '2',
      title: 'Morning Gym Partners',
      category: 'Fitness Pal',
      participants: 2,
      maxParticipants: 4,
      createdBy: 'Maya Rodriguez',
      mbtiType: 'ESFP' as const,
      tags: ['Fitness', 'Morning', 'Motivation']
    },
    {
      id: '3',
      title: 'Photography Walk Downtown',
      category: 'Creative Project',
      participants: 4,
      maxParticipants: 8,
      createdBy: 'James Wilson',
      mbtiType: 'ISFP' as const,
      tags: ['Photography', 'Art', 'Downtown']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl text-white p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold mb-2">
                Welcome back, {user.name.split(' ')[0]}! 🎯
              </h1>
              <p className="opacity-90">Ready for your next adventure?</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 ${typeInfo.color} rounded-full flex items-center justify-center text-2xl`}>
                {typeInfo.emoji}
              </div>
              <div className="text-right">
                <p className="font-semibold">{typeInfo.name}</p>
                <p className="text-sm opacity-90">Level {user.level}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{label}</p>
                  <p className="text-2xl font-bold text-gray-800">{value}</p>
                </div>
                <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/quests/create"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-primary-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-primary-100 group-hover:bg-primary-200 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Create Quest</p>
                    <p className="text-sm text-gray-600">Find your adventure team</p>
                  </div>
                </Link>

                <Link
                  to="/discover"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-secondary-300 rounded-lg hover:border-secondary-500 hover:bg-secondary-50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-secondary-100 group-hover:bg-secondary-200 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Discover</p>
                    <p className="text-sm text-gray-600">Find new companions</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Suggested Quests */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold text-gray-800">Perfect Matches For You</h2>
                <Link to="/quests" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {suggestedQuests.map(quest => (
                  <div key={quest.id} className="border border-gray-100 rounded-lg p-4 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-800">{quest.title}</h3>
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                            {quest.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          By {quest.createdBy} • {mbtiDescriptions[quest.mbtiType].name}
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Users size={14} />
                            <span>{quest.participants}/{quest.maxParticipants}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {quest.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm">
                        Join Quest
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'match' ? 'bg-success-100' :
                      activity.type === 'quest' ? 'bg-primary-100' : 'bg-warning-100'
                    }`}>
                      {activity.type === 'match' && <Users className="w-4 h-4 text-success-600" />}
                      {activity.type === 'quest' && <Target className="w-4 h-4 text-primary-600" />}
                      {activity.type === 'badge' && <Trophy className="w-4 h-4 text-warning-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold text-gray-800">Weekly Progress</h2>
                <TrendingUp className="w-5 h-5 text-success-500" />
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Quests Completed</span>
                    <span className="font-medium">3/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-success-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">New Connections</span>
                    <span className="font-medium">2/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Points Earned</span>
                    <span className="font-medium">450/500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-warning-500 h-2 rounded-full" style={{ width: '90%' }}></div>
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

export default Dashboard;