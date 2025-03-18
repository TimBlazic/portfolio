"use client";

import { useEffect, useState } from "react";
import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Clock, Gauge, Search } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  delay: number;
}

function Metric({ icon, title, value, description, delay }: MetricProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9-]/g, "")) || 0;
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.includes("%") ? "%" : value.includes("x") ? "x" : "";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [numericValue, delay]);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <h3 className="text-3xl font-bold animate-counter">
              {count === 0 ? "" : prefix}
              {count}
              {count === 0 ? "" : suffix}
            </h3>
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ResultsMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Metric
        icon={<Gauge className="h-5 w-5" />}
        title="Performance Improvement"
        value="+65%"
        description="Average speed increase across client websites"
        delay={0}
      />
      <Metric
        icon={<ArrowUpRight className="h-5 w-5" />}
        title="Conversion Rate"
        value="+32%"
        description="Average increase in conversion rates"
        delay={500}
      />
      <Metric
        icon={<Search className="h-5 w-5" />}
        title="SEO Rankings"
        value="+40%"
        description="Average improvement in search visibility"
        delay={1000}
      />
      <Metric
        icon={<Clock className="h-5 w-5" />}
        title="Development Time"
        value="+2x"
        description="Faster development compared to industry average"
        delay={1500}
      />
    </div>
  );
}
