import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Eye, 
  TrendingUp, 
  Calendar,
  BarChart3,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "মোট সংবাদ",
      value: "১,২৪৮",
      change: "+১২%",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "দৈনিক ভিজিটর",
      value: "৪৫,৬৭৮",
      change: "+৮%",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "মোট ভিউ",
      value: "৩,৪৫,৬৭৮",
      change: "+১৫%",
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "এই মাসের গ্রোথ",
      value: "২৩%",
      change: "+৫%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা",
      category: "রাজনীতি",
      status: "প্রকাশিত",
      date: "২০২৪-০১-১৫",
      views: "১,২৩৪"
    },
    {
      id: 2,
      title: "শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ",
      category: "শিক্ষা",
      status: "খসড়া",
      date: "২০২৪-০১-১৪",
      views: "৮৯০"
    },
    {
      id: 3,
      title: "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
      category: "স্বাস্থ্য",
      status: "প্রকাশিত",
      date: "২০২৪-০১-১৩",
      views: "২,১৪৫"
    },
    {
      id: 4,
      title: "দেশে নতুন বিনিয়োগের ঢল",
      category: "অর্থনীতি",
      status: "প্রকাশিত",
      date: "২০২৪-০১-১২",
      views: "১,৫৬৭"
    }
  ];

  const quickActions = [
    {
      title: "নতুন সংবাদ লিখুন",
      description: "একটি নতুন সংবাদ নিবন্ধ তৈরি করুন",
      icon: Plus,
      path: "/admin/news/create",
      color: "bg-primary"
    },
    {
      title: "সংবাদ সম্পাদনা",
      description: "বিদ্যমান সংবাদ সম্পাদনা করুন",
      icon: Edit,
      path: "/admin/news",
      color: "bg-blue-600"
    },
    {
      title: "ড্যাশবোর্ড রিপোর্ট",
      description: "বিস্তারিত অ্যানালিটিক্স দেখুন",
      icon: BarChart3,
      path: "/admin/analytics",
      color: "bg-green-600"
    }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 bn-text">ড্যাশবোর্ড</h1>
          <p className="text-gray-600 bn-text text-sm sm:text-base">জনতার কন্ঠ অ্যাডমিন প্যানেল</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <Button variant="outline" size="sm" className="bn-text w-full sm:w-auto">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">আজ: ১৫ জানুয়ারি, ২০২৪</span>
          </Button>
          <Link to="/admin/news/create" className="w-full sm:w-auto">
            <Button className="bn-text w-full">
              <Plus className="h-4 w-4 mr-2" />
              নতুন সংবাদ
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 bn-text">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change} গত মাসের তুলনায়</p>
                </div>
                <div className={`p-3 ${stat.bgColor} rounded-full`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent News */}
        <div className="xl:col-span-2">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="bn-text text-lg sm:text-xl">সাম্প্রতিক সংবাদ</CardTitle>
              <CardDescription className="bn-text">
                সর্বশেষ প্রকাশিত ও খসড়া সংবাদসমূহ
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {recentNews.map((news) => (
                  <div key={news.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors space-y-3 sm:space-y-0">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 bn-text line-clamp-2 text-sm sm:text-base">{news.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                        <Badge variant="outline" className="bn-text text-xs">{news.category}</Badge>
                        <Badge 
                          variant={news.status === "প্রকাশিত" ? "default" : "secondary"}
                          className="bn-text text-xs"
                        >
                          {news.status}
                        </Badge>
                        <span className="text-xs sm:text-sm text-gray-500">{news.date}</span>
                        <span className="text-xs sm:text-sm text-gray-500 flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {news.views}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/admin/news">
                  <Button variant="outline" className="w-full bn-text">
                    সকল সংবাদ দেখুন
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="bn-text">দ্রুত অ্যাকশন</CardTitle>
              <CardDescription className="bn-text">
                সাধারণ কাজগুলো দ্রুত সম্পন্ন করুন
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.path}>
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className={`p-2 ${action.color} rounded-lg mr-4`}>
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 bn-text">{action.title}</h3>
                      <p className="text-sm text-gray-600 bn-text">{action.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="bn-text">সিস্টেম স্ট্যাটাস</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 bn-text">সার্ভার স্ট্যাটাস</span>
                <Badge variant="default" className="bg-green-100 text-green-800">অনলাইন</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 bn-text">ডাটাবেস</span>
                <Badge variant="default" className="bg-green-100 text-green-800">সংযুক্ত</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 bn-text">সর্বশেষ ব্যাকআপ</span>
                <span className="text-sm text-gray-900">২ ঘন্টা আগে</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;