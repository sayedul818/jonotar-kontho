import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

const Politics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("সব");

  const filters = ["সব", "সংসদ", "নির্বাচন", "দলীয় রাজনীতি", "সরকারি নীতি"];

  const politicsNews = [
    {
      id: 1,
      title: "জাতীয় সংসদে বাজেট অধিবেশন শুরু আগামী সপ্তাহ থেকে",
      excerpt: "আগামী অর্থবছরের বাজেট নিয়ে আলোচনা হবে পার্লামেন্টে।",
      image: "/src/assets/economy-news.jpg",
      category: "সংসদ",
      author: "রাজনৈতিক সংবাদদাতা",
      time: "২ ঘন্টা আগে",
      isFeatured: true
    },
    {
      id: 2,
      title: "বিরোধী দলের নতুন কর্মসূচি ঘোষণা",
      excerpt: "আগামী মাসে দেশব্যাপী শান্তিপূর্ণ বিক্ষোভের কর্মসূচি।",
      image: "/src/assets/culture-news.jpg",
      category: "দলীয় রাজনীতি",
      author: "সিয়াম আহমেদ",
      time: "৩ ঘন্টা আগে"
    },
    {
      id: 3,
      title: "নির্বাচন কমিশনের নতুন নির্দেশনা জারি",
      excerpt: "আগামী স্থানীয় সরকার নির্বাচনে নতুন নিয়মকানুন।",
      image: "/src/assets/education-news.jpg", 
      category: "নির্বাচন",
      author: "নির্বাচনী প্রতিবেদক",
      time: "৪ ঘন্টা আগে"
    },
    {
      id: 4,
      title: "কৃষি ভর্তুকি নীতিতে নতুন সংযোজন",
      excerpt: "ছোট কৃষকদের জন্য বিশেষ ভর্তুকি প্যাকেজ ঘোষণা।",
      image: "/src/assets/sports-news.jpg",
      category: "সরকারি নীতি", 
      author: "নীতি বিশ্লেষক",
      time: "৫ ঘন্টা আগে"
    },
    {
      id: 5,
      title: "সংসদীয় কমিটির গুরুত্বপূর্ণ সুপারিশ",
      excerpt: "শিক্ষা মন্ত্রণালয়ের কার্যক্রম নিয়ে কমিটির প্রতিবেদন।",
      image: "/src/assets/health-news.jpg",
      category: "সংসদ",
      author: "সংসদীয় প্রতিবেদক", 
      time: "৬ ঘন্টা আগে"
    },
    {
      id: 6,
      title: "রাজনৈতিক দলগুলোর জোট গঠনের নতুন উদ্যোগ",
      excerpt: "আগামী নির্বাচন সামনে রেখে ছোট দলগুলোর জোট।",
      image: "/src/assets/tech-news.jpg",
      category: "দলীয় রাজনীতি",
      author: "জোট বিশ্লেষক",
      time: "৮ ঘন্টা আগে"
    }
  ];

  const filteredNews = politicsNews.filter(news => 
    (selectedFilter === "সব" || news.category === selectedFilter) &&
    (searchTerm === "" || news.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredNews = filteredNews.find(news => news.isFeatured);
  const regularNews = filteredNews.filter(news => !news.isFeatured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bn-text">
            রাজনীতি
          </h1>
          <p className="text-muted-foreground bn-text">
            বাংলাদেশের রাজনৈতিক পরিস্থিতি ও সাম্প্রতিক ঘটনাবলী
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="রাজনৈতিক সংবাদ খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bn-text"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              ফিল্টার
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={`cursor-pointer transition-colors bn-text ${
                  selectedFilter === filter 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredNews && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary bn-text">প্রধান সংবাদ</h2>
            <NewsCard {...featuredNews} featured={true} />
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary bn-text">
            সর্বশেষ রাজনৈতিক সংবাদ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="bn-text">
            আরও দেখুন
          </Button>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Politics;