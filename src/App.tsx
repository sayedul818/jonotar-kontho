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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
