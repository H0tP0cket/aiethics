import Link from "next/link";

export default function DataPrivacyInAI() {
  return (
    <div className="min-h-screen bg-navy text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 bg-navy-light shadow-md">
        <h1 className="text-xl font-bold text-[#6C63FF]">Data Privacy in AI</h1>
        <Link href="/" className="text-[#6C63FF] hover:underline">
          Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-3xl font-bold text-gray-100">
          Safeguarding Data Privacy
        </h2>
        <p className="text-gray-400">
          Data privacy has become a central concern as AI systems rely heavily
          on user data for training and operation. Without proper safeguards,
          there is a significant risk of data breaches, misuse, or unauthorized
          access, compromising user trust and security.
        </p>
        <p className="text-gray-400">
          Companies and organizations must adhere to privacy laws like GDPR and
          CCPA, while also implementing advanced encryption methods and user
          consent mechanisms. Prioritizing data privacy can ensure ethical AI
          development and usage.
        </p>
        <p className="text-gray-400">
          Source:{" "}
          <a
            href="https://hai.stanford.edu/news/privacy-ai-era-how-do-we-protect-our-personal-information"
            className="text-[#6C63FF] hover:underline"
          >
            Stanford - AI and Data Privacy
          </a>
        </p>
      </main>
    </div>
  );
}
