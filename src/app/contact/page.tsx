import Image from 'next/image';
import Link from 'next/link';
import SShapeText from './sshapetext';

export default function Contact() {
  return (
    <main className="min-h-screen mt-4 p-8 max-w-4xl mx-auto">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col justify-center relative">
          <div className="relative w-[400px] h-[505px] transition-all duration-300">

            <Image 
              src="/blob.svg" 
              alt="Blob"
              id="blob"
              className="absolute top-35 z-0 left-30 rotate-20 scale-250" 
              width={270} 
              height={300} 
            />

            <Image 
              src="/images/profile_square.png" 
              alt="Profile" 
              id="profile"
              className="absolute z-10 left-0 rounded-full -rotate-12 shadow-sm" 
              width={300} 
              height={300} 
            />

            <div className="absolute z-4 top-55 left-18 -rotate-5">
              <SShapeText />
            </div>

            <Image 
              src="/images/poro_square.png" 
              alt="raindeer" 
              id="poro"
              className="absolute z-10 left-40 top-80 rounded-full shadow-sm" 
              width={200} 
              height={200} 
            />
          </div>
        </div>
          <div className="flex flex-col justify-start items-start pt-20 z-100">
            <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
            <p className="text-md my-1">Email: <Link href="mailto:veera.helli@gmail.com" target="_blank" rel="noopener noreferrer" className="underline">veera.helli@gmail.com</Link></p>
            <p className="text-md my-1">LinkedIn: <Link href="https://www.linkedin.com/in/veera-ihalainen/" target="_blank" rel="noopener noreferrer" className="underline">Veera Ihalainen</Link></p>
          </div>
      </div>
    </main>
  );
} 