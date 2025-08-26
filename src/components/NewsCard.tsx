import { Clock, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  time: string;
  views?: number;
  featured?: boolean;
}

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  time, 
  views, 
  featured = false 
}: NewsCardProps) => {
  return (
    <Card className={`hover-lift cursor-pointer group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-accent text-accent-foreground hover:bg-accent-hover"
        >
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className={`font-bold leading-tight mb-2 group-hover:text-primary transition-colors ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {title}
        </h3>
        
        <p className={`text-muted-foreground leading-relaxed mb-3 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          
          {views && (
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{views.toLocaleString()}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;