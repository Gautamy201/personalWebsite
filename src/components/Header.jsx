import { RiDownload2Line } from "react-icons/ri"; // download icon
import logo from "/assets/images/Logo.png";

const Header = () => {
  return (
    <header className=" px-20 py-3 h-20 border-b fixed w-full bg-secondary z-10">
      <div className="main flex items-center justify-between   px-5 py-1">
        <div className="logo hover:scale-[1.1] cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex gap-10 font-[600] text-primary ">
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#home">About Me</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#">Project</a>
            </li>
            <li className="hover:scale-[1.2] hover:shadow-md hover:px-2 transition-all duration-75 py-2">
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </nav>
        <div className="resume">
          <a
            href="#"
            className="active:scale-[0.9] flex gap-2 bg-primary text-secondary justify-center items-center w-[125px] h-[47px] font-semibold rounded-[5px] hover:bg-secondary hover:text-primary hover:border-2 hover:border-primary transition-all duration-75"
          >
            Resume <RiDownload2Line size={22} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
