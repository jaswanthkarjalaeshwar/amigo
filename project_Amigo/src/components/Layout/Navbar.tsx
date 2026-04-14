import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, MessageCircle, User, Trophy, Compass, Calendar, BookOpen, Brain, Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useApp } from '../../contexts/AppContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { notifications } = useApp();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: Compass, label: 'Quests', path: '/quests' },
    { icon: Search, label: 'Discover', path: '/discover' },
    { icon: Calendar, label: 'Events', path: '/events' },
    { icon: BookOpen, label: 'Study', path: '/study-groups' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Trophy, label: 'Rewards', path: '/rewards' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const unreadNotifications = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    logout();
    navigate('/login');
    setShowUserMenu(false);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="flex justify-around items-center max-w-md mx-auto md:max-w-full">
        {/* Logo (desktop only) */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-display font-bold text-xl text-gray-800">Amigo</span>
        </div>

        {/* Navigation Items - Mobile shows fewer items */}
        <div className="flex justify-around items-center flex-1 md:flex-initial md:space-x-6">
          {navItems.slice(0, 5).map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 md:hidden ${
                isActive(path)
                  ? 'text-primary-600 bg-primary-50 scale-105'
                  : 'text-gray-500 hover:text-primary-500 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} className={isActive(path) ? 'animate-bounce-slow' : ''} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
          
          {/* Desktop Navigation */}
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`hidden md:flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
                isActive(path)
                  ? 'text-primary-600 bg-primary-50 scale-105'
                  : 'text-gray-500 hover:text-primary-500 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} className={isActive(path) ? 'animate-bounce-slow' : ''} />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          ))}
        </div>

        {/* User Info and Actions (desktop only) */}
        {user && (
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/personality-quiz"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              <Brain size={16} />
              <span className="text-sm font-medium">Quiz</span>
            </Link>

            {/* Notifications */}
            <Link
              to="/notifications"
              className="relative p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Bell size={20} />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {unreadNotifications > 9 ? '9+' : unreadNotifications}
                </span>
              )}
            </Link>
            
            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">Level {user.level}</p>
                </div>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    to="/profile"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <User size={16} />
                    <span>Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setShowUserMenu(false)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-1 bg-warning-100 px-2 py-1 rounded-full">
              <Trophy size={14} className="text-warning-600" />
              <span className="text-xs font-medium text-warning-800">{user.points}</span>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;