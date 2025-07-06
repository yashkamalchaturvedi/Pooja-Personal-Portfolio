import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MEDIA_ITEMS } from "@/lib/constants";

export default function MediaSection() {
  return (
    <section id="media" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Media & Speaking</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conference appearances, interviews, and media coverage from around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEDIA_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onClick={() => item.url && window.open(item.url, "_blank")}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/600x400/627EEA/ffffff?text=" + encodeURIComponent(item.type);
                  }}
                />
                <div className="p-6">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                      item.type.includes("Devcon") ? "bg-[hsl(var(--ethereum))]/10 text-[hsl(var(--ethereum))]" :
                      item.type.includes("Podcast") ? "bg-[hsl(var(--cyan-accent))]/10 text-cyan-600" :
                      item.type.includes("EthCC") ? "bg-purple-100 text-purple-600" :
                      "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.type}
                  </Badge>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-[hsl(var(--ethereum))] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{item.date}</span>
                    {item.url && (
                      <span className="text-xs text-[hsl(var(--ethereum))] font-medium group-hover:underline">
                        Watch/Listen →
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[hsl(var(--ethereum))] hover:bg-[hsl(var(--ethereum-light))] text-white px-8 py-3 h-auto font-semibold transition-all duration-300">
            View All Appearances
          </Button>
        </div>
      </div>
    </section>
  );
}
