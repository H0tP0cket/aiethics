import Link from "next/link";

export default function UnderstandingBiasInAI() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 bg-navy-light shadow-md">
        <h1 className="text-xl font-bold text-[#6C63FF]">
          Understanding Bias in AI
        </h1>
        <Link href="/" className="text-[#6C63FF] hover:underline">
          Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold text-gray-100">
          Exploring Bias in AI
        </h2>
        <p className="text-gray-400">
          Artificial intelligence systems often mirror and magnify the biases
          found in the data they are trained on. For instance, an AI trained on
          historical hiring data may inadvertently favor certain groups while
          excluding others. These biases can lead to significant ethical and
          practical concerns.
        </p>
        <p className="text-gray-400">
          Efforts to mitigate AI bias involve adopting fair training practices,
          ensuring diverse data sets, and implementing robust evaluation
          frameworks. Researchers and practitioners must continually assess AI
          systems to minimize potential harms.
        </p>
        <p className="text-gray-400">
          Source:{" "}
          <a
            href="https://www.brookings.edu/articles/algorithmic-bias-detection-and-mitigation-best-practices-and-policies-to-reduce-consumer-harms/"
            className="text-[#6C63FF] hover:underline"
          >
            Nature - Bias in AI
          </a>
        </p>
      </main>
    </div>
  );
}
