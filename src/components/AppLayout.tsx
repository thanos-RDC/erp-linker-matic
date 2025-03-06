import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar, MobileSidebarTrigger } from "./AppSidebar";
import { Toaster } from "@/components/ui/sonner";
interface AppLayoutProps {
  children: React.ReactNode;
}
export function AppLayout({
  children
}: AppLayoutProps) {
  return <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 min-w-0">
          <div className="flex flex-col min-h-screen">
            <header className="h-16 flex items-center px-6 border-b sticky top-0 bg-background z-10">
              <MobileSidebarTrigger />
              <h1 className="text-xl font-bold md:ml-0 ml-4">Cloudio - Administrator</h1>
            </header>
            <div className="flex-1 p-6">
              {children}
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </SidebarProvider>;
}