import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useGetNewsByCategoryQuery } from "@/store/api/newsApi";

const Politics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("সব");

  const { data: newsResponse, isLoading, error } = useGetNewsByCategoryQuery({
    category: 'politics',
    page: 1,
    limit: 10
  });

  const filters = ["সব", "সংসদ", "নির্বাচন", "দলীয় রাজনীতি", "সরকারি নীতি"];
  const politicsNews = newsResponse?.articles || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading politics news</div>;

  const filteredNews = politicsNews.filter(news => 
    (selectedFilter === "সব" || news.category === selectedFilter) &&
    (searchTerm === "" || news.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredNews = filteredNews.find(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

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
            <NewsCard 
              title={featuredNews.title}
              excerpt={featuredNews.excerpt}
              image={featuredNews.imageUrl || "/src/assets/economy-news.jpg"}
              category={featuredNews.category}
              time={new Date(featuredNews.publishedAt).toLocaleString('bn-BD')}
              views={featuredNews.views}
              featured={true} 
            />
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary bn-text">
            সর্বশেষ রাজনৈতিক সংবাদ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <NewsCard 
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.imageUrl || "/src/assets/economy-news.jpg"}
                category={article.category}
                time={new Date(article.publishedAt).toLocaleString('bn-BD')}
                views={article.views}
              />
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