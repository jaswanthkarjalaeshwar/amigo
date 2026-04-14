import { MBTIType, MBTIQuestion } from '../types';

// Expanded question pool with 100 questions (20 original + 80 new)
export const allMbtiQuestions: MBTIQuestion[] = [
  // Original 20 questions
  {
    id: 1,
    question: "Your ideal weekend in Bangalore is:",
    options: {
      a: "Exploring UB City Mall and Brigade Road with friends",
      b: "Reading a book at Cubbon Park or chilling at home"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 2,
    question: "When working on a group project, you prefer to:",
    options: {
      a: "Focus on the big picture and brainstorm creative ideas",
      b: "Handle the practical details and execution properly"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 3,
    question: "When making decisions, you typically:",
    options: {
      a: "Consider how it will affect everyone involved",
      b: "Analyze the logical pros and cons systematically"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 4,
    question: "You prefer to:",
    options: {
      a: "Have a structured plan for your day",
      b: "Keep your options open and be spontaneous"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 5,
    question: "At a college fest, you're more likely to:",
    options: {
      a: "Mingle with lots of different people and make new connections",
      b: "Have deep conversations with a few close friends"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 6,
    question: "When learning something new, you prefer:",
    options: {
      a: "Understanding the theory and concepts first",
      b: "Jumping in and learning through hands-on experience"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 7,
    question: "In conflicts, you tend to:",
    options: {
      a: "Seek harmony and find a compromise that works for everyone",
      b: "Focus on finding the most logical and fair solution"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 8,
    question: "You work best when:",
    options: {
      a: "You have clear deadlines and structured environment",
      b: "You can work at your own pace and adapt as needed"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 9,
    question: "You recharge by:",
    options: {
      a: "Socializing and being around people at cafes or events",
      b: "Having quiet time alone to reflect and think"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 10,
    question: "When planning a trip to Goa with friends, you focus on:",
    options: {
      a: "The experiences and adventures you'll have together",
      b: "The logistics, budget, and practical arrangements"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 11,
    question: "You're more motivated by:",
    options: {
      a: "Making a positive impact on others and helping them grow",
      b: "Achieving efficiency, competence, and personal excellence"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 12,
    question: "Your study space is typically:",
    options: {
      a: "Organized, systematic, and well-planned",
      b: "Flexible and adaptable to your current mood and needs"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 13,
    question: "You prefer to:",
    options: {
      a: "Think out loud and discuss ideas with others",
      b: "Process thoughts internally before sharing them"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 14,
    question: "You're drawn to:",
    options: {
      a: "Innovative ideas and future possibilities",
      b: "Practical solutions and proven methods that work"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 15,
    question: "When giving feedback to a friend, you focus on:",
    options: {
      a: "How to help them improve and grow as a person",
      b: "What specifically needs to be corrected or changed"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 16,
    question: "You prefer projects that are:",
    options: {
      a: "Well-defined with clear milestones and deadlines",
      b: "Open-ended with room for creativity and exploration"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 17,
    question: "At a Bangalore tech meetup, you would:",
    options: {
      a: "Network actively and meet as many people as possible",
      b: "Have meaningful conversations with a few interesting people"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 18,
    question: "When choosing a restaurant in Bangalore, you:",
    options: {
      a: "Look for new, trendy places with unique concepts",
      b: "Stick to tried and tested places with good reviews"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 19,
    question: "In a heated debate about current events, you:",
    options: {
      a: "Try to understand everyone's perspective and find common ground",
      b: "Present logical arguments and focus on facts and evidence"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 20,
    question: "Your approach to college assignments is:",
    options: {
      a: "Start early, make a plan, and stick to the schedule",
      b: "Work in bursts of inspiration and adapt as you go"
    },
    dimension: 'JP',
    weight: 1
  },

  // 80 Additional Questions
  {
    id: 21,
    question: "When attending a house party in Koramangala, you:",
    options: {
      a: "Jump into group conversations and games immediately",
      b: "Find a quiet corner to chat with one or two people"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 22,
    question: "Your ideal internship would involve:",
    options: {
      a: "Exploring cutting-edge technologies and future trends",
      b: "Working on practical, real-world problems with immediate impact"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 23,
    question: "When a friend is upset, you:",
    options: {
      a: "Listen empathetically and offer emotional support",
      b: "Help them analyze the situation and find practical solutions"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 24,
    question: "Your room/hostel space is:",
    options: {
      a: "Neat, organized with everything in its designated place",
      b: "Lived-in and flexible, organized chaos that works for you"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 25,
    question: "During college breaks, you prefer to:",
    options: {
      a: "Hang out with friends and attend social gatherings",
      b: "Spend time alone pursuing personal hobbies and interests"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 26,
    question: "When reading about new technology, you're more interested in:",
    options: {
      a: "The potential future applications and possibilities",
      b: "How it works technically and its current limitations"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 27,
    question: "In group discussions, you value:",
    options: {
      a: "Everyone feeling heard and maintaining group harmony",
      b: "Reaching the most logical and well-reasoned conclusion"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 28,
    question: "When planning your semester schedule, you:",
    options: {
      a: "Plan everything in advance with backup options",
      b: "Keep it flexible and decide courses as registration opens"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 29,
    question: "At a networking event in Electronic City, you:",
    options: {
      a: "Actively approach new people and exchange contacts",
      b: "Wait for others to approach you or stick with familiar faces"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 30,
    question: "When choosing electives, you prefer:",
    options: {
      a: "Courses that explore theoretical concepts and big ideas",
      b: "Courses with practical applications and hands-on projects"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 31,
    question: "When making career decisions, you prioritize:",
    options: {
      a: "Work-life balance and positive team culture",
      b: "Salary, growth opportunities, and logical career progression"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 32,
    question: "Your approach to exam preparation is:",
    options: {
      a: "Create a detailed study schedule and stick to it religiously",
      b: "Study intensively when motivated, take breaks when needed"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 33,
    question: "During lunch breaks, you typically:",
    options: {
      a: "Eat with a group and engage in lively conversations",
      b: "Prefer eating alone or with one close friend"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 34,
    question: "When learning a new programming language, you:",
    options: {
      a: "Start with understanding the philosophy and design principles",
      b: "Jump straight into coding and learn through trial and error"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 35,
    question: "In team conflicts, you tend to:",
    options: {
      a: "Focus on how everyone feels and work towards reconciliation",
      b: "Analyze what went wrong objectively and prevent future issues"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 36,
    question: "Your ideal weekend schedule is:",
    options: {
      a: "Planned activities with specific times and locations",
      b: "Loose plans that can change based on mood and weather"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 37,
    question: "When presenting in class, you:",
    options: {
      a: "Feel energized by the audience and enjoy the interaction",
      b: "Prefer smaller audiences and feel drained afterward"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 38,
    question: "Your favorite type of books/movies are:",
    options: {
      a: "Science fiction, fantasy, and stories about possibilities",
      b: "Realistic dramas, documentaries, and practical guides"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 39,
    question: "When choosing a college club, you consider:",
    options: {
      a: "How welcoming the community is and the friendships you'll make",
      b: "The skills you'll develop and how it fits your career goals"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 40,
    question: "Your approach to deadlines is:",
    options: {
      a: "Complete tasks well before the deadline to avoid stress",
      b: "Work best under pressure and often finish just in time"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 41,
    question: "After a long day of classes, you prefer to:",
    options: {
      a: "Meet friends for chai and discuss the day's events",
      b: "Go to your room and unwind alone with music or a book"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 42,
    question: "When solving complex problems, you:",
    options: {
      a: "Look for patterns and connections to broader concepts",
      b: "Break it down into smaller, manageable concrete steps"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 43,
    question: "In leadership roles, you focus on:",
    options: {
      a: "Building team morale and ensuring everyone feels valued",
      b: "Setting clear objectives and measuring performance efficiently"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 44,
    question: "Your travel style is:",
    options: {
      a: "Detailed itineraries with booked accommodations and planned activities",
      b: "Spontaneous adventures with minimal planning and maximum flexibility"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 45,
    question: "During group study sessions, you:",
    options: {
      a: "Actively participate in discussions and explain concepts to others",
      b: "Listen more than you speak and prefer to study quietly"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 46,
    question: "When choosing a research topic, you're drawn to:",
    options: {
      a: "Abstract theories and unexplored possibilities",
      b: "Practical applications with measurable real-world impact"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 47,
    question: "When giving advice to friends, you:",
    options: {
      a: "Consider their feelings and what would make them happy",
      b: "Give objective analysis of what would be most beneficial"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 48,
    question: "Your note-taking style is:",
    options: {
      a: "Organized, color-coded, and systematically structured",
      b: "Free-flowing, with ideas connected as they come to mind"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 49,
    question: "At college cultural events, you:",
    options: {
      a: "Participate actively and encourage others to join in",
      b: "Enjoy watching from the sidelines or with a small group"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 50,
    question: "When learning about history, you're more interested in:",
    options: {
      a: "The big picture trends and what they mean for the future",
      b: "Specific events, dates, and factual details"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 51,
    question: "In romantic relationships, you value:",
    options: {
      a: "Emotional connection, understanding, and shared values",
      b: "Intellectual compatibility and practical life compatibility"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 52,
    question: "Your morning routine is:",
    options: {
      a: "Consistent and planned, same time every day",
      b: "Varies based on how you feel and what the day holds"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 53,
    question: "When working on creative projects, you:",
    options: {
      a: "Brainstorm with others and build on collective ideas",
      b: "Develop ideas independently before sharing with others"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 54,
    question: "Your approach to learning new skills is:",
    options: {
      a: "Understand the underlying principles and theory first",
      b: "Start practicing immediately and learn through doing"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 55,
    question: "When making group decisions, you:",
    options: {
      a: "Ensure everyone's opinions are heard and considered",
      b: "Focus on the most logical and efficient solution"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 56,
    question: "Your workspace organization reflects:",
    options: {
      a: "Everything has a specific place and purpose",
      b: "Organized chaos that makes sense to you"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 57,
    question: "During college orientation week, you:",
    options: {
      a: "Attend every event and try to meet as many people as possible",
      b: "Attend selectively and focus on deeper connections"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 58,
    question: "When reading news articles, you:",
    options: {
      a: "Think about implications and what might happen next",
      b: "Focus on the facts and current concrete details"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 59,
    question: "In stressful situations, you:",
    options: {
      a: "Seek emotional support and talk through your feelings",
      b: "Analyze the situation logically and focus on solutions"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 60,
    question: "Your approach to shopping for clothes is:",
    options: {
      a: "Plan outfits in advance and shop with a specific list",
      b: "Browse casually and buy things that catch your eye"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 61,
    question: "When attending lectures, you:",
    options: {
      a: "Ask questions and participate in class discussions",
      b: "Listen attentively but rarely speak up unless asked"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 62,
    question: "Your ideal job would involve:",
    options: {
      a: "Working with concepts, ideas, and future possibilities",
      b: "Working with concrete data, facts, and current realities"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 63,
    question: "When friends ask for relationship advice, you:",
    options: {
      a: "Help them understand their feelings and what feels right",
      b: "Help them weigh pros and cons objectively"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 64,
    question: "Your email and message management style is:",
    options: {
      a: "Respond promptly and keep inbox organized",
      b: "Respond when you have time and energy"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 65,
    question: "At parties, you typically:",
    options: {
      a: "Stay until the end and are often the life of the party",
      b: "Leave early when you start feeling socially drained"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 66,
    question: "When choosing courses, you prefer:",
    options: {
      a: "Theoretical courses that explore big ideas and concepts",
      b: "Practical courses with labs and hands-on components"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 67,
    question: "In competitive situations, you:",
    options: {
      a: "Focus on everyone having a good experience",
      b: "Focus on winning and achieving the best outcome"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 68,
    question: "Your approach to fitness and health is:",
    options: {
      a: "Structured workout plans and scheduled meal times",
      b: "Flexible routines that adapt to your daily mood and energy"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 69,
    question: "When meeting new people, you:",
    options: {
      a: "Easily start conversations and share personal stories",
      b: "Take time to warm up and prefer others to initiate"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 70,
    question: "Your favorite type of conversations involve:",
    options: {
      a: "Discussing possibilities, dreams, and what could be",
      b: "Sharing experiences, facts, and what actually happened"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 71,
    question: "When making important life decisions, you:",
    options: {
      a: "Consider how it affects your relationships and personal values",
      b: "Analyze costs, benefits, and logical outcomes"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 72,
    question: "Your approach to learning languages is:",
    options: {
      a: "Structured lessons with grammar rules and systematic progression",
      b: "Immersive practice and learning through conversation"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 73,
    question: "During breaks between classes, you:",
    options: {
      a: "Socialize with classmates and catch up on campus news",
      b: "Use the time for personal reflection or quiet activities"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 74,
    question: "When planning your career, you focus on:",
    options: {
      a: "The potential for innovation and future growth",
      b: "Current market demand and practical job security"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 75,
    question: "In ethical dilemmas, you:",
    options: {
      a: "Consider what feels morally right and how people are affected",
      b: "Apply logical principles and consider long-term consequences"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 76,
    question: "Your approach to social media is:",
    options: {
      a: "Regular posting and engagement with a planned content strategy",
      b: "Spontaneous posts when something interesting happens"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 77,
    question: "When working in teams, you:",
    options: {
      a: "Take on roles that involve coordination and communication",
      b: "Prefer independent tasks that you can complete alone"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 78,
    question: "Your learning style is more:",
    options: {
      a: "Conceptual - understanding the why and how things connect",
      b: "Sequential - learning step by step with clear examples"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 79,
    question: "When friends are in conflict, you:",
    options: {
      a: "Try to mediate and help them understand each other's feelings",
      b: "Stay neutral and suggest they work it out logically"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 80,
    question: "Your ideal study environment is:",
    options: {
      a: "Quiet, organized space with minimal distractions",
      b: "Flexible space where you can move around and change settings"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 81,
    question: "At networking events, you:",
    options: {
      a: "Actively work the room and collect many business cards",
      b: "Have a few meaningful conversations with interesting people"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 82,
    question: "When reading fiction, you prefer:",
    options: {
      a: "Fantasy and sci-fi with imaginative worlds and possibilities",
      b: "Realistic fiction with relatable characters and situations"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 83,
    question: "In group projects, you value:",
    options: {
      a: "Team harmony and ensuring everyone contributes meaningfully",
      b: "Efficient task division and achieving the best possible result"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 84,
    question: "Your approach to trying new restaurants is:",
    options: {
      a: "Research reviews and plan visits to highly-rated places",
      b: "Discover places spontaneously while exploring the city"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 85,
    question: "When attending workshops, you:",
    options: {
      a: "Actively participate in group activities and discussions",
      b: "Prefer to observe and participate selectively"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 86,
    question: "Your approach to problem-solving is:",
    options: {
      a: "Look for creative, innovative solutions and new approaches",
      b: "Use proven methods and build on existing solutions"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 87,
    question: "When giving presentations, you focus on:",
    options: {
      a: "Connecting with the audience and making them feel engaged",
      b: "Delivering clear, logical information and achieving objectives"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 88,
    question: "Your approach to managing finances is:",
    options: {
      a: "Detailed budgets and planned expenses with savings goals",
      b: "Flexible spending based on current needs and opportunities"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 89,
    question: "During college festivals, you:",
    options: {
      a: "Volunteer for organizing committees and public-facing roles",
      b: "Contribute behind the scenes or in smaller, specialized teams"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 90,
    question: "When choosing a major, you considered:",
    options: {
      a: "Future possibilities and potential for innovation in the field",
      b: "Current job market and practical career opportunities"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 91,
    question: "In debates, you:",
    options: {
      a: "Consider the human impact and try to find win-win solutions",
      b: "Focus on logical arguments and objective truth"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 92,
    question: "Your approach to hobbies is:",
    options: {
      a: "Dedicated practice with goals and measurable improvement",
      b: "Casual enjoyment that varies based on interest and mood"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 93,
    question: "When joining new groups, you:",
    options: {
      a: "Quickly introduce yourself and try to get to know everyone",
      b: "Take time to observe the group dynamics before participating"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 94,
    question: "Your ideal internship project would be:",
    options: {
      a: "Research and development on cutting-edge technology",
      b: "Improving existing processes and solving current problems"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 95,
    question: "When friends ask for help, you:",
    options: {
      a: "Offer emotional support and help them feel better",
      b: "Provide practical advice and actionable solutions"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 96,
    question: "Your approach to learning new software is:",
    options: {
      a: "Follow tutorials step-by-step and read documentation thoroughly",
      b: "Explore features intuitively and learn through experimentation"
    },
    dimension: 'JP',
    weight: 1
  },
  {
    id: 97,
    question: "At coffee shops, you typically:",
    options: {
      a: "Sit in common areas where you can people-watch and chat",
      b: "Find quiet corners where you can focus on your work"
    },
    dimension: 'EI',
    weight: 1
  },
  {
    id: 98,
    question: "When planning your future, you think about:",
    options: {
      a: "All the possibilities and potential paths you could take",
      b: "Concrete steps and realistic goals based on current situation"
    },
    dimension: 'SN',
    weight: 1
  },
  {
    id: 99,
    question: "In leadership positions, you:",
    options: {
      a: "Focus on team building and creating a positive environment",
      b: "Focus on strategy and achieving measurable results"
    },
    dimension: 'TF',
    weight: 1
  },
  {
    id: 100,
    question: "Your approach to weekend planning is:",
    options: {
      a: "Schedule activities in advance and make reservations",
      b: "Keep weekends open and decide activities spontaneously"
    },
    dimension: 'JP',
    weight: 1
  }
];

// Function to get 20 random questions (5 from each dimension)
export const getRandomQuestions = (): MBTIQuestion[] => {
  const questionsByDimension = {
    EI: allMbtiQuestions.filter(q => q.dimension === 'EI'),
    SN: allMbtiQuestions.filter(q => q.dimension === 'SN'),
    TF: allMbtiQuestions.filter(q => q.dimension === 'TF'),
    JP: allMbtiQuestions.filter(q => q.dimension === 'JP')
  };

  const selectedQuestions: MBTIQuestion[] = [];

  // Select 5 random questions from each dimension
  Object.values(questionsByDimension).forEach(dimensionQuestions => {
    const shuffled = [...dimensionQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions.push(...shuffled.slice(0, 5));
  });

  // Shuffle the final 20 questions
  return selectedQuestions.sort(() => Math.random() - 0.5);
};

// Export the function to get current quiz questions
export const mbtiQuestions = getRandomQuestions();

export const mbtiDescriptions: Record<MBTIType, { 
  name: string; 
  description: string; 
  strengths: string[]; 
  questStyle: string;
  emoji: string;
  color: string;
  bangaloreVibe: string;
}> = {
  'INTJ': {
    name: 'The Architect',
    description: 'Strategic masterminds who love turning visions into reality. Perfect for Bangalore\'s startup ecosystem!',
    strengths: ['Strategic thinking', 'Independent', 'Determined', 'Visionary'],
    questStyle: 'Prefers long-term, meaningful projects with clear goals - ideal for hackathons and research',
    emoji: '🏗️',
    color: 'bg-purple-500',
    bangaloreVibe: 'You\'d thrive in the startup hubs of Koramangala and Indiranagar, building the next big thing!'
  },
  'INTP': {
    name: 'The Thinker',
    description: 'Curious innovators who love exploring theoretical possibilities. Bangalore\'s tech scene is calling you!',
    strengths: ['Analytical', 'Creative', 'Independent', 'Logical'],
    questStyle: 'Enjoys intellectual challenges and research-based quests - perfect for coding competitions',
    emoji: '🔬',
    color: 'bg-indigo-500',
    bangaloreVibe: 'The libraries and tech parks of Whitefield are your natural habitat, machaa!'
  },
  'ENTJ': {
    name: 'The Commander',
    description: 'Natural leaders who thrive on organizing and directing projects. Born to lead in namma Bengaluru!',
    strengths: ['Leadership', 'Confident', 'Strategic', 'Efficient'],
    questStyle: 'Leads ambitious projects and enjoys team coordination - startup founder material!',
    emoji: '👑',
    color: 'bg-red-500',
    bangaloreVibe: 'You belong in the boardrooms of UB City and the innovation hubs of Electronic City!'
  },
  'ENTP': {
    name: 'The Debater',
    description: 'Quick-witted innovators who love exploring new possibilities. Bangalore\'s creative energy matches yours!',
    strengths: ['Innovative', 'Enthusiastic', 'Charismatic', 'Adaptable'],
    questStyle: 'Loves brainstorming sessions and creative collaborations - perfect for design thinking workshops',
    emoji: '💡',
    color: 'bg-orange-500',
    bangaloreVibe: 'The vibrant cafes of Koramangala and creative spaces of Indiranagar are your playground!'
  },
  'INFJ': {
    name: 'The Advocate',
    description: 'Compassionate visionaries dedicated to helping others grow. Bangalore needs your empathy!',
    strengths: ['Empathetic', 'Creative', 'Insightful', 'Principled'],
    questStyle: 'Seeks meaningful connections and purpose-driven projects - NGO work and mentoring',
    emoji: '🌱',
    color: 'bg-green-500',
    bangaloreVibe: 'The peaceful gardens of Lalbagh and community centers are where you shine!'
  },
  'INFP': {
    name: 'The Mediator',
    description: 'Idealistic dreamers who value authenticity and creativity. Bangalore\'s artistic soul resonates with you!',
    strengths: ['Creative', 'Empathetic', 'Flexible', 'Passionate'],
    questStyle: 'Gravitates toward artistic and humanitarian quests - perfect for creative collaborations',
    emoji: '🎨',
    color: 'bg-pink-500',
    bangaloreVibe: 'The art galleries of Chickpet and indie cafes of Jayanagar are your creative sanctuaries!'
  },
  'ENFJ': {
    name: 'The Protagonist',
    description: 'Charismatic leaders who inspire others to achieve their potential. Bangalore\'s community builder!',
    strengths: ['Charismatic', 'Inspiring', 'Empathetic', 'Organized'],
    questStyle: 'Organizes group activities and mentorship opportunities - natural event organizer',
    emoji: '🌟',
    color: 'bg-yellow-500',
    bangaloreVibe: 'You\'re the heart of every college fest and the soul of community events across the city!'
  },
  'ENFP': {
    name: 'The Campaigner',
    description: 'Enthusiastic free spirits who love connecting with people. Bangalore\'s social butterfly!',
    strengths: ['Enthusiastic', 'Creative', 'Sociable', 'Optimistic'],
    questStyle: 'Enjoys social events and creative group projects - the life of every party',
    emoji: '🎭',
    color: 'bg-cyan-500',
    bangaloreVibe: 'From Brigade Road to Commercial Street, you make friends everywhere you go!'
  },
  'ISTJ': {
    name: 'The Logistician',
    description: 'Reliable planners who excel at organizing and executing tasks. Bangalore\'s backbone!',
    strengths: ['Reliable', 'Practical', 'Organized', 'Loyal'],
    questStyle: 'Prefers structured study groups and organized activities - the perfect study buddy',
    emoji: '📋',
    color: 'bg-blue-600',
    bangaloreVibe: 'The organized chaos of Bangalore\'s IT corridors and libraries are your domain!'
  },
  'ISFJ': {
    name: 'The Protector',
    description: 'Caring supporters who dedicate themselves to helping others. Bangalore\'s guardian angel!',
    strengths: ['Caring', 'Reliable', 'Patient', 'Loyal'],
    questStyle: 'Enjoys helping others and community service projects - the friend everyone needs',
    emoji: '🛡️',
    color: 'bg-teal-500',
    bangaloreVibe: 'You\'re the one organizing care packages and helping newcomers settle in the city!'
  },
  'ESTJ': {
    name: 'The Executive',
    description: 'Efficient organizers who thrive on bringing order to chaos. Bangalore\'s project manager!',
    strengths: ['Organized', 'Practical', 'Decisive', 'Traditional'],
    questStyle: 'Leads structured activities and goal-oriented projects - gets things done',
    emoji: '⚡',
    color: 'bg-gray-600',
    bangaloreVibe: 'The corporate towers of Whitefield and organized events across the city need your skills!'
  },
  'ESFJ': {
    name: 'The Consul',
    description: 'Warm-hearted helpers who bring people together. Bangalore\'s social coordinator!',
    strengths: ['Caring', 'Social', 'Organized', 'Supportive'],
    questStyle: 'Organizes social gatherings and group support activities - the ultimate host',
    emoji: '🤝',
    color: 'bg-rose-500',
    bangaloreVibe: 'Every college fest, birthday party, and group outing has your magical touch!'
  },
  'ISTP': {
    name: 'The Virtuoso',
    description: 'Practical problem-solvers who learn through hands-on experience. Bangalore\'s maker!',
    strengths: ['Practical', 'Flexible', 'Observant', 'Independent'],
    questStyle: 'Enjoys hands-on projects and skill-building activities - the DIY expert',
    emoji: '🔧',
    color: 'bg-amber-600',
    bangaloreVibe: 'The maker spaces and tech labs across Bangalore are where you create magic!'
  },
  'ISFP': {
    name: 'The Adventurer',
    description: 'Gentle artists who express themselves through creativity. Bangalore\'s creative soul!',
    strengths: ['Creative', 'Flexible', 'Caring', 'Passionate'],
    questStyle: 'Seeks artistic collaborations and nature-based adventures - the aesthetic curator',
    emoji: '🌈',
    color: 'bg-emerald-500',
    bangaloreVibe: 'From the street art of Malleshwaram to the gardens of Cubbon Park, you find beauty everywhere!'
  },
  'ESTP': {
    name: 'The Entrepreneur',
    description: 'Energetic action-takers who thrive in dynamic environments. Bangalore\'s go-getter!',
    strengths: ['Energetic', 'Practical', 'Adaptable', 'Social'],
    questStyle: 'Loves active adventures and spontaneous group activities - always ready for action',
    emoji: '🏃',
    color: 'bg-red-600',
    bangaloreVibe: 'The bustling streets, adventure sports, and nightlife of Bangalore fuel your energy!'
  },
  'ESFP': {
    name: 'The Entertainer',
    description: 'Spontaneous performers who love bringing joy to others. Bangalore\'s mood lifter!',
    strengths: ['Enthusiastic', 'Flexible', 'Caring', 'Social'],
    questStyle: 'Organizes fun events and creative performances - the party starter',
    emoji: '🎪',
    color: 'bg-purple-600',
    bangaloreVibe: 'Every cultural event, flash mob, and celebration in the city has your joyful spirit!'
  }
};

export const mbtiCompatibility: Record<MBTIType, { 
  ideal: MBTIType[]; 
  compatible: MBTIType[]; 
  challenging: MBTIType[]; 
}> = {
  'INTJ': {
    ideal: ['ENFP', 'ENTP'],
    compatible: ['INTJ', 'INFJ', 'ENTJ', 'INFP'],
    challenging: ['ESFP', 'ESTP', 'ISFP', 'ISTP']
  },
  'INTP': {
    ideal: ['ENFJ', 'ENTJ'],
    compatible: ['INTP', 'INTJ', 'ENTP', 'INFJ'],
    challenging: ['ESFJ', 'ESTJ', 'ISFJ', 'ISTJ']
  },
  'ENTJ': {
    ideal: ['INFP', 'INTP'],
    compatible: ['ENTJ', 'INTJ', 'ENTP', 'ENFJ'],
    challenging: ['ISFP', 'ISTP', 'ESFP', 'ESTP']
  },
  'ENTP': {
    ideal: ['INFJ', 'INTJ'],
    compatible: ['ENTP', 'ENTJ', 'ENFP', 'INTP'],
    challenging: ['ISFJ', 'ISTJ', 'ESFJ', 'ESTJ']
  },
  'INFJ': {
    ideal: ['ENTP', 'ENFP'],
    compatible: ['INFJ', 'INTJ', 'ENFJ', 'INTP'],
    challenging: ['ESTP', 'ESFP', 'ISTP', 'ISFP']
  },
  'INFP': {
    ideal: ['ENFJ', 'ENTJ'],
    compatible: ['INFP', 'ENFP', 'INFJ', 'INTJ'],
    challenging: ['ESTJ', 'ESFJ', 'ISTJ', 'ISFJ']
  },
  'ENFJ': {
    ideal: ['INFP', 'ISFP'],
    compatible: ['ENFJ', 'INFJ', 'ENFP', 'INTP'],
    challenging: ['ISTP', 'ESTP', 'ISTJ', 'ESTJ']
  },
  'ENFP': {
    ideal: ['INTJ', 'INFJ'],
    compatible: ['ENFP', 'INFP', 'ENFJ', 'ENTP'],
    challenging: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ']
  },
  'ISTJ': {
    ideal: ['ESFP', 'ESTP'],
    compatible: ['ISTJ', 'ISFJ', 'ESTJ', 'INTJ'],
    challenging: ['ENFP', 'ENTP', 'INFP', 'INTP']
  },
  'ISFJ': {
    ideal: ['ESFP', 'ESTP'],
    compatible: ['ISFJ', 'ISTJ', 'ESFJ', 'INFJ'],
    challenging: ['ENTP', 'ENFP', 'INTP', 'INFP']
  },
  'ESTJ': {
    ideal: ['ISFP', 'ISTP'],
    compatible: ['ESTJ', 'ISTJ', 'ESFJ', 'ENTJ'],
    challenging: ['INFP', 'ENFP', 'INTP', 'ENTP']
  },
  'ESFJ': {
    ideal: ['ISFP', 'ISTP'],
    compatible: ['ESFJ', 'ISFJ', 'ESTJ', 'ENFJ'],
    challenging: ['INTP', 'ENTP', 'INFP', 'ENFP']
  },
  'ISTP': {
    ideal: ['ESFJ', 'ESTJ'],
    compatible: ['ISTP', 'ISFP', 'ESTP', 'INTJ'],
    challenging: ['ENFJ', 'INFJ', 'ENFP', 'INFP']
  },
  'ISFP': {
    ideal: ['ENFJ', 'ESFJ'],
    compatible: ['ISFP', 'ISTP', 'ESFP', 'INFJ'],
    challenging: ['ENTJ', 'INTJ', 'ENTP', 'INTP']
  },
  'ESTP': {
    ideal: ['ISFJ', 'ISTJ'],
    compatible: ['ESTP', 'ISTP', 'ESFP', 'ENFJ'],
    challenging: ['INFJ', 'INTJ', 'INFP', 'INTP']
  },
  'ESFP': {
    ideal: ['ISFJ', 'ISTJ'],
    compatible: ['ESFP', 'ISFP', 'ESTP', 'ENFP'],
    challenging: ['INTJ', 'INFJ', 'INTP', 'ENTP']
  }
};