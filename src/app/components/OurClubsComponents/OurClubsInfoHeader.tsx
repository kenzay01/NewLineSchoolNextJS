import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import "./styles/OurClubsInfoHeader.css";

const OurClubsInfoHeader = () => {
  const clubOptions = [
    {
      title: "Для підлітків",
      isOnline: "Онлайн",
      duration: "90 хв",
      price: "330 грн",
      href: "/ourClubs#teenagersClub",
    },
    {
      title: "Для 1-4 класів",
      isOnline: "Онлайн",
      duration: "60 хв",
      price: "150 грн",
      href: "/ourClubs#schoolchildrenClub",
    },
    {
      title: "Для дорослих",
      isOnline: "Онлайн",
      duration: "90 хв",
      price: "330 грн",
      href: "/ourClubs#forAdultsClub",
    },
  ];

  return (
    <div className="conversation-clubs-container">
      <motion.h2
        className="conversation-clubs-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Розмовні клуби для різних напрямків
      </motion.h2>

      <motion.div
        className="conversation-clubs-options"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {clubOptions.map((club, index) => (
          <motion.div
            key={index}
            className="club-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <div className="club-title">{club.title}</div>
            <div className="club-online">{club.isOnline}</div>
            <div className="club-duration">{club.duration}</div>
            <div className="club-price">{club.price}</div>
            <button
              className="club-button"
              onClick={() => {
                const target = document.getElementById(club.href.split("#")[1]);
                console.log("target", target);
                console.log("club.href", club.href.split("#")[1]);
                if (target) {
                  setTimeout(() => {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }
              }}
            >
              Детальніше <FaArrowRightLong className="club-button-arrow" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurClubsInfoHeader;
