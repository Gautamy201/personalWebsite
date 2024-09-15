import React from "react";

const ExpreianceSection = () => {
  return (
    <section
      className=" tablet:px-20 py-3  bg-primary text-secondary  "
      id="experience"
    >
      <div className="pt-28">
        <h1 className="text-3xl tablet:text-5xl text-center">
          My <span className="font-bold">Experience</span>
        </h1>

        <div className="p-5 flex items-center justify-center">
          <div className="text-2xl my-10">Fresser</div>
        </div>
      </div>
    </section>
  );
};

export default ExpreianceSection;
