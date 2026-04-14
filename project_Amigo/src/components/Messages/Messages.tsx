import React, { useState } from 'react';
import { Search, MessageCircle, Users, Send, MoreVertical, Phone, Video, Smile, ArrowLeft } from 'lucide-react';
import { mbtiDescriptions } from '../../data/mbtiData';
import { useApp } from '../../contexts/AppContext';

const Messages: React.FC = () => {
  const { messages, sendMessage } = useApp();
  const [selectedChat, setSelectedChat] = useState<string | null>('1');
  const [newMessage, setNewMessage] = useState('');
  const [showMobileChat, setShowMobileChat] = useState(false);

  const conversations = [
    {
      id: '1',
      name: 'Alex Chen',
      mbtiType: 'ENTJ' as const,
      lastMessage: 'Perfect! See you at the library at 3 PM tomorrow',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      questTitle: 'React Study Group',
      avatar: 'AC'
    },
    {
      id: '2',
      name: 'Maya Rodriguez',
      mbtiType: 'ESFP' as const,
      lastMessage: 'Great workout today! Same time tomorrow?',
      timestamp: '1 hour ago',
      unread: 0,
      online: true,
      questTitle: 'Morning Gym Squad',
      avatar: 'MR'
    },
    {
      id: '3',
      name: 'James Wilson',
      mbtiType: 'ISFP' as const,
      lastMessage: 'Those photos from downtown turned out amazing!',
      timestamp: '3 hours ago',
      unread: 1,
      online: false,
      questTitle: 'Photography Walk',
      avatar: 'JW'
    },
    {
      id: '4',
      name: 'Sarah Kim',
      mbtiType: 'ENFJ' as const,
      lastMessage: 'Can you review the pitch deck slides?',
      timestamp: '1 day ago',
      unread: 0,
      online: false,
      questTitle: 'Startup Pitch Team',
      avatar: 'SK'
    }
  ];

  const currentMessages = [
    {
      id: '1',
      senderId: '1',
      content: 'Hey! Are we still on for the React study session tomorrow?',
      timestamp: '2:30 PM',
      isOwn: false
    },
    {
      id: '2',
      senderId: 'me',
      content: 'Absolutely! I\'ve been working through the hooks documentation.',
      timestamp: '2:32 PM',
      isOwn: true
    },
    {
      id: '3',
      senderId: '1',
      content: 'Great! I found some really interesting patterns for useContext optimization.',
      timestamp: '2:33 PM',
      isOwn: false
    },
    {
      id: '4',
      senderId: 'me',
      content: 'That sounds perfect! Should we meet at the CS building library?',
      timestamp: '2:35 PM',
      isOwn: true
    },
    {
      id: '5',
      senderId: '1',
      content: 'Perfect! See you at the library at 3 PM tomorrow',
      timestamp: '2:36 PM',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      sendMessage(selectedChat, newMessage.trim());
      setNewMessage('');
    }
  };

  const handleSelectChat = (chatId: string) => {
    setSelectedChat(chatId);
    setShowMobileChat(true);
  };

  const handleBackToList = () => {
    setShowMobileChat(false);
    setSelectedChat(null);
  };

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8 pt-4 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex h-[80vh]">
            {/* Conversations List */}
            <div className={`w-full md:w-1/3 border-r border-gray-100 flex flex-col ${showMobileChat ? 'hidden md:flex' : ''}`}>
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <h1 className="font-display text-2xl font-bold text-gray-800 mb-4">Messages</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map(conversation => (
                  <div
                    key={conversation.id}
                    onClick={() => handleSelectChat(conversation.id)}
                    className={`p-4 border-b border-gray-50 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                      selectedChat === conversation.id ? 'bg-primary-50 border-primary-100' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {/* Avatar */}
                      <div className="relative">
                        <div className={`w-12 h-12 ${mbtiDescriptions[conversation.mbtiType].color} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-semibold text-sm">{conversation.avatar}</span>
                        </div>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800 truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500 ml-2">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-primary-600 mb-1">{conversation.questTitle}</p>
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      </div>

                      {/* Unread Badge */}
                      {conversation.unread > 0 && (
                        <div className="w-5 h-5 bg-accent-500 text-white rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">{conversation.unread}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 flex flex-col ${!showMobileChat ? 'hidden md:flex' : ''}`}>
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-100 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={handleBackToList}
                          className="md:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                          <ArrowLeft size={20} className="text-gray-600" />
                        </button>
                        <div className="relative">
                          <div className={`w-10 h-10 ${mbtiDescriptions[selectedConversation.mbtiType].color} rounded-full flex items-center justify-center`}>
                            <span className="text-white font-semibold text-sm">{selectedConversation.avatar}</span>
                          </div>
                          {selectedConversation.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{selectedConversation.name}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-primary-600">{selectedConversation.questTitle}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">
                              {selectedConversation.online ? 'Online' : 'Offline'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                          <Phone size={18} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                          <Video size={18} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                          <MoreVertical size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {currentMessages.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.isOwn
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.isOwn ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-100 bg-white">
                    <div className="flex items-center space-x-3">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                        <Smile size={20} className="text-gray-600" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Type your message..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                        />
                      </div>
                      <button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:from-primary-600 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-800 mb-2">
                      Select a conversation
                    </h3>
                    <p className="text-gray-600">
                      Choose a conversation from the list to start messaging
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;