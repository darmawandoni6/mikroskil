import React from "react";

const Info = () => {
  return (
    <div
      className="p-4 my-3"
      style={{
        border: "1px solid #bce8f1",
        backgroundColor: "#d9edf7",
        color: "#31708f",
        fontSize: "1.2rem",
      }}
    >
      <p className="mb-0">
        Ujian Tengah Semester (UTS) Semester III, V, & VII T.A. 2020/2021
        adalah&nbsp;
        <span className="font-weight-bold">23 s/d 28 November 2020</span> <br />
        Ujian Tengah Semester (UTS) Semester I T.A. 2020/2021 adalah&nbsp;
        <span className="font-weight-bold">07 s/d 12 Desember 2020</span>
      </p>
    </div>
  );
};

export default Info;
