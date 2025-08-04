import { Calendar, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  time: string;
  link: string;
  linkText: string;
  icon?: string;
  showButton?: boolean;
}

const EventCard = ({
  title,
  description,
  time,
  link,
  linkText,
  icon,
  showButton = true,
}: EventCardProps) => {
  const Icon = icon === "users" ? Users : Calendar;

  return (
    <Card className="bg-card border border-border p-4 flex flex-col justify-between h-full w-full max-w-[280px] min-w-[260px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-2 space-y-4">
        <p className="text-muted-foreground text-sm">
          {new Date(time).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "Asia/Kolkata",
          })}
        </p>
        {showButton && (
        <Button
          asChild
          className="bg-gradient-primary hover:opacity-90 text-white w-full"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        </Button>)}
      </CardContent>
    </Card>
  );
};

export default EventCard;
