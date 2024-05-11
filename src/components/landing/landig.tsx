const Landing = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url('/img/mainWall.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="contentWrapper">
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "20vh",
            paddingRight: "5vw",
          }}
        >
          <div style={{ width: "45%", height: "70vh" }}>ㅎㅇ</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
