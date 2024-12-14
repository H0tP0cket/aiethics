import Link from "next/link";

export default function EnergyConsumptionAI() {
  return (
    <div className="min-h-screen bg-navy text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 bg-navy-light shadow-md">
        <h1 className="text-xl font-bold text-[#6C63FF]">
          Energy Consumption in AI
        </h1>
        <Link href="/" className="text-[#6C63FF] hover:underline">
          Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold text-gray-100">
          The High Energy Cost of AI Model Training
        </h2>
        <p className="text-gray-400">
          Training large-scale AI models, such as GPT and other deep learning
          systems, requires immense computational resources. This leads to
          significant energy consumption, equivalent to the electricity usage of
          small towns. The carbon footprint of a single model training run can
          be staggering, contributing heavily to climate change.
        </p>
        <p className="text-gray-400">
          Researchers and companies are exploring solutions such as optimizing
          algorithms for efficiency, using more energy-efficient hardware, and
          shifting to renewable energy sources. These strategies aim to reduce
          the environmental cost of advancing AI technologies.
        </p>
        <p className="text-gray-400">
          Source:{" "}
          <a
            href="https://www.nature.com/articles/d41586-020-00309-9"
            className="text-[#6C63FF] hover:underline"
          >
            Nature: Energy Consumption of AI Models
          </a>
        </p>
      </main>
    </div>
  );
}
