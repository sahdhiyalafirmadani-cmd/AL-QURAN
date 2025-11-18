interface CourseHeadingProps {
  text: string;
  href: string;
}
export const CourseHeading = ({ text, href }: CourseHeadingProps) => (
  <h4 className="mt-4 text-2xl font-semibold text-black hover:text-[#1d8e5a] transition">
    <a href={href}>{text}</a>
  </h4>
);