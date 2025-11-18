import { CourseImage } from "../ atoms/CourseImage";
import { CourseHeading } from "../ atoms/CourseHeading";

interface CourseCardProps {
  image: string;
  title: string;
  lessons: number;
  weeks: number;
  enroll: number;
  authorImage: string;
  authorName: string;
  authorRole: string;
  price: string;
  freeText: string;
  link: string;
}

export const CourseCardTwo = ({
  image,
  title,
  lessons,
  weeks,
  enroll,
  authorImage,
  authorName,
  authorRole,
  price,
  freeText,
  link,
}: CourseCardProps) => (
  <div className="group bg-white rounded-lg overflow-hidden shadow-lg">
    {/* Image with button */}
    <CourseImage src={image} alt={title} buttonText="Study Now" />

    {/* Content below image */}
    <div className="p-5">
      {/* Heading */}
      <CourseHeading text={title} href={link} />

    {/* Stats */}
     <ul className="flex justify-between border-y border-gray-300 py-2 mt-3 text-center">
  <li className="flex flex-col items-center">
    <span className="text-[#1d8e5a] font-bold text-lg">{lessons}</span>
    <span className="text-black text-lg font-bold">lessons</span>
  </li>
  <li className="flex flex-col items-center">
    <span className="text-[#1d8e5a] font-bold text-lg">{weeks}</span>
    <span className="text-black text-lg font-bold">weeks</span>
  </li>
  <li className="flex flex-col items-center">
    <span className="text-[#1d8e5a] font-bold text-lg">{enroll}</span>
    <span className="text-black text-lg font-bold">enroll</span>
  </li>
</ul>

     {/* Bottom flex box: Author + Price */}
<div className="flex mt-3 rounded overflow-hidden">
  {/* Author Left */}
  <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 w-2/3">
    <img src={authorImage} alt={authorName} className="w-10 h-10 rounded-full" />
    <div>
      <strong className="block text-black text-sm">{authorName}</strong>
      <span className="text-[#1d8e5a] text-xs">{authorRole}</span>
    </div>
  </div>

  {/* Price Right */}
  <div className="bg-yellow-400 px-3 py-2 flex items-center justify-center w-1/3 text-center">
    <div>
      <span className="font-bold text-black text-sm">{price}</span>{" "}
      <span className="text-[#1d8e5a] text-xs">{freeText}</span>
    </div>
  </div>
</div>

    </div>
  </div>
);
