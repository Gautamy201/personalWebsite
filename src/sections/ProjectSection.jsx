import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import project_1_Image from "/assets/screenshot/Screenshot(5).png";
const ProjectSection = () => {
  return (
    <section className="tablet:px-20 py-3 min-h-screen bg-primary text-secondary  ">
      <div className="pt-28">
        <h1 className="text-3xl tablet:text-5xl text-center">
          My <span className="font-bold">Projects</span>
        </h1>
        <div className="mt-10 px-5">
          <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:h-[476px] py-10">
            <div className="h-full w-full flex justify-start items-center  ">
              <img
                src={project_1_Image}
                alt="project 1"
                className="h-[250px] tablet:h-[397px] tablet:w-[530px] rounded-2xl"
              />
            </div>
            <div className=" flex items-center mt-10 tablet:mt-0">
              <div className="grid gap-5">
                <span className="tablet:text-3xl text-xl tablet:h-16 h-12 tablet:w-16 w-12 font-semibold border-2 border-secondary rounded-full flex justify-center items-center">
                  01
                </span>
                <h3 className="text-2xl tablet:text-4xl font-semibold ">
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
