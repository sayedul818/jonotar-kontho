import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Clock, Building, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/footer";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("সব");

  const categories = ["সব", "সরকারি", "বেসরকারি", "ব্যাংক", "এনজিও", "আইটি", "শিক্ষা"];

  const jobListings = [
    {
      id: 1,
      title: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
      company: "টেক সলিউশনস লিমিটেড",
      logo: "🏢",
      location: "ঢাকা, বাংলাদেশ",
      type: "পূর্ণকালীন",
      salary: "৮০,০০০ - ১,২০,০০০ টাকা",
      deadline: "৩১ ডিসেম্বর, ২০২৪",
      category: "আইটি",
      description: "রিয়্যাক্ট, নোড.জেএস এবং পাইথনে অভিজ্ঞতা প্রয়োজন।",
      experience: "৩-৫ বছর",
      education: "কম্পিউটার সায়েন্সে স্নাতক",
      postedDate: "৫ দিন আগে"
    },
    {
      id: 2,
      title: "অ্যাসিস্ট্যান্ট ম্যানেজার",
      company: "ইসলামী ব্যাংক বাংলাদেশ",
      logo: "🏦",
      location: "চট্টগ্রাম, বাংলাদেশ",
      type: "পূর্ণকালীন",
      salary: "৫০,০০০ - ৭০,০০০ টাকা",
      deadline: "২৮ ডিসেম্বর, ২০২৪",
      category: "ব্যাংক",
      description: "ব্যাংকিং অভিজ্ঞতা এবং আর্থিক বিশ্লেষণ দক্ষতা প্রয়োজন।",
      experience: "২-৪ বছর",
      education: "বিবিএ/এমবিএ (ফিন্যান্স)",
      postedDate: "৩ দিন আগে"
    },
    {
      id: 3,
      title: "প্রকল্প সমন্বয়কারী",
      company: "ব্র্যাক",
      logo: "🤝",
      location: "রংপুর, বাংলাদেশ",
      type: "চুক্তিভিত্তিক",
      salary: "৬০,০০০ - ৮০,০০০ টাকা",
      deadline: "১৫ জানুয়ারি, ২০২৫",
      category: "এনজিও",
      description: "উন্নয়ন প্রকল্প পরিচালনা এবং কমিউনিটি কাজে অভিজ্ঞতা।",
      experience: "৩-৬ বছর",
      education: "সামাজিক বিজ্ঞানে মাস্টার্স",
      postedDate: "১ দিন আগে"
    },
    {
      id: 4,
      title: "সহকারী শিক্ষক",
      company: "ঢাকা রেসিডেনসিয়াল মডেল কলেজ",
      logo: "🎓",
      location: "ঢাকা, বাংলাদেশ",
      type: "পূর্ণকালীন",
      salary: "৩৫,০০০ - ৪৫,০০০ টাকা",
      deadline: "২০ জানুয়ারি, ২০২৫",
      category: "শিক্ষা",
      description: "গণিত ও পদার্থবিজ্ঞানে স্নাতক ডিগ্রি প্রয়োজন।",
      experience: "১-৩ বছর",
      education: "বিএসসি (গণিত/পদার্থ)",
      postedDate: "২ দিন আগে"
    },
    {
      id: 5,
      title: "কাস্টমার সার্ভিস অফিসার",
      company: "গ্রামীণফোন",
      logo: "📱",
      location: "সিলেট, বাংলাদেশ",
      type: "পূর্ণকালীন",
      salary: "২৮,০০০ - ৩৫,০০০ টাকা",
      deadline: "১০ জানুয়ারি, ২০২৫",
      category: "বেসরকারি",
      description: "ভাল যোগাযোগ দক্ষতা এবং ইংরেজিতে দক্ষতা প্রয়োজন।",
      experience: "০-২ বছর",
      education: "যেকোনো বিষয়ে স্নাতক",
      postedDate: "৪ দিন আগে"
    },
    {
      id: 6,
      title: "উপজেলা নির্বাহী অফিসার",
      company: "বাংলাদেশ সরকার",
      logo: "🏛️",
      location: "যশোর, বাংলাদেশ",
      type: "সরকারি",
      salary: "৫৬,০০০ - ৮২,০০০ টাকা",
      deadline: "৫ ফেব্রুয়ারি, ২০২৫",
      category: "সরকারি",
      description: "৩৮তম বিসিএস প্রশাসন ক্যাডারের পদ।",
      experience: "বিসিএস পাস",
      education: "যেকোনো বিষয়ে স্নাতক",
      postedDate: "১ সপ্তাহ আগে"
    }
  ];

  const filteredJobs = jobListings.filter(job => 
    (selectedCategory === "সব" || job.category === selectedCategory) &&
    (searchTerm === "" || 
     job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 bn-text">
            চাকরির খবর
          </h1>
          <p className="text-muted-foreground bn-text">
            বাংলাদেশের সর্বশেষ চাকরির সুযোগ ও নিয়োগ বিজ্ঞপ্তি
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="চাকরি খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bn-text"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-colors bn-text ${
                  selectedCategory === category 
                    ? "bg-primary text-white" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Job Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{filteredJobs.length}</div>
              <p className="text-sm text-muted-foreground bn-text">মোট চাকরি</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">১২</div>
              <p className="text-sm text-muted-foreground bn-text">নতুন পোস্ট</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">৮৫</div>
              <p className="text-sm text-muted-foreground bn-text">কোম্পানি</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">৪২</div>
              <p className="text-sm text-muted-foreground bn-text">সরকারি চাকরি</p>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{job.logo}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl mb-2 bn-text hover:text-primary cursor-pointer">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          <span className="bn-text">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="bn-text">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span className="bn-text">{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className="bg-primary/10 text-primary bn-text">
                      {job.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground bn-text">
                      {job.postedDate}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 bn-text">{job.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium bn-text">বেতন</span>
                    </div>
                    <p className="text-sm text-muted-foreground bn-text">{job.salary}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium bn-text">অভিজ্ঞতা</span>
                    </div>
                    <p className="text-sm text-muted-foreground bn-text">{job.experience}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium bn-text">শেষ তারিখ</span>
                    </div>
                    <p className="text-sm text-red-600 bn-text">{job.deadline}</p>
                  </div>
                  <div className="md:col-span-2 lg:col-span-1">
                    <Button className="w-full bn-text">
                      আবেদন করুন
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="bn-text">
            আরও চাকরি দেখুন
          </Button>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Jobs;