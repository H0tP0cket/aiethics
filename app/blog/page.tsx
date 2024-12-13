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
      <footer className="bg-navy-light py-4 text-center text-gray-400">
        © 2024 AI Ethics Blog
      </footer>
    </div>
  );
}
