interface CourseButtonProps {
  text: string;
  small?: boolean;
}

export const CourseButton = ({ text, small }: CourseButtonProps) => (
  <button
    className={`bg-[#1d8e5a] text-white rounded hover:bg-yellow-400 hover:text-black transition
      ${small ? "px-4 py-2 text-lg" : "w-full py-2"}`}
  >
    {text}
  </button>
);
