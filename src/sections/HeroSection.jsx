import Banner from "/assets/images/Banner.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section className=" px-20 py-3 pt-20 " id="#home">
      <div className="main px-5 py-1 flex justify-end relative">
        <img src={Banner} alt="" />
        <div className=" absolute top-1/2 -translate-y-1/2 py-2 bg-secondary left-0">
          <div className="text-5xl grid gap-5">
            <h1 className="">
              Hello I'am <span className="font-[900]">Gautam Yadav.</span>
            </h1>
            <h1 className="font-[900]">
              Frontend
              <span
                style={{
                  textShadow:
                    "3px 3px 2px #000,-3px 3px 2px #000,-3px -3px 0 #000,3px -3px 0 #000",
                  color: "white",
                  paddingLeft: 10,
                  letterSpacing: "1px",
                }}
              >
                Developer
              </span>
            </h1>
            <h1>
              Based in <span className="font-[900]">India.</span>
            </h1>
          </div>
        </div>
        <div className="icons h-12 absolute -bottom-6 left-0 flex gap-7">
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75">
            <IoLogoFacebook size={23} />
          </div>
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75">
            <FaGithubAlt size={23} />
          </div>
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75">
            <FaLinkedin size={23} />
          </div>
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75">
            <FaSquareInstagram size={23} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
