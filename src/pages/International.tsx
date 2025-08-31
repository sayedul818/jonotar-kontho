import { Clock, Eye, User, Globe } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";

const International = () => {
  const internationalNews = [
    {
      id: 1,
      title: "Climate Summit Reaches Historic Agreement",
      excerpt: "World leaders agree on ambitious targets for carbon reduction and renewable energy transition in the coming decade.",
      image: "/src/assets/tech-news.jpg",
      category: "Environment",
      country: "Global",
      time: "1 hour ago",
      views: 25640,
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Asian Markets Show Strong Recovery",
      excerpt: "Stock markets across Asia demonstrate resilience amid global economic uncertainties and trade developments.",
      image: "/src/assets/economy-news.jpg",
      category: "Economy",
      country: "Asia",
      time: "2 hours ago",
      views: 18750,
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "Peace Talks Show Promising Progress",
      excerpt: "International mediators report significant breakthrough in ongoing diplomatic efforts.",
      image: "/src/assets/culture-news.jpg",
      category: "Politics",
      country: "Middle East",
      time: "3 hours ago",
      views: 15420,
      author: "Ahmed Hassan"
    },
    {
      id: 4,
      title: "Revolutionary Medical Breakthrough",
      excerpt: "Scientists announce major advancement in treatment options for rare diseases.",
      image: "/src/assets/health-news.jpg",
      category: "Health",
      country: "Europe",
      time: "4 hours ago",
      views: 12890,
      author: "Dr. Elena Rodriguez"
    },
    {
      id: 5,
      title: "Space Mission Achieves New Milestone",
      excerpt: "International space station receives new research equipment for groundbreaking experiments.",
      image: "/src/assets/sports-news.jpg",
      category: "Science",
      country: "USA",
      time: "5 hours ago",
      views: 11630,
      author: "James Wilson"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-2">
            <Globe className="h-8 w-8" />
            <h1 className="text-4xl font-bold">International News</h1>
          </div>
          <p className="text-primary-foreground/80">Latest global news and international developments</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">Breaking International</h2>
              <NewsCard
                title={internationalNews[0].title}
                excerpt={internationalNews[0].excerpt}
                image={internationalNews[0].image}
                category={internationalNews[0].category}
                time={internationalNews[0].time}
                views={internationalNews[0].views}
                featured={true}
              />
            </section>

            {/* News Grid */}
            <section>
              <h2 className="news-headline mb-6 text-primary">Global Updates</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {internationalNews.slice(1).map((news) => (
                  <div key={news.id} className="border border-border rounded-lg p-4 hover-lift">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex space-x-2 mb-2">
                      <Badge variant="secondary">{news.category}</Badge>
                      <Badge variant="outline">{news.country}</Badge>
                    </div>
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
                          <span>{news.time}</span>
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

export default International;