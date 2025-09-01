import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  DragDropContext, 
  Droppable, 
  Draggable,
  DropResult
} from "@hello-pangea/dnd";
import { 
  GripVertical, 
  Plus, 
  Edit, 
  Eye, 
  Trash2,
  Clock,
  TrendingUp,
  Target
} from "lucide-react";

const TodaysHeadlines = () => {
  const [headlines, setHeadlines] = useState([
    {
      id: "1",
      title: "প্রধানমন্ত্রীর গুরুত্বপূর্ণ ঘোষণা",
      category: "রাজনীতি",
      priority: "high",
      isActive: true,
      publishTime: "১০:৩০ এএম",
      views: 2500,
      position: 1
    },
    {
      id: "2", 
      title: "অর্থনৈতিক সংস্কার পরিকল্পনা",
      category: "অর্থনীতি",
      priority: "high",
      isActive: true,
      publishTime: "০৯:১৫ এএম",
      views: 1800,
      position: 2
    },
    {
      id: "3",
      title: "শিক্ষা ক্ষেত্রে নতুন উদ্যোগ",
      category: "শিক্ষা",
      priority: "medium",
      isActive: true,
      publishTime: "০৮:৪৫ এএম",
      views: 1200,
      position: 3
    },
    {
      id: "4",
      title: "স্বাস্থ্যসেবা উন্নয়নে বাজেট বৃদ্ধি",
      category: "স্বাস্থ্য",
      priority: "medium",
      isActive: false,
      publishTime: "০৮:০০ এএম",
      views: 950,
      position: 4
    },
    {
      id: "5",
      title: "পরিবেশ রক্ষায় নতুন আইন",
      category: "পরিবেশ",
      priority: "low",
      isActive: true,
      publishTime: "০৭:৩০ এএম",
      views: 650,
      position: 5
    }
  ]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(headlines);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update positions
    const updatedItems = items.map((item, index) => ({
      ...item,
      position: index + 1
    }));

    setHeadlines(updatedItems);
  };

  const toggleHeadlineStatus = (id: string) => {
    setHeadlines(headlines.map(headline => 
      headline.id === id 
        ? { ...headline, isActive: !headline.isActive }
        : headline
    ));
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">উচ্চ</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">মাধ্যম</Badge>;
      case "low":
        return <Badge className="bg-green-100 text-green-800">নিম্ন</Badge>;
      default:
        return <Badge>অজানা</Badge>;
    }
  };

  const getTotalViews = () => {
    return headlines.reduce((total, headline) => total + headline.views, 0);
  };

  const getActiveHeadlines = () => {
    return headlines.filter(headline => headline.isActive).length;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text">আজকের হেডলাইনস</h1>
          <p className="text-gray-600 bn-text">প্রধান সংবাদগুলি পরিচালনা ও সাজান</p>
        </div>
        <Button className="w-full sm:w-auto bn-text">
          <Plus className="mr-2 h-4 w-4" />
          হেডলাইন যোগ করুন
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">সক্রিয় হেডলাইন</p>
                <p className="text-2xl font-bold text-gray-900">{getActiveHeadlines()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট ভিউ</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalViews().toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">শেষ আপডেট</p>
                <p className="text-2xl font-bold text-gray-900 bn-text">১০:৩০ এএম</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Headlines Management */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">হেডলাইন তালিকা</CardTitle>
          <p className="text-sm text-gray-600 bn-text">
            হেডলাইনগুলি টেনে এনে সাজান। সর্বোচ্চ অগ্রাধিকার উপরে থাকবে।
          </p>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="headlines">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                  {headlines.map((headline, index) => (
                    <Draggable key={headline.id} draggableId={headline.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className={`p-4 border rounded-lg bg-white transition-shadow ${
                            snapshot.isDragging ? 'shadow-lg' : 'shadow-sm'
                          } ${!headline.isActive ? 'opacity-60' : ''}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 flex-1">
                              <div
                                {...provided.dragHandleProps}
                                className="text-gray-400 hover:text-gray-600 cursor-grab"
                              >
                                <GripVertical className="h-5 w-5" />
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <span className="text-sm font-bold text-gray-600">#{headline.position}</span>
                                  {getPriorityBadge(headline.priority)}
                                  <Badge variant="outline" className="bn-text">{headline.category}</Badge>
                                </div>
                                <h3 className="font-medium text-gray-900 mb-1 bn-text">
                                  {headline.title}
                                </h3>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span className="bn-text">প্রকাশ: {headline.publishTime}</span>
                                  <span className="bn-text">ভিউ: {headline.views.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600 bn-text">সক্রিয়</span>
                                <Switch
                                  checked={headline.isActive}
                                  onCheckedChange={() => toggleHeadlineStatus(headline.id)}
                                />
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodaysHeadlines;