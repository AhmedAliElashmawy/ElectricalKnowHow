export interface Category {
  id?: number;
  name: string;
  slug: string;
  description: string;
  type: string;
  categoryId?: number; // based on postman variable usage
}

export interface CourseGroup {
  id?: number;
  name: string;
  slug: string;
  orderIndex: number;
  categoryId: number;
}

export interface Course {
  id?: number;
  title: string;
  slug: string;
  description: string;
  orderIndex: number;
  courseGroupId: number;
}

export interface Article {
  id?: number;
  title: string;
  slug: string;
  body: string;
  orderIndex: number;
  courseId: number;
}
