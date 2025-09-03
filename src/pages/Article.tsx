import { Clock, Eye, User, Share2, Facebook, Twitter, MessageCircle, Copy, Heart, Smile, ThumbsUp, ThumbsDown, MessageSquare, Send } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import { useGetNewsByIdQuery, useGetFeaturedNewsQuery } from "@/store/api/newsApi";

const Article = () => {
  const { id } = useParams();
  const [selectedReaction, setSelectedReaction] = useState<string>("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "রহিম উদ্দিন",
      avatar: "R",
      time: "২ ঘন্টা আগে",
      content: "খুবই গুরুত্বপূর্ণ একটি সিদ্ধান্ত। আশা করি সরকার এই পরিকল্পনা সঠিকভাবে বাস্তবায়ন করবে।",
      likes: 12,
      dislikes: 2,
      replies: []
    },
    {
      id: 2,
      author: "ফাতিমা খাতুন",
      avatar: "ফ",
      time: "১ ঘন্টা আগে",
      content: "শিক্ষা খাতে বিনিয়োগ বাড়ানো জরুরি ছিল। এটি একটি ইতিবাচক পদক্ষেপ।",
      likes: 8,
      dislikes: 0,
      replies: []
    }
  ]);

  // RTK Query hooks
  const { data: articleData, isLoading: articleLoading, error: articleError } = useGetNewsByIdQuery(id || '', {
    skip: !id
  });
  const { data: relatedArticlesData = [] } = useGetFeaturedNewsQuery();

  const reactions = [
    { emoji: "👍", label: "Like", count: 245 },
    { emoji: "❤️", label: "Love", count: 156 },
    { emoji: "😮", label: "Wow", count: 89 },
    { emoji: "😢", label: "Sad", count: 12 },
    { emoji: "😡", label: "Angry", count: 5 }
  ];

  // Mock article data - in real app, fetch based on id
  const article = {
    id: 1,
    title: "প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা দেশের অর্থনৈতিক ভবিষ্যৎ পরিবর্তন করবে",
    subtitle: "সরকারের এই উদ্যোগ দেশের অর্থনৈতিক কাঠামোতে এক নতুন মাত্রা যোগ করবে বলে মনে করছেন বিশেষজ্ঞরা",
    author: "আবুল কালাম",
    publishDate: "২৬ ডিসেম্বর, ২০২৪",
    publishTime: "দুপুর ১২:৩০",
    views: 25420,
    category: "জাতীয়",
    featuredImage: "/src/assets/economy-news.jpg",
    content: `
      <p class="text-lg leading-relaxed mb-6">প্রধানমন্ত্রী শেখ হাসিনা আজ এক গুরুত্বপূর্ণ ঘোষণায় দেশের অর্থনৈতিক উন্নয়নের জন্য একটি নতুন পরিকল্পনা উপস্থাপন করেছেন। এই পরিকল্পনায় রয়েছে বিভিন্ন খাতে ব্যাপক বিনিয়োগ এবং কর্মসংস্থান সৃষ্টির বিশাল সুযোগ।</p>

      <h2 class="text-2xl font-bold text-primary mb-4 mt-8">মূল বৈশিষ্ট্যসমূহ</h2>
      <p class="text-lg leading-relaxed mb-4">এই উন্নয়ন পরিকল্পনার মূল বৈশিষ্ট্যগুলোর মধ্যে রয়েছে:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-6 text-lg">
        <li>তথ্য প্রযুক্তি খাতে ৫০০ কোটি টাকার বিনিয়োগ</li>
        <li>কৃষি ক্ষেত্রে আধুনিকায়নের জন্য বিশেষ অনুদান</li>
        <li>শিক্ষা ব্যবস্থায় ডিজিটাল রূপান্তর</li>
        <li>স্বাস্থ্যসেবায় মানোন্নয়নের নতুন উদ্যোগ</li>
      </ul>

      <blockquote class="border-l-4 border-primary bg-gray-50 p-4 italic text-lg my-6">
        "এই পরিকল্পনা বাস্তবায়নের মাধ্যমে আমরা ২০৩০ সালের মধ্যে একটি মধ্যম আয়ের দেশে রূপান্তরিত হব।"
        <footer class="text-primary font-semibold mt-2">— প্রধানমন্ত্রী শেখ হাসিনা</footer>
      </blockquote>

      <h2 class="text-2xl font-bold text-primary mb-4 mt-8">অর্থনৈতিক প্রভাব</h2>
      <p class="text-lg leading-relaxed mb-6">অর্থনীতিবিদরা মনে করছেন, এই পরিকল্পনা বাস্তবায়িত হলে দেশের জিডিপি প্রবৃদ্ধির হার উল্লেখযোগ্যভাবে বৃদ্ধি পাবে। একইসাথে কর্মসংস্থানের নতুন সুযোগ সৃষ্টি হবে।</p>

      <p class="text-lg leading-relaxed mb-6">ঢাকা বিশ্ববিদ্যালয়ের অর্থনীতি বিভাগের অধ্যাপক ড. রহিম উদ্দিন বলেন, "এটি একটি সময়োপযোগী পরিকল্পনা যা দেশের দীর্ঘমেয়াদী উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে।"</p>

      <h2 class="text-2xl font-bold text-primary mb-4 mt-8">বাস্তবায়ন কৌশল</h2>
      <p class="text-lg leading-relaxed mb-6">এই পরিকল্পনা বাস্তবায়নের জন্য সরকার একটি বিশেষ কমিটি গঠন করেছে। এই কমিটির নেতৃত্বে থাকবেন পরিকল্পনা মন্ত্রী। প্রতিটি মন্ত্রণালয় থেকে প্রতিনিধি নিয়ে এই কমিটি গঠিত হবে।</p>

      <p class="text-lg leading-relaxed mb-6">আগামী তিন মাসের মধ্যে এই পরিকল্পনার বিস্তারিত রূপরেখা প্রকাশ করা হবে। এরপর পর্যায়ক্রমে বিভিন্ন প্রকল্প শুরু হবে।</p>
    `
  };

  const relatedArticles = [
    {
      id: 2,
      title: "শিক্ষা ব্যবস্থায় আমূল সংস্কারের উদ্যোগ",
      excerpt: "প্রাথমিক থেকে উচ্চশিক্ষা পর্যন্ত নতুন কারিকুলাম প্রণয়ন।",
      image: "/src/assets/education-news.jpg",
      category: "জাতীয়",
      time: "৩ ঘন্টা আগে"
    },
    {
      id: 3,
      title: "স্বাস্থ্যসেবায় ডিজিটাল বিপ্লব",
      excerpt: "দেশের সকল হাসপাতালে ডিজিটাল স্বাস্থ্যসেবা চালু।",
      image: "/src/assets/health-news.jpg",
      category: "জাতীয়",
      time: "৪ ঘন্টা আগে"
    },
    {
      id: 4,
      title: "কৃষি খাতে নতুন প্রযুক্তি ব্যবহার",
      excerpt: "আধুনিক কৃষি যন্ত্রপাতি ও জৈবিক সার ব্যবহার।",
      image: "/src/assets/culture-news.jpg",
      category: "জাতীয়",
      time: "৫ ঘন্টা আগে"
    },
    {
      id: 5,
      title: "তথ্য প্রযুক্তি খাতে নতুন বিনিয়োগ",
      excerpt: "সরকারি-বেসরকারি অংশীদারিত্বে টেক পার্ক স্থাপন।",
      image: "/src/assets/tech-news.jpg",
      category: "প্রযুক্তি",
      time: "৬ ঘন্টা আগে"
    }
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${title} ${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  const handleComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "আপনি",
        avatar: "আ",
        time: "এখনই",
        content: comment,
        likes: 0,
        dislikes: 0,
        replies: []
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm">
              {/* Article Header */}
              <header className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
                <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Badge className="bg-primary text-white font-medium bn-text">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground bn-text">
                    {article.publishDate}
                  </span>
                </div>
                
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground mb-4 leading-tight bn-text">
                  {article.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed bn-text">
                  {article.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 ">
                      <User className="h-4 w-4" />
                      <span className="font-medium bn-text">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>{article.views.toLocaleString()} পঠিত</span>
                    </div>
                  </div>
                  
                  {/* Social Share Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="hover:bg-blue-50 hover:border-blue-400"
                    >
                      <Twitter className="h-4 w-4 text-blue-400" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('whatsapp')}
                      className="hover:bg-green-50 hover:border-green-400"
                    >
                      <MessageCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('copy')}
                      className="hover:bg-gray-50"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Separator className="mb-6" />
              </header>
              
              {/* Advertisement Banner */}
              <div className="mx-4 md:mx-6 lg:mx-8 mb-6">
                <div className="h-16 md:h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  <span className="text-sm">বিজ্ঞাপন</span>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="px-4 md:px-6 lg:px-8 mb-6">
                <img
                  src={article.featuredImage || "/src/assets/economy-news.jpg"}
                  alt={article.title}
                  className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg"
                />
              </div>
              
              {/* Article Content */}
              <div className="px-6 lg:px-8 pb-8">
                <div 
                  className="prose prose-lg max-w-none text-foreground leading-relaxed bn-text"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Reaction Bar */}
              <div className="px-6 lg:px-8 mb-8">
                <Separator className="mb-4" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-lg font-semibold bn-text">আপনার প্রতিক্রিয়া:</span>
                  <div className="flex flex-wrap gap-2">
                    {reactions.map((reaction) => (
                      <Button
                        key={reaction.label}
                        variant={selectedReaction === reaction.label ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedReaction(reaction.label)}
                        className="flex items-center space-x-1"
                      >
                        <span>{reaction.emoji}</span>
                        <span className="text-xs">{reaction.count}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Social Share Bottom */}
              <div className="px-6 lg:px-8 mb-8">
                <Separator className="mb-6" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-muted-foreground bn-text">এই সংবাদটি শেয়ার করুন:</span>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="hover:bg-blue-50"
                    >
                      <Facebook className="h-4 w-4 mr-1 text-blue-600" />
                      Facebook
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="hover:bg-blue-50"
                    >
                      <Twitter className="h-4 w-4 mr-1 text-blue-400" />
                      Twitter
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShare('whatsapp')}
                      className="hover:bg-green-50"
                    >
                      <MessageCircle className="h-4 w-4 mr-1 text-green-500" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Comments Section */}
              <div className="px-6 lg:px-8 pb-8">
                <Separator className="mb-6" />
                <h3 className="text-xl font-bold mb-4 bn-text">মতামত ({comments.length})</h3>
                
                {/* Comment Form */}
                <div className="mb-6">
                  <Textarea
                    placeholder="আপনার মতামত লিখুন..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="mb-3 bn-text"
                    rows={3}
                  />
                  <Button onClick={handleComment} className="bn-text">
                    <Send className="h-4 w-4 mr-2" />
                    মতামত পোস্ট করুন
                  </Button>
                </div>
                
                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10 bg-primary text-white flex items-center justify-center">
                          <span className="font-medium bn-text">{comment.avatar}</span>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium bn-text">{comment.author}</span>
                            <span className="text-sm text-muted-foreground bn-text">{comment.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 bn-text">{comment.content}</p>
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="text-xs">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                              <ThumbsDown className="h-3 w-3 mr-1" />
                              {comment.dislikes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs bn-text">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              উত্তর দিন
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            
            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-primary bn-text">সংশ্লিষ্ট সংবাদ</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedArticles.map((news) => (
                  <NewsCard
                    key={news.id}
                    id={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    category={news.category}
                    time={news.time}
                  />
                ))}
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Side Advertisement */}
            <div className="mb-6">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                <span className="text-sm">বিজ্ঞাপন</span>
              </div>
            </div>
            
            <Sidebar />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Article;

// import { Clock, Eye, User, Facebook, Twitter, MessageCircle, Copy, ThumbsUp, ThumbsDown, MessageSquare, Send } from "lucide-react";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import NewsCard from "@/components/NewsCard";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar } from "@/components/ui/avatar";
// import Footer from "@/components/footer";

// const Article = () => {
//   const { id } = useParams();
//   const [selectedReaction, setSelectedReaction] = useState<string>("");
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([
//     {
//       id: 1,
//       author: "রহিম উদ্দিন",
//       avatar: "র",
//       time: "২ ঘন্টা আগে",
//       content: "খুবই গুরুত্বপূর্ণ একটি সিদ্ধান্ত। আশা করি সরকার এই পরিকল্পনা সঠিকভাবে বাস্তবায়ন করবে।",
//       likes: 12,
//       dislikes: 2,
//       replies: []
//     },
//     {
//       id: 2,
//       author: "ফাতিমা খাতুন",
//       avatar: "ফ",
//       time: "১ ঘন্টা আগে",
//       content: "শিক্ষা খাতে বিনিয়োগ বাড়ানো জরুরি ছিল। এটি একটি ইতিবাচক পদক্ষেপ।",
//       likes: 8,
//       dislikes: 0,
//       replies: []
//     }
//   ]);

//   const reactions = [
//     { emoji: "👍", label: "Like", count: 245 },
//     { emoji: "❤️", label: "Love", count: 156 },
//     { emoji: "😮", label: "Wow", count: 89 },
//     { emoji: "😢", label: "Sad", count: 12 },
//     { emoji: "😡", label: "Angry", count: 5 }
//   ];

//   const handleComment = () => {
//     if (comment.trim()) {
//       const newComment = {
//         id: comments.length + 1,
//         author: "আপনি",
//         avatar: "আ",
//         time: "এখনই",
//         content: comment,
//         likes: 0,
//         dislikes: 0,
//         replies: []
//       };
//       setComments([...comments, newComment]);
//       setComment("");
//     }
//   };

//   const handleShare = (platform: string) => {
//     const url = window.location.href;
//     const title = "Article Title"; // replace with real title
//     switch(platform){
//       case 'facebook': window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,'_blank'); break;
//       case 'twitter': window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`,'_blank'); break;
//       case 'whatsapp': window.open(`https://wa.me/?text=${title} ${url}`,'_blank'); break;
//       case 'copy': navigator.clipboard.writeText(url); break;
//     }
//   }

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <Header />
      
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          
//           {/* Main Content */}
//           <main className="lg:col-span-3 space-y-8">
//             <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              
//               {/* Article Header */}
//               <header className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
//                 <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-muted-foreground">
//                   <Badge className="bg-primary text-white font-medium bn-text">জাতীয়</Badge>
//                   <span>•</span>
//                   <span className="bn-text">২৬ ডিসেম্বর, ২০২৪, দুপুর ১২:৩০</span>
//                 </div>

//                 <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bn-text">প্রধানমন্ত্রীর নতুন উন্নয়ন পরিকল্পনা দেশের অর্থনৈতিক ভবিষ্যৎ পরিবর্তন করবে</h1>
//                 <p className="text-lg md:text-xl text-muted-foreground mb-6 bn-text">
//                   সরকারের এই উদ্যোগ দেশের অর্থনৈতিক কাঠামোতে এক নতুন মাত্রা যোগ করবে বলে মনে করছেন বিশেষজ্ঞরা
//                 </p>

//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 text-sm text-muted-foreground">
//                   <div className="flex flex-wrap items-center gap-4">
//                     <div className="flex items-center gap-2">
//                       <User className="h-4 w-4" />
//                       <span className="bn-text font-medium">আবুল কালাম</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Eye className="h-4 w-4" />
//                       <span>25,420 পঠিত</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
//                       <Facebook className="h-4 w-4 mr-1 text-blue-600" /> Facebook
//                     </Button>
//                     <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
//                       <Twitter className="h-4 w-4 mr-1 text-blue-400" /> Twitter
//                     </Button>
//                     <Button variant="outline" size="sm" onClick={() => handleShare('whatsapp')}>
//                       <MessageCircle className="h-4 w-4 mr-1 text-green-500" /> WhatsApp
//                     </Button>
//                     <Button variant="outline" size="sm" onClick={() => handleShare('copy')}>
//                       <Copy className="h-4 w-4 mr-1" /> Copy
//                     </Button>
//                   </div>
//                 </div>

//                 <Separator />
//               </header>

//               {/* Featured Image */}
//               <div className="px-4 md:px-6 lg:px-8 mb-6">
//                 <img src="/src/assets/economy-news.jpg" alt="Article" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg" />
//               </div>

//               {/* Article Content */}
//               <div className="px-6 lg:px-8 pb-8">
//                 <div className="prose prose-lg max-w-none bn-text" dangerouslySetInnerHTML={{__html: "<p>লেখার বিষয়বস্তু এখানে থাকবে...</p>"}} />
//               </div>

//               {/* Reactions */}
//               <div className="px-6 lg:px-8 mb-8">
//                 <Separator className="mb-4" />
//                 <div className="flex flex-wrap items-center justify-between gap-2">
//                   <span className="text-lg font-semibold bn-text">আপনার প্রতিক্রিয়া:</span>
//                   <div className="flex flex-wrap gap-2">
//                     {['👍','❤️','😮','😢','😡'].map((emoji,index)=>(
//                       <Button key={index} size="sm" variant="outline">{emoji}</Button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Comments */}
//               <div className="px-6 lg:px-8 pb-8">
//                 <Separator className="mb-6" />
//                 <h3 className="text-xl font-bold mb-4 bn-text">মতামত ({comments.length})</h3>
//                 <Textarea rows={3} value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="আপনার মতামত লিখুন..." className="mb-3 bn-text" />
//                 <Button onClick={handleComment} className="mb-6 bn-text">
//                   <Send className="h-4 w-4 mr-2" /> মতামত পোস্ট করুন
//                 </Button>

//                 <div className="space-y-4">
//                   {comments.map(c=>(
//                     <div key={c.id} className="border border-gray-200 rounded-lg p-4 flex gap-3">
//                       <Avatar className="h-10 w-10 bg-primary text-white flex items-center justify-center"><span className="bn-text">{c.avatar}</span></Avatar>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-1">
//                           <span className="font-medium bn-text">{c.author}</span>
//                           <span className="text-sm text-muted-foreground bn-text">{c.time}</span>
//                         </div>
//                         <p className="text-sm text-muted-foreground bn-text mb-2">{c.content}</p>
//                         <div className="flex gap-2">
//                           <Button variant="ghost" size="sm" className="text-xs"><ThumbsUp className="h-3 w-3 mr-1" />{c.likes}</Button>
//                           <Button variant="ghost" size="sm" className="text-xs"><ThumbsDown className="h-3 w-3 mr-1" />{c.dislikes}</Button>
//                           <Button variant="ghost" size="sm" className="text-xs bn-text"><MessageSquare className="h-3 w-3 mr-1" /> উত্তর দিন</Button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </article>

//             {/* Related Articles */}
//             <section className="mt-12">
//               <h2 className="text-2xl font-bold mb-6 text-primary bn-text">সংশ্লিষ্ট সংবাদ</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[1,2,3,4].map(id=><NewsCard key={id} id={id} title="শিরোনাম" excerpt="সংক্ষিপ্ত বর্ণনা" image="/src/assets/education-news.jpg" category="জাতীয়" time="৩ ঘন্টা আগে" />)}
//               </div>
//             </section>
//           </main>

//           {/* Sidebar */}
//           <aside className="lg:col-span-1 flex flex-col gap-6">
//             <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">বিজ্ঞাপন</div>
//             <Sidebar />
//           </aside>

//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Article;
