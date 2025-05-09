import React, { useRef } from "react";

export const Otpfield = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const handleNextFocus = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (index < inputRefs.current.length - 1 && value.length === 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <input
          key={index}
          type="text"
          className="input-field"
          maxLength={1}
          pattern="[0-9]"
          onChange={(e) => handleNextFocus(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};
