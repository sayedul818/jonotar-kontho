import { Search, Menu, Globe, User, Calendar, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogoutMutation, useGetCurrentUserQuery } from "@/store/api/authApi";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // RTK Query hooks
  const { data: currentUser } = useGetCurrentUserQuery(undefined, {
    skip: !localStorage.getItem('authToken')
  });
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      localStorage.removeItem('authToken');
      toast({
        title: "লগআউট সফল",
        description: "আপনি সফলভাবে লগআউট করেছেন।",
      });
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navItems = [
    { name: "সর্বশেষ", nameBn: "সর্বশেষ", path: "/" },
    { name: "বাংলাদেশ", nameBn: "বাংলাদেশ", path: "/national" }, 
    { name: "রাজনীতি", nameBn: "রাজনীতি", path: "/politics" },
    { name: "বিশ্ব", nameBn: "বিশ্ব", path: "/international" },
    { name: "বাণিজ্য", nameBn: "বাণিজ্য", path: "/business" },
    { name: "মতামত", nameBn: "মতামত", path: "/opinion" },
    { name: "খেলা", nameBn: "খেলা", path: "/sports" }, 
    { name: "বিনোদন", nameBn: "বিনোদন", path: "/entertainment" },
    { name: "চাকরি", nameBn: "চাকরি", path: "/jobs" },
    { name: "জীবনযাপন", nameBn: "জীবনযাপন", path: "/lifestyle" },
    { name: "ভিডিও", nameBn: "ভিডিও", path: "/videos" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Breaking News Ticker */}
      <div className="bg-primary text-white py-1 px-4 overflow-hidden">
        <div className="flex items-center ">
          <span className="text-sm font-semibold mr-4 whitespace-nowrap">আজকের হেডলাইনস:</span>
          <div className="relative overflow-hidden w-full">
           <div className="flex space-x-8 animate-marquee ">
            <span className="text-sm whitespace-nowrap">প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা</span>
            <span className="text-sm whitespace-nowrap">শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ</span>
            <span className="text-sm whitespace-nowrap">স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব</span>
           </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl font-bold text-primary bn-text">
                জনতার<span className="text-red-600"> কন্ঠ</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-primary transition-colors font-medium text-sm bn-text"
                >
                  {item.nameBn}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Search 
                  className="h-5 w-5 text-gray-500 cursor-pointer hover:text-primary" 
                  onClick={() => setIsSearchOpen(true)}
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-sm bn-text"
                  onClick={() => window.open('/e-paper.pdf', '_blank')}
                >
                  ই-পেপার
                </Button>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Globe className="h-4 w-4" />
                  <span>Eng</span>
                </div>
                
                {/* User Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {currentUser ? (
                      <>
                        <DropdownMenuItem className="bn-text">
                          {currentUser.name}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="bn-text">
                          প্রোফাইল
                        </DropdownMenuItem>
                        <DropdownMenuItem className="bn-text">
                          সেটিংস
                        </DropdownMenuItem>
                        {currentUser.role === 'admin' && (
                          <DropdownMenuItem asChild className="bn-text">
                            <Link to="/admin">
                              অ্যাডমিন প্যানেল
                            </Link>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="bn-text">
                          লগআউট
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <DropdownMenuItem asChild className="bn-text">
                          <Link to="/auth">
                            লগইন
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="bn-text">
                          <Link to="/auth">
                            নিবন্ধন
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-700 hover:text-primary transition-colors font-medium py-2 px-3 rounded-md hover:bg-gray-50 bn-text"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.nameBn}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" className="text-sm bn-text">
                    ই-পেপার
                  </Button>
                  <Button variant="outline" size="sm" className="text-sm">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 pt-20">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold bn-text">সংবাদ খুঁজুন</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="যেকোনো সংবাদ খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bn-text"
                  autoFocus
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSearch} className="bn-text">
                  খুঁজুন
                </Button>
              </div>
              
              {/* Popular Searches */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3 bn-text">জনপ্রিয় খোঁজ:</h4>
                <div className="flex flex-wrap gap-2">
                  {['রাজনীতি', 'অর্থনীতি', 'খেলা', 'বিনোদন', 'চাকরি'].map((term) => (
                    <Button 
                      key={term}
                      variant="outline" 
                      size="sm" 
                      className="text-xs bn-text"
                      onClick={() => setSearchQuery(term)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;