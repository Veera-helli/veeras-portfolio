import Image from "next/image";

export default function THLProjectPage() {
  return (
      <div className="mx-auto py-12 space-y-20 bg-white">
      {/* Hero Section */}
      <section className="text-center space-y-4 pt-12">
        <h1 className="text-5xl font-extrabold leading-tight">THL Youth Guide</h1>
        <p className="text-muted-foreground text-lg">Designing clarity and empowerment for youth in child protection</p>
        <p className="text-sm text-muted-foreground">Aalto University - Societal Design Project Course</p>
      </section>

      {/* Split Layout: Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p>
            Collaborated with the Finnish Institute for Health and Welfare (THL) to improve the accessibility of their Child Protection Guide. Our work centered on youth empowerment, communication strategy, and service design.
          </p>
        </div>
        <Image src="/images/thl/thl_overview.png" alt="Overview diagram of THL communication flow" width={600} height={300} />
      </section>

      {/* Split Layout: Problem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-5xl mx-auto items-center">
        <Image src="/images/thl/thl_challenge_2.png" alt="Overview diagram of THL communication flow" width={500} height={300} />
        <div className="">
          <h2 className="text-3xl font-semibold mb-4">The Problem</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Children in child protection lack accessible information about their rights and the system</li>
            <li>Social workers have no time or tools to share this information</li>
            <li>THL's guide is trying to fill this gap, but is not reaching the intended audience effectively</li>
          </ul>
        </div>
      </section>


      {/* Visual Highlight: Problem Snapshot */}
      <section className="bg-pure-white shadow space-y-6">
        <div className="flex flex-col gap-4 max-w-5xl mx-auto p-12 items-center">
          <h2 className="text-3xl font-semibold text-center">Research Interview Insights</h2>
          <Image src="/images/thl/thl_challenge.png" alt="Child protection statistics visualization" width={900} height={400} />
        </div>
      </section>


      {/* Process Insight Grid */}
      <section className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Children need personalized, digestible content</li>
            <li>Social workers seek practical tools</li>
            <li>Guide must feel empowering, not bureaucratic</li>
          </ul>
        </div>
        <Image src="/images/insights-summary.png" alt="Insights summary illustration" width={600} height={350} />
      </section>

      {/* My Role */}
      <section className="space-y-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">My Role</h2>
        <p>I led user interviews and co-designed the communication strategy with my team.</p>
        <ul className="list-disc ml-6">
          <li>17 interviews with youth, professionals & former clients</li>
          <li>Mapped the full stakeholder communication ecosystem</li>
          <li>Designed actionable UX content & flow for the new guide</li>
        </ul>
        <Image src="/images/research-process.png" alt="Research and design process visualization" width={800} height={400} />
      </section>
      
      {/* Interactive Story Style */}
      <section className="bg-white border-4 border-green-900 rounded-4xl p-6 space-y-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">"Alex's" Journey</h2>
        <p className="italic">Fictional character based on real interviews</p>
        <p>Alex discovers the guide through a social worker and learns he can challenge mistreatment in his foster home.</p>
        <Image src="/images/user-journey-alex.png" alt="User journey scenario of Alex learning about his rights" width={800} height={400} />
      </section>

      {/* Solution Callout */}
      <section className="text-center bg-green-950 text-white pt-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold">Our Solution</h2>
          <p className="max-w-2xl mx-auto my-4">
            A practical, scalable strategy to help social workers integrate the guide into their daily workflow—ensuring every youth hears about their rights.
          </p>
          <Image src="/images/solution-framework.png" alt="Solution framework visual for communication rollout" width={800} height={400} />
        </div>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {/* Reflections */}
        <div className="bg-white border-4 border-green-900 rounded-4xl p-9 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Reflections</h2>
          <p>
            Designing for institutions taught me how to merge empathy with systems thinking. I focused on translating complexity into clarity, always centering the child’s perspective.
          </p>
        </div>

        {/* Skills Summary */}
        <div className="bg-white border-4 border-green-900 rounded-4xl p-9">
          <h2 className="text-xl font-semibold">Skills Developed</h2>
          <ul className="mt-2 ml-4 text-muted-foreground list-disc list-inside">
            <li>User Research</li>
            <li>Service Design</li>
            <li>UX Writing</li>
            <li>Stakeholder Collaboration</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
