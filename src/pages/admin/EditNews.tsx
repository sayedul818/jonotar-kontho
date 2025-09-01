import { useState, useEffect } from "react";
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
  Edit, 
  Eye, 
  Trash2,
  MoreHorizontal,
  Filter,
  RefreshCw,
  Calendar,
  FileText
} from "lucide-react";

const EditNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedNews, setSelectedNews] = useState([]);

  // Mock data for editable news
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "প্রধানমন্ত্রীর গুরুত্বপূর্ণ ঘোষণা",
      category: "রাজনীতি",
      author: "সাংবাদিক রহিম",
      status: "published",
      publishDate: "২০২৪-০১-১৫",
      lastEdited: "২০২৪-০১-১৫ ১০:৩০ এএম",
      views: 2500,
      featured: true
    },
    {
      id: 2,
      title: "অর্থনৈতিক সংস্কার পরিকল্পনা",
      category: "অর্থনীতি",
      author: "সাংবাদিক করিম", 
      status: "draft",
      publishDate: "২০২৪-০১-১৪",
      lastEdited: "২০২৪-০১-১৪ ০৯:১৫ এএম",
      views: 0,
      featured: false
    },
    {
      id: 3,
      title: "শিক্ষা ক্ষেত্রে ডিজিটাল বিপ্লব",
      category: "শিক্ষা",
      author: "সাংবাদিক নাসিম",
      status: "scheduled",
      publishDate: "২০২৪-০১-১৬",
      lastEdited: "২০২৪-০১-১৩ ০৮:৪৫ এএম",
      views: 0,
      featured: true
    },
    {
      id: 4,
      title: "স্বাস্থ্যসেবা উন্নয়নে বাজেট বৃদ্ধি",
      category: "স্বাস্থ্য",
      author: "সাংবাদিক সালিম",
      status: "published",
      publishDate: "২০২৪-০১-১২",
      lastEdited: "২০২৪-০১-১২ ০৭:৩০ এএম",
      views: 1200,
      featured: false
    },
    {
      id: 5,
      title: "পরিবেশ রক্ষায় সরকারি উদ্যোগ",
      category: "পরিবেশ",
      author: "সাংবাদিক তানভীর",
      status: "draft",
      publishDate: "",
      lastEdited: "২০২৪-০১-১১ ০৬:১৫ এএম",
      views: 0,
      featured: false
    }
  ]);

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

  const handleEdit = (newsId: number) => {
    console.log("Editing news:", newsId);
    // Navigate to edit form
  };

  const handleDelete = (newsId: number) => {
    setNewsList(newsList.filter(news => news.id !== newsId));
  };

  const handleBulkAction = (action: string) => {
    console.log("Bulk action:", action, "on:", selectedNews);
    // Handle bulk actions
  };

  const filteredNews = newsList.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || news.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || news.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getDraftCount = () => newsList.filter(news => news.status === "draft").length;
  const getPublishedCount = () => newsList.filter(news => news.status === "published").length;
  const getScheduledCount = () => newsList.filter(news => news.status === "scheduled").length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text">সংবাদ সম্পাদনা</h1>
          <p className="text-gray-600 bn-text">বিদ্যমান সংবাদ সম্পাদনা ও পরিচালনা করুন</p>
        </div>
        <Button className="w-full sm:w-auto bn-text">
          <RefreshCw className="mr-2 h-4 w-4" />
          রিফ্রেশ করুন
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">প্রকাশিত</p>
                <p className="text-2xl font-bold text-gray-900">{getPublishedCount()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Edit className="h-8 w-8 text-gray-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">খসড়া</p>
                <p className="text-2xl font-bold text-gray-900">{getDraftCount()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">নির্ধারিত</p>
                <p className="text-2xl font-bold text-gray-900">{getScheduledCount()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
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
                <SelectItem value="রাজনীতি" className="bn-text">রাজনীতি</SelectItem>
                <SelectItem value="অর্থনীতি" className="bn-text">অর্থনীতি</SelectItem>
                <SelectItem value="শিক্ষা" className="bn-text">শিক্ষা</SelectItem>
                <SelectItem value="স্বাস্থ্য" className="bn-text">স্বাস্থ্য</SelectItem>
                <SelectItem value="পরিবেশ" className="bn-text">পরিবেশ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      {selectedNews.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 bn-text">
                {selectedNews.length}টি সংবাদ নির্বাচিত
              </span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("publish")} className="bn-text">
                  প্রকাশ করুন
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("draft")} className="bn-text">
                  খসড়ায় রাখুন
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("delete")} className="text-red-600 bn-text">
                  মুছে ফেলুন
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
                  <TableHead className="w-12">
                    <input 
                      type="checkbox" 
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedNews(filteredNews.map(news => news.id));
                        } else {
                          setSelectedNews([]);
                        }
                      }}
                    />
                  </TableHead>
                  <TableHead className="bn-text">শিরোনাম</TableHead>
                  <TableHead className="bn-text">বিভাগ</TableHead>
                  <TableHead className="bn-text">লেখক</TableHead>
                  <TableHead className="bn-text">স্ট্যাটাস</TableHead>
                  <TableHead className="bn-text">শেষ সম্পাদনা</TableHead>
                  <TableHead className="bn-text">দেখা হয়েছে</TableHead>
                  <TableHead className="text-right bn-text">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNews.map((news) => (
                  <TableRow key={news.id}>
                    <TableCell>
                      <input 
                        type="checkbox" 
                        checked={selectedNews.includes(news.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedNews([...selectedNews, news.id]);
                          } else {
                            setSelectedNews(selectedNews.filter(id => id !== news.id));
                          }
                        }}
                      />
                    </TableCell>
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
                    <TableCell className="bn-text">{news.lastEdited}</TableCell>
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
                          <DropdownMenuItem onClick={() => handleEdit(news.id)} className="bn-text">
                            <Edit className="mr-2 h-4 w-4" />
                            সম্পাদনা করুন
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(news.id)} 
                            className="text-red-600 bn-text"
                          >
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

export default EditNews;