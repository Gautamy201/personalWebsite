import React from "react";
import Logo from "../../public/assets/images/Logo(2).png";
const Footer = () => {
  return (
    <footer className="h-20 w-full absolute bottom-0 -left-0 text-secondary">
      <div className=" flex justify-between items-center w-full bg-primary h-full px-24">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <p>@ 2023-2024 Personal</p>
          <p>Gautam Yadav</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
