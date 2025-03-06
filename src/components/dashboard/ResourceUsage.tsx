
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SystemResource } from "@/lib/types";

interface ResourceUsageProps {
  resource: SystemResource;
}

export function ResourceUsage({ resource }: ResourceUsageProps) {
  const { usage, details, name, type } = resource;
  
  // Generate a color based on usage
  const getProgressColor = (usage: number) => {
    if (usage < 50) return "bg-brand-400";
    if (usage < 80) return "bg-yellow-400";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>{name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {details.used} / {details.total} {details.unit}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress 
            value={usage} 
            className={`h-2 ${getProgressColor(usage)}`}
          />
          <div className="text-xs text-muted-foreground flex justify-between">
            <span>{usage}% used</span>
            <span>
              {100 - usage}% available
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
