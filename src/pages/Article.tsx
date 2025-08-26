import { Clock, Eye, User, Share2, Facebook, Twitter, MessageCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Article = () => {
  const { id } = useParams();

  // Mock article data - in real app, fetch based on id
  const article = {
    id: 1,
    title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা দেশের অর্থনৈতিক ভবিষ্যৎ পরিবর্তন করবে",
    subtitle: "সরকারের এই উদ্যোগ দেশের অর্থনৈতিক কাঠামোতে এক নতুন মাত্রা যোগ করবে",
    author: "আবুল কালাম",
    publishDate: "২৬ ডিসেম্বর, ২০২৪",
    views: 25420,
    category: "জাতীয়",
    featuredImage: "/src/assets/economy-news.jpg",
    content: `
      <p>প্রধানমন্ত্রী শেখ হাসিনা আজ এক গুরুত্বপূর্ণ ঘোষণায় দেশের অর্থনৈতিক উন্নয়নের জন্য একটি নতুন পরিকল্পনা উপস্থাপন করেছেন। এই পরিকল্পনায় রয়েছে বিভিন্ন খাতে ব্যাপক বিনিয়োগ এবং কর্মসংস্থান সৃষ্টির বিশাল সুযোগ।</p>

      <h2>মূল বৈশিষ্ট্যসমূহ</h2>
      <p>এই উন্নয়ন পরিকল্পনার মূল বৈশিষ্ট্যগুলোর মধ্যে রয়েছে:</p>
      
      <ul>
        <li>তথ্য প্রযুক্তি খাতে ৫০০ কোটি টাকার বিনিয়োগ</li>
        <li>কৃষি ক্ষেত্রে আধুনিকায়নের জন্য বিশেষ অনুদান</li>
        <li>শিক্ষা ব্যবস্থায় ডিজিটাল রূপান্তর</li>
        <li>স্বাস্থ্যসেবায় মানোন্নয়নের নতুন উদ্যোগ</li>
      </ul>

      <p>প্রধানমন্ত্রী তাঁর ভাষণে বলেন, "এই পরিকল্পনা বাস্তবায়নের মাধ্যমে আমরা ২০৩০ সালের মধ্যে একটি মধ্যম আয়ের দেশে রূপান্তরিত হব।"</p>

      <h2>অর্থনৈতিক প্রভাব</h2>
      <p>অর্থনীতিবিদরা মনে করছেন, এই পরিকল্পনা বাস্তবায়িত হলে দেশের জিডিপি প্রবৃদ্ধির হার উল্লেখযোগ্যভাবে বৃদ্ধি পাবে। একইসাথে কর্মসংস্থানের নতুন সুযোগ সৃষ্টি হবে।</p>

      <p>ঢাকা বিশ্ববিদ্যালয়ের অর্থনীতি বিভাগের অধ্যাপক ড. রহিম উদ্দিন বলেন, "এটি একটি সময়োপযোগী পরিকল্পনা যা দেশের দীর্ঘমেয়াদী উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে।"</p>

      <h2>বাস্তবায়ন কৌশল</h2>
      <p>এই পরিকল্পনা বাস্তবায়নের জন্য সরকার একটি বিশেষ কমিটি গঠন করেছে। এই কমিটির নেতৃত্বে থাকবেন পরিকল্পনা মন্ত্রী। প্রতিটি মন্ত্রণালয় থেকে প্রতিনিধি নিয়ে এই কমিটি গঠিত হবে।</p>

      <p>আগামী তিন মাসের মধ্যে এই পরিকল্পনার বিস্তারিত রূপরেখা প্রকাশ করা হবে। এরপর পর্যায়ক্রমে বিভিন্ন প্রকল্প শুরু হবে।</p>
    `
  };

  const relatedArticles = [
    {
      title: "শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ",
      excerpt: "প্রাথমিক থেকে উচ্চশিক্ষা পর্যন্ত নতুন কারিকুলাম প্রণয়ন।",
      image: "/src/assets/education-news.jpg",
      category: "জাতীয়",
      time: "৩ ঘন্টা আগে"
    },
    {
      title: "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
      excerpt: "দেশের সকল হাসপাতালে ডিজিটাল স্বাস্থ্যসেবা চালু।",
      image: "/src/assets/health-news.jpg",
      category: "জাতীয়",
      time: "৪ ঘন্টা আগে"
    },
    {
      title: "কৃষি খাতে নতুন প্রযুক্তি ব্যবহার",
      excerpt: "আধুনিক কৃষি যন্ত্রপাতি ও জৈবিক সার ব্যবহার।",
      image: "/src/assets/culture-news.jpg",
      category: "জাতীয়",
      time: "৫ ঘন্টা আগে"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {/* Article Header */}
              <header className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
                
                <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                  {article.title}
                </h1>
                
                {article.subtitle && (
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    {article.subtitle}
                  </p>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  
                  {/* Social Share */}
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Separator className="mb-6" />
              </header>
              
              {/* Featured Image */}
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              
              {/* Article Content */}
              <div 
                className="text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Social Share Bottom */}
              <div className="border-t border-border pt-6 mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">এই নিবন্ধটি শেয়ার করুন:</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4 mr-1" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-1" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="news-headline mb-6 text-primary">সংশ্লিষ্ট সংবাদ</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((news, index) => (
                  <NewsCard
                    key={index}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    category={news.category}
                    time={news.time}
                  />
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;