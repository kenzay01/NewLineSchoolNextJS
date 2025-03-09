"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; 
import "./styles/ReviewBox.css";

export default function ReviewBox({
  name,
  rating,
  text,
}: {
  name: string;
  rating: number;
  text: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="home-reviews-box" onClick={() => setIsModalOpen(true)}>
        <div className="home-reviews-box-header">
          <div className="home-reviews-box-header-name">{name}</div>
          <div className="home-reviews-box-header-rating">
            {Array.from({ length: rating }, (_, i) => (
              <span key={i} className="home-reviews-box-header-rating-star">
                <Image
                  src="/assets/elements/star.png" // Using Next.js image handling
                  alt="star"
                  width={20} // Adjust the width as needed
                  height={20} // Adjust the height as needed
                />
              </span>
            ))}
          </div>
        </div>
        <div className="home-reviews-box-body">{text}</div>
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="home-reviews-box-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="home-reviews-box-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <div className="home-reviews-box-header">
              <div className="home-reviews-box-header-name-modal">{name}</div>
              <div className="home-reviews-box-header-rating">
                {Array.from({ length: rating }, (_, i) => (
                  <span key={i} className="home-reviews-box-header-rating-star">
                    <Image
                      src="/assets/elements/star.png" // Using Next.js image handling
                      alt="star"
                      width={20}
                      height={20}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div className="home-reviews-box-body">{text}</div>
          </div>
        </div>
      )}
    </>
  );
}
