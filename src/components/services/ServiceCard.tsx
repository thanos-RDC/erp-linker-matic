
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/types";
import { Link } from "react-router-dom";
import { Clock, Settings } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { name, type, status, description, connections, updatedAt } = service;

  const statusColors = {
    active: "bg-green-500",
    inactive: "bg-yellow-500",
    error: "bg-red-500"
  };

  const typeLabels = {
    erp: "ERP System",
    payment: "Payment Gateway",
    marketplace: "Marketplace",
    other: "Other Service"
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline">{typeLabels[type]}</Badge>
              <Badge className={statusColors[status]}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="mt-4">
          <div className="text-sm">
            <span className="font-medium">Connections:</span> {connections.length}
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <Clock className="mr-1 h-3 w-3" />
            Updated {new Date(updatedAt).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link to={`/services/${service.id}`} className="w-full">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
