"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMoving, setIsMoving] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Hide on touch/mobile devices
    if ("ontouchstart" in window) return;

    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
      setVisible(true);
      setIsMoving(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 120);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Hide native cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          fontSize: isMoving ? "28px" : "26px",
          lineHeight: 1,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, font-size 0.15s",
          userSelect: "none",
          filter: "drop-shadow(0 1px 3px rgba(108,99,255,0.25))",
        }}
      >
        {isMoving ? "🫧" : "🧽"}
      </div>
    </>
  );
}
