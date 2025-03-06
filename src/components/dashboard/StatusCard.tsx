
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  className?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function StatusCard({
  title,
  value,
  icon,
  description,
  className,
  trend,
  trendValue,
}: StatusCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="w-4 h-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            {trend && (
              <span className={cn(
                "mr-1 flex items-center",
                trend === 'up' && "text-green-500",
                trend === 'down' && "text-red-500"
              )}>
                {trend === 'up' && '↑'}
                {trend === 'down' && '↓'}
                {trendValue && trendValue}
              </span>
            )}
            {description}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
