import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  Globe, 
  Shield, 
  Bell, 
  Palette,
  Database,
  Mail,
  Key,
  Save,
  Eye,
  Upload,
  Download
} from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "জনতার কন্ঠ",
    siteNameEn: "Jontar Kontho",
    siteDescription: "বাংলাদেশের শীর্ষস্থানীয় অনলাইন সংবাদপত্র",
    siteUrl: "https://jontorakontho.com",
    contactEmail: "info@jontorakontho.com",
    language: "bn",
    timezone: "Asia/Dhaka",
    
    // Content Settings
    articlesPerPage: 20,
    allowComments: true,
    moderateComments: true,
    enableBreakingNews: true,
    enableNewsletters: true,
    
    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordPolicy: "strong",
    enableCaptcha: true,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    notifyNewArticles: true,
    notifyComments: true,
    
    // Theme Settings
    primaryColor: "#1e40af",
    secondaryColor: "#dc2626",
    headerStyle: "modern",
    fontFamily: "default"
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    console.log("Saving settings:", settings);
    // Save settings logic
  };

  const exportSettings = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'settings_backup.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text flex items-center">
            <SettingsIcon className="mr-2 h-6 w-6 text-gray-600" />
            সিস্টেম সেটিংস
          </h1>
          <p className="text-gray-600 bn-text">ওয়েবসাইটের সামগ্রিক সেটিংস পরিচালনা করুন</p>
        </div>
        
        <div className="flex gap-2 w-full lg:w-auto">
          <Button variant="outline" onClick={exportSettings} className="bn-text">
            <Download className="mr-2 h-4 w-4" />
            ব্যাকআপ
          </Button>
          <Button onClick={saveSettings} className="bn-text">
            <Save className="mr-2 h-4 w-4" />
            সংরক্ষণ করুন
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
          <TabsTrigger value="general" className="bn-text">সাধারণ</TabsTrigger>
          <TabsTrigger value="content" className="bn-text">কন্টেন্ট</TabsTrigger>
          <TabsTrigger value="security" className="bn-text">নিরাপত্তা</TabsTrigger>
          <TabsTrigger value="notifications" className="bn-text">নোটিফিকেশন</TabsTrigger>
          <TabsTrigger value="appearance" className="bn-text">থিম</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="bn-text flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  সাইট তথ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    সাইটের নাম (বাংলা)
                  </label>
                  <Input
                    value={settings.siteName}
                    onChange={(e) => handleSettingChange("siteName", e.target.value)}
                    className="bn-text"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    সাইটের নাম (ইংরেজি)
                  </label>
                  <Input
                    value={settings.siteNameEn}
                    onChange={(e) => handleSettingChange("siteNameEn", e.target.value)}
                    className="en-text"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    সাইটের বিবরণ
                  </label>
                  <Textarea
                    value={settings.siteDescription}
                    onChange={(e) => handleSettingChange("siteDescription", e.target.value)}
                    className="bn-text"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    সাইট URL
                  </label>
                  <Input
                    value={settings.siteUrl}
                    onChange={(e) => handleSettingChange("siteUrl", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="bn-text flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  যোগাযোগ ও ভাষা
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    যোগাযোগের ইমেইল
                  </label>
                  <Input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => handleSettingChange("contactEmail", e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    প্রধান ভাষা
                  </label>
                  <Select value={settings.language} onValueChange={(value) => handleSettingChange("language", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bn" className="bn-text">বাংলা</SelectItem>
                      <SelectItem value="en" className="en-text">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    টাইমজোন
                  </label>
                  <Select value={settings.timezone} onValueChange={(value) => handleSettingChange("timezone", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Asia/Dhaka" className="bn-text">ঢাকা (Asia/Dhaka)</SelectItem>
                      <SelectItem value="UTC" className="en-text">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Content Settings */}
        <TabsContent value="content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="bn-text">কন্টেন্ট প্রদর্শন</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    প্রতি পেজে নিবন্ধ সংখ্যা
                  </label>
                  <Input
                    type="number"
                    value={settings.articlesPerPage}
                    onChange={(e) => handleSettingChange("articlesPerPage", parseInt(e.target.value))}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">মন্তব্য সক্রিয়</span>
                  <Switch
                    checked={settings.allowComments}
                    onCheckedChange={(value) => handleSettingChange("allowComments", value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">মন্তব্য মডারেশন</span>
                  <Switch
                    checked={settings.moderateComments}
                    onCheckedChange={(value) => handleSettingChange("moderateComments", value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="bn-text">বিশেষ ফিচার</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">ব্রেকিং নিউজ</span>
                  <Switch
                    checked={settings.enableBreakingNews}
                    onCheckedChange={(value) => handleSettingChange("enableBreakingNews", value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">নিউজলেটার</span>
                  <Switch
                    checked={settings.enableNewsletters}
                    onCheckedChange={(value) => handleSettingChange("enableNewsletters", value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="bn-text flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  নিরাপত্তা নীতি
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">টু-ফ্যাক্টর অথেন্টিকেশন</span>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(value) => handleSettingChange("twoFactorAuth", value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    সেশন টাইমআউট (মিনিট)
                  </label>
                  <Input
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange("sessionTimeout", parseInt(e.target.value))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    পাসওয়ার্ড নীতি
                  </label>
                  <Select value={settings.passwordPolicy} onValueChange={(value) => handleSettingChange("passwordPolicy", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weak" className="bn-text">সাধারণ</SelectItem>
                      <SelectItem value="medium" className="bn-text">মাধ্যম</SelectItem>
                      <SelectItem value="strong" className="bn-text">শক্তিশালী</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="bn-text flex items-center">
                  <Key className="mr-2 h-5 w-5" />
                  অ্যাক্সেস কন্ট্রোল
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">ক্যাপচা সক্রিয়</span>
                  <Switch
                    checked={settings.enableCaptcha}
                    onCheckedChange={(value) => handleSettingChange("enableCaptcha", value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-700 bn-text">নিরাপত্তা স্ট্যাটাস</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">SSL সক্রিয়</Badge>
                    <Badge className="bg-blue-100 text-blue-800">ফায়ারওয়াল সক্রিয়</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800">ব্যাকআপ স্বয়ংক্রিয়</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="bn-text flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  নোটিফিকেশন পদ্ধতি
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">ইমেইল নোটিফিকেশন</span>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(value) => handleSettingChange("emailNotifications", value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">পুশ নোটিফিকেশন</span>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(value) => handleSettingChange("pushNotifications", value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">এসএমএস নোটিফিকেশন</span>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(value) => handleSettingChange("smsNotifications", value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="bn-text">নোটিফিকেশন ধরন</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">নতুন নিবন্ধ</span>
                  <Switch
                    checked={settings.notifyNewArticles}
                    onCheckedChange={(value) => handleSettingChange("notifyNewArticles", value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 bn-text">নতুন মন্তব্য</span>
                  <Switch
                    checked={settings.notifyComments}
                    onCheckedChange={(value) => handleSettingChange("notifyComments", value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="bn-text flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  রঙ ও থিম
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    প্রাথমিক রঙ
                  </label>
                  <Input
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) => handleSettingChange("primaryColor", e.target.value)}
                    className="h-10"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    গৌণ রঙ
                  </label>
                  <Input
                    type="color"
                    value={settings.secondaryColor}
                    onChange={(e) => handleSettingChange("secondaryColor", e.target.value)}
                    className="h-10"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="bn-text">লেআউট ও ফন্ট</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    হেডার স্টাইল
                  </label>
                  <Select value={settings.headerStyle} onValueChange={(value) => handleSettingChange("headerStyle", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classic" className="bn-text">ক্লাসিক</SelectItem>
                      <SelectItem value="modern" className="bn-text">আধুনিক</SelectItem>
                      <SelectItem value="minimal" className="bn-text">সাধারণ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 bn-text">
                    ফন্ট ফ্যামিলি
                  </label>
                  <Select value={settings.fontFamily} onValueChange={(value) => handleSettingChange("fontFamily", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default" className="bn-text">ডিফল্ট</SelectItem>
                      <SelectItem value="traditional" className="bn-text">ঐতিহ্যবাহী</SelectItem>
                      <SelectItem value="modern" className="bn-text">আধুনিক</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;