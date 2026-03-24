import { useEffect, useRef } from "react";
import EarthCanvas from "../canvas/Earth";

const Landing = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

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
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center font-sans px-[5%] md:px-[7%]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 60%, rgba(8,12,30,0.08) 85%, rgba(8,12,30,0.2) 100%)",
      }}
    >
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* 좌측: 텍스트 영역 */}
        <div className="relative text-left text-white pointer-events-none shrink-0">
          <p className="text-base font-light text-white/55 tracking-[0.06em] mb-2.5 animate-[fadeUp_1s_0.2s_both]">
            안녕하세요
          </p>
          <h1 className="text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.12] tracking-[-0.025em] mb-1.5 animate-[fadeUp_1s_0.3s_both]">
            개발자
            <br />
            박민준입니다
          </h1>
          <p className="text-[clamp(0.8rem,1.4vw,0.92rem)] font-light text-white/40 leading-[2] max-w-[340px] animate-[fadeUp_1s_0.5s_both]">
            긍정적인 태도와 끊임없는 자기개발을 바탕으로
            <br />
            최고의 사용자 경험을 제공하겠습니다
          </p>

          {/* 버튼 wrapper: gradient background가 border 역할 */}
          <div
            ref={wrapperRef}
            className="inline-block mt-20 rounded-full p-[2px] cursor-pointer pointer-events-auto animate-[fadeUp_1s_0.9s_both] transition-transform duration-300 hover:-translate-y-1"
            style={{
              boxShadow:
                "0 0 14px rgba(40,100,220,0.25), 0 0 30px rgba(40,100,220,0.1)",
            }}
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

        {/* 우측: Earth 3D 캔버스 */}
        <div className="relative w-[280px] h-[280px] md:w-[45%] md:h-auto md:aspect-square md:ml-[5%] flex items-center justify-center pointer-events-auto">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Landing;
