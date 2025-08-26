import { TrendingUp, Clock, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const trendingNews = [
    {
      title: "করোনা ভ্যাকসিনের নতুন গবেষণা",
      views: 15420,
      time: "২ ঘন্টা আগে"
    },
    {
      title: "ঢাকার যানজট সমাধানে নতুন পরিকল্পনা",
      views: 12350,
      time: "৩ ঘন্টা আগে"
    },
    {
      title: "তথ্যপ্রযুক্তি খাতে নতুন বিনিয়োগ",
      views: 9876,
      time: "৫ ঘন্টা আগে"
    },
    {
      title: "পরিবেশ রক্ষায় সরকারি নতুন উদ্যোগ",
      views: 8543,
      time: "৬ ঘন্টা আগে"
    },
    {
      title: "শিক্ষা ব্যবস্থায় আধুনিকায়ন",
      views: 7234,
      time: "৮ ঘন্টা আগে"
    }
  ];

  const popularAuthors = [
    { name: "ড. রহিম উদ্দিন", articles: 45 },
    { name: "সারা খান", articles: 38 },
    { name: "মোহাম্মদ আলী", articles: 32 },
    { name: "ফাতিমা বেগম", articles: 29 }
  ];

  return (
    <div className="space-y-6">
      {/* Trending News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <TrendingUp className="h-5 w-5 text-trending" />
            <span>জনপ্রিয় খবর</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingNews.map((news, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-start space-x-3">
                <Badge variant="outline" className="text-xs mt-1 shrink-0">
                  {index + 1}
                </Badge>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{news.time}</span>
                    </div>
                    <span>{news.views.toLocaleString()} পাঠক</span>
                  </div>
                </div>
              </div>
              {index < trendingNews.length - 1 && (
                <div className="border-b border-border mt-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            <span>নিউজলেটার</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            প্রতিদিনের গুরুত্বপূর্ণ খবর সরাসরি আপনার ইমেইলে পান
          </p>
          <div className="space-y-3">
            <Input 
              type="email" 
              placeholder="আপনার ইমেইল ঠিকানা"
              className="text-sm"
            />
            <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
              সাবস্ক্রাইব করুন
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Authors */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">জনপ্রিয় লেখক</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularAuthors.map((author, index) => (
            <div key={index} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-primary">
                    {author.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {author.name}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {author.articles} প্রবন্ধ
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Advertisement Space */}
      <Card className="bg-muted">
        <CardContent className="p-6 text-center">
          <div className="space-y-3">
            <ExternalLink className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              বিজ্ঞাপনের স্থান
            </p>
            <p className="text-xs text-muted-foreground">
              ৩০০ x ২৫০ পিক্সেল
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;