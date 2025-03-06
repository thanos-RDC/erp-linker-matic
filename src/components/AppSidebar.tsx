
import { 
  LayoutDashboard, 
  Users, 
  Network, 
  Activity, 
  Settings, 
  Menu, 
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();
  
  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      title: "Services",
      icon: Network,
      path: "/services",
    },
    {
      title: "Users",
      icon: Users,
      path: "/users",
    },
    {
      title: "Monitoring",
      icon: Activity,
      path: "/monitoring",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center h-16 px-6">
          <h2 className="text-xl font-bold tracking-tight text-sidebar-foreground">
            ERP Linker
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path}
                      className={cn(
                        "flex items-center gap-2",
                        location.pathname === item.path && "bg-sidebar-accent text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <button
            className="flex items-center justify-center w-full gap-2 px-3 py-2 transition-colors rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function MobileSidebarTrigger() {
  return (
    <div className="flex items-center md:hidden">
      <SidebarTrigger>
        <Menu className="w-6 h-6" />
      </SidebarTrigger>
    </div>
  );
}
