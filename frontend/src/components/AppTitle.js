import React from "react";

const AppTitle = ({ children, style }) => {
  const lightTitleStyle = "bg-AppDark text-AppGreen ";
  const darkTitleStyle = "bg-AppGreen text-AppDark";
  return (
    <h2
      className={` w-fit p-2 text-2xl font-bold rounded-lg    ${
        style ? lightTitleStyle : darkTitleStyle
      }`}
    >
      {children}
    </h2>
  );
};

export default AppTitle;
