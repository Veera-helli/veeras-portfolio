import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Veera Ihalainen
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-600">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 