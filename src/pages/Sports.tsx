import { Clock, Eye, User, Trophy, Target } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useGetNewsByCategoryQuery } from "@/store/api/newsApi";

const Sports = () => {
  const { data: newsResponse, isLoading, error } = useGetNewsByCategoryQuery({
    category: 'sports',
    page: 1,
    limit: 10
  });

  const sportsNews = newsResponse?.articles || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading sports news</div>;

  const liveScores = [
    { team1: "Bangladesh", team2: "Australia", score: "245/6 vs 180/8", status: "Live" },
    { team1: "Man City", team2: "Arsenal", score: "2-1", status: "FT" },
    { team1: "Lakers", team2: "Warriors", score: "108-95", status: "Q3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-2">
            <Trophy className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Sports News</h1>
          </div>
          <p className="text-primary-foreground/80">Latest sports updates, match results, and athletic achievements</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Live Scores */}
            <section className="mb-8">
              <h2 className="news-headline mb-4 text-primary flex items-center space-x-2">
                <Target className="h-6 w-6" />
                <span>Live Scores</span>
              </h2>
              <div className="grid gap-4 mb-6">
                {liveScores.map((match, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold">{match.team1} vs {match.team2}</span>
                          <Badge variant={match.status === "Live" ? "destructive" : "secondary"}>
                            {match.status}
                          </Badge>
                        </div>
                        <span className="text-lg font-bold text-primary">{match.score}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Featured Story */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">Highlight of the Day</h2>
              {sportsNews.length > 0 && (
                <NewsCard
                  title={sportsNews[0].title}
                  excerpt={sportsNews[0].excerpt}
                  image={sportsNews[0].imageUrl || "/src/assets/sports-news.jpg"}
                  category={sportsNews[0].category}
                  time={new Date(sportsNews[0].publishedAt).toLocaleString('bn-BD')}
                  views={sportsNews[0].views}
                  featured={true}
                />
              )}
            </section>

            {/* News Grid */}
            <section>
              <h2 className="news-headline mb-6 text-primary">Latest Sports News</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {sportsNews.slice(1).map((news) => (
                  <div key={news.id} className="border border-border rounded-lg p-4 hover-lift">
                    <img 
                      src={news.imageUrl || "/src/assets/sports-news.jpg"} 
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
                      বিস্তারিত পড়ুন
                    </Button>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm">পূর্ববর্তী</Button>
                <Button variant="default" size="sm">১</Button>
                <Button variant="outline" size="sm">২</Button>
                <Button variant="outline" size="sm">৩</Button>
                <Button variant="outline" size="sm">পরবর্তী</Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sports;