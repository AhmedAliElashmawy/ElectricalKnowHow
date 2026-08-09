import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-[calc(100vh-4rem)] overflow-hidden scroll-smooth">
      {/* Background Gradients (Fixed so they span the whole scrolling page) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-20" />
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20" />
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] z-10 text-center px-4 max-w-4xl mx-auto">
        {/*<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-sm text-blue-600 dark:text-blue-400 mb-8 backdrop-blur-sm">*/}
        {/*  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>*/}
        {/*  New platform structure is live*/}
        {/*</div>*/}
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 uppercase text-zinc-900 dark:text-white">
          Electrical <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            KnowHow
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl font-medium text-zinc-600 dark:text-zinc-300 mb-12 max-w-2xl mx-auto tracking-widest italic uppercase">
          Where you can know more...
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/categories" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Explore Categories
          </Link>
          <Link 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-200/50 dark:bg-white/5 text-zinc-900 dark:text-white font-semibold rounded-full border border-zinc-300 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            About Us
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-24 px-4 bg-white/40 dark:bg-black/40 border-y border-zinc-200 dark:border-white/5 backdrop-blur-md">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                About the Founder
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">Eng. Ali Hassan Elashmawy</h2>
              <h3 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-8 uppercase tracking-wider">Owner of Electrical KnowHow</h3>
              
              <div className="space-y-6 text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                <p>
                  Welcome to Electrical KnowHow! I am Eng. Ali Hassan Elashmawy, the founder and driving force behind this platform. With years of deep industry experience in electrical engineering design, I created this space to share practical knowledge, industry standards, and comprehensive design methodologies.
                </p>
                <p>
                  Our mission is to bridge the gap between theoretical academic studies and practical, real-world engineering applications. Whether you are a beginner looking to understand the basics or a seasoned professional seeking advanced calculation techniques, you will find the resources here to elevate your expertise.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Premium Image Container Placeholder */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 border border-zinc-300 dark:border-white/10 flex flex-col items-center justify-center p-8 relative group shadow-2xl">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
                <svg className="w-32 h-32 text-blue-500/50 relative z-10 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div className="relative z-10 text-center">
                  <span className="block text-xl font-bold text-zinc-900 dark:text-white mb-1">Eng. Ali</span>
                  <span className="block text-sm text-zinc-500 dark:text-zinc-400">Electrical Engineering Expert</span>
                </div>
              </div>
              
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-2xl p-6 border border-zinc-200 dark:border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.3)] animate-bounce-slow text-white">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black">10+</div>
                  <div className="text-sm font-medium leading-tight">Years of<br/>Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">Get in Touch</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
              Have questions about a specific course? Want to discuss an electrical design project? Feel free to reach out to our team.
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-zinc-900/80 p-8 md:p-12 rounded-[2rem] border border-zinc-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full"></div>
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-100 dark:bg-black/60 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    placeholder="Eng. John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-100 dark:bg-black/60 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-100 dark:bg-black/60 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                  placeholder="Course Inquiry / Consultation" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-zinc-100 dark:bg-black/60 border border-zinc-200 dark:border-white/10 rounded-2xl px-5 py-4 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" 
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full md:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 mt-4"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-zinc-200 dark:border-white/10 text-center text-zinc-500 text-sm bg-white/40 dark:bg-black/40 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white p-0.5 inline-block">
               <img src="/logo.png" alt="EK Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-zinc-900 dark:text-white tracking-wide">Electrical KnowHow</span>
          </div>
          <p>© {new Date().getFullYear()} Electrical KnowHow. Designed with precision.</p>
        </div>
      </footer>
    </div>
  );
}
