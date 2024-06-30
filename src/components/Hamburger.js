import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import hamburgerImage from "public/img/hamburger.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <button onClick={handleToggle} className="hamburger-button">
        <Image
          src={hamburgerImage}
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
            <Link href="/drawings">My Drawings</Link>
          </li>
          <li>
            <Link href="/games">My Games</Link>
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
