import React from "react";
import aboutBanner from "/assets/images/about Banner.png";
const AboutSection = () => {
  return (
    <section
      className="desktop:px-20 target:px-5 laptop:px-10  tablet:py-3 min-h-screen"
      id="about"
    >
      <div className=" grid grid-cols-1 laptop:grid-cols-2 pt-28 px-5">
        <div>
          <img
            className="laptop:w-[450px] desktop:w-[550px]"
            src={aboutBanner}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl tablet:text-4xl desktop:text-5xl tablet:text-left text-center mt-10 laptop:mt-0">
            My <span className="font-bold">About</span>
          </h1>

          <div className="my-10">
            <p className=" text-justify text-four laptop:text-sm desktop:text-lg ">
              Hello! I'm{" "}
              <span className="text-primary font-semibold">Gautam Yadav</span>,
              a passionate and dedicated frontend developer with a strong
              foundation in web technologies. I recently completed my 12th grade
              and pursued a focused study at Masia School, where I developed my
              skills in{" "}
              <a className="underline font-semibold px-1 text-primary" href="">
                HTML
              </a>
              ,{" "}
              <a className="underline font-semibold px-1 text-primary" href="">
                CSS
              </a>
              ,{" "}
              <a className="underline font-semibold px-1 text-primary" href="">
                JavaScript
              </a>
              , and modern frontend frameworks like{" "}
              <a className="underline font-semibold px-1 text-primary" href="">
                React
              </a>
              . As a fresher, I'm enthusiastic about building visually
              appealing, responsive, and user-friendly web applications.
              <br />
              <br />
              My journey into web development has taught me the importance of
              attention to detail, clean code, and user-centered design. I'm
              constantly learning and improving my craft, staying updated with
              the latest trends and technologies in the web development
              ecosystem.
              <br />
              <br />
              I'm excited to bring my creativity and problem-solving skills to
              real-world projects and contribute to building impactful digital
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
