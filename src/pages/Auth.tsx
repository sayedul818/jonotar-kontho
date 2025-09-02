import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "@/store/api/authApi";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // RTK Query mutations
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [register, { isLoading: registerLoading }] = useRegisterMutation();

  // const handleSignIn = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     console.log("Sign in data:", signInData);
  //     // Redirect logic would go here
  //   }, 2000);
  // };
const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const result = await login(signInData).unwrap();
    localStorage.setItem('authToken', result.token);
    
    toast({
      title: "লগইন সফল",
      description: "আপনি সফলভাবে লগইন করেছেন।",
    });

    // Redirect based on user role
    if (result.user.role === 'admin') {
      window.location.href = "/admin";
    } else {
      window.location.href = "/";
    }
  } catch (error: any) {
    toast({
      title: "লগইন ব্যর্থ",
      description: error.data?.message || "লগইন করতে সমস্যা হয়েছে।",
      variant: "destructive",
    });
  }
};
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signUpData.password !== signUpData.confirmPassword) {
      toast({
        title: "পাসওয়ার্ড মিলছে না",
        description: "পাসওয়ার্ড এবং নিশ্চিতকরণ পাসওয়ার্ড একই হতে হবে।",
        variant: "destructive",
      });
      return;
    }

    try {
      const result = await register({
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      }).unwrap();
      
      localStorage.setItem('authToken', result.token);
      
      toast({
        title: "নিবন্ধন সফল",
        description: "আপনি সফলভাবে নিবন্ধন করেছেন।",
      });

      window.location.href = "/";
    } catch (error: any) {
      toast({
        title: "নিবন্ধন ব্যর্থ",
        description: error.data?.message || "নিবন্ধন করতে সমস্যা হয়েছে।",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          প্রথম পাতায় ফিরুন
        </Link>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <Link to="/" className="flex items-center justify-center mb-4">
              <h1 className="text-2xl font-bold text-primary bn-text">
                জনতার<span className="text-red-600"> কন্ঠ</span>
              </h1>
            </Link>
            <CardTitle className="text-2xl font-bold text-foreground bn-text">
              স্বাগতম
            </CardTitle>
            <CardDescription className="text-muted-foreground bn-text">
              আপনার অ্যাকাউন্টে প্রবেশ করুন অথবা নতুন অ্যাকাউন্ট তৈরি করুন
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="signin" className="bn-text">লগইন</TabsTrigger>
                <TabsTrigger value="signup" className="bn-text">নিবন্ধন</TabsTrigger>
              </TabsList>

              {/* Sign In Tab */}
              <TabsContent value="signin" className="space-y-6">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="bn-text">ইমেইল</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                        className="pl-10 bn-text"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="bn-text">পাসওয়ার্ড</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="আপনার পাসওয়ার্ড"
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                        className="pl-10 pr-10 bn-text"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to="#" className="text-sm text-primary hover:underline bn-text">
                      পাসওয়ার্ড ভুলে গেছেন?
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bn-text" 
                    disabled={loginLoading}
                  >
                    {loginLoading ? "লগইন করা হচ্ছে..." : "লগইন করুন"}
                  </Button>
                </form>
              </TabsContent>

              {/* Sign Up Tab */}
              <TabsContent value="signup" className="space-y-6">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="bn-text">পূর্ণ নাম</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="আপনার পূর্ণ নাম"
                        value={signUpData.name}
                        onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                        className="pl-10 bn-text"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="bn-text">ইমেইল</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                        className="pl-10 bn-text"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="bn-text">পাসওয়ার্ড</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন"
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                        className="pl-10 pr-10 bn-text"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="bn-text">পাসওয়ার্ড নিশ্চিত করুন</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="পাসওয়ার্ড পুনরায় লিখুন"
                        value={signUpData.confirmPassword}
                        onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                        className="pl-10 pr-10 bn-text"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bn-text" 
                    disabled={registerLoading}
                  >
                    {registerLoading ? "নিবন্ধন করা হচ্ছে..." : "নিবন্ধন করুন"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Divider */}
            <div className="mt-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground bn-text">অথবা</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="bn-text">
                গুগল
              </Button>
              <Button variant="outline" className="bn-text">
                ফেসবুক
              </Button>
            </div>

            {/* Terms */}
            <p className="mt-6 text-center text-sm text-muted-foreground bn-text">
              নিবন্ধন করার মাধ্যমে আপনি আমাদের{" "}
              <Link to="#" className="text-primary hover:underline">
                শর্তাবলী
              </Link>{" "}
              এবং{" "}
              <Link to="#" className="text-primary hover:underline">
                গোপনীয়তা নীতি
              </Link>{" "}
              সম্মত হচ্ছেন।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;