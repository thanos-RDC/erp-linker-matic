import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Network, Users, Shield, Bell, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Dashboard</h2>
        <p className="text-muted-foreground">Manage your services and team permissions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Network className="h-5 w-5 text-primary" />
              My Services
            </CardTitle>
            <CardDescription>
              Manage your connected services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-muted-foreground">Active services</div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link to="/user/services">
                    View all <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Plus className="h-4 w-4" /> Add new service
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Team Access
            </CardTitle>
            <CardDescription>
              Manage your team members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Team members</div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link to="/user/team">
                    View all <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Plus className="h-4 w-4" /> Invite team member
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Permissions
            </CardTitle>
            <CardDescription>
              Manage access rights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-muted-foreground">Permission sets</div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link to="/user/permissions">
                    View all <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <Plus className="h-4 w-4" /> Create permission set
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Recent Notifications
            </CardTitle>
            <CardDescription>
              Your latest system notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 border-b pb-3 last:border-0">
                  <div className="bg-primary/10 text-primary rounded-full p-1.5 mt-0.5">
                    <Bell className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      {i === 0 ? "New team member added" : i === 1 ? "Permission updated" : "Service connected"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {i === 0 
                        ? "John Smith was added to your team with editor permissions."
                        : i === 1 
                        ? "Payment service permissions were updated." 
                        : "Shopify marketplace successfully connected."}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {i === 0 ? "2 hours ago" : i === 1 ? "Yesterday" : "3 days ago"}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Mark as read
                  </Button>
                </div>
              ))}
              <div className="flex justify-center">
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link to="/user/notifications">
                    View all notifications <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
