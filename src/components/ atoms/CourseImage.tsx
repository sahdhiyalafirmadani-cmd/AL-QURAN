import { CourseButton } from "./CourseButton";

interface CourseImageProps {
  src: string;
  alt: string;
  buttonText: string;
}

export const CourseImage = ({ src, alt, buttonText }: CourseImageProps) => (
  <div className="relative overflow-visible rounded-lg group">
    {/* Image */}
    <img
      src={src}
      alt={alt}
      className="w-full transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-1"
    />

    {/* Button overlapping bottom of image */}
    <div className="absolute left-8 bottom-0 translate-y-1/2">
      <CourseButton text={buttonText} small />
    </div>
  </div>
);
