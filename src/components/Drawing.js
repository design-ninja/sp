import React, { useState } from "react";
import Image from "next/image";

const Drawing = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { src, title, width, height } = props;
  return (
    <>
      {isOpen && (
        <div className="full-size-image">
          <Image src={src} alt={title} width={width} height={height} onClick={() => setIsOpen(!isOpen)} />
        </div>
      )}
      <Image
        src={src}
        alt={title}
        className="drawing"
        width={width}
        height={height}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default Drawing;