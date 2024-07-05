import React from "react";
import Image from "next/image";

const Drawing = (props) => {
  const { src, title, width, height } = props;
  return (
    <Image
      src={src}
      alt={title}
      className="drawing"
      width={width}
      height={height}
    />
  );
};

export default Drawing;