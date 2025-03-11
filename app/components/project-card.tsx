import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link} className="h-full">
      <div className="group h-full flex flex-col rounded-xl border border-gray-200 shadow-lg bg-card text-card-foreground overflow-hidden hover:border-primary/20 transition-all duration-300">
        <div className="aspect-video relative bg-background/20 border-b border-white/5">
          <Image
            src={image.startsWith("http") ? image : `/projects/${image}`}
            alt={title}
            fill
            className="object-contain mt-3 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 bg-background/10 backdrop-blur-[2px] flex flex-col flex-grow">
          <h3 className="text-xl font-medium text-foreground/90 mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground/80 mb-4 line-clamp-2 text-sm flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge
                key={tags.length - 3}
                variant="secondary"
                className="text-xs px-3 py-1"
              >
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
