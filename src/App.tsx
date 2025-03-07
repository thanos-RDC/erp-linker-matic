
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { UserLayout } from "./components/UserLayout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Users from "./pages/Users";
import Monitoring from "./pages/Monitoring";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import UserServices from "./pages/user/UserServices";
import UserTeam from "./pages/user/UserTeam";
import UserPermissions from "./pages/user/UserPermissions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/services" element={<AppLayout><Services /></AppLayout>} />
          <Route path="/users" element={<AppLayout><Users /></AppLayout>} />
          <Route path="/monitoring" element={<AppLayout><Monitoring /></AppLayout>} />
          <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
          
          {/* User Routes */}
          <Route path="/user" element={<UserLayout><UserDashboard /></UserLayout>} />
          <Route path="/user/services" element={<UserLayout><UserServices /></UserLayout>} />
          <Route path="/user/team" element={<UserLayout><UserTeam /></UserLayout>} />
          <Route path="/user/permissions" element={<UserLayout><UserPermissions /></UserLayout>} />
          <Route path="/user/notifications" element={<UserLayout><div>Notifications</div></UserLayout>} />
          <Route path="/user/settings" element={<UserLayout><div>User Settings</div></UserLayout>} />
          
          {/* Default route redirects to user dashboard */}
          <Route path="/" element={<Navigate to="/user" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
