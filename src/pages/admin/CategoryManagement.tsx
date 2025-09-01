import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Plus, 
  Edit, 
  Trash2,
  MoreHorizontal,
  Tags,
  Eye,
  Search,
  TrendingUp,
  Users
} from "lucide-react";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "জাতীয়",
      nameEn: "National",
      description: "দেশের অভ্যন্তরীণ সংবাদ ও ঘটনাবলী",
      isActive: true,
      newsCount: 245,
      color: "#3b82f6",
      order: 1,
      createdAt: "২০২৪-০১-০১"
    },
    {
      id: 2,
      name: "আন্তর্জাতিক",
      nameEn: "International",
      description: "বিশ্বের বিভিন্ন দেশের সংবাদ",
      isActive: true,
      newsCount: 180,
      color: "#10b981",
      order: 2,
      createdAt: "২০২৪-০১-০১"
    },
    {
      id: 3,
      name: "রাজনীতি",
      nameEn: "Politics",
      description: "রাজনৈতিক সংবাদ ও বিশ্লেষণ",
      isActive: true,
      newsCount: 320,
      color: "#f59e0b",
      order: 3,
      createdAt: "২০২৪-০১-০১"
    },
    {
      id: 4,
      name: "অর্থনীতি",
      nameEn: "Economy",
      description: "অর্থনৈতিক সংবাদ ও বাজার সংক্রান্ত তথ্য",
      isActive: true,
      newsCount: 156,
      color: "#ef4444",
      order: 4,
      createdAt: "২০২৪-০১-০১"
    },
    {
      id: 5,
      name: "খেলাধুলা",
      nameEn: "Sports",
      description: "ক্রীড়া জগতের সংবাদ",
      isActive: true,
      newsCount: 198,
      color: "#8b5cf6",
      order: 5,
      createdAt: "২০২৪-০১-০১"
    },
    {
      id: 6,
      name: "বিনোদন",
      nameEn: "Entertainment",
      description: "চলচ্চিত্র, সঙ্গীত ও বিনোদন সংবাদ",
      isActive: false,
      newsCount: 89,
      color: "#ec4899",
      order: 6,
      createdAt: "২০২৪-০১-০১"
    }
  ]);

  const [newCategory, setNewCategory] = useState({
    name: "",
    nameEn: "",
    description: "",
    color: "#3b82f6",
    isActive: true
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddCategory = () => {
    if (!newCategory.name.trim()) return;

    const category = {
      id: categories.length + 1,
      ...newCategory,
      newsCount: 0,
      order: categories.length + 1,
      createdAt: new Date().toLocaleDateString('bn-BD')
    };

    setCategories([...categories, category]);
    setNewCategory({
      name: "",
      nameEn: "",
      description: "",
      color: "#3b82f6",
      isActive: true
    });
    setIsDialogOpen(false);
  };

  const handleToggleStatus = (id: number) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, isActive: !cat.isActive } : cat
    ));
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTotalNews = () => categories.reduce((total, cat) => total + cat.newsCount, 0);
  const getActiveCategories = () => categories.filter(cat => cat.isActive).length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text flex items-center">
            <Tags className="mr-2 h-6 w-6 text-blue-600" />
            বিভাগ পরিচালনা
          </h1>
          <p className="text-gray-600 bn-text">সংবাদের বিভাগসমূহ তৈরি ও পরিচালনা করুন</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bn-text">
              <Plus className="mr-2 h-4 w-4" />
              নতুন বিভাগ
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="bn-text">নতুন বিভাগ তৈরি</DialogTitle>
              <DialogDescription className="bn-text">
                সংবাদের জন্য নতুন বিভাগ তৈরি করুন।
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">বিভাগের নাম (বাংলা) *</label>
                <Input
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                  placeholder="যেমন: প্রযুক্তি"
                  className="bn-text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">বিভাগের নাম (ইংরেজি)</label>
                <Input
                  value={newCategory.nameEn}
                  onChange={(e) => setNewCategory({...newCategory, nameEn: e.target.value})}
                  placeholder="Technology"
                  className="en-text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">বিবরণ</label>
                <Textarea
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                  placeholder="বিভাগের সংক্ষিপ্ত বিবরণ..."
                  className="bn-text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium bn-text">রঙ</label>
                  <Input
                    type="color"
                    value={newCategory.color}
                    onChange={(e) => setNewCategory({...newCategory, color: e.target.value})}
                    className="h-10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium bn-text">সক্রিয়</label>
                  <div className="flex items-center pt-2">
                    <Switch
                      checked={newCategory.isActive}
                      onCheckedChange={(value) => setNewCategory({...newCategory, isActive: value})}
                    />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="bn-text">
                বাতিল
              </Button>
              <Button onClick={handleAddCategory} className="bn-text">
                তৈরি করুন
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Tags className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট বিভাগ</p>
                <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">সক্রিয় বিভাগ</p>
                <p className="text-2xl font-bold text-gray-900">{getActiveCategories()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট সংবাদ</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalNews()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">অনুসন্ধান</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="বিভাগ খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bn-text"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories Table */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">বিভাগ তালিকা ({filteredCategories.length}টি)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bn-text">বিভাগ</TableHead>
                  <TableHead className="bn-text">ইংরেজি নাম</TableHead>
                  <TableHead className="bn-text">বিবরণ</TableHead>
                  <TableHead className="bn-text">সংবাদ সংখ্যা</TableHead>
                  <TableHead className="bn-text">অবস্থা</TableHead>
                  <TableHead className="bn-text">তৈরির তারিখ</TableHead>
                  <TableHead className="text-right bn-text">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="font-medium text-gray-900 bn-text">
                          {category.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="en-text">{category.nameEn}</TableCell>
                    <TableCell className="bn-text max-w-xs truncate">
                      {category.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bn-text">
                        {category.newsCount} টি
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={category.isActive}
                          onCheckedChange={() => handleToggleStatus(category.id)}
                        />
                        <span className="text-sm text-gray-600 bn-text">
                          {category.isActive ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="bn-text">{category.createdAt}</TableCell>
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
                          <DropdownMenuItem 
                            onClick={() => handleDeleteCategory(category.id)}
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

export default CategoryManagement;