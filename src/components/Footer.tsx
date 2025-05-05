export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Veera Ihalainen's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 