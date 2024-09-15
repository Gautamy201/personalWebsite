import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import project_1_Image from "/assets/screenshot/Screenshot(5).png";
const ProjectSection = () => {
  return (
    <section
      className="laptop:px-10 desktop:px-20 py-3 min-h-screen bg-primary text-secondary  "
      id="project"
    >
      <div className="pt-28">
        <h1 className="text-3xl tablet:text-5xl text-center">
          My <span className="font-bold">Projects</span>
        </h1>
        <div className="mt-10 px-5">
          <div className="grid grid-cols-1 laptop:grid-cols-2 laptop:h-[476px] py-10">
            <div className="h-fit  flex justify-start items-center border-[3px] border-secondary w-fit p-2 rounded-lg">
              <img
                src={project_1_Image}
                alt="project 1"
                className="h-[250px] w-[250px]  laptop:h-[300px] laptop:w-[350px] desktop:h-[397px] desktop:w-[500px] rounded-lg"
              />
            </div>
            <div className=" flex items-center mt-10 desktop::mt-0">
              <div className="grid gap-5">
                <span className="desktop:text-3xl text-xl desktop:h-16 h-12 desktop:w-16 w-12 font-semibold border-2 border-secondary rounded-full flex justify-center items-center">
                  01
                </span>
                <h3 className="text-2xl tablet:text-3xl desktop:text-4xl font-semibold ">
                  Chat-Connect App
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium voluptate fugit, tenetur vitae est laboriosam
                  optio perferendis saepe iure impedit omnis cumque tempora
                  illum. Assumenda impedit dolorum earum vel a?
                </p>
                <a href="">
                  <FaExternalLinkAlt size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
