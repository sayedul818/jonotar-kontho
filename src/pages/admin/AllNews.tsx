import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Eye, 
  Trash2,
  Filter,
  Calendar
} from "lucide-react";

const AllNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Mock data for all news
  const allNews = [
    {
      id: 1,
      title: "বাংলাদেশের অর্থনৈতিক উন্নয়নে নতুন মাইলফলক",
      category: "অর্থনীতি",
      author: "সাংবাদিক রহিম",
      status: "published",
      publishDate: "২০২৪-০১-১৫",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "শিক্ষা ক্ষেত্রে ডিজিটাল বিপ্লব",
      category: "শিক্ষা",
      author: "সাংবাদিক করিম",
      status: "draft",
      publishDate: "২০২৪-০১-১৪",
      views: 0,
      featured: false
    },
    {
      id: 3,
      title: "স্বাস্থ্য সেবায় নতুন প্রযুক্তি",
      category: "স্বাস্থ্য",
      author: "সাংবাদিক নাসিম",
      status: "published",
      publishDate: "২০২৪-০১-১৩",
      views: 980,
      featured: true
    },
    {
      id: 4,
      title: "পরিবেশ রক্ষায় সরকারি উদ্যোগ",
      category: "পরিবেশ",
      author: "সাংবাদিক সালিম",
      status: "scheduled",
      publishDate: "২০২৪-০১-১৬",
      views: 0,
      featured: false
    },
    {
      id: 5,
      title: "ক্রীড়া জগতে বাংলাদেশের সাফল্য",
      category: "খেলাধুলা",
      author: "সাংবাদিক তানভীর",
      status: "published",
      publishDate: "২০২৪-০১-১২",
      views: 1560,
      featured: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">প্রকাশিত</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">খসড়া</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800">নির্ধারিত</Badge>;
      default:
        return <Badge>অজানা</Badge>;
    }
  };

  const filteredNews = allNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || news.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || news.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text">সকল সংবাদ</h1>
          <p className="text-gray-600 bn-text">সমস্ত সংবাদ পরিচালনা করুন</p>
        </div>
        <Button className="w-full sm:w-auto bn-text">
          <Plus className="mr-2 h-4 w-4" />
          নতুন সংবাদ
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">ফিল্টার ও অনুসন্ধান</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="সংবাদ খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bn-text"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="স্ট্যাটাস নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="bn-text">সকল স্ট্যাটাস</SelectItem>
                <SelectItem value="published" className="bn-text">প্রকাশিত</SelectItem>
                <SelectItem value="draft" className="bn-text">খসড়া</SelectItem>
                <SelectItem value="scheduled" className="bn-text">নির্ধারিত</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="bn-text">সকল বিভাগ</SelectItem>
                <SelectItem value="অর্থনীতি" className="bn-text">অর্থনীতি</SelectItem>
                <SelectItem value="শিক্ষা" className="bn-text">শিক্ষা</SelectItem>
                <SelectItem value="স্বাস্থ্য" className="bn-text">স্বাস্থ্য</SelectItem>
                <SelectItem value="পরিবেশ" className="bn-text">পরিবেশ</SelectItem>
                <SelectItem value="খেলাধুলা" className="bn-text">খেলাধুলা</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* News Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="bn-text">সংবাদ তালিকা ({filteredNews.length}টি)</CardTitle>
            <Button variant="outline" size="sm" className="bn-text">
              <Filter className="mr-2 h-4 w-4" />
              আরো ফিল্টার
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bn-text">শিরোনাম</TableHead>
                  <TableHead className="bn-text">বিভাগ</TableHead>
                  <TableHead className="bn-text">লেখক</TableHead>
                  <TableHead className="bn-text">স্ট্যাটাস</TableHead>
                  <TableHead className="bn-text">প্রকাশের তারিখ</TableHead>
                  <TableHead className="bn-text">দেখা হয়েছে</TableHead>
                  <TableHead className="text-right bn-text">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNews.map((news) => (
                  <TableRow key={news.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div>
                          <p className="font-medium text-gray-900 bn-text">{news.title}</p>
                          {news.featured && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              ফিচার্ড
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="bn-text">{news.category}</TableCell>
                    <TableCell className="bn-text">{news.author}</TableCell>
                    <TableCell>{getStatusBadge(news.status)}</TableCell>
                    <TableCell className="bn-text">{news.publishDate}</TableCell>
                    <TableCell className="bn-text">{news.views.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="bn-text">
                            <Eye className="mr-2 h-4 w-4" />
                            দেখুন
                          </DropdownMenuItem>
                          <DropdownMenuItem className="bn-text">
                            <Edit className="mr-2 h-4 w-4" />
                            সম্পাদনা করুন
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 bn-text">
                            <Trash2 className="mr-2 h-4 w-4" />
                            মুছে ফেলুন
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AllNews;