
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar, MobileSidebarTrigger } from "./AppSidebar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const navigate = useNavigate();

  const switchToUserDashboard = () => {
    navigate('/user');
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 min-w-0">
          <div className="flex flex-col min-h-screen">
            <header className="h-16 flex items-center justify-between px-6 border-b sticky top-0 bg-background z-10">
              <div className="flex items-center">
                <MobileSidebarTrigger />
                <h1 className="text-xl font-bold md:ml-0 ml-4">Cloudio - Administrator</h1>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={switchToUserDashboard}
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">User Dashboard</span>
              </Button>
            </header>
            <div className="flex-1 p-6">
              {children}
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}
