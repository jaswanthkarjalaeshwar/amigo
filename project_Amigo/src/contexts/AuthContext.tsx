import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User>) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user in localStorage
    const savedUser = localStorage.getItem('amigo_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser: User = {
        id: 'user_123',
        email,
        name: 'Alex Johnson',
        university: 'University of Adventure',
        major: 'Computer Science',
        year: 'Junior',
        mbtiType: 'ENFP',
        bio: 'Always up for a new adventure! Love hiking, coding, and meeting new people.',
        interests: ['Coding', 'Hiking', 'Photography', 'Gaming', 'Coffee'],
        location: 'Koramangala',
        activeQuests: [],
        completedQuests: [],
        badges: [
          {
            id: 'welcome',
            name: 'Welcome Adventurer',
            description: 'Joined the Amigo community',
            icon: '👋',
            rarity: 'common',
            earnedAt: new Date()
          }
        ],
        points: 850,
        level: 3,
        joinedAt: new Date()
      };
      
      setUser(mockUser);
      localStorage.setItem('amigo_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Partial<User>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: `user_${Date.now()}`,
        email: userData.email!,
        name: userData.name!,
        university: userData.university!,
        major: userData.major!,
        year: userData.year!,
        mbtiType: userData.mbtiType || 'ENFP',
        bio: userData.bio || '',
        interests: userData.interests || [],
        location: userData.location || 'Koramangala',
        activeQuests: [],
        completedQuests: [],
        badges: [
          {
            id: 'welcome',
            name: 'Welcome Adventurer',
            description: 'Completed your first quest - joining Amigo!',
            icon: '👋',
            rarity: 'common',
            earnedAt: new Date()
          }
        ],
        points: 100,
        level: 1,
        joinedAt: new Date()
      };
      
      setUser(newUser);
      localStorage.setItem('amigo_user', JSON.stringify(newUser));
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('amigo_user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('amigo_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateUser,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};