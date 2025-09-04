import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Tags, 
  Users, 
  Settings, 
  Menu,
  X,
  Home,
  ChevronDown,
  Plus,
  Edit,
  Trash2,
  ChartSpline,
  DraftingCompass,
  Siren,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AdminSidebar = ({ isOpen, onToggle }: AdminSidebarProps) => {
  const location = useLocation();
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    {
      name: "ড্যাশবোর্ড",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      name: "সংবাদ পরিচালনা",
      icon: FileText,
      path: "/admin/news",
      subItems: [
        { name: "সকল সংবাদ", path: "/admin/news", icon: FileText },
        { name: "আজকের হেডলাইনস", path: "/admin/news/headlines", icon: Target },
        { name: "জরুরি সংবাদ", path: "/admin/news/emergency", icon: Siren },
        { name: "নতুন সংবাদ", path: "/admin/news/create", icon: Plus },
        { name: "সম্পাদনা", path: "/admin/news/edit", icon: Edit },
        { name: "খসড়া (Drafts)", path: "/admin/news/delete", icon: DraftingCompass },

      ]
    },
    {
      name: "বিভাগ পরিচালনা",
      icon: Tags,
      path: "/admin/categories",
    },
    {
      name: "ব্যবহারকারী",
      icon: Users,
      path: "/admin/users",
    },
    {
      name: "রিপোর্ট",
      icon: ChartSpline,
      path: "/admin/reports",
    },
    {
      name: "সেটিংস",
      icon: Settings,
      path: "/admin/settings",
    },
,
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 z-50 h-screen  w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out  lg:translate-x-0 lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center  justify-between p-4 lg:p-5 border-b border-gray-200">
          <Link to="/" className="flex items-center min-w-0">
            <h1 className="text-lg lg:text-xl font-bold text-primary bn-text truncate">
              জনতার<span className="text-red-600"> কন্ঠ</span>
            </h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="lg:hidden flex-shrink-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
          {/* Back to Website */}
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors bn-text"
          >
            <Home className="mr-3 h-4 w-4" />
            ওয়েবসাইটে ফিরুন
          </Link>

          <div className="border-t border-gray-200 pt-4 mt-4">
            {menuItems.map((item) => (
              <div key={item.name} className="mb-1">
                {item.subItems ? (
                  <Collapsible open={isNewsOpen} onOpenChange={setIsNewsOpen}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`w-full justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors bn-text ${
                          location.pathname.startsWith(item.path)
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon className="mr-3 h-4 w-4" />
                          {item.name}
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isNewsOpen ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1 ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors bn-text ${
                            isActive(subItem.path)
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                        >
                          <subItem.icon className="mr-3 h-4 w-4" />
                          {subItem.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors bn-text ${
                      isActive(item.path)
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">অ</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 bn-text">অ্যাডমিন</p>
              <p className="text-xs text-gray-500">admin@jontorakontho.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;