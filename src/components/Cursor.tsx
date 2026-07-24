"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768
    ) {
      return;
    }

    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;

    let glowX = 0;
    let glowY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const enter = () => {
      dotRef.current?.classList.add("cursor-hover");
    };

    const leave = () => {
      dotRef.current?.classList.remove("cursor-hover");
    };

    const addHoverEvents = () => {
      const elements = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button'], .glass-hover, .flip-card"
      );

      elements.forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };

    addHoverEvents();

    window.addEventListener("mousemove", move);

    const animate = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;

      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px,0) translate(-50%,-50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px,0) translate(-50%,-50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.body.style.cursor = "";

      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="custom-cursor-glow" />
      <div ref={dotRef} className="custom-cursor-dot" />

      <style jsx global>{`
        body,
        a,
        button,
        input,
        textarea,
        select {
          cursor: none;
        }

        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #fff;
          pointer-events: none;
          z-index: 99999;
          transition: width 0.25s, height 0.25s, opacity 0.25s;
          box-shadow:
            0 0 8px rgba(255,255,255,.9),
            0 0 18px rgba(255,255,255,.7),
            0 0 30px rgba(255,255,255,.35);
        }

        .custom-cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          background: rgba(255,255,255,.18);
          filter: blur(18px);
          pointer-events: none;
          z-index: 99998;
        }

        .cursor-hover {
          width: 18px;
          height: 18px;
          background: rgba(255,255,255,.95);
        }

        @media (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-glow {
            display: none;
          }

          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
}