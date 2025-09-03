// Mock data for development
import economyImage from "@/assets/economy-news.jpg";
import educationImage from "@/assets/education-news.jpg";
import sportsImage from "@/assets/sports-news.jpg";
import techImage from "@/assets/tech-news.jpg";
import healthImage from "@/assets/health-news.jpg";
import cultureImage from "@/assets/culture-news.jpg";

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  publishedAt: string;
  imageUrl?: string;
  tags: string[];
  status: 'published' | 'draft' | 'archived';
  featured: boolean;
  breaking: boolean;
  emergency: boolean;
  views: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'reporter';
  avatar?: string;
  lastLogin?: string;
  status: 'active' | 'inactive';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  articleCount: number;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "আবুল কালাম",
    email: "abul@news.com",
    role: "admin",
    lastLogin: "2024-12-26T10:30:00Z",
    status: "active"
  },
  {
    id: "2", 
    name: "ফাতিমা খাতুন",
    email: "fatima@news.com",
    role: "editor",
    lastLogin: "2024-12-26T09:15:00Z",
    status: "active"
  },
  {
    id: "3",
    name: "সাকিব আহমেদ",
    email: "sakib@news.com", 
    role: "reporter",
    lastLogin: "2024-12-26T08:45:00Z",
    status: "active"
  }
];

export const mockCategories: Category[] = [
  { id: "1", name: "জাতীয়", slug: "national", description: "জাতীয় সংবাদ", articleCount: 45 },
  { id: "2", name: "আন্তর্জাতিক", slug: "international", description: "আন্তর্জাতিক সংবাদ", articleCount: 32 },
  { id: "3", name: "খেলাধুলা", slug: "sports", description: "খেলাধুলার সংবাদ", articleCount: 28 },
  { id: "4", name: "বিনোদন", slug: "entertainment", description: "বিনোদন সংবাদ", articleCount: 21 },
  { id: "5", name: "প্রযুক্তি", slug: "technology", description: "প্রযুক্তি সংবাদ", articleCount: 18 },
  { id: "6", name: "ব্যবসা", slug: "business", description: "ব্যবসা বাণিজ্য", articleCount: 15 },
  { id: "7", name: "লাইফস্টাইল", slug: "lifestyle", description: "জীবনযাত্রা", articleCount: 12 },
  { id: "8", name: "মতামত", slug: "opinion", description: "মতামত ও সম্পাদকীয়", articleCount: 9 },
  { id: "9", name: "চাকরি", slug: "jobs", description: "চাকরির সংবাদ", articleCount: 6 }
];

export const mockNewsArticles: NewsArticle[] = [
  // National News
  {
    id: "1",
    title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা দেশের অর্থনৈতিক ভবিষ্যৎ পরিবর্তন করবে",
    excerpt: "সরকারের এই উদ্যোগ দেশের অর্থনৈতিক কাঠামোতে এক নতুন মাত্রা যোগ করবে বলে মনে করছেন বিশেষজ্ঞরা",
    content: "প্রধানমন্ত্রী শেখ হাসিনা আজ এক গুরুত্বপূর্ণ ঘোষণায় দেশের অর্থনৈতিক উন্নয়নের জন্য একটি নতুন পরিকল্পনা উপস্থাপন করেছেন। এই পরিকল্পনায় রয়েছে বিভিন্ন খাতে ব্যাপক বিনিয়োগ এবং কর্মসংস্থান সৃষ্টির বিশাল সুযোগ।",
    author: "আবুল কালাম",
    category: "national",
    publishedAt: "2024-12-26T12:30:00Z",
    imageUrl: economyImage,
    tags: ["অর্থনীতি", "উন্নয়ন", "সরকার"],
    status: "published",
    featured: true,
    breaking: true,
    emergency: false,
    views: 25420
  },
  {
    id: "2",
    title: "শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ",
    excerpt: "প্রাথমিক থেকে উচ্চশিক্ষা পর্যন্ত নতুন কারিকুলাম প্রণয়ন করা হবে",
    content: "শিক্ষা মন্ত্রণালয় ঘোষণা করেছে যে আগামী বছর থেকে দেশের শিক্ষা ব্যবস্থায় ব্যাপক সংস্কার আনা হবে।",
    author: "ফাতিমা খাতুন",
    category: "national",
    publishedAt: "2024-12-26T09:30:00Z",
    imageUrl: educationImage,
    tags: ["শিক্ষা", "সংস্কার"],
    status: "published",
    featured: true,
    breaking: false,
    emergency: false,
    views: 18350
  },
  {
    id: "3",
    title: "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
    excerpt: "দেশের সকল হাসপাতালে ডিজিটাল স্বাস্থ্যসেবা চালু করা হবে",
    content: "স্বাস্থ্য মন্ত্রণালয় জানিয়েছে যে আগামী দুই বছরের মধ্যে সকল সরকারি হাসপাতালে ডিজিটাল স্বাস্থ্যসেবা চালু করা হবে।",
    author: "ড. রহিম উদ্দিন",
    category: "national",
    publishedAt: "2024-12-26T08:30:00Z",
    imageUrl: healthImage,
    tags: ["স্বাস্থ্য", "প্রযুক্তি"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 12450
  },

  // Sports News
  {
    id: "4",
    title: "আন্তর্জাতিক ক্রিকেট টুর্নামেন্টে বাংলাদেশের জয়",
    excerpt: "টি-২০ সিরিজে বাংলাদেশ দল অসাধারণ পারফরমেন্স দেখিয়েছে",
    content: "বাংলাদেশ ক্রিকেট দল টি-২০ সিরিজে অসাধারণ পারফরমেন্স দেখিয়ে বিশ্বের অন্যতম দল হিসেবে নিজেদের প্রতিষ্ঠিত করেছে।",
    author: "খালেদ মাহমুদ",
    category: "sports",
    publishedAt: "2024-12-26T07:30:00Z",
    imageUrl: sportsImage,
    tags: ["ক্রিকেট", "খেলাধুলা"],
    status: "published",
    featured: true,
    breaking: false,
    emergency: false,
    views: 35200
  },
  {
    id: "5",
    title: "ফুটবল বিশ্বকাপের জন্য প্রস্তুতি নিচ্ছে জাতীয় দল",
    excerpt: "আগামী ফুটবল বিশ্বকাপের জন্য বিশেষ প্রশিক্ষণ শুরু",
    content: "বাংলাদেশ ফুটবল ফেডারেশন জানিয়েছে যে আগামী ফুটবল বিশ্বকাপের জন্য জাতীয় দলের বিশেষ প্রশিক্ষণ শুরু হয়েছে।",
    author: "মোহাম্মদ রফিক",
    category: "sports", 
    publishedAt: "2024-12-26T06:30:00Z",
    imageUrl: sportsImage,
    tags: ["ফুটবল", "বিশ্বকাপ"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 22100
  },

  // Technology News
  {
    id: "6",
    title: "কৃত্রিম বুদ্ধিমত্তার ব্যবহারে এগিয়ে বাংলাদেশ",
    excerpt: "তথ্য প্রযুক্তি খাতে AI এর ব্যবহার বৃদ্ধি পাচ্ছে",
    content: "বাংলাদেশের তথ্য প্রযুক্তি খাতে কৃত্রিম বুদ্ধিমত্তার ব্যবহার দ্রুত বৃদ্ধি পাচ্ছে। সরকারি ও বেসরকারি উভয় খাতেই AI এর প্রয়োগ দেখা যাচ্ছে।",
    author: "সাকিব আহমেদ",
    category: "technology",
    publishedAt: "2024-12-26T06:30:00Z",
    imageUrl: techImage,
    tags: ["প্রযুক্তি", "AI"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 8750
  },
  {
    id: "7",
    title: "৫জি নেটওয়ার্ক সম্প্রসারণের পরিকল্পনা",
    excerpt: "আগামী বছর সারাদেশে ৫জি নেটওয়ার্ক চালু হবে",
    content: "টেলিযোগাযোগ মন্ত্রণালয় জানিয়েছে যে আগামী বছরের মধ্যে সারাদেশে ৫জি নেটওয়ার্ক সম্প্রসারণ করা হবে।",
    author: "তানিয়া আক্তার",
    category: "technology",
    publishedAt: "2024-12-26T05:45:00Z",
    imageUrl: techImage,
    tags: ["৫জি", "টেলিযোগাযোগ"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 15200
  },

  // International News
  {
    id: "8",
    title: "আন্তর্জাতিক সম্মেলনে বাংলাদেশের অংশগ্রহণ",
    excerpt: "জলবায়ু পরিবর্তন বিষয়ক আন্তর্জাতিক সম্মেলনে গুরুত্বপূর্ণ ভূমিকা",
    content: "জলবায়ু পরিবর্তন বিষয়ক আন্তর্জাতিক সম্মেলনে বাংলাদেশ গুরুত্বপূর্ণ ভূমিকা পালন করেছে।",
    author: "নাসির উদ্দিন",
    category: "international",
    publishedAt: "2024-12-26T05:30:00Z",
    imageUrl: cultureImage,
    tags: ["আন্তর্জাতিক", "জলবায়ু"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 15600
  },
  {
    id: "9",
    title: "নতুন বাণিজ্যিক চুক্তি স্বাক্ষর",
    excerpt: "প্রতিবেশী দেশের সাথে নতুন বাণিজ্যিক চুক্তি",
    content: "বাংলাদেশ ও প্রতিবেশী দেশের মধ্যে একটি গুরুত্বপূর্ণ বাণিজ্যিক চুক্তি স্বাক্ষরিত হয়েছে।",
    author: "আমিনুল ইসলাম",
    category: "international",
    publishedAt: "2024-12-26T04:15:00Z",
    imageUrl: economyImage,
    tags: ["বাণিজ্য", "চুক্তি"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 11800
  },

  // Entertainment News
  {
    id: "10",
    title: "বিনোদন জগতে নতুন চলচ্চিত্রের মুক্তি",
    excerpt: "জাতীয় পুরস্কার প্রাপ্ত নির্দেশকের নতুন সিনেমা মুক্তি পেয়েছে",
    content: "দেশের অন্যতম জাতীয় পুরস্কার প্রাপ্ত চলচ্চিত্র নির্দেশকের নতুন সিনেমা সিনেমা হলে মুক্তি পেয়েছে।",
    author: "তানিয়া আক্তার",
    category: "entertainment",
    publishedAt: "2024-12-26T04:30:00Z",
    imageUrl: cultureImage,
    tags: ["বিনোদন", "চলচ্চিত্র"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 9850
  },
  {
    id: "11",
    title: "সঙ্গীত জগতে নতুন অ্যালবাম প্রকাশ",
    excerpt: "বিখ্যাত শিল্পীর নতুন অ্যালবাম সঙ্গীত প্রেমীদের মধ্যে সাড়া ফেলেছে",
    content: "দেশের একজন বিখ্যাত সঙ্গীত শিল্পীর নতুন অ্যালবাম প্রকাশিত হয়েছে যা সঙ্গীত প্রেমীদের মধ্যে ব্যাপক সাড়া ফেলেছে।",
    author: "রাহুল আমিন",
    category: "entertainment",
    publishedAt: "2024-12-26T03:45:00Z",
    imageUrl: cultureImage,
    tags: ["সঙ্গীত", "অ্যালবাম"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 7200
  },

  // Business News
  {
    id: "12",
    title: "ব্যবসা-বাণিজ্যে নতুন সুযোগ সৃষ্টি",
    excerpt: "রপ্তানি বাণিজ্যে নতুন বাজার উন্মোচনের পরিকল্পনা",
    content: "রপ্তানি উন্নয়ন ব্যুরো জানিয়েছে যে আগামী বছর নতুন কয়েকটি দেশে বাংলাদেশি পণ্য রপ্তানির সুযোগ সৃষ্টি হবে।",
    author: "মোহাম্মদ আলী",
    category: "business",
    publishedAt: "2024-12-26T03:30:00Z",
    imageUrl: economyImage,
    tags: ["ব্যবসা", "রপ্তানি"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 11250
  },
  {
    id: "13",
    title: "নতুন শিল্প কারখানা স্থাপনের অনুমোদন",
    excerpt: "বেশ কয়েকটি নতুন শিল্প কারখানা স্থাপনের অনুমোদন দেওয়া হয়েছে",
    content: "বিনিয়োগ বোর্ড থেকে জানানো হয়েছে যে এ বছর বেশ কয়েকটি নতুন শিল্প কারখানা স্থাপনের অনুমোদন দেওয়া হয়েছে।",
    author: "সালমা খাতুন",
    category: "business",
    publishedAt: "2024-12-26T02:15:00Z",
    imageUrl: economyImage,
    tags: ["শিল্প", "বিনিয়োগ"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 8900
  },

  // Lifestyle News
  {
    id: "14",
    title: "স্বাস্থ্যকর জীবনযাত্রার নতুন পদ্ধতি",
    excerpt: "পুষ্টিবিদদের পরামর্শে নতুন খাদ্যাভ্যাস গড়ে তোলার উপায়",
    content: "দেশের পুষ্টিবিদরা জানিয়েছেন যে সঠিক খাদ্যাভ্যাস ও জীবনযাত্রার মাধ্যমে সুস্বাস্থ্য বজায় রাখা সম্ভব।",
    author: "ডা. মারিয়া আক্তার",
    category: "lifestyle",
    publishedAt: "2024-12-26T01:30:00Z",
    imageUrl: healthImage,
    tags: ["স্বাস্থ্য", "জীবনযাত্রা"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 6400
  },

  // Opinion News
  {
    id: "15",
    title: "শিক্ষা ব্যবস্থার উন্নয়নে করণীয়",
    excerpt: "শিক্ষা বিশেষজ্ঞদের মতামত ও পরামর্শ",
    content: "দেশের শিক্ষা ব্যবস্থার উন্নয়নে কী করা প্রয়োজন সে বিষয়ে শিক্ষা বিশেষজ্ঞদের মতামত তুলে ধরা হয়েছে।",
    author: "প্রফেসর আনিসুর রহমান",
    category: "opinion",
    publishedAt: "2024-12-26T00:30:00Z",
    imageUrl: educationImage,
    tags: ["মতামত", "শিক্ষা"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 5200
  },

  // Jobs News
  {
    id: "16",
    title: "সরকারি চাকরিতে নতুন নিয়োগ বিজ্ঞপ্তি",
    excerpt: "বিভিন্ন মন্ত্রণালয়ে নতুন পদে নিয়োগের সুযোগ",
    content: "সরকারের বিভিন্ন মন্ত্রণালয় ও বিভাগে নতুন পদে নিয়োগের জন্য বিজ্ঞপ্তি প্রকাশ করা হয়েছে।",
    author: "করিম উদ্দিন",
    category: "jobs",
    publishedAt: "2024-12-25T23:30:00Z",
    imageUrl: educationImage,
    tags: ["চাকরি", "নিয়োগ"],
    status: "published",
    featured: false,
    breaking: false,
    emergency: false,
    views: 18900
  }
];

export const mockBreakingNews = [
  "প্রধানমন্ত্রী আজ জাতির উদ্দেশে ভাষণ দেবেন",
  "দেশে নতুন করোনা ভ্যারিয়েন্টের অস্তিত্ব পাওয়া যায়নি",
  "বিশ্বকাপ ক্রিকেটে বাংলাদেশ দল চূড়ান্ত তালিকা ঘোষণা",
  "নতুন অর্থনৈতিক নীতি ঘোষণার প্রস্তুতি চলছে",
  "আন্তর্জাতিক সম্মেলনে বাংলাদেশের সফল অংশগ্রহণ"
];

export const mockVideos = [
  {
    id: "1",
    title: "প্রধানমন্ত্রীর সংবাদ সম্মেলন",
    description: "আজকের গুরুত্বপূর্ণ ঘোষণা",
    thumbnail: economyImage,
    duration: "15:30",
    views: 125000,
    publishedAt: "2024-12-26T10:00:00Z",
    uploadDate: "২ ঘন্টা আগে",
    category: "রাজনীতি",
    channel: "জাতীয় টিভি",
    isLive: false,
    isFeatured: true
  },
  {
    id: "2", 
    title: "ক্রিকেট ম্যাচের হাইলাইটস",
    description: "আজকের ম্যাচের সেরা মুহূর্তগুলো",
    thumbnail: sportsImage,
    duration: "8:45",
    views: 89000,
    publishedAt: "2024-12-26T08:00:00Z",
    uploadDate: "৫ ঘন্টা আগে",
    category: "খেলা",
    channel: "স্পোর্টস২ৄ",
    isLive: false,
    isFeatured: false
  }
];

// Helper functions
export const getFeaturedNews = () => mockNewsArticles.filter(article => article.featured);
export const getBreakingNews = () => mockBreakingNews;
export const getNewsByCategory = (category: string) => mockNewsArticles.filter(article => article.category === category);
export const getNewsById = (id: string) => mockNewsArticles.find(article => article.id === id);
export const getAllNews = () => mockNewsArticles;
export const getPopularNews = () => mockNewsArticles.sort((a, b) => b.views - a.views).slice(0, 10);
export const getRecentNews = () => mockNewsArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 10);
export const searchNews = (query: string) => mockNewsArticles.filter(article => 
  article.title.toLowerCase().includes(query.toLowerCase()) || 
  article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
  article.content.toLowerCase().includes(query.toLowerCase())
);
export const getUsers = () => mockUsers;
export const getCategories = () => mockCategories;
export const getVideos = () => mockVideos;
export const getDraftNews = () => mockNewsArticles.filter(article => article.status === 'draft');
export const getEmergencyNews = () => mockNewsArticles.filter(article => article.emergency);
export const getTodaysHeadlines = () => {
  const today = new Date().toDateString();
  return mockNewsArticles.filter(article => new Date(article.publishedAt).toDateString() === today).slice(0, 5);
};