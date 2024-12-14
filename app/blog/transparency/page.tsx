import Link from "next/link";

export default function TransparencyInAI() {
  return (
    <div className="min-h-screen bg-navy text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 bg-navy-light shadow-md">
        <h1 className="text-xl font-bold text-[#6C63FF]">Transparency in AI</h1>
        <Link href="/" className="text-[#6C63FF] hover:underline">
          Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold text-gray-100">
          The Role of Transparency
        </h2>
        <p className="text-gray-400">
          Transparency in AI refers to the ability to understand and explain how
          these systems make decisions. This is especially critical when AI
          models are used in sensitive areas like healthcare, criminal justice,
          and finance, where the consequences of AI decisions have a profound
          impact.
        </p>
        <p className="text-gray-400">
          Increasing transparency will involve developing explainable AI models
          and giving users insight into how data is processed. Open
          communication and collaboration between developers and stakeholders
          can foster trust in AI technologies.
        </p>
        <p className="text-gray-400">
          Source:{" "}
          <a
            href="https://www.oceg.org/what-does-transparency-really-mean-in-the-context-of-ai-governance/"
            className="text-[#6C63FF] hover:underline"
          >
            OCEG - Transparency in AI and governance
          </a>
        </p>
      </main>
    </div>
  );
}
