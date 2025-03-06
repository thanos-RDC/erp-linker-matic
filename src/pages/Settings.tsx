
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage application settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Configure basic application settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">Application Name</Label>
                <Input id="app-name" defaultValue="ERP Linker-Matic" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Acme Corporation" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <select
                  id="timezone"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="UTC"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time (EST)</option>
                  <option value="CST">Central Time (CST)</option>
                  <option value="MST">Mountain Time (MST)</option>
                  <option value="PST">Pacific Time (PST)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Support Email</Label>
                <Input id="contact-email" type="email" defaultValue="support@example.com" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure application security options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="2fa">Two-factor authentication</Label>
                  <Switch id="2fa" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Require two-factor authentication for all admin users
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="session-timeout">Session timeout (minutes)</Label>
                  <Input id="session-timeout" type="number" defaultValue="30" className="w-20" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically log out inactive users after this period
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="allowed-ips">IP Whitelist</Label>
                <Textarea id="allowed-ips" placeholder="Enter IP addresses (one per line)" className="h-20" />
                <p className="text-sm text-muted-foreground">
                  Leave blank to allow access from all IP addresses
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive important system notifications via email
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-alerts">SMS Alerts</Label>
                  <Switch id="sms-alerts" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive critical alerts via SMS
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alert-thresholds">Error Alert Threshold (%)</Label>
                <Input id="alert-thresholds" type="number" defaultValue="10" className="w-20" />
                <p className="text-sm text-muted-foreground">
                  Send alerts when error rate exceeds this percentage
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>
                Configure advanced system options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="debug-mode">Debug Mode</Label>
                  <Switch id="debug-mode" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable detailed logging for troubleshooting
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="log-retention">Log Retention (days)</Label>
                  <Input id="log-retention" type="number" defaultValue="30" className="w-20" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Number of days to keep system logs
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-schedule">Database Backup Schedule</Label>
                <select
                  id="backup-schedule"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="daily"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary" className="text-red-500 hover:text-red-700">
                Reset All Settings
              </Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
