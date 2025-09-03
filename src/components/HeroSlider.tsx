import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetFeaturedNewsQuery } from "@/store/api/newsApi";

// Import images
import economyImage from "@/assets/economy-news.jpg";
import educationImage from "@/assets/education-news.jpg";
import sportsImage from "@/assets/sports-news.jpg";

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "দেশের অর্থনৈতিক উন্নয়নে নতুন মাইলফলক অর্জন",
    description: "এই বছর দেশের জিডিপি প্রবৃদ্ধি আগের বছরের তুলনায় উল্লেখযোগ্য বৃদ্ধি পেয়েছে। বিভিন্ন খাতে উৎপাদনশীলতা বৃদ্ধি এবং রপ্তানি আয় বৃদ্ধির ফলে এই অগ্রগতি সম্ভব হয়েছে।",
    image: economyImage,
    category: "অর্থনীতি"
  },
  {
    id: 2,
    title: "শিক্ষা ক্ষেত্রে ডিজিটাল বিপ্লব: নতুন প্রযুক্তির ব্যবহার",
    description: "দেশের শিক্ষা ব্যবস্থায় আধুনিক প্রযুক্তির ব্যবহার শুরু হয়েছে। অনলাইন ক্লাস, ডিজিটাল বোর্ড এবং ইন্টারঅ্যাক্টিভ শিক্ষা পদ্ধতি চালু করা হয়েছে।",
    image: educationImage,
    category: "শিক্ষা"
  },
  {
    id: 3,
    title: "খেলাধুলায় বাংলাদেশের নতুন সাফল্য আন্তর্জাতিক পর্যায়ে",
    description: "আন্তর্জাতিক টুর্নামেন্টে বাংলাদেশি খেলোয়াড়দের অসাধারণ পারফরমেন্স দেশের মর্যাদা বৃদ্ধি করেছে। ক্রিকেট, ফুটবল এবং অন্যান্য খেলায় নতুন রেকর্ড সৃষ্টি হয়েছে।",
    image: sportsImage,
    category: "খেলাধুলা"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: featuredNews = [] } = useGetFeaturedNewsQuery();

  // Use RTK Query data if available, otherwise fall back to mock data
  const slides = featuredNews.length > 0 ? featuredNews.slice(0, 3).map(news => ({
    id: news.id,
    title: news.title,
    description: news.excerpt,
    image: news.imageUrl || economyImage,
    category: news.category
  })) : heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[300px] overflow-hidden rounded-lg bg-muted">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <Badge className="mb-3 bg-accent text-accent-foreground hover:bg-accent-hover">
                {slide.category}
              </Badge>
              
              <h2 className="news-headline text-white mb-3">
                {slide.title}
              </h2>
              
              <p className="text-lg leading-relaxed mb-4 max-w-3xl opacity-90">
                {slide.description}
              </p>
              
              <Button 
                variant="secondary" 
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                বিস্তারিত পড়ুন
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;