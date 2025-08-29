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
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {nationalNews.slice(1).map((news) => (
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

export default National;