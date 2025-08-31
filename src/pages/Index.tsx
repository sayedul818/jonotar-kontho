import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import HeroSlider from "@/components/HeroSlider";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/footer";

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
      views: 12350,
      featured: true

    },
    {
      title: "খেলাধুলায় বাংলাদেশের নতুন সাফল্য আন্তর্জাতিক পর্যায়ে",
      excerpt: "আন্তর্জাতিক টুর্নামেন্টে বাংলাদেশি খেলোয়াড়দের অসাধারণ পারফরমেন্স দেশের মর্যাদা বৃদ্ধি করেছে।",
      image: sportsImage,
      category: "খেলাধুলা",
      time: "৪ ঘন্টা আগে",
      views: 9876,
      featured: true

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
    },
      {
    title: "বাংলাদেশে নতুন কৃষি প্রযুক্তি উদ্ভাবন",
    excerpt: "কৃষি খাতে নতুন প্রযুক্তি ব্যবহার করে উৎপাদন বাড়ানো হচ্ছে। কৃষকরা স্মার্ট সেচ ও ড্রোন প্রযুক্তি ব্যবহার করছেন।",
    image: techImage,
    category: "প্রযুক্তি",
    time: "৬ ঘন্টা আগে",
    views: 6421
  },
  {
    title: "স্বাস্থ্যসেবায় টেলিমেডিসিনের প্রসার",
    excerpt: "গ্রামীণ এলাকায় টেলিমেডিসিন সেবা চালু হয়েছে। ডাক্তার এবং রোগীর মধ্যে দূরবর্তী পরামর্শ সহজ হয়েছে।",
    image: healthImage,
    category: "স্বাস্থ্য",
    time: "৭ ঘন্টা আগে",
    views: 3890
  },
  {
    title: "শিক্ষা খাতে নতুন ই-লার্নিং প্ল্যাটফর্ম",
    excerpt: "অনলাইন ক্লাস ও ই-লার্নিং অ্যাপের মাধ্যমে শিক্ষার্থীরা বাড়ি থেকে পড়াশোনা করতে পারছে।",
    image: educationImage,
    category: "শিক্ষা",
    time: "৫ ঘন্টা আগে",
    views: 4750
  },
  {
    title: "আন্তর্জাতিক পর্যায়ে বাংলাদেশি স্টার্টআপের সাফল্য",
    excerpt: "নতুন প্রযুক্তি ভিত্তিক স্টার্টআপগুলো আন্তর্জাতিক ইনভেস্টরদের দৃষ্টি আকর্ষণ করেছে।",
    image: techImage,
    category: "প্রযুক্তি",
    time: "৮ ঘন্টা আগে",
    views: 5123
  },
  {
    title: "খেলাধুলায় নতুন প্রতিভার আবির্ভাব",
    excerpt: "জাতীয় খেলায় নতুন তরুণ খেলোয়াড়রা অসাধারণ পারফরমেন্স দেখাচ্ছে।",
    image: sportsImage,
    category: "খেলাধুলা",
    time: "৯ ঘন্টা আগে",
    views: 2910
  },
  {
    title: "পরিবেশ সংরক্ষণে নতুন উদ্যোগ",
    excerpt: "বন সংরক্ষণ এবং নদী পরিষ্কার অভিযানের মাধ্যমে পরিবেশ রক্ষা করা হচ্ছে।",
    image: cultureImage,
    category: "সংস্কৃতি",
    time: "৬ ঘন্টা আগে",
    views: 1725
  },
  {
    title: "দেশীয় সিনেমার আন্তর্জাতিক স্বীকৃতি",
    excerpt: "বাংলাদেশি সিনেমা আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কৃত হয়েছে।",
    image: cultureImage,
    category: "বিনোদন",
    time: "৫ ঘন্টা আগে",
    views: 3120
  },
  {
    title: "নতুন অর্থনৈতিক নীতি ঘোষণা",
    excerpt: "সরকার নতুন নীতিমালার মাধ্যমে শিল্প ও ব্যবসা খাতকে আরও শক্তিশালী করছে।",
    image: economyImage,
    category: "অর্থনীতি",
    time: "৪ ঘন্টা আগে",
    views: 6980
  },
  {
    title: "শিক্ষা খাতে আন্তর্জাতিক সহযোগিতা",
    excerpt: "বিদেশি বিশ্ববিদ্যালয়ের সঙ্গে চুক্তি করে শিক্ষার্থীদের বিনিময় প্রোগ্রাম চালু হয়েছে।",
    image: educationImage,
    category: "শিক্ষা",
    time: "৩ ঘন্টা আগে",
    views: 4230
  },
  {
    title: "প্রযুক্তি খাতে কৃত্রিম বুদ্ধিমত্তার নতুন উদ্ভাবন",
    excerpt: "নতুন এআই প্রজেক্টের মাধ্যমে স্বয়ংক্রিয় সেবা প্রদান সহজ হচ্ছে।",
    image: techImage,
    category: "প্রযুক্তি",
    time: "২ ঘন্টা আগে",
    views: 7810
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 items-start ">
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
      <Footer></Footer>
    </div>
  );
};

export default Index;
