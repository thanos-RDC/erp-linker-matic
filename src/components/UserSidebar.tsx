
import { LayoutDashboard, Users, Network, Shield, Settings, Menu, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";

export function UserSidebar() {
  const location = useLocation();
  const navItems = [
    {
      title: "My Dashboard",
      icon: LayoutDashboard,
      path: "/user"
    }, 
    {
      title: "My Services",
      icon: Network,
      path: "/user/services"
    },
    {
      title: "Team Access",
      icon: Users,
      path: "/user/team"
    },
    {
      title: "Permissions",
      icon: Shield,
      path: "/user/permissions"
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/user/notifications"
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/user/settings"
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center h-16 px-6">
          <h2 className="text-xl font-bold tracking-tight text-sidebar-foreground">Cloudio</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>User Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(item => (
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
          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Business Account</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export function MobileUserSidebarTrigger() {
  return (
    <div className="flex items-center md:hidden">
      <SidebarTrigger>
        <Menu className="w-6 h-6" />
      </SidebarTrigger>
    </div>
  );
}
