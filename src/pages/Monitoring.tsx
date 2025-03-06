
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { mockSystemResources, mockConnections } from "@/lib/mock-data";
import { ResourceUsage } from "@/components/dashboard/ResourceUsage";
import { Download, RefreshCw } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Monitoring() {
  // Format historical data for chart
  const prepareChartData = (resourceId: string, hours: number = 24) => {
    const resource = mockSystemResources.find(r => r.id === resourceId);
    if (!resource) return [];
    
    return resource.history.slice(0, hours).map(h => ({
      time: new Date(h.timestamp).toLocaleTimeString(),
      value: h.value
    })).reverse();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Monitoring</h2>
          <p className="text-muted-foreground">System health and performance metrics</p>
        </div>
        <div className="flex gap-2 sm:self-end">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockSystemResources.map((resource) => (
          <ResourceUsage key={resource.id} resource={resource} />
        ))}
      </div>

      <Tabs defaultValue="cpu" className="space-y-4">
        <TabsList>
          <TabsTrigger value="cpu">CPU History</TabsTrigger>
          <TabsTrigger value="memory">Memory History</TabsTrigger>
          <TabsTrigger value="network">Network History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cpu">
          <Card>
            <CardHeader>
              <CardTitle>CPU Usage History</CardTitle>
              <CardDescription>24-hour performance trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={prepareChartData('1')}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '6px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00aabe" 
                      strokeWidth={2}
                      dot={false}
                      name="Usage (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="memory">
          <Card>
            <CardHeader>
              <CardTitle>Memory Usage History</CardTitle>
              <CardDescription>24-hour performance trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={prepareChartData('2')}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '6px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00aabe" 
                      strokeWidth={2}
                      dot={false}
                      name="Usage (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network">
          <Card>
            <CardHeader>
              <CardTitle>Network Usage History</CardTitle>
              <CardDescription>24-hour performance trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={prepareChartData('4')}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '6px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        border: 'none'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00aabe" 
                      strokeWidth={2}
                      dot={false}
                      name="Usage (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Connection Performance</CardTitle>
          <CardDescription>Success rates and response times</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockConnections.map((connection, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-16 text-sm font-medium">Conn #{connection.id}</div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div>Success Rate</div>
                    <div>{connection.stats.successRate}%</div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        connection.stats.successRate > 95 ? 'bg-green-500' : 
                        connection.stats.successRate > 80 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${connection.stats.successRate}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
