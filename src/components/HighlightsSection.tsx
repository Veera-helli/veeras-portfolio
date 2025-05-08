import Image from "next/image";

export default function HighlightsSection() {
  const highlights = [
    {
      title: "Frontend Development",
      description: "Proficient in multiple JavaScript and TypeScript frameworks, including React, Angular. I build responsive and user-friendly web applications.",
      image: "/images/service_design_icon.png",
    },
    {
      title: "Data Analytics",
      description: "Leveraging data to drive insights, inform decisions, and measure impact.",
      image: "/images/service_design_icon.png",
    },
    {
      title: "Software Development",
      description: "Building robust, scalable, and maintainable digital solutions.",
      image: "/images/service_design_icon.png",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-26 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="bg-background rounded-xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <Image src={item.image} alt={item.title} width={200} height={200} />
            <h2 className="text-xl font-semibold font-montserrat mb-4">{item.title}</h2>
            <p className="text-gray-700 font-opensans">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 