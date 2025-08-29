import { Search, Menu, Globe, User, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="flex items-center">
          <span className="text-sm font-semibold mr-4 whitespace-nowrap">আজকের হেডলাইনস:</span>
          <div className="flex space-x-8 animate-marquee">
            <span className="text-sm whitespace-nowrap">প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা</span>
            <span className="text-sm whitespace-nowrap">শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ</span>
            <span className="text-sm whitespace-nowrap">স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব</span>
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
                প্রথম<span className="text-red-600">আলো</span>
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
                <Search className="h-5 w-5 text-gray-500 cursor-pointer hover:text-primary" />
                <Button variant="outline" size="sm" className="text-sm bn-text">
                  ই-পেপার
                </Button>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Globe className="h-4 w-4" />
                  <span>Eng</span>
                </div>
                <User className="h-5 w-5 text-gray-500 cursor-pointer hover:text-primary" />
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
    </header>
  );
};

export default Header;