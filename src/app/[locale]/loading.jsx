import React from "react";
import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      style={{
        paddingTop: "100px",
        textAlign: "center",
        fontSize: "24px",
      }}
    >
      <RingLoader color="#19cfcf" />
    </div>
  );
}
