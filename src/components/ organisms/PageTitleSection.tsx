import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string; // if present, item is clickable
}

interface PageTitleSectionProps {
  title: string;
  breadcrumb: BreadcrumbItem[];
  backgroundImage?: string; // optional, default image used if not provided
}

const PageTitleSection: React.FC<PageTitleSectionProps> = ({
  title,
  breadcrumb,
  backgroundImage = "assets/images/background/page-title.jpg",
}) => {
  return (
    <section
      className="w-full bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        padding: "150px 0",
      }}
    >
      <div className="container mx-auto text-center px-4">
        {/* Page Title */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{title}</h2>

        {/* Breadcrumb */}
        <ul className="inline-flex items-center text-white flex-wrap justify-center gap-2">
          {breadcrumb.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}

              {index < breadcrumb.length - 1 && (
                <span className="mx-2 text-white">-</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PageTitleSection;
