"use client"
import React, { useEffect, useState } from "react";

export default function SlideUpAnimation() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div
        className={`
          p-6 bg-white rounded-lg shadow-lg
          transform transition-all duration-700 ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
          animate-slide-up
        `}
      >
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="text-gray-600">
          This content animates from bottom to top.
        </p>
      </div>
    </div>
  );
}
