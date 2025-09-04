import { AlertCircle } from "lucide-react";

const BreakingNews = () => {
  const breakingNews = [
    "প্রধানমন্ত্রী আজ জাতীয় সংসদে গুরুত্বপূর্ণ ঘোষণা দেবেন",
    "ঢাকায় নতুন মেট্রোরেল লাইনের উদ্বোধন আগামী মাসে",
    "বিশ্বকাপ ফুটবলে বাংলাদেশ দলের নতুন কোচ নিয়োগ",
    "অর্থনৈতিক প্রবৃদ্ধিতে নতুন রেকর্ড অর্জন"
  ];

  return (
    <div className="bg-breaking text-breaking-foreground py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 mr-6 shrink-0">
            <AlertCircle className="h-5 w-5 animate-pulse" />
            <span className="font-bold text-lg">জরুরি</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="breaking-scroll whitespace-nowrap">
              {breakingNews.map((news, index) => (
                <span key={index} className="mx-8 cursor-pointer hover:underline">
                  {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;