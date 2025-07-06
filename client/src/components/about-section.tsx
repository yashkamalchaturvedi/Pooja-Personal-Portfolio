import poojaPhoto from "../assets/pooja-ranjan.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                About
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
                Building Ethereum's Future
              </h2>
            </div>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I became part of the blockchain community in 2016 by learning about the Ethereum blockchain. 
                As Herder-in-Chief at Ethereum Cat Herders and Founder of Avarch LLC, I've dedicated my career 
                to supporting Ethereum protocol development and creating blockchain awareness.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I founded Avarch LLC in 2017 with EtherWorld as my first project to create awareness about blockchain 
                technology. Publishing technical content, project updates and latest news, EtherWorld has become one 
                of the leading blockchain publishing websites. In 2020, I launched BlockAction as an explorer to 
                support Beacon chain multiclient testnet.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I actively contribute to the Ethereum Improvement Proposal Improvement Process (EIPIP) and EIP data 
                analytics, publishing monthly EIPs statistics reports. I host the popular education series PEEPanEIP 
                and have been supporting Ethereum Network Upgrades while launching EIPsInsight, a data analytics 
                dashboard for EIPs.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">9+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wide mt-2">Years in Ethereum</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wide mt-2">Network Upgrades</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wide mt-2">EIPs Reviewed</div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src={poojaPhoto} 
              alt="Pooja Ranjan professional photo" 
              className="relative rounded-3xl shadow-2xl max-w-md w-full h-auto object-cover border-4 border-white/50 backdrop-blur-sm"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <div className="text-white font-bold text-xs text-center leading-tight">
                <div>Ethereum</div>
                <div>Cat Herders</div>
                <div className="text-blue-200 text-xs mt-1">2016-Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
