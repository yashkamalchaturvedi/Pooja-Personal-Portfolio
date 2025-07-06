import { Twitter, Github } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-600 dark:from-slate-100 dark:to-blue-400 bg-clip-text text-transparent">
              Pooja Ranjan
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Herder-in-Chief at Ethereum Cat Herders and Founder of Avarch LLC. 
              Translating Ethereum's future, one EIP at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/poojaranjan19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <Twitter className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://github.com/AvarchLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <Github className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-slate-100">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#projects")}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
          
          {/* Key Projects */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-slate-100">Key Projects</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://avarch.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Avarch LLC
                </a>
              </li>
              <li>
                <a 
                  href="https://etherworld.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  EtherWorld
                </a>
              </li>
              <li>
                <a 
                  href="https://eipsinsight.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  EIPsInsight
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/wiepteam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Women in Ethereum Protocol
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 dark:text-slate-400 text-center md:text-left">
              <p>© 2024 Pooja Ranjan. Building the future of Ethereum through education and coordination.</p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Actively contributing to Ethereum development</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
