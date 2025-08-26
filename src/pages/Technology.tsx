import { Clock, Eye, User, Cpu, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Technology = () => {
  const techNews = [
    {
      id: 1,
      title: "Revolutionary AI Breakthrough Changes Industry Standards",
      excerpt: "Latest artificial intelligence advancement promises to transform how businesses operate across multiple sectors worldwide.",
      image: "/src/assets/tech-news.jpg",
      category: "Artificial Intelligence",
      time: "30 minutes ago",
      views: 38750,
      author: "Dr. Jennifer Lee"
    },
    {
      id: 2,
      title: "Next-Generation Smartphone Features Unveiled",
      excerpt: "Major tech company reveals groundbreaking mobile technology with enhanced security and unprecedented performance capabilities.",
      image: "/src/assets/culture-news.jpg",
      category: "Mobile Technology",
      time: "1 hour ago",
      views: 29340,
      author: "Mark Thompson"
    },
    {
      id: 3,
      title: "Quantum Computing Reaches New Milestone",
      excerpt: "Researchers achieve significant breakthrough in quantum processing power, bringing practical applications closer to reality.",
      image: "/src/assets/economy-news.jpg",
      category: "Quantum Computing",
      time: "2 hours ago",
      views: 21650,
      author: "Dr. Rajesh Kumar"
    },
    {
      id: 4,
      title: "Cybersecurity Threats Evolve with New Defenses",
      excerpt: "Security experts develop innovative protection methods against emerging digital threats and cyber attacks.",
      image: "/src/assets/health-news.jpg",
      category: "Cybersecurity",
      time: "3 hours ago",
      views: 18920,
      author: "Lisa Wang"
    },
    {
      id: 5,
      title: "Green Technology Solutions for Climate Change",
      excerpt: "Innovative sustainable technologies offer promising solutions for environmental challenges and carbon reduction.",
      image: "/src/assets/sports-news.jpg",
      category: "Green Tech",
      time: "4 hours ago",
      views: 16430,
      author: "Michael Green"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-2">
            <Cpu className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Technology News</h1>
          </div>
          <p className="text-primary-foreground/80">Latest developments in technology, innovation, and digital transformation</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">Tech Innovation Focus</h2>
              <NewsCard
                title={techNews[0].title}
                excerpt={techNews[0].excerpt}
                image={techNews[0].image}
                category={techNews[0].category}
                time={techNews[0].time}
                views={techNews[0].views}
                featured={true}
              />
            </section>

            {/* News Grid */}
            <section>
              <h2 className="news-headline mb-6 text-primary">Latest Technology News</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {techNews.slice(1).map((news) => (
                  <div key={news.id} className="border border-border rounded-lg p-4 hover-lift">
                    <img 
                      src={news.image} 
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
    </div>
  );
};

export default Technology;