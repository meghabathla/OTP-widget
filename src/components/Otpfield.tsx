import React from "react";

export const Otpfield = () => {
  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <input
          key={index}
          type="text"
          className="input-field"
          maxLength={1}
          pattern="[0-9]"
        />
      ))}
    </div>
  );
};
