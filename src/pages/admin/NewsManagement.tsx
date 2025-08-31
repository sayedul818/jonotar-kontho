import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  User,
  MoreHorizontal,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const newsList = [
    {
      id: 1,
      title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা",
      category: "রাজনীতি",
      author: "সাকিব হাসান",
      status: "published",
      publishDate: "২০২ৄ-০১-১৫",
      views: 1234,
      image: "/api/placeholder/80/60"
    },
    {
      id: 2,
      title: "শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ",
      category: "শিক্ষা",
      author: "রাহুল আহমেদ",
      status: "draft",
      publishDate: "২০২ৄ-০১-১ৄ",
      views: 890,
      image: "/api/placeholder/80/60"
    },
    {
      id: 3,
      title: "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
      category: "স্বাস্থ্য",
      author: "ফাতিমা খাতুন",
      status: "published",
      publishDate: "২০২ৄ-০১-১৩",
      views: 2145,
      image: "/api/placeholder/80/60"
    },
    {
      id: 4,
      title: "দেশে নতুন বিনিয়োগের ঢল",
      category: "অর্থনীতি",
      author: "কামাল উদ্দিন",
      status: "scheduled",
      publishDate: "২০২ৄ-০১-১৬",
      views: 0,
      image: "/api/placeholder/80/60"
    },
    {
      id: 5,
      title: "ক্রিকেট বিশ্বকাপে বাংলাদেশের প্রস্তুতি",
      category: "খেলা",
      author: "তানভীর হুসেইন",
      status: "published",
      publishDate: "২০২ৄ-০১-১১",
      views: 3456,
      image: "/api/placeholder/80/60"
    },
    {
      id: 6,
      title: "চলচ্চিত্র জগতে নতুন মাত্রা",
      category: "বিনোদন",
      author: "নুসরাত জাহান",
      status: "review",
      publishDate: "-",
      views: 0,
      image: "/api/placeholder/80/60"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800 bn-text">প্রকাশিত</Badge>;
      case "draft":
        return <Badge variant="secondary" className="bn-text">খসড়া</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 bn-text">নির্ধারিত</Badge>;
      case "review":
        return <Badge className="bg-yellow-100 text-yellow-800 bn-text">পর্যালোচনা</Badge>;
      default:
        return <Badge variant="outline" className="bn-text">অজানা</Badge>;
    }
  };

  const filteredNews = newsList.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || news.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || news.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 bn-text">সংবাদ পরিচালনা</h1>
          <p className="text-gray-600 bn-text text-sm sm:text-base">সকল সংবাদ নিবন্ধ দেখুন ও পরিচালনা করুন</p>
        </div>
        <Link to="/admin/news/create" className="w-full sm:w-auto">
          <Button className="bn-text w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            নতুন সংবাদ
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="সংবাদ খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bn-text"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[130px] bn-text">
                  <SelectValue placeholder="স্ট্যাটাস" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="bn-text">সকল স্ট্যাটাস</SelectItem>
                  <SelectItem value="published" className="bn-text">প্রকাশিত</SelectItem>
                  <SelectItem value="draft" className="bn-text">খসড়া</SelectItem>
                  <SelectItem value="scheduled" className="bn-text">নির্ধারিত</SelectItem>
                  <SelectItem value="review" className="bn-text">পর্যালোচনা</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[130px] bn-text">
                  <SelectValue placeholder="বিভাগ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="bn-text">সকল বিভাগ</SelectItem>
                  <SelectItem value="রাজনীতি" className="bn-text">রাজনীতি</SelectItem>
                  <SelectItem value="অর্থনীতি" className="bn-text">অর্থনীতি</SelectItem>
                  <SelectItem value="খেলা" className="bn-text">খেলা</SelectItem>
                  <SelectItem value="বিনোদন" className="bn-text">বিনোদন</SelectItem>
                  <SelectItem value="শিক্ষা" className="bn-text">শিক্ষা</SelectItem>
                  <SelectItem value="স্বাস্থ্য" className="bn-text">স্বাস্থ্য</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* News List */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">সংবাদ তালিকা ({filteredNews.length}টি)</CardTitle>
          <CardDescription className="bn-text">
            সকল সংবাদ নিবন্ধের তালিকা
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {filteredNews.map((news) => (
              <div key={news.id} className="flex flex-col lg:flex-row lg:items-center space-y-3 lg:space-y-0 lg:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                {/* Thumbnail */}
                <div className="flex-shrink-0 self-start lg:self-auto">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-20 h-15 object-cover rounded-md"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 line-clamp-2 bn-text text-sm sm:text-base">
                    {news.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                    <Badge variant="outline" className="bn-text text-xs">{news.category}</Badge>
                    {getStatusBadge(news.status)}
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      <span className="bn-text">{news.author}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{news.publishDate}</span>
                    </div>
                    {news.views > 0 && (
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{news.views.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="bn-text">
                        <Edit className="h-4 w-4 mr-2" />
                        সম্পাদনা
                      </DropdownMenuItem>
                      <DropdownMenuItem className="bn-text">
                        <Eye className="h-4 w-4 mr-2" />
                        প্রিভিউ
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        মুছে ফেলুন
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 bn-text">কোনো সংবাদ পাওয়া যায়নি</h3>
              <p className="text-gray-600 mt-2 bn-text">
                আপনার অনুসন্ধান অনুযায়ী কোনো সংবাদ নিবন্ধ খুঁজে পাওয়া যায়নি।
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsManagement;