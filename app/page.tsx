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
      title: "Environmental Impact",
      description:
        "Training AI models consumes significant energy, contributing to environmental concerns such as carbon emissions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
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
      <header className="flex items-center justify-between px-8 py-4 bg-gray-900 opacity-70 drop-shadow-xl z-10 relative">
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
            Exploring the environmental impact of AI in the digital age.
          </p>
          <Button className="mt-6 bg-[#6C63FF] hover:bg-purple-600">
            Learn More
          </Button>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="grid grid-cols-1 gap-8 items-center min-h-[60vh]"
        >
          <div className="relative z-10 pl-10">
            <h3 className="text-3xl font-bold text-gray-100 text-center">
              About
            </h3>
            <p className="mt-4 text-white">
              <b className="text-4xl font-extrabold">Artificial intelligence</b>{" "}
              is revolutionizing industries in 2024, but its environmental
              impact cannot be ignored. Training large-scale AI models often
              requires massive computational resources, consuming vast amounts
              of energy. The carbon footprint of these processes contributes to
              global warming, raising ethical questions about sustainable AI
              development. Addressing these challenges requires collaboration
              across industries to prioritize energy efficiency, utilize
              renewable energy sources, and rethink model training practices. By
              focusing on reducing the environmental impact of AI, we can
              harness its potential while ensuring a sustainable future.
            </p>
          </div>

          {/* Image Container */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image
              src="/funnyAIimage.jpg"
              alt="Environmental Impact of AI"
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
                className="bg-navy-light border-3 border-gray-800 shadow-2xl"
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
                href="https://www.ieee.org/"
                className="text-[#6C63FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE Sustainability in AI
              </a>
            </li>
            <li>
              <a
                href="https://www.carbontrust.com/"
                className="text-[#6C63FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carbon Trust: AI and Energy Efficiency
              </a>
            </li>
            <li>
              <a
                href="https://climatechange.ai/"
                className="text-[#6C63FF] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Climate Change AI
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
            Collaborate with us to develop sustainable AI practices and reduce
            its environmental impact.
          </p>
          <Button className="mt-6 bg-[#6C63FF] hover:bg-purple-600">
            Get Involved
          </Button>
        </section>
      </main>
    </div>
  );
}
