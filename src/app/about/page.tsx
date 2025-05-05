export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p className="mb-6">
            Hello! I'm a passionate service and software developer with experience in building modern web applications and solving service design challenges.
            I love creating user-friendly interfaces and solving complex problems through iterative design and development.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Frontend Development (React, Next.js)</li>
            <li>Backend Development (Node.js, Python)</li>
            <li>Data storage and management (MySQL, MongoDB)</li>
            <li>UI/UX Design</li>
            <li>Service Design</li>
            <li>Project Management</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p>
            [Your experience details here]
          </p>
        </div>
      </div>
    </main>
  );
} 