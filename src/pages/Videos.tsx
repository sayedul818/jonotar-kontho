import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Play, Clock, Eye, Share2 } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const categories = ["সব", "সংবাদ", "রাজনীতি", "খেলা", "বিনোদন", "সাক্ষাৎকার", "লাইভ"];

  const videos = [
    {
      id: 1,
      title: "প্রধানমন্ত্রীর জাতির উদ্দেশে ভাষণ | সরাসরি সম্প্রচার",
      thumbnail: "/src/assets/economy-news.jpg",
      duration: "৪৫:২৩",
      views: "২,৫০,০০০",
      uploadDate: "২ ঘন্টা আগে",
      category: "রাজনীতি",
      channel: "জাতীয় টিভি",
      description: "প্রধানমন্ত্রী শেখ হাসিনার গুরুত্বপূর্ণ ভাষণ যেখানে নতুন উন্নয়ন পরিকল্পনা নিয়ে আলোচনা।",
      isLive: false,
      isFeatured: true
    },
    {
      id: 2,
      title: "বাংলাদেশ বনাম ভারত ক্রিকেট ম্যাচের হাইলাইটস",
      thumbnail: "/src/assets/sports-news.jpg",
      duration: "১২:৪৫",
      views: "৮৫,০০০",
      uploadDate: "৫ ঘন্টা আগে",
      category: "খেলা",
      channel: "স্পোর্টস২৪",
      description: "আজকের রোমাঞ্চকর ক্রিকেট ম্যাচের সেরা মুহূর্তগুলো।",
      isLive: false,
      isFeatured: false
    },
    {
      id: 3,
      title: "শিক্ষামন্ত্রীর একচ্ছত্র সাক্ষাৎকার",
      thumbnail: "/src/assets/education-news.jpg",
      duration: "২৮:১৬",
      views: "৪২,০০০",
      uploadDate: "১ দিন আগে",
      category: "সাক্ষাৎকার",
      channel: "নিউজ টুডে",
      description: "শিক্ষা ব্যবস্থায় সংস্কার নিয়ে শিক্ষামন্ত্রীর বিস্তারিত আলোচনা।",
      isLive: false,
      isFeatured: false
    },
    {
      id: 4,
      title: "🔴 লাইভ: ঢাকার ট্রাফিক পরিস্থিতি",
      thumbnail: "/src/assets/culture-news.jpg",
      duration: "লাইভ",
      views: "১,২০০",
      uploadDate: "এখনই",
      category: "লাইভ",
      channel: "ট্রাফিক আপডেট",
      description: "ঢাকা শহরের বিভিন্ন এলাকার রিয়েল টাইম ট্রাফিক পরিস্থিতি।",
      isLive: true,
      isFeatured: false
    },
    {
      id: 5,
      title: "নতুন বলিউড চলচ্চিত্রের ট্রেইলার রিভিউ",
      thumbnail: "/src/assets/tech-news.jpg",
      duration: "৮:৩২",
      views: "৬৮,০০০",
      uploadDate: "১ দিন আগে",
      category: "বিনোদন",
      channel: "এন্টারটেইনমেন্ট বাংলা",
      description: "এই সপ্তাহের সেরা বলিউড ট্রেইলার নিয়ে বিস্তারিত আলোচনা।",
      isLive: false,
      isFeatured: false
    },
    {
      id: 6,
      title: "দেশের অর্থনৈতিক পরিস্থিতি নিয়ে বিশেষ প্রতিবেদন",
      thumbnail: "/src/assets/health-news.jpg",
      duration: "১৫:২০",
      views: "৩৫,০০০",
      uploadDate: "২ দিন আগে",
      category: "সংবাদ",
      channel: "ইকোনমি টুডে",
      description: "বর্তমান অর্থনৈতিক পরিস্থিতি এবং ভবিষ্যৎ সম্ভাবনা নিয়ে বিশ্লেষণ।",
      isLive: false,
      isFeatured: false
    }
  ];

  const filteredVideos = videos.filter(video => 
    (selectedCategory === "সব" || video.category === selectedCategory) &&
    (searchTerm === "" || video.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredVideo = filteredVideos.find(video => video.isFeatured);
  const regularVideos = filteredVideos.filter(video => !video.isFeatured);

  const handleVideoClick = (videoId: number) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bn-text">
            ভিডিও
          </h1>
          <p className="text-muted-foreground bn-text">
            সর্বশেষ সংবাদ ও বিশেষ প্রতিবেদনের ভিডিও সংগ্রহ
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="ভিডিও খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bn-text"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-colors bn-text ${
                  selectedCategory === category 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary bn-text">প্রধান ভিডিও</h2>
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-64 md:h-96 object-cover cursor-pointer"
                  onClick={() => handleVideoClick(featuredVideo.id)}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors"
                     onClick={() => handleVideoClick(featuredVideo.id)}>
                  <div className="bg-white/90 rounded-full p-4">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
                {featuredVideo.isLive && (
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    LIVE
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {featuredVideo.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 bn-text">{featuredVideo.title}</h3>
                <p className="text-muted-foreground mb-4 bn-text">{featuredVideo.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="bn-text">{featuredVideo.channel}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{featuredVideo.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="bn-text">{featuredVideo.uploadDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Video Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary bn-text">
            সকল ভিডিও
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => handleVideoClick(video.id)}
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors opacity-0 hover:opacity-100"
                       onClick={() => handleVideoClick(video.id)}>
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  {video.isLive && (
                    <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                      LIVE
                    </Badge>
                  )}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 cursor-pointer hover:text-primary bn-text"
                      onClick={() => handleVideoClick(video.id)}>
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="bn-text">{video.channel}</span>
                    <Badge variant="outline" className="text-xs bn-text">
                      {video.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{video.views}</span>
                    </div>
                    <span>•</span>
                    <span className="bn-text">{video.uploadDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="bn-text">
            আরও ভিডিও দেখুন
          </Button>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold bn-text">ভিডিও প্লেয়ার</h3>
              <Button variant="ghost" size="sm" onClick={closeVideo}>
                ✕
              </Button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 bn-text">ভিডিও প্লেয়ার এখানে থাকবে</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold bn-text">
                  {videos.find(v => v.id === selectedVideo)?.title}
                </h4>
                <p className="text-muted-foreground bn-text">
                  {videos.find(v => v.id === selectedVideo)?.description}
                </p>
                <div className="flex items-center gap-4">
                  <Button size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    শেয়ার করুন
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;