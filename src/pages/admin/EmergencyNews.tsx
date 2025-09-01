import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  AlertTriangle, 
  Plus, 
  Edit, 
  Eye, 
  Trash2,
  Clock,
  Zap,
  Users,
  Send,
  Siren
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EmergencyNews = () => {
  const [emergencyAlerts, setEmergencyAlerts] = useState([
    {
      id: 1,
      title: "জরুরি: ঢাকায় ভারী বৃষ্টির পূর্বাভাস",
      message: "আবহাওয়া অধিদপ্তর ঢাকা ও আশেপাশের এলাকায় আগামী ৬ ঘন্টায় ভারী বৃষ্টির পূর্বাভাস দিয়েছে। সবাইকে সতর্ক থাকার অনুরোধ।",
      severity: "high",
      isActive: true,
      createdAt: "২০২৪-০১-১৫ ১০:৩০ এএম",
      views: 15000,
      type: "weather"
    },
    {
      id: 2,
      title: "ট্রাফিক সতর্কতা: গুলশান এলাকায় রাস্তা বন্ধ",
      message: "গুলশান-২ এ পানির পাইপ ফেটে যাওয়ার কারণে রাস্তা বন্ধ রয়েছে। বিকল্প পথ ব্যবহার করুন।",
      severity: "medium",
      isActive: true,
      createdAt: "২০২৪-০১-১৫ ০৯:১৫ এএম",
      views: 8500,
      type: "traffic"
    },
    {
      id: 3,
      title: "স্বাস্থ্য সতর্কতা: ডেঙ্গু প্রতিরোধে সচেতনতা",
      message: "ডেঙ্গু রোগের প্রকোপ বৃদ্ধি পেয়েছে। পানি জমতে না দেওয়ার পরামর্শ দেয়া হচ্ছে।",
      severity: "medium",
      isActive: false,
      createdAt: "২০২৪-০১-১৪ ০৮:৪৫ এএম",
      views: 12000,
      type: "health"
    }
  ]);

  const [newAlert, setNewAlert] = useState({
    title: "",
    message: "",
    severity: "medium",
    type: "general"
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-100 text-red-800">জরুরি</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">মাধ্যম</Badge>;
      case "low":
        return <Badge className="bg-green-100 text-green-800">সাধারণ</Badge>;
      default:
        return <Badge>অজানা</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "weather":
        return "🌧️";
      case "traffic":
        return "🚗";
      case "health":
        return "🏥";
      default:
        return "📢";
    }
  };

  const toggleAlertStatus = (id: number) => {
    setEmergencyAlerts(alerts => 
      alerts.map(alert => 
        alert.id === id 
          ? { ...alert, isActive: !alert.isActive }
          : alert
      )
    );
  };

  const createEmergencyAlert = () => {
    if (!newAlert.title || !newAlert.message) return;

    const alert = {
      id: emergencyAlerts.length + 1,
      ...newAlert,
      isActive: true,
      createdAt: new Date().toLocaleString('bn-BD'),
      views: 0
    };

    setEmergencyAlerts([alert, ...emergencyAlerts]);
    setNewAlert({ title: "", message: "", severity: "medium", type: "general" });
    setIsDialogOpen(false);
  };

  const getActiveAlerts = () => emergencyAlerts.filter(alert => alert.isActive).length;
  const getTotalViews = () => emergencyAlerts.reduce((total, alert) => total + alert.views, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text flex items-center">
            <Siren className="mr-2 h-6 w-6 text-red-600" />
            জরুরি সংবাদ
          </h1>
          <p className="text-gray-600 bn-text">জরুরি সতর্কতা ও ব্রেকিং নিউজ পরিচালনা</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 bn-text">
              <Siren className="mr-2 h-4 w-4" />
              জরুরি সতর্কতা পাঠান
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="bn-text">নতুন জরুরি সতর্কতা</DialogTitle>
              <DialogDescription className="bn-text">
                জরুরি সতর্কতা বার্তা তৈরি করুন যা তৎক্ষণাত প্রকাশিত হবে।
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">শিরোনাম</label>
                <Input
                  value={newAlert.title}
                  onChange={(e) => setNewAlert({...newAlert, title: e.target.value})}
                  placeholder="জরুরি সংবাদের শিরোনাম..."
                  className="bn-text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">বার্তা</label>
                <Textarea
                  value={newAlert.message}
                  onChange={(e) => setNewAlert({...newAlert, message: e.target.value})}
                  placeholder="বিস্তারিত বার্তা লিখুন..."
                  className="min-h-[100px] bn-text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium bn-text">গুরুত্ব</label>
                  <select 
                    value={newAlert.severity}
                    onChange={(e) => setNewAlert({...newAlert, severity: e.target.value})}
                    className="w-full p-2 border rounded-md bn-text"
                  >
                    <option value="high">জরুরি</option>
                    <option value="medium">মাধ্যম</option>
                    <option value="low">সাধারণ</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium bn-text">ধরন</label>
                  <select 
                    value={newAlert.type}
                    onChange={(e) => setNewAlert({...newAlert, type: e.target.value})}
                    className="w-full p-2 border rounded-md bn-text"
                  >
                    <option value="general">সাধারণ</option>
                    <option value="weather">আবহাওয়া</option>
                    <option value="traffic">যানবাহন</option>
                    <option value="health">স্বাস্থ্য</option>
                  </select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="bn-text">
                বাতিল
              </Button>
              <Button onClick={createEmergencyAlert} className="bg-red-600 hover:bg-red-700 bn-text">
                <Send className="mr-2 h-4 w-4" />
                পাঠান
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
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">সক্রিয় সতর্কতা</p>
                <p className="text-2xl font-bold text-gray-900">{getActiveAlerts()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট দর্শক</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalViews().toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">গড় রেসপন্স</p>
                <p className="text-2xl font-bold text-gray-900 bn-text">৫ মিনিট</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Alerts List */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">জরুরি সতর্কতা তালিকা</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {emergencyAlerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-4 border rounded-lg transition-all ${
                  alert.isActive ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-lg">{getTypeIcon(alert.type)}</span>
                      {getSeverityBadge(alert.severity)}
                      {alert.isActive && (
                        <Badge className="bg-green-100 text-green-800 animate-pulse">সক্রিয়</Badge>
                      )}
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 bn-text">
                      {alert.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-3 bn-text">
                      {alert.message}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center bn-text">
                        <Clock className="mr-1 h-3 w-3" />
                        {alert.createdAt}
                      </span>
                      <span className="flex items-center bn-text">
                        <Eye className="mr-1 h-3 w-3" />
                        {alert.views.toLocaleString()} দর্শক
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 ml-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 bn-text">সক্রিয়</span>
                      <Switch
                        checked={alert.isActive}
                        onCheckedChange={() => toggleAlertStatus(alert.id)}
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
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyNews;