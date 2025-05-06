import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, imageUrl, projectUrl, technologies }: ProjectCardProps) {
  return (
    <Link href={projectUrl} className="border border-tertiary rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
} 