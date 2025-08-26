import { Clock, Eye, User } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const National = () => {
  const nationalNews = [
    {
      id: 1,
      title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা",
      excerpt: "দেশের অর্থনৈতিক উন্নয়নে নতুন দিগন্ত উন্মোচন করবে এই পরিকল্পনা। বিশেষজ্ঞরা এটিকে যুগান্তকারী বলে মনে করছেন।",
      image: "/src/assets/economy-news.jpg",
      category: "জাতীয়",
      time: "২ ঘন্টা আগে",
      views: 15420,
      author: "আবুল কালাম"
    },
    {
      id: 2,
      title: "শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ",
      excerpt: "প্রাথমিক থেকে উচ্চশিক্ষা পর্যন্ত নতুন কারিকুলাম প্রণয়ন করা হবে। দক্ষতা ভিত্তিক শিক্ষার উপর গুরুত্ব দেওয়া হচ্ছে।",
      image: "/src/assets/education-news.jpg",
      category: "জাতীয়",
      time: "৩ ঘন্টা আগে",
      views: 12850,
      author: "ফারিহা খান"
    },
    {
      id: 3,
      title: "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
      excerpt: "দেশের সকল হাসপাতালে ডিজিটাল স্বাস্থ্যসেবা চালু করা হবে। টেলিমেডিসিন সেবা সারাদেশে পৌঁছে যাবে।",
      image: "/src/assets/health-news.jpg",
      category: "জাতীয়",
      time: "৪ ঘন্টা আগে",
      views: 9630,
      author: "ডা. রহিম উদ্দিন"
    },
    {
      id: 4,
      title: "কৃষি খাতে নতুন প্রযুক্তি ব্যবহার",
      excerpt: "আধুনিক কৃষি যন্ত্রপাতি ও জৈবিক সার ব্যবহারে কৃষকদের উৎসাহিত করা হচ্ছে।",
      image: "/src/assets/culture-news.jpg",
      category: "জাতীয়",
      time: "৫ ঘন্টা আগে",
      views: 7220,
      author: "কামাল উদ্দিন"
    },
    {
      id: 5,
      title: "পরিবহন ব্যবস্থায় আধুনিকায়ন",
      excerpt: "ঢাকা-চট্টগ্রাম হাইওয়েতে নতুন ফ্লাইওভার নির্মাণ শুরু হয়েছে।",
      image: "/src/assets/tech-news.jpg",
      category: "জাতীয়",
      time: "৬ ঘন্টা আগে",
      views: 5840,
      author: "সালমা আক্তার"
    },
    {
      id: 6,
      title: "পরিবেশ সংরক্ষণে নতুন নীতিমালা",
      excerpt: "বৃক্ষ নিধন রোধ ও নবায়নযোগ্য শক্তির ব্যবহার বৃদ্ধির পরিকল্পনা।",
      image: "/src/assets/sports-news.jpg",
      category: "জাতীয়",
      time: "৭ ঘন্টা আগে",
      views: 4330,
      author: "রাশিদুল হাসান"
    }
  ];

  const trendingNews = [
    "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা",
    "শিক্ষা ব্যবস্থায় আমূল সংস্কার",
    "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
    "কৃষি খাতে প্রযুক্তির ব্যবহার",
    "পরিবহন ব্যবস্থার আধুনিকায়ন"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">জাতীয় সংবাদ</h1>
          <p className="text-primary-foreground/80">দেশের সর্বশেষ জাতীয় সংবাদ ও ঘটনাবলী</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">বিশেষ প্রতিবেদন</h2>
              <NewsCard
                title={nationalNews[0].title}
                excerpt={nationalNews[0].excerpt}
                image={nationalNews[0].image}
                category={nationalNews[0].category}
                time={nationalNews[0].time}
                views={nationalNews[0].views}
                featured={true}
              />
            </section>

            {/* News Grid */}
            <section>
              <h2 className="news-headline mb-6 text-primary">সর্বশেষ জাতীয় সংবাদ</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {nationalNews.slice(1).map((news) => (
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
    </div>
  );
};

export default National;