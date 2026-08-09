import { api } from "@/services/api";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await api.getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Categories</h1>
        <p className="text-zinc-400 text-lg">Browse our extensive collection of electrical engineering topics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/categories/${category.slug}`} key={category.id}>
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 transition-all duration-300 h-full">
              <div className="bg-zinc-900 rounded-xl p-6 h-full flex flex-col relative z-10 border border-white/5 group-hover:border-transparent transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-6">
                  {/* Icon placeholder */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{category.name}</h2>
                <p className="text-zinc-400 flex-grow">{category.description}</p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Course Groups <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
