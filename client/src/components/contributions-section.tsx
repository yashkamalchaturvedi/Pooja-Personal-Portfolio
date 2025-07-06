import { CONTRIBUTIONS } from "@/lib/constants";

export default function ContributionsSection() {
  return (
    <section id="contributions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Major Contributions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key milestones in Ethereum's evolution that I've helped coordinate and deliver
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200"></div>
          
          {CONTRIBUTIONS.map((item, index) => (
            <div key={item.id} className="relative flex items-center mb-12">
              {item.side === "left" ? (
                <>
                  <div className="flex-1 pr-8 text-right">
                    <div className={`p-6 rounded-xl shadow-sm ${
                      item.upcoming 
                        ? "bg-gradient-to-r from-[hsl(var(--ethereum))]/10 to-[hsl(var(--cyan-accent))]/10 border border-[hsl(var(--ethereum))]/20" 
                        : "bg-slate-50"
                    }`}>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600 mb-3">
                        {item.description}
                      </p>
                      <span className={`text-sm font-semibold ${
                        item.upcoming ? "text-[hsl(var(--cyan-accent))]" : "text-[hsl(var(--ethereum))]"
                      }`}>
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    item.upcoming 
                      ? "bg-[hsl(var(--cyan-accent))] animate-pulse" 
                      : "bg-[hsl(var(--ethereum))]"
                  }`}></div>
                  <div className="flex-1 pl-8"></div>
                </>
              ) : (
                <>
                  <div className="flex-1 pr-8"></div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    item.upcoming 
                      ? "bg-[hsl(var(--cyan-accent))] animate-pulse" 
                      : "bg-[hsl(var(--ethereum))]"
                  }`}></div>
                  <div className="flex-1 pl-8">
                    <div className={`p-6 rounded-xl shadow-sm ${
                      item.upcoming 
                        ? "bg-gradient-to-r from-[hsl(var(--ethereum))]/10 to-[hsl(var(--cyan-accent))]/10 border border-[hsl(var(--ethereum))]/20" 
                        : "bg-slate-50"
                    }`}>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600 mb-3">
                        {item.description}
                      </p>
                      <span className={`text-sm font-semibold ${
                        item.upcoming ? "text-[hsl(var(--cyan-accent))]" : "text-[hsl(var(--ethereum))]"
                      }`}>
                        {item.date}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
