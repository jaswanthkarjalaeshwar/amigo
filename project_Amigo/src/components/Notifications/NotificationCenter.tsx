import React from 'react';
import { ArrowLeft, Bell, Check, X, Users, Target, Calendar, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';

const NotificationCenter: React.FC = () => {
  const navigate = useNavigate();
  const { notifications, markNotificationRead } = useApp();

  const mockNotifications = [
    {
      id: '1',
      type: 'quest_match',
      title: 'New Quest Match!',
      message: 'Sarah joined your "React Study Group" quest',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false,
      icon: Target,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      message: 'Alex sent you a message about tomorrow\'s study session',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: false,
      icon: Users,
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      id: '3',
      type: 'event_reminder',
      title: 'Event Reminder',
      message: 'Chai & Code Hackathon starts in 2 hours',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      read: true,
      icon: Calendar,
      color: 'bg-accent-100 text-accent-600'
    },
    {
      id: '4',
      type: 'badge_earned',
      title: 'Badge Earned!',
      message: 'You earned the "Social Butterfly" badge',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      read: true,
      icon: Trophy,
      color: 'bg-warning-100 text-warning-600'
    },
    {
      id: '5',
      type: 'quest_completed',
      title: 'Quest Completed',
      message: 'Photography Walk Downtown quest was completed successfully',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      read: true,
      icon: Target,
      color: 'bg-success-100 text-success-600'
    }
  ];

  const allNotifications = [...notifications, ...mockNotifications];
  const unreadCount = allNotifications.filter(n => !n.read).length;

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return `${days}d ago`;
    }
  };

  const handleMarkAsRead = (notificationId: string) => {
    markNotificationRead(notificationId);
  };

  const handleMarkAllAsRead = () => {
    allNotifications.forEach(notification => {
      if (!notification.read) {
        markNotificationRead(notification.id);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
            <div>
              <h1 className="font-display text-2xl font-bold text-gray-800">Notifications</h1>
              <p className="text-gray-600">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
              </p>
            </div>
          </div>
          
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="text-primary-600 hover:text-primary-700 font-medium text-sm"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {allNotifications.length > 0 ? (
            allNotifications.map(notification => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl p-4 border transition-all duration-200 hover:shadow-md ${
                    notification.read ? 'border-gray-100' : 'border-primary-200 bg-primary-50/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${notification.color}`}>
                      <IconComponent size={20} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">{notification.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                          <p className="text-xs text-gray-500">{formatTimestamp(notification.timestamp)}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {!notification.read && (
                            <>
                              <button
                                onClick={() => handleMarkAsRead(notification.id)}
                                className="p-1 hover:bg-success-100 rounded-full transition-colors duration-200"
                                title="Mark as read"
                              >
                                <Check size={16} className="text-success-600" />
                              </button>
                              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-gray-800 mb-2">No notifications yet</h3>
              <p className="text-gray-600">
                When you get notifications, they'll appear here
              </p>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
          <h2 className="font-display text-lg font-bold text-gray-800 mb-4">Notification Settings</h2>
          <p className="text-gray-600 text-sm mb-4">
            Manage how you receive notifications from Amigo
          </p>
          <button
            onClick={() => navigate('/settings')}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Go to Settings →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;