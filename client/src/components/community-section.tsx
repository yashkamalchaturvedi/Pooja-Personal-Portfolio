export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Community Building</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--ethereum))]">Women in Ethereum Protocol (WiEP)</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Fostering diversity and inclusion in Ethereum protocol development by creating 
                opportunities for women to contribute to core protocol work and governance.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-[hsl(var(--ethereum))]">150+</div>
                  <div className="text-sm text-slate-500">Active Members</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-2xl font-bold text-[hsl(var(--ethereum))]">50+</div>
                  <div className="text-sm text-slate-500">Mentorship Sessions</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[hsl(var(--ethereum))] rounded-full mt-3"></div>
                <p className="text-slate-600">Monthly technical workshops and study groups</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[hsl(var(--ethereum))] rounded-full mt-3"></div>
                <p className="text-slate-600">Mentorship programs connecting newcomers with experts</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[hsl(var(--ethereum))] rounded-full mt-3"></div>
                <p className="text-slate-600">Career guidance and opportunity sharing</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Women in Ethereum Protocol community" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ethereum))]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
