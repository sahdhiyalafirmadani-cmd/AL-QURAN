"use client";

import React from "react";
import StarRating from "../ atoms/StarRating";
import Author from "../ atoms/Author";

interface TestimonialTwoCardProps {
  review: string;
  authorName: string;
  authorRole: string;
  authorImg: string;
  topBgImg?: string;
  bottomBgImg?: string;
}

const TestimonialTwoCard: React.FC<TestimonialTwoCardProps> = ({
  review,
  authorName,
  authorRole,
  authorImg,
  topBgImg,
  bottomBgImg,
}) => {
  return (
    <div className="relative pt-32 pb-12 px-12 bg-gradient-to-r from-[#FBEFD0] to-[#D8EFE4] rounded-xl overflow-hidden">
      {/* Top BG Image on the right, small size */}
      {topBgImg && (
        <img
          src={topBgImg}
          alt=""
          className="absolute top-6 right-6 w-44 h-44 object-cover rounded-full"
        />
      )}

      {/* Star Rating pushed down */}
      <div className="-translate-y-10">
        <StarRating count={5} />
      </div>

      <h4 className=" text-3xl font-bold text-black">Customers Review</h4>

      <p className="mt-5 text-gray-600 text-2xl leading-relaxed">{review}</p>

      {/* Author */}
      <Author name={authorName} role={authorRole} imgSrc={authorImg} />

      {/* Bottom BG Image with bounce */}
      {bottomBgImg && (
        <img
          src={bottomBgImg}
          alt=""
          className="absolute bottom-0 right-0 -translate-x-1 w-50 h-50 animate-bounce-slow"
        />
      )}

      {/* Internal Bounce Animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialTwoCard;
