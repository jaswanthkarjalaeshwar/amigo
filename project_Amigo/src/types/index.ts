export interface User {
  id: string;
  email: string;
  name: string;
  university: string;
  major: string;
  year: string;
  mbtiType: MBTIType;
  profileImage?: string;
  bio: string;
  interests: string[];
  location?: string;
  activeQuests: Quest[];
  completedQuests: Quest[];
  badges: Badge[];
  points: number;
  level: number;
  joinedAt: Date;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: QuestCategory;
  tags: string[];
  createdBy: string;
  createdAt: Date;
  participants: string[];
  maxParticipants: number;
  status: QuestStatus;
  location?: string;
  deadline?: Date;
}

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  questId: string;
  compatibilityScore: number;
  status: MatchStatus;
  createdAt: Date;
  lastMessageAt?: Date;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: BadgeRarity;
  earnedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  price: string;
  organizer: string;
  image?: string;
  tags: string[];
  rating: number;
}

export interface StudyGroup {
  id: string;
  title: string;
  subject: string;
  level: string;
  description: string;
  members: number;
  maxMembers: number;
  schedule: string;
  location: string;
  duration: string;
  organizer: string;
  university: string;
  tags: string[];
  nextSession: string;
  difficulty: string;
  rating: number;
}

export type MBTIType = 
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP';

export type QuestCategory = 
  | 'Study Buddy'
  | 'Fitness Pal'
  | 'Creative Project'
  | 'Startup Idea'
  | 'Just for Fun'
  | 'Adventure'
  | 'Food & Dining'
  | 'Gaming'
  | 'Music & Arts';

export type QuestStatus = 'active' | 'completed' | 'cancelled';

export type MatchStatus = 'pending' | 'accepted' | 'declined' | 'expired';

export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary';

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  component: React.ComponentType<any>;
}

export interface MBTIQuestion {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
  };
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  weight: number;
}