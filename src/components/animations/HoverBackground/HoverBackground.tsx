import { useState, useEffect } from "react";

interface HoverBackgroundProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HoverBackground = ({ children, className, onClick }: HoverBackgroundProps) => {
  const [degrees, setDegrees] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isHovering) {
      interval = setInterval(() => {
        setDegrees((prev) => (prev >= 360 ? 0 : prev + 1));
      }, 50);
    } else {
      setDegrees(0);
    }

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        color: isHovering ? "#191919" : "",
        backgroundColor: isHovering ? `hsl(${degrees}, 80%, 70%)` : "",
      }}>
      {children}
    </div>
  );
};

export default HoverBackground;
