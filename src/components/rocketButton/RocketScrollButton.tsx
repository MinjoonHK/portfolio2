import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

type Phase = "hidden" | "ready" | "launching" | "teleporting";

const LAUNCH_DURATION = 2200; // ms

// 로켓 발사 느낌: 천천히 시작해서 점점 빠르게
const easeIn = (t: number) => t * t * t;

const RocketScrollButton: React.FC = () => {
  const [animData, setAnimData] = useState<object | null>(null);
  const phaseRef = useRef<Phase>("hidden");
  const [phase, setPhaseState] = useState<Phase>("hidden");
  const rocketRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const setPhase = (p: Phase) => {
    phaseRef.current = p;
    setPhaseState(p);
  };

  useEffect(() => {
    fetch("/lottie/rocket frinder.json")
      .then((r) => r.json())
      .then(setAnimData);
  }, []);

  // Archiving 섹션 가시성 감지
  useEffect(() => {
    const section = document.getElementById("archiving");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const current = phaseRef.current;
        if (current === "launching" || current === "teleporting")
          return;
        setPhase(entry.isIntersecting ? "ready" : "hidden");
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const launch = () => {
    const startScrollY = window.scrollY;
    const startTime = performance.now();
    const el = rocketRef.current;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / LAUNCH_DURATION, 1);
      const eased = easeIn(rawProgress);

      // 스크롤과 로켓을 같은 progress로 동시에 이동
      window.scrollTo(0, startScrollY * (1 - eased));

      // 로켓을 위로 이동 (같은 eased 값 사용)
      if (el) {
        el.style.transform = `rotate(0deg) translateY(${-eased * 130}vh)`;
      }

      if (rawProgress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPhase("teleporting");
        setTimeout(() => setPhase("hidden"), 280);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  const handleClick = () => {
    const current = phaseRef.current;

    if (current === "ready") {
      setPhase("launching");
      launch();
    }
  };

  // 언마운트 시 RAF 정리
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const getStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      width: "80px",
      height: "80px",
      zIndex: 1000,
      cursor: phase === "ready" ? "pointer" : "default",
      pointerEvents:
        phase === "hidden" || phase === "teleporting" || phase === "launching"
          ? "none"
          : "auto",
    };

    switch (phase) {
      case "hidden":
        return {
          ...base,
          opacity: 0,
          transform: "rotate(0deg) translateY(0)",
          transition: "opacity 0.3s ease",
        };
      case "ready":
        return {
          ...base,
          opacity: 1,
          transform: "rotate(0deg) translateY(0)",
          transition: "opacity 0.4s ease",
        };
      case "launching":
        // transform은 RAF가 직접 제어 — transition 없음
        return {
          ...base,
          opacity: 1,
          transition: "none",
        };
      case "teleporting":
        return {
          ...base,
          opacity: 0,
          transform: "rotate(0deg) translateY(-130vh)",
          transition: "opacity 0.25s ease",
        };
      default:
        return base;
    }
  };

  if (!animData) return null;

  return (
    <div ref={rocketRef} onClick={handleClick} style={getStyle()}>
      <Lottie animationData={animData} loop={true} />
    </div>
  );
};

export default RocketScrollButton;
