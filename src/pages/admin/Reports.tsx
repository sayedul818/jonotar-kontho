import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  FileText,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart as PieChartIcon,
  Activity
} from "lucide-react";

const Reports = () => {
  const [dateRange, setDateRange] = useState("7d");
  const [reportType, setReportType] = useState("overview");

  // Mock data for charts
  const dailyStatsData = [
    { date: "১ জান", views: 4000, articles: 12, users: 40 },
    { date: "২ জান", views: 3000, articles: 15, users: 35 },
    { date: "৩ জান", views: 5000, articles: 18, users: 45 },
    { date: "৪ জান", views: 4500, articles: 10, users: 38 },
    { date: "৫ জান", views: 6000, articles: 20, users: 50 },
    { date: "৬ জান", views: 5500, articles: 16, users: 42 },
    { date: "৭ জান", views: 7000, articles: 22, users: 55 }
  ];

  const categoryStatsData = [
    { name: "জাতীয়", value: 35, color: "#3b82f6" },
    { name: "আন্তর্জাতিক", value: 25, color: "#10b981" },
    { name: "রাজনীতি", value: 20, color: "#f59e0b" },
    { name: "অর্থনীতি", value: 12, color: "#ef4444" },
    { name: "খেলাধুলা", value: 8, color: "#8b5cf6" }
  ];

  const topArticlesData = [
    {
      id: 1,
      title: "প্রধানমন্ত্রীর গুরুত্বপূর্ণ ঘোষণা",
      views: 15000,
      category: "রাজনীতি",
      publishDate: "২০২৪-০১-১৫"
    },
    {
      id: 2,
      title: "অর্থনৈতিক সংস্কার পরিকল্পনা",
      views: 12000,
      category: "অর্থনীতি",
      publishDate: "২০২৪-০১-১৪"
    },
    {
      id: 3,
      title: "শিক্ষা ক্ষেত্রে নতুন উদ্যোগ",
      views: 10000,
      category: "শিক্ষা",
      publishDate: "২০২৪-০১-১৩"
    },
    {
      id: 4,
      title: "স্বাস্থ্যসেবা উন্নয়নে বাজেট বৃদ্ধি",
      views: 8500,
      category: "স্বাস্থ্য",
      publishDate: "২০২৪-০১-১২"
    },
    {
      id: 5,
      title: "পরিবেশ রক্ষায় সরকারি উদ্যোগ",
      views: 7200,
      category: "পরিবেশ",
      publishDate: "২০২৪-০১-১১"
    }
  ];

  const exportReport = () => {
    console.log("Exporting report for:", reportType, "period:", dateRange);
    // Export functionality
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text flex items-center">
            <BarChart3 className="mr-2 h-6 w-6 text-blue-600" />
            রিপোর্ট ও বিশ্লেষণ
          </h1>
          <p className="text-gray-600 bn-text">ওয়েবসাইটের পারফরম্যান্স ও পরিসংখ্যান দেখুন</p>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-full lg:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d" className="bn-text">গত ৭ দিন</SelectItem>
              <SelectItem value="30d" className="bn-text">গত ৩০ দিন</SelectItem>
              <SelectItem value="90d" className="bn-text">গত ৩ মাস</SelectItem>
              <SelectItem value="1y" className="bn-text">গত ১ বছর</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-full lg:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overview" className="bn-text">সার্বিক দৃশ্য</SelectItem>
              <SelectItem value="content" className="bn-text">কন্টেন্ট রিপোর্ট</SelectItem>
              <SelectItem value="users" className="bn-text">ব্যবহারকারী রিপোর্ট</SelectItem>
              <SelectItem value="traffic" className="bn-text">ট্রাফিক রিপোর্ট</SelectItem>
            </SelectContent>
          </Select>
          
          <Button onClick={exportReport} variant="outline" className="bn-text">
            <Download className="mr-2 h-4 w-4" />
            এক্সপোর্ট
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট ভিউ</p>
                <p className="text-2xl font-bold text-gray-900">৩৫,০০০</p>
                <p className="text-xs text-green-600 bn-text">+১২% বৃদ্ধি</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">প্রকাশিত নিবন্ধ</p>
                <p className="text-2xl font-bold text-gray-900">১১৩</p>
                <p className="text-xs text-green-600 bn-text">+৮% বৃদ্ধি</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">দৈনিক ভিজিটর</p>
                <p className="text-2xl font-bold text-gray-900">২,৩০৫</p>
                <p className="text-xs text-red-600 bn-text">-৩% হ্রাস</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">এনগেজমেন্ট রেট</p>
                <p className="text-2xl font-bold text-gray-900">৬৮%</p>
                <p className="text-xs text-green-600 bn-text">+৫% বৃদ্ধি</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="bn-text">দৈনিক পরিসংখ্যান</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyStatsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="bn-text">বিভাগ অনুযায়ী বিতরণ</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryStatsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {categoryStatsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">সাপ্তাহিক পারফরম্যান্স</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dailyStatsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#3b82f6" />
              <Bar dataKey="articles" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Articles */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">জনপ্রিয় নিবন্ধসমূহ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topArticlesData.map((article, index) => (
              <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 bn-text">{article.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="bn-text">{article.category}</Badge>
                      <span className="text-sm text-gray-500 bn-text">{article.publishDate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{article.views.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 bn-text">ভিউ</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="bn-text">আজকের সংক্ষিপ্তসার</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">নতুন ভিজিটর</span>
              <span className="font-bold">১,২৩৪</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">ফিরতি ভিজিটর</span>
              <span className="font-bold">৮৯৬</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">বাউন্স রেট</span>
              <span className="font-bold text-red-600">৩২%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">গড় সেশন</span>
              <span className="font-bold bn-text">৪ মিনিট</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="bn-text">ট্রাফিক উৎস</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">ডাইরেক্ট</span>
              <span className="font-bold">৪৫%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">সার্চ ইঞ্জিন</span>
              <span className="font-bold">৩৫%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">সামাজিক মাধ্যম</span>
              <span className="font-bold">১৫%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">রেফারেল</span>
              <span className="font-bold">৫%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="bn-text">ডিভাইস ব্যবহার</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">মোবাইল</span>
              <span className="font-bold">৬৮%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">ডেস্কটপ</span>
              <span className="font-bold">২৮%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 bn-text">ট্যাবলেট</span>
              <span className="font-bold">৪%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;