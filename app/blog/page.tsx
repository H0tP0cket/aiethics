// pages/blog.js
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Understanding Bias in AI",
      excerpt:
        "Exploring how biases emerge in AI systems and how to mitigate them...",
      href: "/blog/understanding",
    },
    {
      title: "The Role of Transparency in AI",
      excerpt:
        "Why transparency is vital for building trust in AI technologies...",
      href: "/blog/transparency",
    },
    {
      title: "Protecting Data Privacy in an AI-driven World",
      excerpt:
        "Key considerations for safeguarding personal data in the age of AI...",
      href: "/blog/data-privacy",
    },
    {
      title: "Energy Consumption in AI",
      excerpt:
        "Analyzing the massive energy demands of AI systems and how to mitigate their environmental impact...",
      href: "/blog/energy",
    },
    {
      title: "E-Waste and AI",
      excerpt:
        "Exploring the rise of electronic waste due to AI hardware and how to promote sustainable solutions...",
      href: "/blog/waste",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="flex items-center justify-between px-8 py-4 bg-navy-light shadow-md">
        <h1 className="text-xl font-bold text-[#6C63FF]">AI Ethics Blog</h1>
        <Link href="/" className="text-[#6C63FF] hover:underline">
          Home
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12 space-y-8">
        <h2 className="text-4xl font-extrabold text-gray-100 text-center">
          Blog Posts
        </h2>
        <ul className="space-y-6">
          {posts.map((post, index) => (
            <li key={index} className="border-b border-gray-700 pb-4">
              <h3 className="text-2xl font-bold text-[#6C63FF]">
                <Link href={post.href} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-gray-400">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
