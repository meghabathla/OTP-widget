import React, { useMemo, useRef } from "react";

export const Otpfield = () => {
  const arr = useMemo(() => [...Array(4)], []);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const handleNextFocus = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log("onchnage  ", e.target.value);
    const value = e.target.value;
    if (index < inputRefs.current.length - 1 && value.length === 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleBackFocus = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log("onkeydown ", e.key);
    if (e.key === "Backspace" && inputRefs.current[index]?.value.length === 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      {arr.map((_, index) => (
        <input
          key={index}
          type="text"
          className="input-field"
          maxLength={1}
          pattern="[0-9]"
          onChange={(e) => handleNextFocus(e, index)}
          onKeyDown={(e) => handleBackFocus(e, index)}
          ref={(el: HTMLInputElement) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};
