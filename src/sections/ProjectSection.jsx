import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const ProjectSection = () => {
  return (
    <section className="px-20 py-3 min-h-screen bg-primary text-secondary  ">
      <div className="mt-28">
        <h1 className="text-5xl text-center">
          My <span className="font-bold">Projects</span>
        </h1>
        <div className="mt-10 px-5">
          <div className="grid grid-cols-2 h-[476px]">
            <div className="h-full w-full flex justify-start items-center  ">
              <img
                src="../../public/assets/screenshot/Screenshot(5).png"
                alt=""
                className="h-[397px] w-[530px] rounded-2xl"
              />
            </div>
            <div className=" flex items-center">
              <div className="grid gap-5">
                <span className="text-3xl h-16 w-16 font-semibold border-2 border-secondary rounded-full flex justify-center items-center">
                  01
                </span>
                <h3 className="text-4xl font-semibold ">Chat-Connect App</h3>
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
