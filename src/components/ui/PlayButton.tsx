import React from 'react';

interface PlayButtonProps {
  width?: number;
  height?: number;
  className?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ width = 16, height = 16, className = '' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon
      points="6,5 12,8 6,11"
      fill="none"
      stroke="#93c5fd" // Tailwind blue-300
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

export default PlayButton; 