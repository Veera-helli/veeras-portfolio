import Image from 'next/image';
import StatsBanner from '@/components/StatsBanner';
import OpportunitiesSection from '@/components/OpportunitiesSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">Hi, I'm Veera</h1>
          <p className="text-lg mb-8">
            I am an outgoing, results-driven team player with a passion for interdisciplinary teamwork, data-driven service development and user-centered design.
          </p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <Image src="/images/profile.png" alt="Profile" width={300} height={300} />
        </div>
      </div>
      <StatsBanner />
      <OpportunitiesSection />
    </main>
  );
}