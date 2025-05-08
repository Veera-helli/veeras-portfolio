import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import ".//home.css";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto py-8 px-4" id="image-container">
        <div className="flex flex-col max-w-100 justify-center">
          <h2 className="text-6xl font-bold mb-6 z-10 font-montserrat text-red-950 transition-all duration-500">Hi, I'm Veera</h2>
          <p className="text-xl mb-2 z-10 font-montserrat text-red-950">
          I aspire to translate data and user insights into impactful digital products and services.
          </p>
        </div>
        <div className="flex flex-col justify-center items-end relative">
          <div className="relative w-[400px] h-[570px]" >
            <Image 
              src="/blob.svg" 
              alt="Blob"
              id="blob"
              className="absolute top-45 left-10 rotate-120 scale-250" 
              width={270} 
              height={300} 
            />
            <Image 
              src="/images/profile.png" 
              alt="Profile" 
              id="profile"
              className="absolute z-10 md:top-10 left-20 rounded-3xl shadow-sm" 
              width={300} 
              height={300} 
            />
          </div>
        </div>
      </div>
      <div className="bg-white pt-20">
        <ProjectCarousel />
      </div>
    </main>
  );
}