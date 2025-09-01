import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import National from "./pages/National";
import International from "./pages/International";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import Opinion from "./pages/Opinion";
import Lifestyle from "./pages/Lifestyle";
import Article from "./pages/Article";
import Search from "./pages/Search";
import Politics from "./pages/Politics";
import Jobs from "./pages/Jobs";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AllNews from "./pages/admin/AllNews";
import TodaysHeadlines from "./pages/admin/TodaysHeadlines";
import EmergencyNews from "./pages/admin/EmergencyNews";
import CreateNews from "./pages/admin/CreateNews";
import EditNews from "./pages/admin/EditNews";
import Drafts from "./pages/admin/Drafts";
import CategoryManagement from "./pages/admin/CategoryManagement";
import UserManagement from "./pages/admin/UserManagement";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/national" element={<National />} />
          <Route path="/international" element={<International />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="news" element={<AllNews />} />
            <Route path="news/headlines" element={<TodaysHeadlines />} />
            <Route path="news/emergency" element={<EmergencyNews />} />
            <Route path="news/create" element={<CreateNews />} />
            <Route path="news/edit" element={<EditNews />} />
            <Route path="news/drafts" element={<Drafts />} />
            <Route path="categories" element={<CategoryManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
