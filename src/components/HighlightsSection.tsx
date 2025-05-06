import Image from "next/image";

export default function HighlightsSection() {
  const highlights = [
    {
      title: "Service Design",
      description: "Designing seamless, user-centered services that bridge business goals and customer needs.",
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
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 text-center">Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition"
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