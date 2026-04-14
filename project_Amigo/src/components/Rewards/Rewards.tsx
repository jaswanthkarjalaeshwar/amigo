import React from 'react';
import { Trophy, Star, Target, Users, MessageCircle, Calendar, Crown, Gift } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Rewards: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const allBadges = [
    { id: 'welcome', name: 'Welcome Adventurer', description: 'Joined the Amigo community', icon: '👋', rarity: 'common', earned: true },
    { id: 'first-quest', name: 'Quest Starter', description: 'Created your first quest', icon: '🎯', rarity: 'common', earned: false },
    { id: 'first-match', name: 'Connection Made', description: 'Matched with your first companion', icon: '🤝', rarity: 'common', earned: false },
    { id: 'social-butterfly', name: 'Social Butterfly', description: 'Connected with 5 different people', icon: '🦋', rarity: 'rare', earned: false },
    { id: 'study-master', name: 'Study Master', description: 'Completed 10 study group quests', icon: '📚', rarity: 'rare', earned: false },
    { id: 'fitness-guru', name: 'Fitness Guru', description: 'Completed 15 fitness challenges', icon: '💪', rarity: 'rare', earned: false },
    { id: 'creative-genius', name: 'Creative Genius', description: 'Led 5 creative projects', icon: '🎨', rarity: 'epic', earned: false },
    { id: 'mentor', name: 'Mentor', description: 'Helped 20 people achieve their goals', icon: '🌟', rarity: 'epic', earned: false },
    { id: 'legend', name: 'Campus Legend', description: 'Reached level 10 and completed 50 quests', icon: '👑', rarity: 'legendary', earned: false }
  ];

  const achievements = [
    { id: 'streak-7', name: '7-Day Streak', description: 'Active for 7 consecutive days', progress: 3, total: 7, icon: '🔥' },
    { id: 'quests-10', name: 'Quest Enthusiast', description: 'Complete 10 quests', progress: 2, total: 10, icon: '🎯' },
    { id: 'connections-20', name: 'Network Builder', description: 'Connect with 20 people', progress: 12, total: 20, icon: '🤝' },
    { id: 'messages-100', name: 'Chatterbox', description: 'Send 100 messages', progress: 47, total: 100, icon: '💬' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Emma Chen', points: 2450, badge: '👑', university: 'Tech University' },
    { rank: 2, name: 'Marcus Johnson', points: 2200, badge: '🥈', university: 'State College' },
    { rank: 3, name: 'Sophia Rodriguez', points: 1980, badge: '🥉', university: 'Liberal Arts' },
    { rank: 4, name: 'You', points: user.points, badge: '🌟', university: user.university },
    { rank: 5, name: 'David Kim', points: 1650, badge: '⭐', university: 'Engineering School' }
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: 'bg-gray-100 border-gray-300 text-gray-700',
      rare: 'bg-blue-100 border-blue-300 text-blue-700',
      epic: 'bg-purple-100 border-purple-300 text-purple-700',
      legendary: 'bg-yellow-100 border-yellow-300 text-yellow-700'
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getRarityGlow = (rarity: string) => {
    const glows = {
      common: '',
      rare: 'shadow-blue-200',
      epic: 'shadow-purple-200',
      legendary: 'shadow-yellow-200'
    };
    return glows[rarity as keyof typeof glows] || '';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold text-gray-800 mb-2">Reward Chest</h1>
          <p className="text-gray-600">Track your progress and celebrate your achievements</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-warning-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{user.points}</p>
            <p className="text-sm text-gray-600">Total Points</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-primary-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{user.badges.length}</p>
            <p className="text-sm text-gray-600">Badges Earned</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-success-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{user.completedQuests.length}</p>
            <p className="text-sm text-gray-600">Quests Completed</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Crown className="w-6 h-6 text-secondary-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{user.level}</p>
            <p className="text-sm text-gray-600">Current Level</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Badges */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">Badge Collection</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allBadges.map(badge => (
                  <div
                    key={badge.id}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                      badge.earned
                        ? `${getRarityColor(badge.rarity)} shadow-lg ${getRarityGlow(badge.rarity)}`
                        : 'bg-gray-50 border-gray-200 text-gray-400'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-3xl mb-2 ${badge.earned ? '' : 'grayscale opacity-50'}`}>
                        {badge.icon}
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{badge.name}</h3>
                      <p className="text-xs opacity-80">{badge.description}</p>
                      {badge.earned && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-success-500 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-white" fill="currentColor" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-2xl font-bold text-gray-800 mb-6">Current Achievements</h2>
              <div className="space-y-4">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{achievement.name}</h3>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Leaderboard */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Weekly Leaderboard</h2>
              <div className="space-y-3">
                {leaderboard.map(entry => (
                  <div
                    key={entry.rank}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      entry.name === 'You' ? 'bg-primary-50 border border-primary-200' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8">
                      <span className="text-lg">{entry.badge}</span>
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${entry.name === 'You' ? 'text-primary-700' : 'text-gray-800'}`}>
                        {entry.name}
                      </p>
                      <p className="text-xs text-gray-500">{entry.university}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">{entry.points}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Level Progress */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h2 className="font-display text-xl font-bold text-gray-800 mb-4">Level Progress</h2>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xl">{user.level}</span>
                </div>
                <p className="text-sm text-gray-600">Current Level</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress to Level {user.level + 1}</span>
                  <span className="font-medium">{user.points % 500}/500</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${((user.points % 500) / 500) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 text-center">
                  {500 - (user.points % 500)} points to next level
                </p>
              </div>
            </div>

            {/* Daily Bonus */}
            <div className="bg-gradient-to-r from-warning-400 to-accent-400 rounded-xl p-6 text-white">
              <div className="text-center">
                <Gift className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold mb-2">Daily Bonus</h3>
                <p className="text-sm opacity-90 mb-4">
                  Complete any quest today to earn bonus points!
                </p>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Claim Bonus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;