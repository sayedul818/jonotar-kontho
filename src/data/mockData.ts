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

export const mockNewsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা দেশের অর্থনৈতিক ভবিষ্যৎ পরিবর্তন করবে",
    excerpt: "সরকারের এই উদ্যোগ দেশের অর্থনৈতিক কাঠামোতে এক নতুন মাত্রা যোগ করবে বলে মনে করছেন বিশেষজ্ঞরা",
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
  {
    id: "4",
    title: "আন্তর্জাতিক ক্রিকেট টুর্নামেন্টে বাংলাদেশের জয়",
    excerpt: "টি-২০ সিরিজে বাংলাদেশ দল অসাধারণ পারফরমেন্স দেখিয়েছে",
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
    title: "কৃত্রিম বুদ্ধিমত্তার ব্যবহারে এগিয়ে বাংলাদেশ",
    excerpt: "তথ্য প্রযুক্তি খাতে AI এর ব্যবহার বৃদ্ধি পাচ্ছে",
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
    id: "6",
    title: "আন্তর্জাতিক সম্মেলনে বাংলাদেশের অংশগ্রহণ",
    excerpt: "জলবায়ু পরিবর্তন বিষয়ক আন্তর্জাতিক সম্মেলনে গুরুত্বপূর্ণ ভূমিকা",
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
    id: "7",
    title: "বিনোদন জগতে নতুন চলচ্চিত্রের মুক্তি",
    excerpt: "জাতীয় পুরস্কার প্রাপ্ত নির্দেশকের নতুন সিনেমা মুক্তি পেয়েছে",
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
    id: "8",
    title: "ব্যবসা-বাণিজ্যে নতুন সুযোগ সৃষ্টি",
    excerpt: "রপ্তানি বাণিজ্যে নতুন বাজার উন্মোচনের পরিকল্পনা",
    content: "বিস্তারিত সংবাদ এখানে থাকবে...",
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
  }
];

export const mockBreakingNews = [
  "প্রধানমন্ত্রী আজ জাতির উদ্দেশে ভাষণ দেবেন",
  "দেশে নতুন করোনা ভ্যারিয়েন্টের অস্তিত্ব পাওয়া যায়নি",
  "বিশ্বকাপ ক্রিকেটে বাংলাদেশ দল চূড়ান্ত তালিকা ঘোষণা"
];

export const getFeaturedNews = () => mockNewsArticles.filter(article => article.featured);
export const getBreakingNews = () => mockBreakingNews;
export const getNewsByCategory = (category: string) => mockNewsArticles.filter(article => article.category === category);
export const getNewsById = (id: string) => mockNewsArticles.find(article => article.id === id);
export const getAllNews = () => mockNewsArticles;