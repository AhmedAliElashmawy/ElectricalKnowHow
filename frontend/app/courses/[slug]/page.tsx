import { api } from "@/services/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const course = await api.getCourseBySlug(slug);
  
  if (!course || !course.id) {
    notFound();
  }

  const articles = await api.getArticlesByCourse(course.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <Link href={`/courses?group=${course.courseGroupId}`} className="text-sm text-zinc-400 hover:text-white mb-6 inline-flex items-center">
          ← Back to Course List
        </Link>
        <div className="bg-gradient-to-r from-blue-900/30 to-zinc-900 border border-blue-500/30 rounded-3xl p-8 md:p-12 mt-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">{course.title}</h1>
          <p className="text-xl text-zinc-300 relative z-10 leading-relaxed">{course.description}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm">
            {articles.length}
          </span>
          Curriculum Articles
        </h2>
        
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {articles.length === 0 ? (
            <p className="text-zinc-500 italic">No articles published yet.</p>
          ) : (
            articles.map((article, index) => (
              <div key={article.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-500 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                  {article.orderIndex}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <Link href={`/articles/${article.slug}`} className="block h-full">
                    <h3 className="font-bold text-lg mb-2 text-zinc-200 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-zinc-400 line-clamp-2">
                      {article.body}
                    </p>
                    <div className="mt-4 flex items-center text-xs font-semibold text-blue-500">
                      Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
