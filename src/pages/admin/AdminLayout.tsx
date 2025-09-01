import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import AdminSidebar from "@/components/AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30 w-full">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center space-x-4 min-w-0 flex-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden flex-shrink-0"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <div className="hidden sm:flex items-center space-x-4 min-w-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="সংবাদ খুঁজুন..."
                    className="pl-10 w-48 md:w-64 bn-text"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-700 bn-text">অ্যাডমিন</p>
                  <p className="text-xs text-gray-500">ব্যবস্থাপক</p>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">অ</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 min-h-0 overflow-auto">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;