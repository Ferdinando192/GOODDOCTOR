"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window) {
      setIsMobile(true);
      return;
    }

    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    
    // Add hover listeners dynamically via delegation 
    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    let animationFrameId;
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12,
        y: prev.y + (position.y - prev.y) * 0.12
      }));
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold transition-transform ease-out duration-100"
        style={{
          width: '8px', height: '8px',
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`
        }}
      />
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full transition-all ease-out duration-300 border-1.5 ${isHovering ? 'border-gold w-14 h-14' : 'border-gold/70 w-9 h-9'}`}
        style={{
          transform: `translate(${ringPosition.x - (isHovering ? 28 : 18)}px, ${ringPosition.y - (isHovering ? 28 : 18)}px)`,
        }}
      />
    </>
  );
}
