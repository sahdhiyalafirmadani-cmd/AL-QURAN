import { CourseCardTwo } from "../molecules/CourseCardTwo";

const courses = [
  {
    image: "/assets/images/resource/course-5.jpg",
    title: "Quran Intermediate Course brother",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    authorImage: "/assets/images/resource/author-5.png",
    authorName: "Habib Al Noor",
    authorRole: "Arabic Teacher",
    price: "$22.00",
    freeText: "course free",
    link: "/course-detail",
  },
  {
    image: "/assets/images/resource/course-6.jpg",
    title: "Online Quran Memorization Course",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    authorImage: "/assets/images/resource/author-5.png",
    authorName: "Habib Al Noor",
    authorRole: "Arabic Teacher",
    price: "$22.00",
    freeText: "course free",
    link: "/course-detail",
  },
  {
    image: "/assets/images/resource/course-7.jpg",
    title: "Tafseer of Surah Al-Fatiha Short Course",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    authorImage: "/assets/images/resource/author-5.png",
    authorName: "Habib Al Noor",
    authorRole: "Arabic Teacher",
    price: "$22.00",
    freeText: "course free",
    link: "/course-detail",
  },
  {
    image: "/assets/images/resource/course-8.jpg",
    title: "Online Tajweed Rules Course",
    lessons: 20,
    weeks: 10,
    enroll: 50,
    authorImage: "/assets/images/resource/author-5.png",
    authorName: "Habib Al Noor",
    authorRole: "Arabic Teacher",
    price: "$22.00",
    freeText: "course free",
    link: "/course-detail",
  },
];

export const CoursesTwo = () => (
  <section className="bg-[url('/assets/images/background/courses-one_bg.png')] py-16">
    <div className="container mx-auto text-center">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-[#1d8e5a] font-semibold text-lg">Popular Courses</div>
        <h2 className="text-4xl font-bold text-black">Our Arabic & Islamic Courses</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCardTwo key={index} {...course} />
        ))}
      </div>
    </div>
  </section>
);
