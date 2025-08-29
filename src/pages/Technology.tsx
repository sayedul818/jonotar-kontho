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
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {techNews.slice(1).map((news) => (
                  <NewsCard
                    key={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    category={news.category}
                    time={news.time}
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