import React from "react";
import Text from "../ atoms/Text";
import Button from "../ atoms/Button";
import { motion } from "framer-motion";

interface SlideContentProps {
  title: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

const SlideContent: React.FC<SlideContentProps> = ({
  title,
  heading,
  paragraph,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="slider-two_content-inner space-y-2 max-w-3xl">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Text text={title} type="title" />
      </motion.div>

      {/* Heading with line break */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-3xl md:text-5xl leading-tight">
          {heading.split("|").map((line, idx) => (
            <Text key={idx} text={line} type="heading" />
          ))}
        </div>
      </motion.div>

      {/* Paragraph */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Text text={paragraph} type="paragraph" />
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
      >
        <Button text={buttonText} href={buttonLink} />
      </motion.div>
    </div>
  );
};

export default SlideContent;
