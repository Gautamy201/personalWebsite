import Banner from "/assets/images/Banner.png";
import smallScreenBanner from "/assets/images/smallScreen Banner.png";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello I'am Gautam Yadav."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className=" laptop:px-10 desktop:px-20 py-3 " id="home">
      <div className="main pt-24  px-5 py-1 block tablet:flex justify-end relative">
        <img
          className="hidden tablet:block tablet:w-[450px] laptop:w-[650px] desktop:w-[800px]"
          src={Banner}
          alt=""
        />
        <div className="flex justify-center">
          <img
            className="block tablet:hidden "
            src={smallScreenBanner}
            alt=""
          />
        </div>
        <div className="  tablet:absolute tablet:top-1/2 tablet:-translate-y-1/2 py-2  tablet:left-5">
          <div className="mt-10 text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl grid gap-3">
            <h1 className="relative">
              <span className="opacity-[0.1]">
                Hello I'am <span className="font-[900]">Gautam Yadav.</span>
              </span>
              <span ref={el} className="absolute w-full left-0">
                Hello I'am <span className="font-[900]">Gautam Yadav.</span>
              </span>
            </h1>
            <h1 className="font-[900] relative">
              <span className="opacity-[0.1]">
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
              </span>
              <span className="absolute w-full left-0">
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
              </span>
            </h1>
            <h1>
              Based in <span className="font-[900]">India.</span>
            </h1>
          </div>
        </div>
        {/* ------------ */}
        <div className="icons mt-10 tablet:m-0 h-12 static tablet:absolute -bottom-3 left-5 flex gap-7 bg-white">
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer">
            <IoLogoFacebook size={23} />
          </div>
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer">
            <FaGithubAlt size={23} />
          </div>
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer">
            <FaLinkedin size={23} />
          </div>
          <div className="w-12 h-full border-2 border-primary rounded-[5px] flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer">
            <FaSquareInstagram size={23} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
