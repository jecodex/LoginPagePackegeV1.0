"use client";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai"; // Import a clock icon

const Card = ({ title, tags, date, image, link }) => {
  const isComingSoon = !link; // Check if it's "Coming Soon"

  const handleCardClick = () => {
    if (!isComingSoon) {
      window.location.href = link; // Navigate to the link if available
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative border rounded-lg shadow-md p-4 bg-white transition-transform transform cursor-pointer ${
        isComingSoon
          ? "opacity-70 cursor-not-allowed"
          : "hover:scale-105 hover:shadow-lg"
      }`}
      style={isComingSoon ? { pointerEvents: "none" } : {}}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg">
          <p className="text-gray-500 text-xl font-semibold">Coming Soon</p>
        </div>
      )}

      <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded flex items-center gap-1 text-sm font-semibold text-gray-600 shadow">
        <AiOutlineClockCircle className="text-gray-500" /> {/* Icon */}
        <span>{date || "Coming Soon"}</span>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {!isComingSoon ? (
        <p className="inline-block mt-4 text-blue-500 font-semibold hover:underline">
          View Details
        </p>
      ) : (
        <p className="text-gray-400 font-medium mt-4">Coming Soon</p>
      )}
    </div>
  );
};

export default Card;
