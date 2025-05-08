'use client';
import { useState } from 'react';

export default function ProfessionalIntroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'veera.helli@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="flex flex-col items-start w-full mx-auto py-26 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-opensans mb-8 leading-relaxed text-red-950">
          I'm a recent MSc. graduate with over 3 years of experience in software development and user experience research. Based in Espoo, Finland. Available for job opportunities in service development, UX design, and user research.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href={`mailto:${email}`}
            className="bg-red-900 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-red-950 transition-all duration-300"
          >
            Email me →
          </a>
          <button
            onClick={handleCopy}
            className="bg-white border border-red-800 text-red-950 px-6 py-3 rounded-lg 
            font-semibold text-lg shadow hover:bg-gray-50 hover:text-secondary hover:cursor-pointer hover:border-secondary transition-all duration-300"
          >
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>
      </div>
    </section>
  );
}