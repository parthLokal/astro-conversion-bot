export type Category = 'Love' | 'Career' | 'Finance' | 'Health' | 'Marriage' | 'Kundali';

export type Astrologer = {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  price: number;
  image: string;
  availability: string;
};

export type Ticket = {
  id: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  updatedAt: string;
};

export const quickReplies = [
  'Love guidance',
  'Career advice',
  'Marriage compatibility',
  'Kundali reading',
  'Finance forecast',
  'Book a consultation'
];

export const astrologers: Astrologer[] = [
  {
    id: 1,
    name: 'Astro Seema',
    specialty: 'Love & Relationship Guidance',
    experience: '12 years',
    rating: 4.9,
    price: 1499,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    availability: 'Available today'
  },
  {
    id: 2,
    name: 'Vikram Joshi',
    specialty: 'Career & Business Astrology',
    experience: '15 years',
    rating: 4.8,
    price: 1999,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    availability: 'Next slot: 6:30 PM'
  },
  {
    id: 3,
    name: 'Mira Nair',
    specialty: 'Marriage & Compatibility',
    experience: '10 years',
    rating: 4.9,
    price: 1799,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
    availability: 'Available in 30 mins'
  }
];

export const tickets: Ticket[] = [
  { id: 'AST-1042', title: 'Payout status clarification', status: 'In Progress', updatedAt: '2 hours ago' },
  { id: 'AST-1045', title: 'KYC document rejection review', status: 'Open', updatedAt: '5 hours ago' },
  { id: 'AST-1049', title: 'Salary report request', status: 'Resolved', updatedAt: 'Yesterday' }
];

export const dashboardStats = {
  activeUsers: 1284,
  bookedConsultations: 389,
  avgResponseTime: '2m 14s',
  conversionRate: '18.6%'
};

export const conversationSeed = [
  {
    sender: 'bot',
    text: 'Hello! I can help with love, career, finance, marriage, or kundali guidance. What would you like support with today?'
  },
  {
    sender: 'user',
    text: 'I am worried about my career path and job stability.'
  },
  {
    sender: 'bot',
    text: 'I can help with that. Based on your query, a career astrology consultation may be the best fit. Would you like to speak with an astrologer or see suitable options?'
  }
];

export const servicePackages = [
  {
    name: 'Starter Guidance',
    price: '₹499',
    description: 'Quick insights for a single life concern.'
  },
  {
    name: 'Priority Consultation',
    price: '₹1499',
    description: 'In-depth guidance with follow-up questions.'
  },
  {
    name: 'Premium Relationship Report',
    price: '₹2999',
    description: 'Detailed compatibility and relationship analysis.'
  }
];
