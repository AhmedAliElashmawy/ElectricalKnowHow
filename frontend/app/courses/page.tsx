import { api } from "@/services/api";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CoursesPage({ searchParams }: PageProps) {
  const { group } = await searchParams;
  
  let courses = await api.getCourses();
  let groupDetails = null;
  
  if (group && typeof group === 'string') {
    const groupId = parseInt(group, 10);
    courses = await api.getCoursesByGroup(groupId);
    
    // Attempt to get group name for context
    const allGroups = await api.getCourseGroups();
    groupDetails = allGroups.find(g => g.id === groupId);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-white/10 pb-8">
        <Link href="/categories" className="text-sm text-zinc-400 hover:text-white mb-6 inline-flex items-center">
          ← Back to Categories
        </Link>
        <h1 className="text-4xl font-bold mb-4">
          {groupDetails ? groupDetails.name : "All Courses"}
        </h1>
        <p className="text-zinc-400 text-lg">
          Select a course to view its curriculum and articles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.length === 0 ? (
          <p className="text-zinc-500 italic col-span-2">No courses available for this selection.</p>
        ) : (
          courses.map((course) => (
            <Link href={`/courses/${course.slug}`} key={course.id}>
              <div className="group flex flex-col h-full bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20">
                <div className="h-32 bg-gradient-to-br from-blue-900/40 to-purple-900/40 relative">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                   <div className="absolute bottom-4 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                     Course {course.orderIndex}
                   </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-zinc-400 line-clamp-3">
                      {course.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-300">
                      View Curriculum →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
