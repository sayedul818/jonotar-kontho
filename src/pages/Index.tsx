import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import HeroSlider from "@/components/HeroSlider";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { getAllNews, getFeaturedNews } from "@/data/mockData";

// Import images
import economyImage from "@/assets/economy-news.jpg";
import educationImage from "@/assets/education-news.jpg";
import sportsImage from "@/assets/sports-news.jpg";
import techImage from "@/assets/tech-news.jpg";
import healthImage from "@/assets/health-news.jpg";
import cultureImage from "@/assets/culture-news.jpg";

const Index = () => {
  const latestNews = getAllNews();
  const featuredNews = getFeaturedNews();

  const categoryNews = {
    national: latestNews.filter(news => news.category === 'national').slice(0, 4),
    international: latestNews.filter(news => news.category === 'international').slice(0, 4),
    sports: latestNews.filter(news => news.category === 'sports').slice(0, 4),
    entertainment: latestNews.filter(news => news.category === 'entertainment').slice(0, 4)
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingNews />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <section className="animate-in fade-in duration-500">
              <HeroSlider />
            </section>

            {/* Latest News */}
            <section className="animate-in slide-in-from-bottom-4 duration-300">
              <h2 className="news-headline mb-6 text-primary">সর্বশেষ সংবাদ</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 items-start ">
                {latestNews.map((news, index) => (
                  <NewsCard
                    key={index}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.imageUrl || economyImage}
                    category={news.category}
                    time={new Date(news.publishedAt).toLocaleString('bn-BD')}
                    views={news.views}
                    featured={news.featured}
                  />
                ))}
              </div>
            </section>

            {/* Category Tabs */}
            <section className="animate-in slide-in-from-bottom-4 duration-300 delay-150">
              <Tabs defaultValue="national" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="national">জাতীয়</TabsTrigger>
                  <TabsTrigger value="international">আন্তর্জাতিক</TabsTrigger>
                  <TabsTrigger value="sports">খেলাধুলা</TabsTrigger>
                  <TabsTrigger value="entertainment">বিনোদন</TabsTrigger>
                </TabsList>
                
                {Object.entries(categoryNews).map(([category, news]) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {news.map((article, index) => (
                        <NewsCard
                          key={index}
                          title={article.title}
                          excerpt={article.excerpt}
                          image={article.imageUrl || economyImage}
                          category={article.category}
                          time={new Date(article.publishedAt).toLocaleString('bn-BD')}
                          views={article.views}
                        />
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Index;
