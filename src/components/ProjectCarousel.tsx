// src/components/ProjectCarousel.tsx
'use client';
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../app/project_list';

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
      if (carousel.scrollLeft >= carousel.scrollWidth/2) {
        carousel.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate the projects for seamless infinite scroll
  const featuredProjects = projects.slice(0, 4);
  const displayProjects = [...featuredProjects, ...featuredProjects];

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
            <ProjectCard title={project.name} description={project.description} imageUrl={project.imageUrl} projectUrl={project.slug} technologies={project.technologies} />
          </div>
        ))}
      </div>
    </section>
  );
}