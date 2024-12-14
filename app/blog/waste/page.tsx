import Link from "next/link";

export default function EWasteAI() {
  return (
    <div className="min-h-screen bg-navy text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 bg-navy-light shadow-md">
        <h1 className="text-xl font-bold text-[#6C63FF]">
          E-Waste from AI Hardware
        </h1>
        <Link href="/" className="text-[#6C63FF] hover:underline">
          Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold text-gray-100">
          The Growing Issue of E-Waste in AI
        </h2>
        <p className="text-gray-400">
          The demand for powerful AI systems has led to increased production of
          high-performance computing hardware. However, as hardware becomes
          obsolete, the disposal of electronic waste (e-waste) has become a
          significant environmental issue. Toxic components in e-waste can leach
          into soil and water, causing long-term damage.
        </p>
        <p className="text-gray-400">
          Efforts to address this problem include promoting hardware recycling,
          developing modular and upgradable systems, and exploring biodegradable
          materials for electronics. These actions can help mitigate the
          environmental impact of AI hardware.
        </p>
        <p className="text-gray-400">
          Source:{" "}
          <a
            href="https://www.weforum.org/agenda/2022/02/e-waste-sustainability-ai/"
            className="text-[#6C63FF] hover:underline"
          >
            World Economic Forum: E-Waste and Sustainability
          </a>
        </p>
      </main>
    </div>
  );
}
