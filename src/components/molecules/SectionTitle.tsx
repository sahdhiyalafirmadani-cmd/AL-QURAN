import React from "react";


interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-3 text-green-700 font-semibold text-lg">
      {title}
      <img src="/assets/images/icons/bismillah-2.png" alt="Bismillah Icon" className="w-6 h-6" />
    </div>
  );
};

export default SectionTitle;
