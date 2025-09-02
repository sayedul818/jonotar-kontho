import { Clock, Eye, User, MessageSquare, PenTool } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/Footer";
import { useGetNewsByCategoryQuery } from "@/store/api/newsApi";

const Opinion = () => {
  const { data: newsResponse, isLoading, error } = useGetNewsByCategoryQuery({
    category: 'opinion',
    page: 1,
    limit: 10
  });

  const opinionArticles = newsResponse?.articles || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading opinion articles</div>;

  const featuredEditorial = {
    title: "Bangladesh's Digital Transformation: Opportunities and Challenges",
    excerpt: "As Bangladesh embraces digital technologies across sectors, we must carefully balance innovation with inclusivity to ensure no one is left behind in this transformation.",
    author: "Editorial Board",
    time: "1 hour ago",
    views: 22350,
    image: "/src/assets/tech-news.jpg"
  };

  const topOpinionWriters = [
    { name: "Dr. Sarah Mitchell", expertise: "Political Analysis", articles: 45 },
    { name: "Prof. Ahmed Hassan", expertise: "Environmental Policy", articles: 38 },
    { name: "Maria Rodriguez", expertise: "Education Reform", articles: 52 },
    { name: "James Wilson", expertise: "Economic Commentary", articles: 41 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-2">
            <PenTool className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Opinion & Editorial</h1>
          </div>
          <p className="text-primary-foreground/80">Thoughtful perspectives on current affairs and societal issues</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Editorial */}
            <section className="mb-8">
              <h2 className="news-headline mb-6 text-primary">Featured Editorial</h2>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src={featuredEditorial.image} 
                      alt={featuredEditorial.title}
                      className="w-full md:w-80 h-48 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-3">Editorial</Badge>
                      <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                        {featuredEditorial.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {featuredEditorial.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span className="font-medium">{featuredEditorial.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{featuredEditorial.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{featuredEditorial.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <Button variant="outline">Read Full Editorial</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Opinion Articles */}
            <section>
              <h2 className="news-headline mb-6 text-primary">Latest Opinion Articles</h2>
              <div className="space-y-6 mb-8">
                {opinionArticles.map((article) => (
                  <Card key={article.id} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img 
                          src={article.imageUrl || "/src/assets/culture-news.jpg"} 
                          alt={article.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">
                            {article.category}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{article.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{new Date(article.publishedAt).toLocaleString('bn-BD')}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{article.views.toLocaleString()}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Read Opinion
                          </Button>
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
            {/* Top Opinion Writers */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">Top Opinion Writers</h3>
                <div className="space-y-4">
                  {topOpinionWriters.map((writer, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{writer.name}</p>
                        <p className="text-sm text-muted-foreground">{writer.expertise}</p>
                      </div>
                      <Badge variant="outline">{writer.articles} articles</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Sidebar />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Opinion;