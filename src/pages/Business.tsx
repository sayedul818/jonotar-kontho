import { Clock, Eye, User, TrendingUp, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { getNewsByCategory } from "@/data/mockData";

const Business = () => {
  const businessNews = getNewsByCategory('business');

  const stockData = [
    { symbol: "AAPL", price: "$150.25", change: "+2.5%" },
    { symbol: "GOOGL", price: "$125.80", change: "+1.8%" },
    { symbol: "MSFT", price: "$285.60", change: "-0.3%" },
    { symbol: "TSLA", price: "$180.45", change: "+4.2%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-2">
            <TrendingUp className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Business News</h1>
          </div>
          <p className="text-primary-foreground/80">Latest business developments, market trends, and economic insights</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Market Overview */}
            <section className="mb-8">
              <h2 className="news-headline mb-4 text-primary">Market Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stockData.map((stock) => (
                  <Card key={stock.symbol} className="hover-lift">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-bold text-lg">{stock.symbol}</h3>
                      <p className="text-2xl font-bold text-primary">{stock.price}</p>
                      <p className={`text-sm ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.change}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Featured Story */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">Featured Business Story</h2>
              {businessNews.length > 0 && (
                <NewsCard
                  title={businessNews[0].title}
                  excerpt={businessNews[0].excerpt}
                  image={businessNews[0].imageUrl || "/src/assets/tech-news.jpg"}
                  category={businessNews[0].category}
                  time={new Date(businessNews[0].publishedAt).toLocaleString('bn-BD')}
                  views={businessNews[0].views}
                  featured={true}
                />
              )}
            </section>

            {/* News Grid */}
            <section>
              <h2 className="news-headline mb-6 text-primary">Latest Business News</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {businessNews.slice(1).map((news) => (
                  <div key={news.id} className="border border-border rounded-lg p-4 hover-lift">
                    <img 
                      src={news.imageUrl || "/src/assets/tech-news.jpg"} 
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

export default Business;