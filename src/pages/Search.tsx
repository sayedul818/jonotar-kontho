import { useState } from "react";
import { Search as SearchIcon, Filter, Clock, Eye, User } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  // Mock search results
  const searchResults = [
    {
      id: 1,
      title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা ঘোষণা",
      excerpt: "দেশের অর্থনৈতিক উন্নয়নে নতুন দিগন্ত উন্মোচন করবে এই পরিকল্পনা। বিশেষজ্ঞরা এটিকে যুগান্তকারী বলে মনে করছেন।",
      image: "/src/assets/economy-news.jpg",
      category: "জাতীয়",
      time: "২ ঘন্টা আগে",
      views: 15420,
      author: "আবুল কালাম",
      relevance: 95
    },
    {
      id: 2,
      title: "Technology Advancement in Healthcare",
      excerpt: "Revolutionary changes in medical technology are transforming patient care and treatment outcomes.",
      image: "/src/assets/tech-news.jpg",
      category: "Technology",
      time: "3 hours ago",
      views: 12850,
      author: "Dr. Sarah Johnson",
      relevance: 88
    },
    {
      id: 3,
      title: "Sports Championship Results",
      excerpt: "Latest updates from international sports competitions and championship results.",
      image: "/src/assets/sports-news.jpg",
      category: "Sports",
      time: "4 hours ago",
      views: 9630,
      author: "Mike Wilson",
      relevance: 82
    },
    {
      id: 4,
      title: "Business Market Analysis",
      excerpt: "Comprehensive analysis of current market trends and business opportunities.",
      image: "/src/assets/culture-news.jpg",
      category: "Business",
      time: "5 hours ago",
      views: 7220,
      author: "Lisa Chen",
      relevance: 75
    },
    {
      id: 5,
      title: "Educational Policy Changes",
      excerpt: "New educational policies aim to improve learning outcomes and student engagement.",
      image: "/src/assets/education-news.jpg",
      category: "Education",
      time: "6 hours ago",
      views: 5840,
      author: "Ahmad Rahman",
      relevance: 70
    }
  ];

  const popularSearches = [
    "প্রধানমন্ত্রী",
    "অর্থনীতি", 
    "শিক্ষা নীতি",
    "স্বাস্থ্য সেবা",
    "ক্রিকেট",
    "প্রযুক্তি",
    "কৃষি উন্নয়ন",
    "পরিবেশ"
  ];

  const handleSearch = () => {
    // In a real app, this would trigger a search API call
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Header */}
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-primary mb-6">Search News</h1>
              
              {/* Search Bar */}
              <div className="flex space-x-2 mb-6">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="খবর খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch}>
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="national">জাতীয়</SelectItem>
                    <SelectItem value="international">আন্তর্জাতিক</SelectItem>
                    <SelectItem value="business">ব্যবসা</SelectItem>
                    <SelectItem value="sports">খেলাধুলা</SelectItem>
                    <SelectItem value="technology">প্রযুক্তি</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {searchQuery && (
                <p className="text-muted-foreground mb-6">
                  Showing {searchResults.length} results for "{searchQuery}"
                </p>
              )}
            </section>

            {/* Search Results */}
            <section>
              <div className="space-y-6 mb-8">
                {searchResults.map((result) => (
                  <Card key={result.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary">{result.category}</Badge>
                            <span className="text-xs text-muted-foreground">
                              {result.relevance}% match
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                            {result.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {result.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{result.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{result.time}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{result.views.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Popular Searches */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                      className="text-xs"
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;