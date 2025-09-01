import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Users,
  Search,
  Shield,
  Eye,
  Lock,
  Unlock,
  UserCheck
} from "lucide-react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "আহমদ হাসান",
      email: "ahmad@jontorakontho.com",
      role: "admin",
      status: "active",
      lastLogin: "২০২৪-০১-১৫ ১০:৩০ এএম",
      articlesCount: 45,
      joinDate: "২০২৩-০৬-১৫",
      avatar: ""
    },
    {
      id: 2,
      name: "ফাতিমা খাতুন",
      email: "fatima@jontorakontho.com",
      role: "editor",
      status: "active",
      lastLogin: "২০২৪-০১-১৫ ০৯:১৫ এএম",
      articlesCount: 32,
      joinDate: "২০২৩-০৮-২০",
      avatar: ""
    },
    {
      id: 3,
      name: "রহিম উদ্দিন",
      email: "rahim@jontorakontho.com",
      role: "reporter",
      status: "active",
      lastLogin: "২০২৪-০১-১৪ ০৮:৪৫ এএম",
      articlesCount: 78,
      joinDate: "২০২৩-০৪-১০",
      avatar: ""
    },
    {
      id: 4,
      name: "নাসির আহমেদ",
      email: "nasir@jontorakontho.com",
      role: "reporter",
      status: "inactive",
      lastLogin: "২০২৪-০১-১০ ০৭:৩০ এএম",
      articlesCount: 23,
      joinDate: "২০২৩-১০-০৫",
      avatar: ""
    },
    {
      id: 5,
      name: "সালমা বেগম",
      email: "salma@jontorakontho.com",
      role: "contributor",
      status: "pending",
      lastLogin: "কখনো লগইন করেননি",
      articlesCount: 0,
      joinDate: "২০২৪-০১-১২",
      avatar: ""
    }
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "reporter",
    status: "active"
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleAddUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim()) return;

    const user = {
      id: users.length + 1,
      ...newUser,
      lastLogin: "কখনো লগইন করেননি",
      articlesCount: 0,
      joinDate: new Date().toLocaleDateString('bn-BD'),
      avatar: ""
    };

    setUsers([...users, user]);
    setNewUser({ name: "", email: "", role: "reporter", status: "active" });
    setIsDialogOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleToggleUserStatus = (id: number) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-red-100 text-red-800">অ্যাডমিন</Badge>;
      case "editor":
        return <Badge className="bg-blue-100 text-blue-800">সম্পাদক</Badge>;
      case "reporter":
        return <Badge className="bg-green-100 text-green-800">সাংবাদিক</Badge>;
      case "contributor":
        return <Badge className="bg-purple-100 text-purple-800">অবদানকারী</Badge>;
      default:
        return <Badge>অজানা</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">সক্রিয়</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">নিষ্ক্রিয়</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">অপেক্ষমাণ</Badge>;
      default:
        return <Badge>অজানা</Badge>;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getActiveUsers = () => users.filter(user => user.status === 'active').length;
  const getTotalArticles = () => users.reduce((total, user) => total + user.articlesCount, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 bn-text flex items-center">
            <Users className="mr-2 h-6 w-6 text-blue-600" />
            ব্যবহারকারী পরিচালনা
          </h1>
          <p className="text-gray-600 bn-text">সিস্টেমের ব্যবহারকারীদের পরিচালনা করুন</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bn-text">
              <Plus className="mr-2 h-4 w-4" />
              নতুন ব্যবহারকারী
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="bn-text">নতুন ব্যবহারকারী যোগ</DialogTitle>
              <DialogDescription className="bn-text">
                নতুন ব্যবহারকারী অ্যাকাউন্ট তৈরি করুন।
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">পূর্ণ নাম *</label>
                <Input
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  placeholder="ব্যবহারকারীর পূর্ণ নাম"
                  className="bn-text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium bn-text">ইমেইল ঠিকানা *</label>
                <Input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  placeholder="user@example.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium bn-text">ভূমিকা</label>
                  <Select value={newUser.role} onValueChange={(value) => setNewUser({...newUser, role: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin" className="bn-text">অ্যাডমিন</SelectItem>
                      <SelectItem value="editor" className="bn-text">সম্পাদক</SelectItem>
                      <SelectItem value="reporter" className="bn-text">সাংবাদিক</SelectItem>
                      <SelectItem value="contributor" className="bn-text">অবদানকারী</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium bn-text">অবস্থা</label>
                  <Select value={newUser.status} onValueChange={(value) => setNewUser({...newUser, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active" className="bn-text">সক্রিয়</SelectItem>
                      <SelectItem value="inactive" className="bn-text">নিষ্ক্রিয়</SelectItem>
                      <SelectItem value="pending" className="bn-text">অপেক্ষমাণ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="bn-text">
                বাতিল
              </Button>
              <Button onClick={handleAddUser} className="bn-text">
                যোগ করুন
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
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট ব্যবহারকারী</p>
                <p className="text-2xl font-bold text-gray-900">{users.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <UserCheck className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">সক্রিয় ব্যবহারকারী</p>
                <p className="text-2xl font-bold text-gray-900">{getActiveUsers()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 bn-text">মোট নিবন্ধ</p>
                <p className="text-2xl font-bold text-gray-900">{getTotalArticles()}</p>
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
                  placeholder="ব্যবহারকারী খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bn-text"
                />
              </div>
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="ভূমিকা নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="bn-text">সকল ভূমিকা</SelectItem>
                <SelectItem value="admin" className="bn-text">অ্যাডমিন</SelectItem>
                <SelectItem value="editor" className="bn-text">সম্পাদক</SelectItem>
                <SelectItem value="reporter" className="bn-text">সাংবাদিক</SelectItem>
                <SelectItem value="contributor" className="bn-text">অবদানকারী</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="অবস্থা নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="bn-text">সকল অবস্থা</SelectItem>
                <SelectItem value="active" className="bn-text">সক্রিয়</SelectItem>
                <SelectItem value="inactive" className="bn-text">নিষ্ক্রিয়</SelectItem>
                <SelectItem value="pending" className="bn-text">অপেক্ষমাণ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle className="bn-text">ব্যবহারকারী তালিকা ({filteredUsers.length}জন)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bn-text">ব্যবহারকারী</TableHead>
                  <TableHead className="bn-text">ভূমিকা</TableHead>
                  <TableHead className="bn-text">অবস্থা</TableHead>
                  <TableHead className="bn-text">নিবন্ধ</TableHead>
                  <TableHead className="bn-text">শেষ লগইন</TableHead>
                  <TableHead className="bn-text">যোগদান</TableHead>
                  <TableHead className="text-right bn-text">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback className="bn-text">
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900 bn-text">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="bn-text">{user.articlesCount}টি</TableCell>
                    <TableCell className="bn-text">{user.lastLogin}</TableCell>
                    <TableCell className="bn-text">{user.joinDate}</TableCell>
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
                            প্রোফাইল দেখুন
                          </DropdownMenuItem>
                          <DropdownMenuItem className="bn-text">
                            <Edit className="mr-2 h-4 w-4" />
                            সম্পাদনা করুন
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleToggleUserStatus(user.id)}
                            className="bn-text"
                          >
                            {user.status === 'active' ? (
                              <>
                                <Lock className="mr-2 h-4 w-4" />
                                নিষ্ক্রিয় করুন
                              </>
                            ) : (
                              <>
                                <Unlock className="mr-2 h-4 w-4" />
                                সক্রিয় করুন
                              </>
                            )}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeleteUser(user.id)}
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

export default UserManagement;