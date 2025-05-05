interface StatItem {
  number: string;
  label: string;
}

export default function StatsBanner() {
  const stats: StatItem[] = [
    { number: "2025", label: "MSc. Graduate from Aalto University" },
    { number: "2+", label: "Years of Experience" }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 