import React from "react";

const Paswoord = () => {
  return (
    <div className="form-group">
      <label htmlFor="password">Email address</label>
      <div className="f-flex">
        <input type="password" className="form-control" />
        <i className="fas fa-eye-slash"></i>
      </div>
    </div>
  );
};

export default Paswoord;
