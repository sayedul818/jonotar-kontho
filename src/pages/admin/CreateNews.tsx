import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Save, 
  Eye, 
  Send, 
  Calendar,
  Image,
  Tag,
  FileText,
  Clock,
  Upload
} from "lucide-react";

const CreateNews = () => {
  const [newsData, setNewsData] = useState({
    title: "",
    subtitle: "",
    content: "",
    category: "",
    tags: [],
    featured: false,
    breakingNews: false,
    publishNow: true,
    scheduledDate: "",
    scheduledTime: "",
    author: "বর্তমান ব্যবহারকারী",
    status: "draft"
  });

  const [newTag, setNewTag] = useState("");

  const categories = [
    "জাতীয়",
    "আন্তর্জাতিক", 
    "অর্থনীতি",
    "রাজনীতি",
    "খেলাধুলা",
    "বিনোদন",
    "প্রযুক্তি",
    "শিক্ষা",
    "স্বাস্থ্য",
    "পরিবেশ",
    "জীবনযাত্রা"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setNewsData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !newsData.tags.includes(newTag.trim())) {
      setNewsData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setNewsData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", newsData);
    // Save as draft logic
  };

  const handlePreview = () => {
    console.log("Preview:", newsData);
    // Preview logic
  };

  const handlePublish = () => {
    console.log("Publishing:", newsData);
    // Publish logic
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text">নতুন সংবাদ তৈরি</h1>
          <p className="text-gray-600 bn-text">নতুন সংবাদ নিবন্ধ লিখুন ও প্রকাশ করুন</p>
        </div>
        
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          <Button variant="outline" onClick={handleSaveDraft} className="bn-text">
            <Save className="mr-2 h-4 w-4" />
            খসড়া সংরক্ষণ
          </Button>
          <Button variant="outline" onClick={handlePreview} className="bn-text">
            <Eye className="mr-2 h-4 w-4" />
            প্রিভিউ
          </Button>
          <Button onClick={handlePublish} className="bn-text">
            <Send className="mr-2 h-4 w-4" />
            প্রকাশ করুন
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                মূল তথ্য
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                  শিরোনাম *
                </label>
                <Input
                  value={newsData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="সংবাদের শিরোনাম লিখুন..."
                  className="bn-text"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                  উপশিরোনাম
                </label>
                <Input
                  value={newsData.subtitle}
                  onChange={(e) => handleInputChange("subtitle", e.target.value)}
                  placeholder="সংবাদের উপশিরোনাম (ঐচ্ছিক)..."
                  className="bn-text"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text">সংবাদের বিষয়বস্তু</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={newsData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                placeholder="সংবাদের বিস্তারিত বিষয়বস্তু লিখুন..."
                className="min-h-[300px] bn-text"
              />
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span className="bn-text">শব্দ সংখ্যা: {newsData.content.split(' ').filter(word => word.length > 0).length}</span>
                <span className="bn-text">অক্ষর সংখ্যা: {newsData.content.length}</span>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text flex items-center">
                <Image className="mr-2 h-5 w-5" />
                ছবি আপলোড
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <Button variant="outline" className="bn-text">
                    ছবি নির্বাচন করুন
                  </Button>
                  <p className="mt-2 text-sm text-gray-500 bn-text">
                    PNG, JPG, JPEG ফরম্যাট সাপোর্ট করে (সর্বোচ্চ ৫MB)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publication Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                প্রকাশনা সেটিংস
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bn-text">এখনই প্রকাশ</span>
                <Switch
                  checked={newsData.publishNow}
                  onCheckedChange={(value) => handleInputChange("publishNow", value)}
                />
              </div>
              
              {!newsData.publishNow && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 bn-text">
                      তারিখ
                    </label>
                    <Input
                      type="date"
                      value={newsData.scheduledDate}
                      onChange={(e) => handleInputChange("scheduledDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 bn-text">
                      সময়
                    </label>
                    <Input
                      type="time"
                      value={newsData.scheduledTime}
                      onChange={(e) => handleInputChange("scheduledTime", e.target.value)}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Category & Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text flex items-center">
                <Tag className="mr-2 h-5 w-5" />
                বিভাগ ও ট্যাগ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                  বিভাগ *
                </label>
                <Select value={newsData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="bn-text">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                  ট্যাগ যোগ করুন
                </label>
                <div className="flex space-x-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="ট্যাগ লিখুন..."
                    className="bn-text"
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm" className="bn-text">
                    যোগ
                  </Button>
                </div>
                
                {newsData.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {newsData.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="cursor-pointer bn-text"
                        onClick={() => removeTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Special Options */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text">বিশেষ অপশন</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bn-text">ফিচার্ড নিউজ</span>
                <Switch
                  checked={newsData.featured}
                  onCheckedChange={(value) => handleInputChange("featured", value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bn-text">ব্রেকিং নিউজ</span>
                <Switch
                  checked={newsData.breakingNews}
                  onCheckedChange={(value) => handleInputChange("breakingNews", value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Author Info */}
          <Card>
            <CardHeader>
              <CardTitle className="bn-text">লেখক তথ্য</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                  লেখক
                </label>
                <Input
                  value={newsData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  className="bn-text"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;