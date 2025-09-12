import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// Improved Animated Avatar
const AnimatedAvatar = ({ 
  name, 
  role, 
  size = "w-20 h-20", 
  rounded = "rounded-full", 
  showInitials = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Pick a consistent color for the avatar background
  const avatarColor = useMemo(() => {
    const colors = ["#00CED1", "#40E0D0", "#00f5ff", "#008b8b", "#30d5c8"];
    return colors[name.length % colors.length];
  }, [name]);

  // Extract initials
  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }, [name]);

  return (
    <div className="relative inline-block">
      {/* Avatar */}
      <motion.div
        className={`${size} ${rounded} flex items-center justify-center 
          text-white font-bold text-lg overflow-hidden cursor-pointer`}
        style={{ backgroundColor: avatarColor }}
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.25 }}
        aria-label={`Avatar of ${name}${role ? `, ${role}` : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {showInitials && (
          <motion.span
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.25 }}
          >
            {initials}
          </motion.span>
        )}
        {/* Overlay glow effect */}
        <motion.div
          className={`absolute inset-0 ${rounded}`}
          animate={{
            backgroundColor: isHovered ? "rgba(255,255,255,0.25)" : "transparent",
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>

      {/* Tooltip (role / full name) */}
      {isHovered && (role || name) && (
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
            bg-gray-900 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
        >
          {role ? `${name} - ${role}` : name}
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedAvatar;
