import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project and its key features.",
      imageUrl: "/project1.jpg",
      projectUrl: "/projects/project-one",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project Two",
      description: "Description of your second project and what makes it special.",
      imageUrl: "/project2.jpg",
      projectUrl: "/projects/project-two",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    // Add more projects as needed
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
} 