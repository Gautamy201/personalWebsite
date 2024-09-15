import React from "react";
import Logo from "/assets/images/Logo(2).png";
const Footer = () => {
  return (
    <footer className="h-20 w-full absolute bottom-0 -left-0 text-secondary">
      <div className=" flex justify-between items-center w-full bg-primary h-full tablet:px-24 px-5">
        <div>
          <img className="w-20 tablet:w-auto" src={Logo} alt="" />
        </div>
        <div className="text-xs grid gap-2">
          <p>@ 2023-2024 Personal</p>
          <p>Gautam Yadav</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
