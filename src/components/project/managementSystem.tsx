const ManagementSystem = () => {
  return (
    <div
      className="ProjectWrapper"
      style={{ display: "flex", justifyContent: "center", margin: "2% 0" }}
    >
      <div
        className="ProjectInnerWrapper"
        style={{
          backgroundColor: "white",
          width: "80%",
          padding: "2%",
          borderRadius: "25px",
          boxShadow: "0 0 10px 0 rgb(100, 100, 100)",
        }}
      >
        <div
          className="ProjectTitle"
          style={{ width: "100%", textAlign: "center" }}
        >
          <h1>Management System</h1>
        </div>
      </div>
    </div>
  );
};

export default ManagementSystem;
