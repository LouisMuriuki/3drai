import React from "react";
import state from "../store/Index";
import { useSnapshot } from "valtio";

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: "#00ADB5",
        color: "#fff",
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
