import React, { useEffect, useState } from "react";
import usePrevious from "./usePrevious";
import { NumberScrollProps } from "./NumberScroll.types";
import "./style.css";

const formatForDisplay = (number: number, decimal: number) => {
  return Math.max(number)
    .toLocaleString("en-IN", {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    })
    .split("")
    .reverse();
};

const DecimalColumn: React.FC<{ digit: string }> = ({ digit }) => {
  return (
    <div>
      <span>{digit}</span>
    </div>
  );
};
const NumberColumn = ({ digit, delta }: any) => {
  const [position, setPosition] = useState<string>("0%");
  const [animationClass, setAnimationClass] = useState<string>("");
  const previousDigit = usePrevious(digit);
  const setColumnToNumber = (number: number) => {
    setPosition(`${number * 10}%`);
  };
  useEffect(
    () => setAnimationClass(previousDigit !== digit ? delta : ""),
    [digit]
  );
  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <div className="number-scroll-column-container">
      <div
        className={`number-scroll-column ${animationClass}`}
        style={{ transform: `translateY(${position})` }}
        onTransitionEnd={() => setAnimationClass("")}
      >
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className="number-scroll-digit">
            <span>{num}</span>
          </div>
        ))}
      </div>
      <span className="number-placeholder">0</span>
    </div>
  );
};

const NumberScroll = ({
  number,
  className = "",
  style,
  decimal = 0,
}: NumberScrollProps) => {
  const numArray = formatForDisplay(number, decimal);
  const previousNumber: any = usePrevious(number);

  let delta: string = "";
  if (number > previousNumber) delta = "increase";
  if (number < previousNumber) delta = "decrease";
  return (
    <div className={`number-scroll-view ${className}`} style={style}>
      {numArray.map((number: any, index) =>
        !isNaN(number) ? (
          <NumberColumn key={index} digit={parseFloat(number)} delta={delta} />
        ) : (
          <DecimalColumn key={index} digit={number} />
        )
      )}
    </div>
  );
};

export default NumberScroll;
