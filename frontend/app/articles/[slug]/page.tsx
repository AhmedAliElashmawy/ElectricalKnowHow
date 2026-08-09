import { api } from "@/services/api";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticleDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await api.getArticleBySlug(slug);
  
  if (!article || !article.id) {
    notFound();
  }

  // Optionally fetch the course context to build the breadcrumb
  let courseDetails = null;
  if (article.courseId) {
    const courses = await api.getCourses();
    courseDetails = courses.find(c => c.id === article.courseId);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Article Header */}
      <div className="mb-12 border-b border-white/10 pb-10">
        <div className="flex flex-col gap-4">
          <Link 
            href={courseDetails ? `/courses/${courseDetails.slug}` : "/categories"} 
            className="text-sm text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
          >
            ← Back to {courseDetails ? "Curriculum" : "Courses"}
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-zinc-500 mt-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Lesson {article.orderIndex}
            </span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <article className="prose prose-invert prose-lg prose-blue max-w-none">
        {/* We use a simple div here since the body is just plain text in our mock. 
            In a real app, this might be Markdown or rich HTML. */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/5 leading-relaxed text-zinc-300 whitespace-pre-wrap">
          {article.body}
          
          {/* Sample extended content to make the demo look realistic */}
          {article.slug === "1-introduction" && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why is this important?</h3>
              <p className="mb-4">
                Understanding these three basic items is crucial. Often, designers use them intuitively without fully grasping the mathematical or physical principles behind them. 
              </p>
              <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
                <p className="text-blue-200 italic m-0">
                  "A solid foundation in the core principles will save you hours of debugging when scaling up your electrical schematics."
                </p>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Article Footer / Pagination Mock */}
      <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
        <button className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors">
          Previous Lesson
        </button>
        <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all">
          Next Lesson →
        </button>
      </div>
    </div>
  );
}
