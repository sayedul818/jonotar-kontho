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
  Search, 
  Edit, 
  Eye, 
  Trash2,
  MoreHorizontal,
  Send,
  Save,
  Clock,
  FileText,
  DraftingCompass
} from "lucide-react";

const Drafts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDrafts, setSelectedDrafts] = useState([]);

  // Mock data for drafts
  const [drafts, setDrafts] = useState([
    {
      id: 1,
      title: "শিক্ষা ক্ষেত্রে প্রযুক্তির ব্যবহার",
      category: "শিক্ষা",
      author: "সাংবাদিক রহিম",
      lastEdited: "২০২৪-০১-১৫ ১০:৩০ এএম",
      wordCount: 450,
      completionPercentage: 75,
      isAutoSaved: true
    },
    {
      id: 2,
      title: "পরিবেশ রক্ষায় নাগরিকদের ভূমিকা",
      category: "পরিবেশ",
      author: "সাংবাদিক করিম",
      lastEdited: "২০২৪-০১-১৪ ০৯:১৫ এএম",
      wordCount: 320,
      completionPercentage: 60,
      isAutoSaved: false
    },
    {
      id: 3,
      title: "স্বাস্থ্যসেবায় ডিজিটাল উদ্ভাবন",
      category: "স্বাস্থ্য",
      author: "সাংবাদিক নাসিম",
      lastEdited: "২০২৪-০১-১৩ ০৮:৪৫ এএম",
      wordCount: 780,
      completionPercentage: 90,
      isAutoSaved: true
    },
    {
      id: 4,
      title: "কৃষি ক্ষেত্রে আধুনিক প্রযুক্তি",
      category: "কৃষি",
      author: "সাংবাদিক সালিম",
      lastEdited: "২০২৪-০১-১২ ০৭:৩০ এএম",
      wordCount: 180,
      completionPercentage: 30,
      isAutoSaved: true
    },
    {
      id: 5,
      title: "বাংলাদেশের অর্থনৈতিক সম্ভাবনা",
      category: "অর্থনীতি",
      author: "সাংবাদিক তানভীর",
      lastEdited: "২০২৪-০১-১১ ০৬:১৫ এএম",
      wordCount: 650,
      completionPercentage: 85,
      isAutoSaved: false
    }
  ]);

  const handleEdit = (draftId: number) => {
    console.log("Editing draft:", draftId);
    // Navigate to edit form
  };

  const handlePublish = (draftId: number) => {
    console.log("Publishing draft:", draftId);
    // Move to published status
  };

  const handleDelete = (draftId: number) => {
    setDrafts(drafts.filter(draft => draft.id !== draftId));
  };

  const handleBulkAction = (action: string) => {
    console.log("Bulk action:", action, "on:", selectedDrafts);
    // Handle bulk actions
  };

  const filteredDrafts = drafts.filter(draft => 
    draft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    draft.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    draft.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCompletionBadge = (percentage: number) => {
    if (percentage >= 80) {
      return <Badge className="bg-green-100 text-green-800">প্রায় সম্পূর্ণ</Badge>;
    } else if (percentage >= 50) {
      return <Badge className="bg-yellow-100 text-yellow-800">অর্ধেক</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-800">শুরুর দিকে</Badge>;
    }
  };

  const getTotalWords = () => drafts.reduce((total, draft) => total + draft.wordCount, 0);
  const getAverageCompletion = () => {
    const total = drafts.reduce((sum, draft) => sum + draft.completionPercentage, 0);
    return Math.round(total / drafts.length);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text flex items-center">
            <DraftingCompass className="mr-2 h-6 w-6 text-gray-600" />
            খসড়া সংবাদ
          </h1>
          <p className="text-gray-600 bn-text">অসম্পূর্ণ ও খসড়া সংবাদগুলি পরিচালনা করুন</p>
        </div>
        <Button className="w-full sm:w-auto bn-text">
          <Edit className="mr-2 h-4 w-4" />
          নতুন খসড়া
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-gray-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট খসড়া</p>
                <p className="text-2xl font-bold text-gray-900">{drafts.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Edit className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট শব্দ</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalWords().toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">গড় সম্পূর্ণতা</p>
                <p className="text-2xl font-bold text-gray-900">{getAverageCompletion()}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">অনুসন্ধান ও ফিল্টার</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="খসড়া খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bn-text"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bulk Actions */}
      {selectedDrafts.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 bn-text">
                {selectedDrafts.length}টি খসড়া নির্বাচিত
              </span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("publish")} className="bn-text">
                  প্রকাশ করুন
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleBulkAction("delete")} className="text-red-600 bn-text">
                  মুছে ফেলুন
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Drafts Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="bn-text">খসড়া তালিকা ({filteredDrafts.length}টি)</CardTitle>
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
                          setSelectedDrafts(filteredDrafts.map(draft => draft.id));
                        } else {
                          setSelectedDrafts([]);
                        }
                      }}
                    />
                  </TableHead>
                  <TableHead className="bn-text">শিরোনাম</TableHead>
                  <TableHead className="bn-text">বিভাগ</TableHead>
                  <TableHead className="bn-text">লেখক</TableHead>
                  <TableHead className="bn-text">সম্পূর্ণতা</TableHead>
                  <TableHead className="bn-text">শব্দ সংখ্যা</TableHead>
                  <TableHead className="bn-text">শেষ সম্পাদনা</TableHead>
                  <TableHead className="text-right bn-text">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDrafts.map((draft) => (
                  <TableRow key={draft.id}>
                    <TableCell>
                      <input 
                        type="checkbox" 
                        checked={selectedDrafts.includes(draft.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedDrafts([...selectedDrafts, draft.id]);
                          } else {
                            setSelectedDrafts(selectedDrafts.filter(id => id !== draft.id));
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div>
                          <p className="font-medium text-gray-900 bn-text">{draft.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            {draft.isAutoSaved && (
                              <Badge variant="outline" className="text-xs">
                                <Save className="mr-1 h-3 w-3" />
                                অটো সেভ
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="bn-text">{draft.category}</TableCell>
                    <TableCell className="bn-text">{draft.author}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getCompletionBadge(draft.completionPercentage)}
                        <span className="text-sm text-gray-500">{draft.completionPercentage}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="bn-text">{draft.wordCount.toLocaleString()}</TableCell>
                    <TableCell className="bn-text">{draft.lastEdited}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(draft.id)} className="bn-text">
                            <Edit className="mr-2 h-4 w-4" />
                            সম্পাদনা করুন
                          </DropdownMenuItem>
                          <DropdownMenuItem className="bn-text">
                            <Eye className="mr-2 h-4 w-4" />
                            প্রিভিউ দেখুন
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handlePublish(draft.id)} className="bn-text">
                            <Send className="mr-2 h-4 w-4" />
                            প্রকাশ করুন
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(draft.id)} 
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

export default Drafts;