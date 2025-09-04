// Mock data for development - replace with real API calls later

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
  publishedAt: string;
  updatedAt: string;
  views: number;
  featured: boolean;
  breaking: boolean;
  status: 'published' | 'draft' | 'archived';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'user';
  avatar?: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Category {
  id: string;
  name: string;
  nameBn: string;
  slug: string;
  description?: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@jokontho.com',
    name: 'অ্যাডমিন',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'editor@jokontho.com', 
    name: 'সম্পাদক',
    role: 'editor',
    createdAt: '2024-01-02T00:00:00Z',
    lastLogin: new Date().toISOString(),
  },
  {
    id: '3',
    email: 'user@jokontho.com',
    name: 'ব্যবহারকারী',
    role: 'user',
    createdAt: '2024-01-03T00:00:00Z',
    lastLogin: new Date().toISOString(),
  }
];

// Mock Categories
export const mockCategories: Category[] = [
  { id: '1', name: 'National', nameBn: 'জাতীয়', slug: 'national', createdAt: '2024-01-01T00:00:00Z' },
  { id: '2', name: 'Politics', nameBn: 'রাজনীতি', slug: 'politics', createdAt: '2024-01-01T00:00:00Z' },
  { id: '3', name: 'International', nameBn: 'আন্তর্জাতিক', slug: 'international', createdAt: '2024-01-01T00:00:00Z' },
  { id: '4', name: 'Business', nameBn: 'ব্যবসা', slug: 'business', createdAt: '2024-01-01T00:00:00Z' },
  { id: '5', name: 'Sports', nameBn: 'খেলাধুলা', slug: 'sports', createdAt: '2024-01-01T00:00:00Z' },
  { id: '6', name: 'Entertainment', nameBn: 'বিনোদন', slug: 'entertainment', createdAt: '2024-01-01T00:00:00Z' },
  { id: '7', name: 'Technology', nameBn: 'প্রযুক্তি', slug: 'technology', createdAt: '2024-01-01T00:00:00Z' },
  { id: '8', name: 'Health', nameBn: 'স্বাস্থ্য', slug: 'health', createdAt: '2024-01-01T00:00:00Z' },
  { id: '9', name: 'Education', nameBn: 'শিক্ষা', slug: 'education', createdAt: '2024-01-01T00:00:00Z' },
  { id: '10', name: 'Culture', nameBn: 'সংস্কৃতি', slug: 'culture', createdAt: '2024-01-01T00:00:00Z' },
  { id: '11', name: 'Opinion', nameBn: 'মতামত', slug: 'opinion', createdAt: '2024-01-01T00:00:00Z' },
  { id: '12', name: 'Lifestyle', nameBn: 'জীবনযাপন', slug: 'lifestyle', createdAt: '2024-01-01T00:00:00Z' },
  { id: '13', name: 'Jobs', nameBn: 'চাকরি', slug: 'jobs', createdAt: '2024-01-01T00:00:00Z' },
];

// Mock News Articles
export const mockNewsArticles: NewsArticle[] = [
  // Breaking News
  {
    id: '1',
    title: 'প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা',
    excerpt: 'দেশের অর্থনৈতিক প্রবৃদ্ধি ত্বরান্বিত করতে প্রধানমন্ত্রী শেখ হাসিনা নতুন উন্নয়ন পরিকল্পনা ঘোষণা করেছেন।',
    content: 'দেশের অর্থনৈতিক প্রবৃদ্ধি ত্বরান্বিত করতে প্রধানমন্ত্রী শেখ হাসিনা নতুন উন্নয়ন পরিকল্পনা ঘোষণা করেছেন। এই পরিকল্পনার মধ্যে রয়েছে...',
    author: 'রাজনৈতিক প্রতিবেদক',
    category: 'national',
    tags: ['রাজনীতি', 'উন্নয়ন', 'প্রধানমন্ত্রী'],
    imageUrl: '/src/assets/culture-news.jpg',
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: 15420,
    featured: true,
    breaking: true,
    status: 'published'
  },

  // National News
  {
    id: '2',
    title: 'শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ',
    excerpt: 'শিক্ষামন্ত্রী দেশের শিক্ষা ব্যবস্থায় আমূল সংস্কারের নতুন নীতিমালা ঘোষণা করেছেন।',
    content: 'শিক্ষামন্ত্রী দেশের শিক্ষা ব্যবস্থায় আমূল সংস্কারের নতুন নীতিমালা ঘোষণা করেছেন...',
    author: 'শিক্ষা প্রতিবেদক',
    category: 'national',
    tags: ['শিক্ষা', 'সংস্কার', 'নীতিমালা'],
    imageUrl: '/src/assets/education-news.jpg',
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
    views: 8945,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // Technology News
  {
    id: '3',
    title: '৫জি নেটওয়ার্ক চালুর প্রস্তুতি',
    excerpt: 'বাংলাদেশে শীঘ্রই ৫জি নেটওয়ার্ক চালু হতে যাচ্ছে। টেলিকম কোম্পানিগুলো চূড়ান্ত প্রস্তুতি নিচ্ছে।',
    content: 'বাংলাদেশে শীঘ্রই ৫জি নেটওয়ার্ক চালু হতে যাচ্ছে। টেলিকম কোম্পানিগুলো চূড়ান্ত প্রস্তুতি নিচ্ছে...',
    author: 'প্রযুক্তি প্রতিবেদক',
    category: 'technology',
    tags: ['৫জি', 'টেলিকম', 'প্রযুক্তি'],
    imageUrl: '/src/assets/tech-news.jpg',
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    updatedAt: new Date(Date.now() - 7200000).toISOString(),
    views: 12340,
    featured: true,
    breaking: false,
    status: 'published'
  },

  // Sports News
  {
    id: '4',
    title: 'বাংলাদেশ ক্রিকেট দলের নতুন সাফল্য',
    excerpt: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশ দলের চমৎকার পারফরম্যান্স। টাইগাররা জিতেছে সিরিজ।',
    content: 'আন্তর্জাতিক ক্রিকেটে বাংলাদেশ দলের চমৎকার পারফরম্যান্স। টাইগাররা জিতেছে সিরিজ...',
    author: 'ক্রীড়া প্রতিবেদক',
    category: 'sports',
    tags: ['ক্রিকেট', 'বাংলাদেশ', 'জয়'],
    imageUrl: '/src/assets/sports-news.jpg',
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    updatedAt: new Date(Date.now() - 10800000).toISOString(),
    views: 20150,
    featured: true,
    breaking: false,
    status: 'published'
  },

  // Business News
  {
    id: '5',
    title: 'রপ্তানি আয়ে নতুন রেকর্ড',
    excerpt: 'চলতি অর্থবছরে দেশের রপ্তানি আয়ে নতুন রেকর্ড সৃষ্টি হয়েছে।',
    content: 'চলতি অর্থবছরে দেশের রপ্তানি আয়ে নতুন রেকর্ড সৃষ্টি হয়েছে...',
    author: 'অর্থনীতি প্রতিবেদক',
    category: 'business',
    tags: ['রপ্তানি', 'অর্থনীতি', 'রেকর্ড'],
    imageUrl: '/src/assets/economy-news.jpg',
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    updatedAt: new Date(Date.now() - 14400000).toISOString(),
    views: 7890,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // Entertainment News
  {
    id: '6',
    title: 'ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসব শুরু',
    excerpt: 'রাজধানীতে শুরু হয়েছে ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসব। অংশগ্রহণ করছে বিশ্বের বিভিন্ন দেশের চলচ্চিত্র।',
    content: 'রাজধানীতে শুরু হয়েছে ঢাকা আন্তর্জাতিক চলচ্চিত্র উৎসব...',
    author: 'বিনোদন প্রতিবেদক',
    category: 'entertainment',
    tags: ['চলচ্চিত্র', 'উৎসব', 'ঢাকা'],
    imageUrl: '/src/assets/culture-news.jpg',
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    updatedAt: new Date(Date.now() - 18000000).toISOString(),
    views: 9876,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // International News
  {
    id: '7',
    title: 'জলবায়ু সম্মেলনে বাংলাদেশের অংশগ্রহণ',
    excerpt: 'আন্তর্জাতিক জলবায়ু সম্মেলনে বাংলাদেশের প্রতিনিধিদল অংশগ্রহণ করেছে।',
    content: 'আন্তর্জাতিক জলবায়ু সম্মেলনে বাংলাদেশের প্রতিনিধিদল অংশগ্রহণ করেছে...',
    author: 'আন্তর্জাতিক প্রতিবেদক',
    category: 'international',
    tags: ['জলবায়ু', 'সম্মেলন', 'আন্তর্জাতিক'],
    imageUrl: '/src/assets/culture-news.jpg',
    publishedAt: new Date(Date.now() - 21600000).toISOString(),
    updatedAt: new Date(Date.now() - 21600000).toISOString(),
    views: 5432,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // Health News  
  {
    id: '8',
    title: 'স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব',
    excerpt: 'দেশের স্বাস্থ্যসেবা ক্ষেত্রে ডিজিটাল প্রযুক্তির ব্যবহার বৃদ্ধি পাচ্ছে।',
    content: 'দেশের স্বাস্থ্যসেবা ক্ষেত্রে ডিজিটাল প্রযুক্তির ব্যবহার বৃদ্ধি পাচ্ছে...',
    author: 'স্বাস্থ্য প্রতিবেদক',
    category: 'health',
    tags: ['স্বাস্থ্য', 'ডিজিটাল', 'প্রযুক্তি'],
    imageUrl: '/src/assets/health-news.jpg',
    publishedAt: new Date(Date.now() - 25200000).toISOString(),
    updatedAt: new Date(Date.now() - 25200000).toISOString(),
    views: 6789,
    featured: false,
    breaking: true,
    status: 'published'
  },

  // Politics News
  {
    id: '9',
    title: 'সংসদে নতুন বিল পাস',
    excerpt: 'জাতীয় সংসদে গুরুত্বপূর্ণ নতুন বিল পাস হয়েছে।',
    content: 'জাতীয় সংসদে গুরুত্বপূর্ণ নতুন বিল পাস হয়েছে...',
    author: 'সংসদ প্রতিবেদক',
    category: 'politics',
    tags: ['সংসদ', 'বিল', 'রাজনীতি'],
    imageUrl: '/src/assets/culture-news.jpg',
    publishedAt: new Date(Date.now() - 28800000).toISOString(),
    updatedAt: new Date(Date.now() - 28800000).toISOString(),
    views: 11234,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // Opinion News
  {
    id: '10',
    title: 'শিক্ষা ব্যবস্থার উন্নতিতে করণীয়',
    excerpt: 'আমাদের শিক্ষা ব্যবস্থার উন্নতিতে কী কী পদক্ষেপ নেওয়া প্রয়োজন - একটি বিশ্লেষণ।',
    content: 'আমাদের শিক্ষা ব্যবস্থার উন্নতিতে কী কী পদক্ষেপ নেওয়া প্রয়োজন...',
    author: 'মতামত লেখক',
    category: 'opinion',
    tags: ['শিক্ষা', 'মতামত', 'উন্নতি'],
    imageUrl: '/src/assets/education-news.jpg',
    publishedAt: new Date(Date.now() - 32400000).toISOString(),
    updatedAt: new Date(Date.now() - 32400000).toISOString(),
    views: 4567,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // Lifestyle News
  {
    id: '11',
    title: 'স্বাস্থ্যকর জীবনযাপনের উপায়',
    excerpt: 'ব্যস্ত জীবনে কীভাবে স্বাস্থ্যকর জীবনযাপন করা যায় - বিশেষজ্ঞদের পরামর্শ।',
    content: 'ব্যস্ত জীবনে কীভাবে স্বাস্থ্যকর জীবনযাপন করা যায়...',
    author: 'জীবনযাপন বিশেষজ্ঞ',
    category: 'lifestyle',
    tags: ['স্বাস্থ্য', 'জীবনযাপন', 'পরামর্শ'],
    imageUrl: '/src/assets/health-news.jpg',
    publishedAt: new Date(Date.now() - 36000000).toISOString(),
    updatedAt: new Date(Date.now() - 36000000).toISOString(),
    views: 8901,
    featured: false,
    breaking: false,
    status: 'published'
  },

  // Jobs News
  {
    id: '12',
    title: 'সরকারি চাকরিতে নতুন নিয়োগ বিজ্ঞপ্তি',
    excerpt: 'বিভিন্ন সরকারি প্রতিষ্ঠানে নতুন নিয়োগের জন্য বিজ্ঞপ্তি প্রকাশ করা হয়েছে।',
    content: 'বিভিন্ন সরকারি প্রতিষ্ঠানে নতুন নিয়োগের জন্য বিজ্ঞপ্তি প্রকাশ করা হয়েছে...',
    author: 'চাকরি প্রতিবেদক',
    category: 'jobs',
    tags: ['চাকরি', 'নিয়োগ', 'সরকারি'],
    imageUrl: '/src/assets/culture-news.jpg',
    publishedAt: new Date(Date.now() - 39600000).toISOString(),
    updatedAt: new Date(Date.now() - 39600000).toISOString(),
    views: 13456,
    featured: true,
    breaking: false,
    status: 'published'
  }
];

// Mock Breaking News
export const mockBreakingNews: NewsArticle[] = mockNewsArticles.filter(article => article.breaking);

// Helper functions to simulate API responses

export const getMockNewsByCategory = (category: string, page = 1, limit = 10) => {
  const filteredNews = mockNewsArticles.filter(article => article.category === category);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    articles: filteredNews.slice(startIndex, endIndex),
    total: filteredNews.length,
    page,
    limit,
    totalPages: Math.ceil(filteredNews.length / limit)
  };
};

export const getMockAllNews = (page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    articles: mockNewsArticles.slice(startIndex, endIndex),
    total: mockNewsArticles.length,
    page,
    limit,
    totalPages: Math.ceil(mockNewsArticles.length / limit)
  };
};

export const getMockFeaturedNews = () => {
  return mockNewsArticles.filter(article => article.featured);
};

export const getMockBreakingNews = () => {
  return mockBreakingNews;
};

export const searchMockNews = (query: string, page = 1, limit = 10) => {
  const filteredNews = mockNewsArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    articles: filteredNews.slice(startIndex, endIndex),
    total: filteredNews.length,
    page,
    limit,
    totalPages: Math.ceil(filteredNews.length / limit),
    query
  };
};

// Mock auth functions
export const mockLogin = async (credentials: LoginRequest): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const user = mockUsers.find(u => u.email === credentials.email);
  
  if (!user || credentials.password !== 'password123') {
    throw new Error('Invalid credentials');
  }

  return {
    user,
    token: `mock-token-${user.id}-${Date.now()}`
  };
};

export const mockRegister = async (userData: RegisterRequest): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser: User = {
    id: `${mockUsers.length + 1}`,
    email: userData.email,
    name: userData.name,
    role: 'user',
    createdAt: new Date().toISOString(),
  };

  mockUsers.push(newUser);

  return {
    user: newUser,
    token: `mock-token-${newUser.id}-${Date.now()}`
  };
};

export const mockLogout = async (): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  // In real implementation, this would invalidate the token on the server
};

export const mockGetCurrentUser = async (): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const token = localStorage.getItem('authToken');
  if (!token) {
    throw new Error('No token found');
  }

  // Extract user ID from mock token
  const userId = token.split('-')[2];
  const user = mockUsers.find(u => u.id === userId);
  
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

// Admin mock data
export const mockDashboardStats = {
  totalNews: mockNewsArticles.length,
  publishedNews: mockNewsArticles.filter(a => a.status === 'published').length,
  draftNews: mockNewsArticles.filter(a => a.status === 'draft').length,
  totalViews: mockNewsArticles.reduce((sum, article) => sum + article.views, 0),
  totalUsers: mockUsers.length,
  activeUsers: mockUsers.filter(u => u.lastLogin).length,
  totalCategories: mockCategories.length,
  breakingNews: mockBreakingNews.length,
};

export const mockAnalyticsData = {
  dailyViews: [
    { date: '2024-01-01', views: 1200 },
    { date: '2024-01-02', views: 1500 },
    { date: '2024-01-03', views: 1800 },
    { date: '2024-01-04', views: 2100 },
    { date: '2024-01-05', views: 1900 },
    { date: '2024-01-06', views: 2200 },
    { date: '2024-01-07', views: 2500 },
  ],
  topCategories: [
    { category: 'national', views: 5400 },
    { category: 'sports', views: 4200 },
    { category: 'politics', views: 3800 },
    { category: 'technology', views: 3200 },
    { category: 'business', views: 2900 },
  ],
  recentActivity: [
    { action: 'নতুন সংবাদ প্রকাশ', time: '5 মিনিট আগে' },
    { action: 'ব্যবহারকারী নিবন্ধন', time: '15 মিনিট আগে' },
    { action: 'মন্তব্য অনুমোদন', time: '30 মিনিট আগে' },
  ]
};