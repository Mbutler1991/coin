import { useState, useEffect, useCallback } from "react";

const SpinningCoin = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0); // Tracks the rotation in degrees
  const [startX, setStartX] = useState(0); // Tracks the initial drag position

  // Handle mouse down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  // Handle mouse move
  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const currentX = e.clientX || e.touches[0].clientX;
      const deltaX = currentX - startX;
      setRotation((prev) => prev + deltaX * 0.5); // Adjust rotation speed by modifying multiplier
      setStartX(currentX); // Update the starting position
    },
    [isDragging, startX]
  );

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add event listeners for mouse/touch actions
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      className="coin-container"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
    >
      <div
        className="coin"
        style={{
          transform: `rotateY(${rotation}deg)`,
          animation: isDragging ? "none" : `spin 2s linear infinite`,
        }}
      >
        <div className="coin-front"></div>
        <div className="coin-back"></div>
      </div>
    </div>
  );
};

export default SpinningCoin;
