import { IoLogoFacebook } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Footer from "../components/Footer";
const ContactSection = () => {
  return (
    <section
      className="laptop:px-10 desktop:px-20 min-h-screen relative pb-28 laptop:pb-0"
      id="contact"
    >
      <h1 className=" pt-28 mb-10  text-3xl tablet:text-4xl laptop:text-5xl text-center ">
        Contact <span className="font-bold">Me</span>
      </h1>
      <div className="px-5 grid grid-cols-1 laptop:grid-cols-2">
        <div>
          <form action="" className="grid gap-5 w-[100%] laptop:w-[70%]">
            <input
              type="text"
              placeholder="Your name"
              className="px-5 py-2 rounded-sm text-primary outline-none border-2 border-primary"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-5 py-2 rounded-sm text-primary outline-none border-2 border-primary"
            />
            <input
              type="text"
              placeholder="Your website (if exists)"
              className="px-5 py-2 rounded-sm text-primary outline-none border-2 border-primary"
            />
            <textarea
              name=""
              id=""
              placeholder="How Can i help?"
              className="px-5 py-2 rounded-sm text-primary outline-none resize-none h-32 border-2 border-primary"
            ></textarea>
            <div className="tablet:flex justify-between">
              <button className="bg-primary text-secondary px-12 font-semibold rounded-sm border-0 active:scale-[0.9] mb-5 tablet:mb-0 h-12 tablet:h-auto">
                Get in Touch
              </button>
              <div className="flex gap-3 ">
                <div className=" p-2 border-2 border-primary rounded-sm hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer active:scale-[0.9]">
                  <IoLogoFacebook className="text-2xl" />
                </div>
                <div className=" p-2 border-2 border-primary rounded-sm hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer active:scale-[0.9]">
                  <FaGithubAlt className="text-2xl" />
                </div>
                <div className=" p-2 border-2 border-primary rounded-sm hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer active:scale-[0.9]">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div className=" p-2 border-2 border-primary rounded-sm hover:bg-primary hover:text-secondary transition-all duration-75 cursor-pointer active:scale-[0.9]">
                  <FaSquareInstagram className="text-2xl" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="  font-[900] flex flex-col justify-center mt-10 laptop:mt-0">
          <h2
            className="text-3xl laptop:text-5xl"
            style={{ wordSpacing: "5px" }}
          >
            Let's{" "}
            <span
              style={{
                textShadow:
                  "3px 3px 2px #000,-3px 3px 2px #000,-3px -3px 0 #000,3px -3px 0 #000",
                color: "white",
                paddingLeft: 10,
                letterSpacing: "2px",
              }}
            >
              talk
            </span>{" "}
            for
            <br />
            Something special
          </h2>
          <p className="my-5 text-four text-sm laptop:text-lg">
            I seek to push the limit of creativity to create-engaging
            user-frindly and memorable Interactive experiences
          </p>
          <h3 className="laptop:text-3xl  tablet:text-2xl text-sm">
            Gautamyadavneta@gmail.com
          </h3>
          <h3 className="laptop:text-3xl  tablet:text-2xl text-sm mt-3">
            +91 6306746339
          </h3>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;
