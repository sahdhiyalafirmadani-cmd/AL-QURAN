"use client";

import { motion } from "framer-motion";
import ScholarContentBox from "./ScholarContentBox";

interface ScholarCardProps {
  image: string;
  name: string;
  designation: string;
  delay?: number;
}

const ScholarCard = ({ image, name, designation, delay = 0 }: ScholarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="scholar-block_one col-lg-4 col-md-6 col-sm-12"
    >
      <div className="scholar-block_one-inner relative group">
        <div className="scholar-block_one-image overflow-hidden rounded-[53px] bg-green-500">
          <a href="scholar-detail.html">
            <img
              src={image}
              alt={name}
              className="w-full transition-all duration-500 group-hover:opacity-70 group-hover:scale-[1.04]"
            />
          </a>
        </div>

        <ScholarContentBox name={name} designation={designation} />
      </div>
    </motion.div>
  );
};

export default ScholarCard;
