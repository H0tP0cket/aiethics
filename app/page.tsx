// pages/index.js
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const keyIssues = [
    {
      title: "Bias in Algorithms",
      description:
        "AI systems often reflect and amplify biases in the data they are trained on, leading to unfair outcomes.",
    },
    {
      title: "Transparency",
      description:
        "Understanding how AI makes decisions is crucial to building trust and accountability.",
    },
    {
      title: "Data Privacy",
      description:
        "AI relies on vast amounts of data, raising concerns about how this data is collected, stored, and used.",
    },
    {
      title: "Accountability",
      description:
        "Who is responsible when AI systems cause harm? Defining accountability is key.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 ">
      {/* Header */}
      <Head>
        <title>AI Ethics</title>
        <link rel="icon" href="/logos/favicon.ico" />
        <link
          rel="preload"
          href="/public/fonts/Helveticaimage.png.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <header className="flex items-center justify-between px-8 py-4 bg-gray-900  opacity-70 shadow-md z-10 relative">
        <h1 className="text-xl font-bold text-[#6C63FF]">AI Ethics</h1>
        <Link href="/blog" className="text-[#6C63FF] hover:underline">
          Blog
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center z-10 relative">
          <h2 className="text-4xl font-extrabold text-gray-100 z-10 relative">
            The Ethics of AI
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Navigating data privacy and transparency in a digital age.
          </p>
          <Button className="mt-6 bg-[#6C63FF] hover:bg-purple-600">
            Learn More
          </Button>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="grid grid-cols-1  gap-8 items-center min-h-[60vh] " // Control the height here
        >
          <div className="relative z-10 pl-10">
            <h3 className="text-3xl font-bold text-gray-100 text-center">
              About
            </h3>
            <p className="mt-4 text-white">
              <b className="text-4xl font-extrabold">Artificial intelligence</b>{" "}
              is disrupting industries in 2024, from healthcare and education to
              finance and entertainment. Generative AI is changing the game of
              content creation, while AI-powered tools improve diagnostics and
              personalized medicine. However, all these developments come with
              considerable ethical issues, such as{" "}
              <b className="text-2xl font-extrabold">
                bias, privacy, and transparency.
              </b>{" "}
              Biased algorithms run the risk of perpetuating inequities within
              society, and the use of so much personal data opens up the
              potential for surveillance and misuse. In particular, transparency
              is a key component in developing trust and accountability in
              high-stakes decisions. With deep integration of AI in daily life,
              addressing ethical concerns has acquired greater relevance.
              Fairness, explainability, and respect for privacy are some of the
              key features that AI systems need to be assured of by governments,
              organizations, and communities. By focusing on ethical
              development, we are able to realize the tremendous potential of
              AI,{" "}
              <b className="text-2xl font-extrabold">
                while protecting human rights and values
              </b>
              .
            </p>
          </div>

          {/* Image Container */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image
              src="/funnyAIimage.jpg"
              alt="AI Ethics Illustration"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
        </section>

        {/* Key Issues Section */}
        <section id="key-issues" className="text-center">
          <h3 className="text-2xl font-bold text-gray-100">Key Issues</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {keyIssues.map((issue, index) => (
              <Card
                key={index}
                className="bg-navy-light border-3  border-gray-800 shadow-2xl "
              >
                <CardHeader>
                  <CardTitle className="text-[#6C63FF]">
                    {issue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{issue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="text-center">
          <h3 className="text-2xl font-bold text-gray-100">Resources</h3>
          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="https://ai.google/education/"
                className="text-[#6C63FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google AI Education
              </a>
            </li>
            <li>
              <a
                href="https://www.partnershiponai.org/"
                className="text-[#6C63FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Partnership on AI
              </a>
            </li>
            <li>
              <a
                href="https://privacyinternational.org/"
                className="text-[#6C63FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy International
              </a>
            </li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-12 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-100">
            Join the Conversation
          </h3>
          <p className="mt-4 text-gray-400">
            Engage with us to explore solutions and frameworks for ethical AI.
          </p>
          <Button className="mt-6 bg-[#6C63FF] hover:bg-purple-600">
            Get Involved
          </Button>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
