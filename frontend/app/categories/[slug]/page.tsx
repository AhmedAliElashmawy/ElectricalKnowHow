import { api } from "@/services/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailsPage({ params }: PageProps) {
  // Await the params object in Next.js 15+
  const { slug } = await params;
  
  const category = await api.getCategoryBySlug(slug);
  
  if (!category || !category.id) {
    notFound();
  }

  const courseGroups = await api.getCourseGroupsByCategory(category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-white/10 pb-8">
        <Link href="/categories" className="text-sm text-zinc-400 hover:text-white mb-6 inline-flex items-center">
          ← Back to Categories
        </Link>
        <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-xl text-zinc-400">{category.description}</p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Course Groups</h2>
        {courseGroups.length === 0 ? (
          <p className="text-zinc-500 italic">No course groups available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseGroups.map((group) => (
              <div key={group.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 block">
                      Part {group.orderIndex}
                    </span>
                    <h3 className="text-xl font-bold mb-4">{group.name}</h3>
                  </div>
                </div>
                <Link 
                  href={`/courses?group=${group.id}`}
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 font-medium transition-colors"
                >
                  View Courses
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
