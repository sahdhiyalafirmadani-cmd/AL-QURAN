import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import GalleryTwoCard from "../molecules/GalleryTwoCard";

const images = [
  "/assets/images/gallery/5.jpg",
  "/assets/images/gallery/6.jpg",
  "/assets/images/gallery/7.jpg",
  "/assets/images/gallery/8.jpg",
];

const GalleryTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // We show 4 images at a time → sliding window
  const visibleImages = [
    images[(currentIndex + 0) % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
  ];

  return (
    <section className="py-16">
      {/* Title */}
      <div className="container mx-auto px-4 mb-12">
        <p className="text-[#0D6832] font-semibold text-lg">STUDENT GALLERY</p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-snug">
          Our Islamic Institute <br /> Academy Gallery
        </h2>
      </div>

      {/* FULL WIDTH ROW SLIDER */}
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-4 w-full">

          <AnimatePresence initial={false}>
            {visibleImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 2.5 }}
                className="w-full"
              >
                <GalleryTwoCard imgSrc={img} />
              </motion.div>
            ))}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default GalleryTwo;
