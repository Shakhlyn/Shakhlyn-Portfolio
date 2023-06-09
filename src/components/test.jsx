import React from "react";

function test() {
  const nodeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    backgroundColor: "lightpink",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const branchStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  };

  return (
    <div style={branchStyle}>
      <div style={nodeStyle}>A</div>
      <div style={branchStyle}>
        <div style={nodeStyle}>B</div>
        <div style={branchStyle}>
          <div style={nodeStyle}>C</div>
          <div style={nodeStyle}>D</div>
        </div>
        <div style={nodeStyle}>E</div>
      </div>
      <div style={nodeStyle}>F</div>
    </div>
  );
}

export default test;
