const HtmlPlanet = () => {
  return (
    <div
      style={{
        width: "90px",
        height: "90px",
        borderRadius: "24px",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 60%, rgba(200,220,255,0.15) 100%)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.45)",
        boxShadow: [
          "0 8px 32px rgba(0,0,0,0.25)",
          "inset 0 1.5px 0 rgba(255,255,255,0.6)",
          "inset 0 -1px 0 rgba(255,255,255,0.1)",
          "inset 1px 0 0 rgba(255,255,255,0.2)",
        ].join(", "),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 상단 하이라이트 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "45%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 100%)",
          borderRadius: "24px 24px 50% 50%",
          pointerEvents: "none",
        }}
      />

      {/* HTML5 로고 - 글래스 스타일 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 452 520"
        width="50"
        height="50"
        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))" }}
      >
        {/* 방패 외곽 */}
        <path
          d="M41 460L0 0h451l-41 460-185 52z"
          fill="rgba(255,255,255,0.55)"
        />
        {/* 방패 오른쪽 (약간 어둡게 — 입체감) */}
        <path
          d="M226 472l149-41 35-396H226z"
          fill="rgba(255,255,255,0.30)"
        />
        {/* 숫자 5 - 밝은 글래스 */}
        <path
          d="M226 118h-89l6 68h83v64h-82l8 86 74 22 74-22 10-112h-84v-64h91z"
          fill="rgba(255,255,255,0.85)"
        />
        <path
          d="M226 118v64h81l-10 106-71 21v68l139-39 10-110h-84v-64h90l-6-68z"
          fill="rgba(255,255,255,0.65)"
        />
      </svg>

      {/* 하단 반사광 */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default HtmlPlanet;
