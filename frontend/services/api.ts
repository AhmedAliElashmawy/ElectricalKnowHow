import { Category, CourseGroup, Course, Article } from '../types';

const API_BASE_URL = 'http://localhost:8080/api';

// Helper to handle fetch with a graceful fallback for the demo
async function fetchWithFallback<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API error');
    return res.json();
  } catch (error) {
    console.warn(`Backend not reachable for ${endpoint}. Using fallback data.`);
    return fallbackData;
  }
}

// Mock Data transcribed directly from the screenshots
const mockCategories: Category[] = [
  { id: 1, name: 'Electrical Design', slug: 'electrical-design', description: 'Electrical engineering courses and design guides.', type: 'COURSE' },
  { id: 2, name: 'Low Current Systems', slug: 'low-current-systems', description: 'Low voltage and building management systems.', type: 'COURSE' }
];

const mockCourseGroups: CourseGroup[] = [
  { id: 1, name: 'First: Electrical Design Courses', slug: 'first-electrical-design-courses', orderIndex: 1, categoryId: 1 },
  { id: 2, name: 'Second: Lighting Design Courses', slug: 'second-lighting-design-courses', orderIndex: 2, categoryId: 1 },
  { id: 3, name: 'Third: Power Distribution Design Courses', slug: 'third-power-distribution-design-courses', orderIndex: 3, categoryId: 1 }
];

const mockCourses: Course[] = [
  {
    id: 1,
    title: "EE-1: Beginners' Electrical Design Course",
    slug: 'ee-1-beginners-electrical-design-course',
    description: 'This first level design course is intended to prepare target persons with theoretical concepts and practical tools necessary for electrical design.',
    orderIndex: 1,
    courseGroupId: 1
  },
  {
    id: 2,
    title: "EE-2: Basic Electrical Design Course - Level I",
    slug: 'ee-2-basic-electrical-design-course-level-i',
    description: 'Covers essential power layout design, load estimation, circuit breaker sizing, and single line diagrams.',
    orderIndex: 2,
    courseGroupId: 1
  },
  {
    id: 3,
    title: "Electrical Equipment Sizing and Selection",
    slug: 'electrical-equipment-sizing-and-selection',
    description: 'Guide for sizing generators, transformers, cables, switchgears, UPS systems, and busbars.',
    orderIndex: 3,
    courseGroupId: 1
  }
];

const mockArticles: Article[] = [
  // EE-1 Course Articles
  {
    id: 1,
    title: "1- Introduction",
    slug: "1-introduction",
    body: "In this section we'll define three basic items, which we use continually without knowing their exact meaning despite the importance of these items for any designer: 1. Voltage 2. Current 3. Resistance.",
    orderIndex: 1,
    courseId: 1
  },
  {
    id: 2,
    title: "2- Electrical Symbols",
    slug: "2-electrical-symbols",
    body: "Comprehensive collection of standard symbols for single-phase outlets, duplex receptacles, lighting switches, distribution boards, and disconnect switches.",
    orderIndex: 2,
    courseId: 1
  },
  {
    id: 3,
    title: "3- Electrical Abbreviations",
    slug: "3-electrical-abbreviations",
    body: "Commonly used terms in engineering documentation: DB (Distribution Board), SMDB (Sub-Main Distribution Board), MDB (Main Distribution Board), MCC (Motor Control Center), ATS (Automatic Transfer Switch).",
    orderIndex: 3,
    courseId: 1
  },
  {
    id: 4,
    title: "4- Electrical Drawings Types",
    slug: "4-electrical-drawings-types",
    body: "Explains conceptual design, schematic diagrams, single line diagrams (SLD), shop drawings, and as-built drawings used in projects.",
    orderIndex: 4,
    courseId: 1
  },
  {
    id: 5,
    title: "5- Lighting Systems Design - Part 1",
    slug: "5-lighting-systems-design-part-1",
    body: "Fundamental concepts of illumination engineering: luminous flux (lumens), illuminance (lux), luminous intensity (candela), and color rendering index (CRI).",
    orderIndex: 5,
    courseId: 1
  },
  {
    id: 6,
    title: "6- Power Distribution Systems - Part 1",
    slug: "6-power-distribution-systems-part-1",
    body: "Introductory concepts for low-voltage power distribution inside residential and commercial structures.",
    orderIndex: 6,
    courseId: 1
  },
  // Equipment Sizing / Table Articles
  {
    id: 7,
    title: "Generator Sizing and Selection",
    slug: "generator-sizing-and-selection",
    body: "Calculations for continuous, prime, and standby rating requirements when sizing backup diesel generators.",
    orderIndex: 1,
    courseId: 3
  },
  {
    id: 8,
    title: "Transformer Sizing and Selection",
    slug: "transformer-sizing-and-selection",
    body: "Sizing dry-type and oil-immersed step-down transformers based on total connected load, demand factor, and future expansion allowance.",
    orderIndex: 2,
    courseId: 3
  },
  {
    id: 9,
    title: "UPS Sizing and Selection",
    slug: "ups-sizing-and-selection",
    body: "Calculating kVA/kW capacity and battery autonomy runtime for Uninterruptible Power Supply units in critical infrastructure.",
    orderIndex: 3,
    courseId: 3
  },
  {
    id: 10,
    title: "Circuit Breakers Sizing and Selection",
    slug: "circuit-breakers-sizing-and-selection",
    body: "Selecting MCB, MCCB, and ACB devices based on nominal current rating, short-circuit breaking capacity (Icu), and trip curve characteristics.",
    orderIndex: 4,
    courseId: 3
  },
  {
    id: 11,
    title: "Cables Sizing and Selection",
    slug: "cables-sizing-and-selection",
    body: "Low-voltage cable sizing methodology accounting for ampacity, voltage drop limitations, short-circuit thermal capacity, and installation derating factors.",
    orderIndex: 5,
    courseId: 3
  }
];

export const api = {
  getCategories: () => fetchWithFallback<Category[]>('/categories/all', mockCategories),
  getCategoryBySlug: async (slug: string) => {
    const categories = await api.getCategories();
    return categories.find(c => c.slug === slug);
  },
  getCourseGroups: () => fetchWithFallback<CourseGroup[]>('/course-groups', mockCourseGroups),
  getCourseGroupsByCategory: async (categoryId: number) => {
    const groups = await api.getCourseGroups();
    return groups.filter(g => g.categoryId === categoryId);
  },
  getCourses: () => fetchWithFallback<Course[]>('/courses', mockCourses),
  getCourseBySlug: async (slug: string) => {
    const courses = await api.getCourses();
    return courses.find(c => c.slug === slug);
  },
  getCoursesByGroup: async (groupId: number) => {
    const courses = await api.getCourses();
    return courses.filter(c => c.courseGroupId === groupId);
  },
  getArticles: () => fetchWithFallback<Article[]>('/articles', mockArticles),
  getArticlesByCourse: async (courseId: number) => {
    const articles = await api.getArticles();
    return articles.filter(a => a.courseId === courseId).sort((a, b) => a.orderIndex - b.orderIndex);
  },
  getArticleBySlug: async (slug: string) => {
    const articles = await api.getArticles();
    return articles.find(a => a.slug === slug);
  }
};