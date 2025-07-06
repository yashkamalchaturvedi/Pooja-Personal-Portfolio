import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest from EtherWorld</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Recent articles and insights on Ethereum development and ecosystem updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(post.url, "_blank")}
            >
              <div className="p-6">
                <span className="text-xs text-[hsl(var(--ethereum))] font-semibold uppercase tracking-wide">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-[hsl(var(--ethereum))] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                  <span className="text-xs text-[hsl(var(--ethereum))] font-medium group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-[hsl(var(--ethereum))] hover:bg-[hsl(var(--ethereum-light))] text-white px-8 py-3 h-auto font-semibold transition-all duration-300"
            onClick={() => window.open("https://etherworld.co/", "_blank")}
          >
            Visit EtherWorld.co
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
