import { Clock, Eye } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  time: string;
  views?: number;
  featured?: boolean;
}

const NewsCard = ({ title, excerpt, image, category, time, views, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <div className=" bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-pointer group">
        <div className=" grid lg:grid-cols-1 gap-0">
          <div className="lg:order-1">
            <img 
              src={image} 
              alt={title}
              className="w-full h-44 lg:h-52 object-cover"
            />
          </div>
          <div className="p-6 lg:order-2 flex flex-col justify-center">
            <span className="text-primary text-sm font-medium mb-2 bn-text">{category}</span>
            <h2 className="text-xl lg:text-3xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors bn-text">
              {title}
            </h2>
            <p className="text-gray-600 hidden md:block  text-base leading-relaxed mb-4 bn-text">
              {excerpt}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span className="bn-text">{time}</span>
              </div>
              {views && (
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{views.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-36 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white px-2 py-1 text-xs font-medium bn-text">{category}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm lg:text-lg leading-tight mb-2 group-hover:text-primary transition-colors bn-text">
          {title}
        </h3>
        <p className="text-gray-600 hidden md:block  lg:text-sm leading-relaxed mb-3 bn-text line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span className="bn-text">{time}</span>
          </div>
          {views && (
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{views.toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;