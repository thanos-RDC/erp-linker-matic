
import { useState, useEffect } from "react";
import { Activity, Users, Network, BarChart, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { ResourceUsage } from "@/components/dashboard/ResourceUsage";
import { ConnectionsChart } from "@/components/dashboard/ConnectionsChart";
import { mockConnections, mockServices, mockSystemResources, mockUsers } from "@/lib/mock-data";

export default function Dashboard() {
  const [activeConnections, setActiveConnections] = useState(0);
  const [errorConnections, setErrorConnections] = useState(0);

  useEffect(() => {
    setActiveConnections(mockConnections.filter(c => c.status === 'active').length);
    setErrorConnections(mockConnections.filter(c => c.status === 'error').length);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">System overview and key metrics</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatusCard
              title="Total Services"
              value={mockServices.length}
              icon={<Network />}
              description="Connected services"
            />
            <StatusCard
              title="Active Connections"
              value={activeConnections}
              icon={<Activity />}
              trend="up"
              trendValue="2"
              description="Last 24 hours"
            />
            <StatusCard
              title="Connection Errors"
              value={errorConnections}
              icon={<BarChart />}
              trend="down"
              trendValue="1"
              description="Last 24 hours"
            />
            <StatusCard
              title="Users"
              value={mockUsers.length}
              icon={<Users />}
              description="Registered accounts"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ConnectionsChart />
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockConnections.slice(0, 3).map((conn, i) => (
                    <div key={i} className="flex items-start space-x-3 border-b pb-3 last:border-0">
                      <div className={`w-2 h-2 mt-1.5 rounded-full ${conn.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                      <div className="space-y-1 flex-1">
                        <p className="text-sm">
                          Connection {conn.id} {conn.status === 'active' ? 'synchronized' : 'failed'}
                        </p>
                        <time className="text-xs text-muted-foreground">
                          {new Date(conn.stats.lastSync).toLocaleString()}
                        </time>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="connections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connection Status</CardTitle>
              <CardDescription>Real-time connection status and metrics</CardDescription>
            </CardHeader>
            <CardContent>
              {mockConnections.map((connection, i) => (
                <div key={i} className="flex items-center justify-between border-b py-3 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      connection.status === 'active' ? 'bg-green-500' : 
                      connection.status === 'error' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium">
                        Connection {connection.id}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Last sync: {new Date(connection.stats.lastSync).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{connection.stats.requestsPerDay} req/day</p>
                    <p className={`text-xs ${
                      connection.stats.successRate > 95 ? 'text-green-500' : 
                      connection.stats.successRate > 80 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {connection.stats.successRate}% success rate
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockSystemResources.map((resource) => (
              <ResourceUsage key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
