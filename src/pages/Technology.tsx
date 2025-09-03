import { Clock, Eye, User, Cpu, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNewsByCategory } from "@/data/mockData";

const Technology = () => {
  const techNews = getNewsByCategory('technology');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <section className="mb-8">
              <h1 className="text-2xl font-bold mb-6 text-foreground bn-text border-b border-primary pb-2">
                প্রযুক্তি
              </h1>
              {techNews.length > 0 && (
                <NewsCard
                  title={techNews[0].title}
                  excerpt={techNews[0].excerpt}
                  image={techNews[0].imageUrl || "/src/assets/tech-news.jpg"}
                  category={techNews[0].category}
                  time={new Date(techNews[0].publishedAt).toLocaleString('bn-BD')}
                  views={techNews[0].views}
                  featured={true}
                />
              )}
            </section>

            {/* News Grid */}
            <section>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {techNews.slice(1).map((news) => (
                  <NewsCard
                    key={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.imageUrl || "/src/assets/tech-news.jpg"}
                    category={news.category}
                    time={new Date(news.publishedAt).toLocaleString('bn-BD')}
                    views={news.views}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" className="bn-text">
                  আরো সংবাদ লোড করুন
                </Button>
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

export default Technology;