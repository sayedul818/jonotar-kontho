import { Clock, Eye, User, Star, Film } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { useGetNewsByCategoryQuery } from "@/store/api/newsApi";

const Entertainment = () => {
  const { data: newsResponse, isLoading, error } = useGetNewsByCategoryQuery({
    category: 'entertainment',
    page: 1,
    limit: 10
  });

  const entertainmentNews = newsResponse?.articles || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading entertainment news</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-2">
            <Star className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Entertainment News</h1>
          </div>
          <p className="text-primary-foreground/80">Latest updates from movies, TV, music, and celebrity world</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">Entertainment Spotlight</h2>
              {entertainmentNews.length > 0 && (
                <NewsCard
                  title={entertainmentNews[0].title}
                  excerpt={entertainmentNews[0].excerpt}
                  image={entertainmentNews[0].imageUrl || "/src/assets/culture-news.jpg"}
                  category={entertainmentNews[0].category}
                  time={new Date(entertainmentNews[0].publishedAt).toLocaleString('bn-BD')}
                  views={entertainmentNews[0].views}
                  featured={true}
                />
              )}
            </section>

            {/* News Grid */}
            <section>
              <h2 className="news-headline mb-6 text-primary">Latest Entertainment News</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {entertainmentNews.slice(1).map((news) => (
                  <div key={news.id} className="border border-border rounded-lg p-4 hover-lift">
                    <img 
                      src={news.imageUrl || "/src/assets/culture-news.jpg"} 
                      alt={news.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <Badge variant="secondary" className="mb-2">
                      {news.category}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{new Date(news.publishedAt).toLocaleString('bn-BD')}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{news.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
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

export default Entertainment;