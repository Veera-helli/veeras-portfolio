export default function Footer() {
  return (
    <footer className="bg-white mt-auto border-t border-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6 text-red-950">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-900">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-900">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-red-950">
            © {new Date().getFullYear()} Veera Ihalainen's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 