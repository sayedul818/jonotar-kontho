import { AlertCircle } from "lucide-react";
import { useGetBreakingNewsQuery } from "@/store/api/newsApi";

const BreakingNews = () => {
  const { data: breakingNews = [] } = useGetBreakingNewsQuery();

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
                  {typeof news === 'string' ? news : news.title}
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