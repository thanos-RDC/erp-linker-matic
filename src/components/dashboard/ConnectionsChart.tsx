
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockConnections } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ConnectionsChart() {
  // Prepare data for the chart - requests per day by connection
  const chartData = mockConnections.map(conn => {
    const sourceName = "Connection " + conn.id;
    return {
      name: sourceName,
      requests: conn.stats.requestsPerDay,
      successRate: conn.stats.successRate
    };
  });

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Connection Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none'
                }}
              />
              <Bar dataKey="requests" fill="#00aabe" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
