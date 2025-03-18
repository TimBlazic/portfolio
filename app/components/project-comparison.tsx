"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

interface ProjectComparisonProps {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  improvements: string[];
}

export default function ProjectComparison({
  title,
  description,
  beforeImage,
  afterImage,
  improvements,
}: ProjectComparisonProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        <Tabs defaultValue="before" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="before">Before</TabsTrigger>
              <TabsTrigger value="after">After</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="before" className="mt-0">
            <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
              <Image
                src={"/projects/" + beforeImage || "/placeholder.svg"}
                alt={`${title} before redesign`}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md">
                Before
              </div>
            </div>
          </TabsContent>

          <TabsContent value="after" className="mt-0">
            <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
              <Image
                src={"/projects/" + afterImage || "/placeholder.svg"}
                alt={`${title} after redesign`}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-sm text-xs text-primary-foreground px-2 py-1 rounded-md">
                After
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <h4 className="text-sm font-medium flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-primary" />
            Key Improvements
          </h4>
          <ul className="space-y-2">
            {improvements.map((improvement, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
