
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, ExternalLink, Settings, Power } from "lucide-react";

export default function UserServices() {
  const services = [
    {
      id: "1",
      name: "ERP System",
      type: "erp",
      status: "active",
      description: "Main enterprise resource planning system",
      lastSync: "2 hours ago"
    },
    {
      id: "2",
      name: "Payment Gateway",
      type: "payment",
      status: "active",
      description: "Payment processing service",
      lastSync: "1 hour ago"
    },
    {
      id: "3",
      name: "Shopify",
      type: "marketplace",
      status: "active",
      description: "E-commerce platform integration",
      lastSync: "30 minutes ago"
    },
    {
      id: "4",
      name: "Inventory System",
      type: "erp",
      status: "inactive",
      description: "Stock management integration",
      lastSync: "5 days ago"
    },
    {
      id: "5",
      name: "Amazon Marketplace",
      type: "marketplace",
      status: "active",
      description: "Amazon seller account integration",
      lastSync: "1 day ago"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inactive</Badge>;
      case 'error':
        return <Badge className="bg-red-500">Error</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Services</h2>
          <p className="text-muted-foreground">Manage your connected services and integrations</p>
        </div>
        <Button className="sm:self-end">
          <Plus className="mr-2 h-4 w-4" />
          Connect New Service
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Services</TabsTrigger>
          <TabsTrigger value="erp">ERP</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => (
              <Card key={service.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    {getStatusBadge(service.status)}
                  </div>
                  <CardDescription className="flex items-center">
                    <span className="capitalize">{service.type}</span>
                    <span className="mx-2">•</span>
                    <span>Last sync: {service.lastSync}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{service.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Settings className="h-4 w-4" />
                      Configure
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Open
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`gap-1 ${service.status === 'active' ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'}`}
                    >
                      <Power className="h-4 w-4" />
                      {service.status === 'active' ? 'Disable' : 'Enable'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="erp" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services
              .filter(service => service.type === 'erp')
              .map(service => (
                <Card key={service.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      {getStatusBadge(service.status)}
                    </div>
                    <CardDescription className="flex items-center">
                      <span className="capitalize">{service.type}</span>
                      <span className="mx-2">•</span>
                      <span>Last sync: {service.lastSync}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{service.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Settings className="h-4 w-4" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Open
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`gap-1 ${service.status === 'active' ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'}`}
                      >
                        <Power className="h-4 w-4" />
                        {service.status === 'active' ? 'Disable' : 'Enable'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services
              .filter(service => service.type === 'payment')
              .map(service => (
                <Card key={service.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      {getStatusBadge(service.status)}
                    </div>
                    <CardDescription className="flex items-center">
                      <span className="capitalize">{service.type}</span>
                      <span className="mx-2">•</span>
                      <span>Last sync: {service.lastSync}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{service.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Settings className="h-4 w-4" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Open
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`gap-1 ${service.status === 'active' ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'}`}
                      >
                        <Power className="h-4 w-4" />
                        {service.status === 'active' ? 'Disable' : 'Enable'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="marketplace" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services
              .filter(service => service.type === 'marketplace')
              .map(service => (
                <Card key={service.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      {getStatusBadge(service.status)}
                    </div>
                    <CardDescription className="flex items-center">
                      <span className="capitalize">{service.type}</span>
                      <span className="mx-2">•</span>
                      <span>Last sync: {service.lastSync}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{service.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Settings className="h-4 w-4" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Open
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`gap-1 ${service.status === 'active' ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'}`}
                      >
                        <Power className="h-4 w-4" />
                        {service.status === 'active' ? 'Disable' : 'Enable'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
