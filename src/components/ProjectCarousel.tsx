// src/components/ProjectCarousel.tsx
'use client';
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project.",
    image: "/images/project1.png",
    link: "#",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Project Two",
    description: "A brief description of your second project.",
    image: "/images/project2.png",
    link: "#",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Project Three",
    description: "A brief description of your third project.",
    image: "/images/project3.png",
    link: "#",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Project Four",
    description: "A brief description of your third project.",
    image: "/images/project3.png",
    link: "#",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  }
];

export default function ProjectCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    const speed = 1; // px per frame

    function animate() {
      if (!carousel) return;
      carousel.scrollLeft += speed;
      // When we've scrolled past the first set, reset to the start of the first set
      console.log( carousel.scrollLeft, carousel.scrollWidth);
      if (carousel.scrollLeft >= carousel.scrollWidth/2) {
        carousel.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate the projects for seamless infinite scroll
  const displayProjects = [...projects, ...projects];

  return (
    <section className="w-full bg-white py-12">
      <h2 className="text-3xl font-bold font-montserrat mb-8 text-center">Featured Projects</h2>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll no-scrollbar whitespace-nowrap"
        style={{ scrollBehavior: 'auto'}}
      >
        {displayProjects.map((project, idx) => (
          <div
            key={idx}
            className="inline-block m-4 hover:scale-105 bg-gray-100 rounded-xl shadow p-6 align-top transition-all duration-300"
          >
            <ProjectCard title={project.title} description={project.description} imageUrl={project.image} projectUrl={project.link} technologies={project.technologies} />
          </div>
        ))}
      </div>
    </section>
  );
}