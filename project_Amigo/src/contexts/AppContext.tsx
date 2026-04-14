import React, { createContext, useContext, useState, useEffect } from 'react';
import { Quest, Event, StudyGroup, Message, Match } from '../types';

interface AppContextType {
  // Quests
  quests: Quest[];
  createQuest: (quest: Omit<Quest, 'id' | 'createdAt'>) => void;
  joinQuest: (questId: string) => void;
  leaveQuest: (questId: string) => void;
  
  // Events
  events: Event[];
  joinEvent: (eventId: string) => void;
  leaveEvent: (eventId: string) => void;
  
  // Study Groups
  studyGroups: StudyGroup[];
  joinStudyGroup: (groupId: string) => void;
  leaveStudyGroup: (groupId: string) => void;
  
  // Messages
  messages: Message[];
  sendMessage: (matchId: string, content: string) => void;
  
  // Matches
  matches: Match[];
  createMatch: (userId: string, questId?: string) => void;
  acceptMatch: (matchId: string) => void;
  declineMatch: (matchId: string) => void;
  
  // Notifications
  notifications: any[];
  markNotificationRead: (notificationId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [studyGroups, setStudyGroups] = useState<StudyGroup[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);

  // Initialize with mock data
  useEffect(() => {
    // Initialize mock quests
    const mockQuests: Quest[] = [
      {
        id: '1',
        title: 'React Study Group - Advanced Hooks',
        description: 'Looking for fellow developers to dive deep into React hooks and create awesome projects together!',
        category: 'Study Buddy',
        tags: ['React', 'JavaScript', 'Web Dev', 'Hooks'],
        createdBy: 'user_456',
        createdAt: new Date(),
        participants: ['user_456', 'user_789'],
        maxParticipants: 6,
        status: 'active',
        location: 'CS Building - Room 201',
        deadline: new Date('2024-01-15')
      }
    ];
    setQuests(mockQuests);

    // Initialize mock matches
    const mockMatches: Match[] = [
      {
        id: '1',
        userId: 'user_123',
        matchedUserId: 'user_456',
        questId: '1',
        compatibilityScore: 92,
        status: 'accepted',
        createdAt: new Date(),
        lastMessageAt: new Date()
      }
    ];
    setMatches(mockMatches);

    // Initialize mock messages
    const mockMessages: Message[] = [
      {
        id: '1',
        matchId: '1',
        senderId: 'user_456',
        content: 'Hey! Are we still on for the React study session tomorrow?',
        timestamp: new Date(),
        read: false
      }
    ];
    setMessages(mockMessages);
  }, []);

  const createQuest = (questData: Omit<Quest, 'id' | 'createdAt'>) => {
    const newQuest: Quest = {
      ...questData,
      id: `quest_${Date.now()}`,
      createdAt: new Date()
    };
    setQuests(prev => [newQuest, ...prev]);
    
    // Add notification
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'quest_created',
      message: 'Your quest has been created successfully!',
      timestamp: new Date(),
      read: false
    }]);
  };

  const joinQuest = (questId: string) => {
    setQuests(prev => prev.map(quest => {
      if (quest.id === questId && quest.participants.length < quest.maxParticipants) {
        return {
          ...quest,
          participants: [...quest.participants, 'user_123']
        };
      }
      return quest;
    }));
    
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'quest_joined',
      message: 'You successfully joined the quest!',
      timestamp: new Date(),
      read: false
    }]);
  };

  const leaveQuest = (questId: string) => {
    setQuests(prev => prev.map(quest => {
      if (quest.id === questId) {
        return {
          ...quest,
          participants: quest.participants.filter(p => p !== 'user_123')
        };
      }
      return quest;
    }));
  };

  const joinEvent = (eventId: string) => {
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'event_joined',
      message: 'You successfully joined the event!',
      timestamp: new Date(),
      read: false
    }]);
  };

  const leaveEvent = (eventId: string) => {
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'event_left',
      message: 'You left the event.',
      timestamp: new Date(),
      read: false
    }]);
  };

  const joinStudyGroup = (groupId: string) => {
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'study_group_joined',
      message: 'You joined the study group!',
      timestamp: new Date(),
      read: false
    }]);
  };

  const leaveStudyGroup = (groupId: string) => {
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'study_group_left',
      message: 'You left the study group.',
      timestamp: new Date(),
      read: false
    }]);
  };

  const sendMessage = (matchId: string, content: string) => {
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      matchId,
      senderId: 'user_123',
      content,
      timestamp: new Date(),
      read: false
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Update match last message time
    setMatches(prev => prev.map(match => 
      match.id === matchId 
        ? { ...match, lastMessageAt: new Date() }
        : match
    ));
  };

  const createMatch = (userId: string, questId?: string) => {
    const newMatch: Match = {
      id: `match_${Date.now()}`,
      userId: 'user_123',
      matchedUserId: userId,
      questId,
      compatibilityScore: Math.floor(Math.random() * 30) + 70,
      status: 'pending',
      createdAt: new Date()
    };
    setMatches(prev => [newMatch, ...prev]);
    
    setNotifications(prev => [...prev, {
      id: `notif_${Date.now()}`,
      type: 'match_created',
      message: 'New connection request sent!',
      timestamp: new Date(),
      read: false
    }]);
  };

  const acceptMatch = (matchId: string) => {
    setMatches(prev => prev.map(match => 
      match.id === matchId 
        ? { ...match, status: 'accepted' }
        : match
    ));
  };

  const declineMatch = (matchId: string) => {
    setMatches(prev => prev.map(match => 
      match.id === matchId 
        ? { ...match, status: 'declined' }
        : match
    ));
  };

  const markNotificationRead = (notificationId: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId 
        ? { ...notif, read: true }
        : notif
    ));
  };

  return (
    <AppContext.Provider value={{
      quests,
      createQuest,
      joinQuest,
      leaveQuest,
      events,
      joinEvent,
      leaveEvent,
      studyGroups,
      joinStudyGroup,
      leaveStudyGroup,
      messages,
      sendMessage,
      matches,
      createMatch,
      acceptMatch,
      declineMatch,
      notifications,
      markNotificationRead
    }}>
      {children}
    </AppContext.Provider>
  );
};