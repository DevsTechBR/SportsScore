import { useState } from "react";

export default function Nav({ activeImage, inactiveImage, onClick }) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <img
      src={isActive || isHovered ? activeImage : inactiveImage}
      alt=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    />
  );
}
