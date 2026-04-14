import React, { useState } from 'react';
import { ArrowLeft, Bell, Shield, User, Globe, Moon, Sun, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notifications: {
      questMatches: true,
      messages: true,
      events: false,
      marketing: false
    },
    privacy: {
      showOnlineStatus: true,
      showLocation: true,
      allowMessages: true
    },
    appearance: {
      darkMode: false,
      language: 'en'
    }
  });

  const handleToggle = (section: string, key: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: !prev[section as keyof typeof prev][key as keyof typeof prev[typeof section]]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h1 className="font-display text-2xl font-bold text-gray-800">Settings</h1>
            <p className="text-gray-600">Customize your Amigo experience</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Bell className="w-5 h-5 text-primary-500" />
              <h2 className="font-display text-lg font-bold text-gray-800">Notifications</h2>
            </div>
            <div className="space-y-4">
              {[
                { key: 'questMatches', label: 'Quest Matches', description: 'Get notified when someone joins your quest' },
                { key: 'messages', label: 'Messages', description: 'Receive notifications for new messages' },
                { key: 'events', label: 'Events', description: 'Updates about events you\'re interested in' },
                { key: 'marketing', label: 'Marketing', description: 'Tips and updates about Amigo features' }
              ].map(({ key, label, description }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{label}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                  <button
                    onClick={() => handleToggle('notifications', key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.notifications[key as keyof typeof settings.notifications]
                        ? 'bg-primary-500'
                        : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.notifications[key as keyof typeof settings.notifications]
                          ? 'translate-x-6'
                          : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-5 h-5 text-secondary-500" />
              <h2 className="font-display text-lg font-bold text-gray-800">Privacy</h2>
            </div>
            <div className="space-y-4">
              {[
                { key: 'showOnlineStatus', label: 'Show Online Status', description: 'Let others see when you\'re online' },
                { key: 'showLocation', label: 'Show Location', description: 'Display your general location to others' },
                { key: 'allowMessages', label: 'Allow Messages', description: 'Let matched users send you messages' }
              ].map(({ key, label, description }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{label}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                  <button
                    onClick={() => handleToggle('privacy', key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.privacy[key as keyof typeof settings.privacy]
                        ? 'bg-secondary-500'
                        : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.privacy[key as keyof typeof settings.privacy]
                          ? 'translate-x-6'
                          : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-5 h-5 text-accent-500" />
              <h2 className="font-display text-lg font-bold text-gray-800">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Dark Mode</p>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
                <button
                  onClick={() => handleToggle('appearance', 'darkMode')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.appearance.darkMode ? 'bg-accent-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.appearance.darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-2">Language</p>
                <select
                  value={settings.appearance.language}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    appearance: { ...prev.appearance, language: e.target.value }
                  }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="kn">ಕನ್ನಡ (Kannada)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-5 h-5 text-warning-500" />
              <h2 className="font-display text-lg font-bold text-gray-800">Account</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                Export My Data
              </button>
              <button className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                Deactivate Account
              </button>
              <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                Delete Account
              </button>
            </div>
          </div>

          {/* App Info */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="font-display text-lg font-bold text-gray-800 mb-4">About</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Amigo v1.0.0</p>
              <p>Made with ❤️ in Bangalore</p>
              <div className="flex space-x-4 pt-2">
                <button className="text-primary-600 hover:text-primary-700">Privacy Policy</button>
                <button className="text-primary-600 hover:text-primary-700">Terms of Service</button>
                <button className="text-primary-600 hover:text-primary-700">Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;