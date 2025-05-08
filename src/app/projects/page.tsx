import ProjectCard from '@/components/ProjectCard';
import { projects } from '../project_list';

export default function Projects() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div className="hover:scale-105 transition-shadow bg-white rounded-xl transition-all duration-300">
              <ProjectCard
                key={project.slug}
                title={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.slug}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 