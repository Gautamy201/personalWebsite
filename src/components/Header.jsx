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
import { NavLink } from "react-router-dom";

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
  const styleActiveLink = (isActive) => {
    if (isActive) {
      return {
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        padding: "5px 20px",
        backgroundColor: "black",
        borderRadius: "5px",
        color: "white",
      };
    }
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
            <li>
              <NavLink
                to={"/"}
                smooth
                className="hover:px-[20px] hover:shadow-md transition-all duration-75 py-[5px]"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                      padding: "5px 20px",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      color: "white",
                    };
                  }
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                smooth
                className="hover:px-[20px] hover:shadow-md transition-all duration-75 py-[5px]"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                      padding: "5px 20px",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      color: "white",
                    };
                  }
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="skills"
                smooth
                className="hover:px-[20px] hover:shadow-md transition-all duration-75 py-[5px]"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                      padding: "5px 20px",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      color: "white",
                    };
                  }
                }}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="projects"
                smooth
                className="hover:px-[20px] hover:shadow-md transition-all duration-75 py-[5px]"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                      padding: "5px 20px",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      color: "white",
                    };
                  }
                }}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                smooth
                className="hover:px-[20px] hover:shadow-md transition-all duration-75 py-[5px]"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      boxShadow:
                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                      padding: "5px 20px",
                      backgroundColor: "black",
                      borderRadius: "5px",
                      color: "white",
                    };
                  }
                }}
              >
                Contact
              </NavLink>
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
                <NavLink
                  to={"/"}
                  className="flex gap-5 text-xl font-bold px-[20px] py-[5px] shadow-md active:scale-[0.9]"
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        padding: "5px 20px",
                        backgroundColor: "black",
                        borderRadius: "5px",
                        color: "white",
                      };
                    }
                  }}
                >
                  <AiFillHome size={25} />
                  Home
                </NavLink>
              </li>
              <li onClick={linkClick}>
                <NavLink
                  to="about"
                  className="flex gap-5 text-xl font-bold px-[20px] py-[5px] shadow-md active:scale-[0.9]"
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        padding: "5px 20px",
                        backgroundColor: "black",
                        borderRadius: "5px",
                        color: "white",
                      };
                    }
                  }}
                >
                  <FaUserSecret size={25} />
                  About
                </NavLink>
              </li>
              <li onClick={linkClick}>
                <NavLink
                  to={"skills"}
                  className="flex gap-5 text-xl font-bold px-[20px] py-[5px] shadow-md active:scale-[0.9]"
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        padding: "5px 20px",
                        backgroundColor: "black",
                        borderRadius: "5px",
                        color: "white",
                      };
                    }
                  }}
                >
                  <GiSettingsKnobs size={25} />
                  Skills
                </NavLink>
              </li>
              <li onClick={linkClick}>
                <NavLink
                  to="project"
                  className="flex gap-5 text-xl font-bold px-[20px] py-[5px] shadow-md active:scale-[0.9]"
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        padding: "5px 20px",
                        backgroundColor: "black",
                        borderRadius: "5px",
                        color: "white",
                      };
                    }
                  }}
                >
                  <RiProjectorFill size={25} />
                  Projects
                </NavLink>
              </li>
              <li onClick={linkClick}>
                <NavLink
                  to="contact"
                  className="flex gap-5 text-xl font-bold px-[20px] py-[5px] shadow-md active:scale-[0.9]"
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        boxShadow:
                          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        padding: "5px 20px",
                        backgroundColor: "black",
                        borderRadius: "5px",
                        color: "white",
                      };
                    }
                  }}
                >
                  <MdContactPhone size={25} />
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="resume mt-12">
              <a
                href="#"
                className="flex gap-5 text-xl font-bold px-[20px] py-3 shadow-md rounded-md  border-2 border-black active:scale-[0.9]"
              >
                Resume <RiDownload2Line size={22} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
