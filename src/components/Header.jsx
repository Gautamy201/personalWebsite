import { RiDownload2Line } from "react-icons/ri"; // download icon
import logo from "/assets/images/Logo.png";
import { IoMenu } from "react-icons/io5";

// icons
import { AiFillHome } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { useRef, useState } from "react";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const menuRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuBar(false);
    }
  };

  window.addEventListener("click", handleOutsideClick);

  const handleMenuBtn = () => {
    setMenuBar(!menuBar);
  };
  const linkClick = () => {
    setMenuBar(false);
  };
  return (
    <header
      ref={menuRef}
      className="  laptop:px-20 py-3 h-20 border-b fixed w-full bg-secondary z-10 top-0"
    >
      <div className="main flex items-center justify-between   px-5 py-1">
        <div className="logo hover:scale-[1.1] cursor-pointer">
          <img src={logo} alt="Personal" />
        </div>
        <nav className="hidden laptop:block">
          <ul className="flex gap-10 font-[600] text-primary ">
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#home">Home</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#about">About</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#project">Project</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="resume">
          <a
            href="#"
            className="active:scale-[0.9] laptop:flex gap-2 bg-primary text-secondary justify-center items-center w-[125px] h-[47px] font-semibold rounded-[5px] hover:bg-secondary hover:text-primary hover:border-2 hover:border-primary transition-all duration-75 hidden"
          >
            Resume <RiDownload2Line size={22} />
          </a>
          <button
            className="border-0 active:scale-[0.9] block laptop:hidden"
            onClick={handleMenuBtn}
          >
            <IoMenu size={35} />
          </button>
        </div>
      </div>

      {menuBar && (
        <div className="menu w-[70%]  bg-secondary absolute top-20 right-0 p-5 border-l-2 border-b-2 border-three rounded-bl-lg transition-all duration-75">
          <nav>
            <ul className="grid gap-5">
              <li onClick={linkClick}>
                <a href="#home" className="flex gap-5 text-xl font-bold">
                  <AiFillHome size={25} />
                  Home
                </a>
              </li>
              <li onClick={linkClick}>
                <a href="#about" className="flex gap-5 text-xl font-bold">
                  <FaUserSecret size={25} />
                  About
                </a>
              </li>
              <li onClick={linkClick}>
                <a href="#skills" className="flex gap-5 text-xl font-bold">
                  <GiSettingsKnobs size={25} />
                  Skills
                </a>
              </li>
              <li onClick={linkClick}>
                <a href="#project" className="flex gap-5 text-xl font-bold">
                  <RiProjectorFill size={25} />
                  Projects
                </a>
              </li>
              <li onClick={linkClick}>
                <a href="#contact" className="flex gap-5 text-xl font-bold">
                  <MdContactPhone size={25} />
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
