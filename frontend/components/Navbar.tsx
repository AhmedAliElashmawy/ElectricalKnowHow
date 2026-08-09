import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-black/50 border-b border-zinc-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logo.png" 
                alt="Electrical KnowHow Logo" 
                width={36} 
                height={36} 
                className="rounded bg-white p-1 object-contain group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-gray-400">
                Electrical KnowHow
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/categories" className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-all">
                Electrical Courses
              </Link>
              <Link href="/categories" className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-all">
                Inspection Courses
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-all">
                Download Library
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-all">
                Sizing MEP Equipment
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
