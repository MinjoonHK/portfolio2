import { useEffect, useRef } from "react";
import FloatingIcons from "./FloatingIcons";

const Landing = () => {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const bgCanvas = bgCanvasRef.current;
    if (!bgCanvas) return;

    const ctx = bgCanvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      bgCanvas.width = W;
      bgCanvas.height = H;

      const grad = ctx.createRadialGradient(
        W * 0.4,
        H * 0.35,
        0,
        W * 0.5,
        H * 0.5,
        W * 0.9
      );
      grad.addColorStop(0, "#0d0b2b");
      grad.addColorStop(0.4, "#080618");
      grad.addColorStop(0.7, "#04030f");
      grad.addColorStop(1, "#000000");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const blobs: [number, number, number, string][] = [
        [W * 0.2, H * 0.3, W * 0.35, "rgba(80,40,160,0.18)"],
        [W * 0.75, H * 0.65, W * 0.3, "rgba(20,80,160,0.15)"],
        [W * 0.55, H * 0.2, W * 0.2, "rgba(160,30,100,0.1)"],
      ];
      blobs.forEach(([cx, cy, r, col]) => {
        const nb = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        nb.addColorStop(0, col);
        nb.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = nb;
        ctx.fillRect(0, 0, W, H);
      });

      for (let i = 0; i < 320; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H;
        const r = Math.random() * 1.4;
        const a = Math.random() * 0.9 + 0.1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle =
          Math.random() < 0.3
            ? `rgba(180,200,255,${a})`
            : `rgba(255,255,255,${a})`;
        ctx.fill();
      }

      for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(
          Math.random() * W,
          Math.random() * H,
          Math.random() * 2 + 1,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.5 + 0.5})`;
        ctx.fill();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    let raf: number;
    const animate = (timestamp: number) => {
      const angle = (timestamp / 3000) * 360;
      if (wrapperRef.current) {
        wrapperRef.current.style.background = `conic-gradient(from ${angle}deg,
          rgba(20,60,180,0.3) 0deg,
          rgba(20,60,180,0.3) 300deg,
          rgba(35,90,210,0.45) 320deg,
          rgba(55,120,230,0.65) 338deg,
          rgba(100,160,255,0.85) 350deg,
          rgba(180,215,255,0.95) 357deg,
          rgba(180,215,255,0.95) 360deg
        )`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-black font-sans">
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      />
      <FloatingIcons />

      <div className="relative z-10 text-center text-white pointer-events-none -mt-[10vh]">
        <div className="inline-block text-[0.72rem] font-medium tracking-[0.2em] uppercase text-[rgba(100,200,255,0.85)] border border-[rgba(100,200,255,0.28)] rounded-full py-1 px-[18px] mb-[22px] animate-[fadeUp_1s_0.1s_both]">
          AI Native Developer
        </div>
        <p className="text-base font-light text-white/55 tracking-[0.06em] mb-2.5 animate-[fadeUp_1s_0.2s_both]">
          안녕하세요
        </p>
        <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.12] tracking-[-0.025em] mb-1.5 animate-[fadeUp_1s_0.3s_both]">
          개발자
          <br />
          <span className="bg-[linear-gradient(130deg,#64d2ff_0%,#a78bfa_55%,#38bdf8_100%)] bg-clip-text text-transparent">
            박민준
          </span>
          입니다
        </h1>
        <p className="text-[clamp(0.8rem,1.4vw,0.92rem)] font-light text-white/40 leading-[2] max-w-[340px] mx-auto animate-[fadeUp_1s_0.5s_both]">
          긍정적인 태도와 끊임없는 자기개발을 바탕으로
          <br />
          최고의 사용자 경험을 제공하겠습니다
        </p>

        {/* 버튼 wrapper: gradient background가 border 역할 */}
        <div
          ref={wrapperRef}
          className="inline-block mt-20 rounded-full p-[2px] cursor-pointer pointer-events-auto animate-[fadeUp_1s_0.9s_both] transition-transform duration-300 hover:-translate-y-1"
          style={{ boxShadow: "0 0 14px rgba(40,100,220,0.25), 0 0 30px rgba(40,100,220,0.1)" }}
          onClick={handleScroll}
          onKeyDown={(e) => e.key === "Enter" && handleScroll()}
          role="button"
          tabIndex={0}
        >
          <div className="rounded-full bg-[rgba(8,16,45,0.85)] px-12 py-4 text-base font-bold text-white tracking-[0.04em] backdrop-blur-[12px] whitespace-nowrap transition-all duration-300 hover:bg-[rgba(225,235,255,0.95)] hover:text-[rgba(8,16,45,0.95)] hover:shadow-[0_0_18px_rgba(8,16,45,0.6),0_0_40px_rgba(8,16,45,0.35),inset_0_0_20px_rgba(8,16,45,0.15)]">
            포트폴리오 구경하기
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
