import Banner from "/assets/images/Banner.png";
import smallScreenBanner from "/assets/images/smallScreen Banner.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className=" tablet:px-20 py-3 " id="#home">
      <div className="main pt-24 px-5 py-1 block tablet:flex justify-end relative">
        <img className="hidden tablet:block" src={Banner} alt="" />
        <div className="flex justify-center">
          <img className="block tablet:hidden" src={smallScreenBanner} alt="" />
        </div>
        <div className="  tablet:absolute tablet:top-1/2 tablet:-translate-y-1/2 py-2 bg-secondary tablet:left-0">
          <div className="mt-10 text-2xl tablet:text-5xl grid gap-3">
            <h1 className="">
              Hello I'am <span className="font-[900]">Gautam Yadav.</span>
            </h1>
            <h1 className="font-[900]">
              Frontend
              <span
                style={{
                  textShadow:
                    "1px 1px 1px #000,-1px 1px 1px #000,-1px -1px 0 #000,1px -1px 0 #000",
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
        {/* ------------ */}
        <div className="icons mt-10 tablet:m-0 h-12 static tablet:absolute -bottom-3 left-0 flex gap-7">
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
