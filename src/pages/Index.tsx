import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import HeroSlider from "@/components/HeroSlider";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import images
import economyImage from "@/assets/economy-news.jpg";
import educationImage from "@/assets/education-news.jpg";
import sportsImage from "@/assets/sports-news.jpg";
import techImage from "@/assets/tech-news.jpg";
import healthImage from "@/assets/health-news.jpg";
import cultureImage from "@/assets/culture-news.jpg";

const Index = () => {
  const latestNews = [
    {
      title: "দেশের অর্থনৈতিক উন্নয়নে নতুন মাইলফলক অর্জন",
      excerpt: "এই বছর দেশের জিডিপি প্রবৃদ্ধি আগের বছরের তুলনায় উল্লেখযোগ্য বৃদ্ধি পেয়েছে। বিভিন্ন খাতে উৎপাদনশীলতা বৃদ্ধি এবং রপ্তানি আয় বৃদ্ধির ফলে এই অগ্রগতি সম্ভব হয়েছে।",
      image: economyImage,
      category: "অর্থনীতি",
      time: "২ ঘন্টা আগে",
      views: 15420,
      featured: true
    },
    {
      title: "শিক্ষা ক্ষেত্রে ডিজিটাল বিপ্লব: নতুন প্রযুক্তির ব্যবহার",
      excerpt: "দেশের শিক্ষা ব্যবস্থায় আধুনিক প্রযুক্তির ব্যবহার শুরু হয়েছে। অনলাইন ক্লাস, ডিজিটাল বোর্ড এবং ইন্টারঅ্যাক্টিভ শিক্ষা পদ্ধতি চালু করা হয়েছে।",
      image: educationImage,
      category: "শিক্ষা",
      time: "৩ ঘন্টা আগে",
      views: 12350
    },
    {
      title: "খেলাধুলায় বাংলাদেশের নতুন সাফল্য আন্তর্জাতিক পর্যায়ে",
      excerpt: "আন্তর্জাতিক টুর্নামেন্টে বাংলাদেশি খেলোয়াড়দের অসাধারণ পারফরমেন্স দেশের মর্যাদা বৃদ্ধি করেছে।",
      image: sportsImage,
      category: "খেলাধুলা",
      time: "৪ ঘন্টা আগে",
      views: 9876
    },
    {
      title: "তথ্যপ্রযুক্তি খাতে নতুন স্টার্টআপ কোম্পানি",
      excerpt: "দেশীয় প্রযুক্তি উদ্যোক্তারা নতুন নতুন সমাধান নিয়ে এগিয়ে আসছেন। কৃত্রিম বুদ্ধিমত্তা এবং মোবাইল অ্যাপ্লিকেশনে বিশেষ অগ্রগতি।",
      image: techImage,
      category: "প্রযুক্তি",
      time: "৫ ঘন্টা আগে",
      views: 8543
    },
    {
      title: "স্বাস্থ্যসেবায় আধুনিকায়ন ও নতুন চিকিৎসা সুবিধা",
      excerpt: "দেশের হাসপাতালগুলোতে আধুনিক যন্ত্রপাতি ও চিকিৎসা পদ্ধতি চালু করা হচ্ছে। বিশেষায়িত চিকিৎসা সেবা সম্প্রসারণ।",
      image: healthImage,
      category: "স্বাস্থ্য",
      time: "৬ ঘন্টা আগে",
      views: 7234
    },
    {
      title: "সাংস্কৃতিক ঐতিহ্য সংরক্ষণে সরকারি উদ্যোগ",
      excerpt: "দেশের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য রক্ষা ও প্রসারে নতুন প্রকল্প হাতে নেওয়া হয়েছে। ঐতিহ্যবাহী শিল্পকলার উন্নয়ন।",
      image: cultureImage,
      category: "সংস্কৃতি",
      time: "৭ ঘন্টা আগে",
      views: 6543
    }
  ];

  const categoryNews = {
    national: latestNews.slice(0, 4),
    international: latestNews.slice(1, 5),
    sports: latestNews.slice(2, 6),
    entertainment: latestNews.slice(0, 4)
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestNews.map((news, index) => (
                  <NewsCard
                    key={index}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    category={news.category}
                    time={news.time}
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
                          image={article.image}
                          category={article.category}
                          time={article.time}
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
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">প্রথমা আই</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                বাংলাদেশের অগ্রণী অনলাইন সংবাদ মাধ্যম। সত্য ও নিরপেক্ষ সংবাদ পরিবেশনে আমরা প্রতিজ্ঞাবদ্ধ।
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">বিভাগসমূহ</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">জাতীয়</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">আন্তর্জাতিক</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">খেলাধুলা</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">বিনোদন</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">আমাদের সম্পর্কে</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">যোগাযোগ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">গোপনীয়তা নীতি</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">ব্যবহারের শর্তাবলী</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">যোগাযোগ</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>ইমেইল: info@prothomaai.com</p>
                <p>ফোন: +৮৮০-২-৯৮৭৬৫৪৩</p>
                <p>ঠিকানা: ঢাকা, বাংলাদেশ</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; ২০২৪ প্রথমা আই। সকল অধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
