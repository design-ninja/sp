import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={handleToggle} className="hamburger-button">
        <Image
          src="/img/hamburger.png"
          alt="Hamburger Menu"
          width={48}
          height={48}
        />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/drawings">My drawings</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
