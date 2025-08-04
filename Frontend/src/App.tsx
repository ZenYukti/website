import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Domains from "./pages/Join-us";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import CodeOfConduct from "./pages/CodeOfConduct";
import TermsOfService from "./pages/TermsOfService";
import CountdownGate from "./components/Countdown";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <CountdownGate>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/join-us" element={<Domains />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Signup" element={<SignUp/>} />

          {/* Add any other custom routes here */}
          
          {/* Catch-all route for 404 Not Found */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CountdownGate>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
