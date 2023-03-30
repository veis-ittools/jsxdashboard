import React from "react";

const BoxTop = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "50%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginRight: "10px",
        }}
      >
        <h3>Left Box</h3>
        <input type="text" placeholder="Enter text here" />
      </div>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginLeft: "10px",
        }}
      >
        <h3>Right Box</h3>
        <input type="text" placeholder="Enter text here" />
      </div>
    </div>
  );
};

export default BoxTop;
