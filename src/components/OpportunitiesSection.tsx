interface Opportunity {
  title: string;
  description: string;
}

export default function OpportunitiesSection() {
  const opportunities: Opportunity[] = [
    {
      title: "Product Management",
      description: "Leading product development and strategy with a focus on user-centered design"
    },
    {
      title: "Service Design",
      description: "Creating seamless user experiences through service design methodologies"
    },
    {
      title: "UX Research",
      description: "Conducting user research to inform product decisions and improve user experiences"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Looking for Professional Opportunities in
        </h2>
        <div className="grid gap-6">
          {opportunities.map((opportunity) => (
            <div 
              key={opportunity.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                {opportunity.title}
              </h3>
              <p className="text-gray-600">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 