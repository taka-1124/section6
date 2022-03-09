import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentsStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentsStyle}>{children}</p>;
};

export default ColorfulMessage;
