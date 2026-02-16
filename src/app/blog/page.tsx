import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BuildPCBs.com",
  description:
    "Latest blog posts about PCB design, electronics engineering, and AI-powered design tools.",
};

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title:
        "What Is a PCB? The Complete Beginner’s Guide to Printed Circuit Boards",
      excerpt:
        "Design with an AI Agent that takes your prompts into circuit board layouts in minutes. Hardware has always been bottlenecked by the invisible cost of friction. Every inefficiency, every cognitive tax, slows progress.",
      author: "Samsudeen Afolabi",
      role: "Designer, buildPCB.",
      date: "October 12, 2025",
      readTime: "4 mins",
      category: "PCB Design Fundamentals",
    },
    {
      id: 2,
      title:
        "Understanding Layers in PCB Design: From Single-Layer to Multilayer Boards",
      excerpt:
        "AI is revolutionizing the way we design electronics. Discover the latest trends and how you can leverage AI for your next project.",
      author: "Jane Doe",
      role: "AI Specialist",
      date: "October 10, 2025",
      readTime: "6 mins",
      category: "PCB Design Fundamentals",
    },
    {
      id: 3,
      title: "Traces, Vias, and Pads Explained: A Designer’s Glossary",
      excerpt:
        "A beginner's guide to understanding the PCB manufacturing process, from gerber files to final assembly.",
      author: "John Smith",
      role: "Manufacturing Expert",
      date: "October 8, 2025",
      readTime: "8 mins",
      category: "PCB Design Fundamentals",
    },
  ];
  const categories = [
    {
      name: "PCB Design Fundamentals",
      lastPublished: "October 12, 2025",
    },
    {
      name: "AI & Automation in Electronics",
      lastPublished: "October 10, 2025",
    },
    {
      name: "Practical Tutorials / How-To Guides",
      lastPublished: "October 8, 2025",
    },
    {
      name: "Component & Material Insights",
      lastPublished: "October 5, 2025",
    },
    {
      name: "BuildPCBs Updates & Engineering Stories",
      lastPublished: "October 2, 2025",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left lg:text-center mb-32">
          <h1
            className="text-[44px] font-normal text-[#444444] dark:text-white"
            style={{ lineHeight: "120%", letterSpacing: "0%" }}
          >
            Blog
          </h1>
          <p
            className="text-[18px] font-normal text-gray-500 dark:text-gray-400 mt-2 font-geist-sans"
            style={{ lineHeight: "100%", letterSpacing: "0.5%" }}
          >
            Few minutes blog reads!
          </p>
        </div>

        <div className="lg:flex lg:space-x-8">
          {/* Main content (80%) */}
          <div className="lg:w-4/5">
            <div>
              {posts.map((post) => {
                // Simple slug generation for demo
                const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

                return (
                  <Link key={post.id} href={`/blog/${slug}`} className="block">
                    <article
                      className="group flex w-full max-w-[802px] border-b border-gray-200 dark:border-gray-700 pb-8 mb-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 active:bg-gray-50 dark:active:bg-gray-900 transition-colors duration-200"
                    >
                      <div className="flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1.5" />
                              <span>{post.date}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1.5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <h2 className="text-[20px] lg:text-[32px] font-medium lg:font-normal text-[#444444] dark:text-white mb-4 leading-[1.4] tracking-[-0.005em] lg:tracking-[-0.02em] transition-all">
                            {post.title}
                          </h2>
                          {/* Excerpt: Hidden by default, reveal on hover */}
                          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out mb-6">
                            <div className="overflow-hidden">
                              <p className="text-[14px] text-gray-600 dark:text-gray-300 leading-[1.35] tracking-[0.01em] line-clamp-2">
                                {post.excerpt}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            {/* You can use an Image component here if you have author avatars */}
                            <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {post.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[91px] h-[78px] lg:w-[408px] lg:h-auto flex-shrink-0 ml-6 rounded-lg bg-[linear-gradient(180deg,#255CFF_0%,#EBEBEB_100%)] mt-10 lg:mt-0"></div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Sidebar (20%) */}
          <aside className="hidden lg:block lg:w-1/5 mt-8 lg:mt-0">
            <div className="sticky top-24 p-4">
              <div className="space-y-6">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute -left-4 top-0 w-[3px] h-full bg-[#0038DF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="text-[16px] font-medium text-[#444444] dark:text-white leading-tight mb-1">
                        {category.name}
                      </h4>
                      <p className="text-sm text-[#999999]">
                        Last updated: {category.lastPublished}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Careers Section */}
              <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="group relative cursor-pointer">
                  <div className="absolute -left-4 top-0 w-[3px] h-full bg-[#0038DF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h4 className="text-[16px] font-medium text-[#444444] dark:text-white leading-tight mb-1">
                      Careers
                    </h4>
                    <p className="text-sm text-[#999999]">
                      We&apos;re not hiring yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
