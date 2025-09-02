import { Clock, Eye, User } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { useGetNewsByCategoryQuery } from "@/store/api/newsApi";

const National = () => {
  const { data: newsResponse, isLoading, error } = useGetNewsByCategoryQuery({
    category: 'national',
    page: 1,
    limit: 10
  });

  const nationalNews = newsResponse?.articles || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading national news</div>;

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
                জাতীয়
              </h1>
              {nationalNews.length > 0 && (
                <NewsCard
                  title={nationalNews[0].title}
                  excerpt={nationalNews[0].excerpt}
                  image={nationalNews[0].imageUrl || "/src/assets/economy-news.jpg"}
                  category={nationalNews[0].category}
                  time={new Date(nationalNews[0].publishedAt).toLocaleString('bn-BD')}
                  views={nationalNews[0].views}
                  featured={true}
                />
              )}
            </section>

            {/* News Grid */}
            <section>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {nationalNews.slice(1).map((news) => (
                  <NewsCard
                    key={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.imageUrl || "/src/assets/economy-news.jpg"}
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
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default National;