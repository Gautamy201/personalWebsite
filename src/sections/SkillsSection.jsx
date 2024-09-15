import BoxComponent from "../components/BoxComponent";
import { FaNodeJs } from "react-icons/fa"; // nodejs icon
import { AiOutlineHtml5 } from "react-icons/ai"; // html icon
import { IoLogoCss3 } from "react-icons/io"; // css icon
import { IoLogoJavascript } from "react-icons/io5"; // js icon
import { FaReact } from "react-icons/fa"; // react icon
import { RiTailwindCssFill } from "react-icons/ri"; // talwind css icon
import { BsGit } from "react-icons/bs"; // git icon
import { SiChakraui } from "react-icons/si"; //ckara ui icon
import { FaBootstrap } from "react-icons/fa6"; // bootstap icon
import { SiSocketdotio } from "react-icons/si"; /// socket io icon
const SkillsSection = () => {
  return (
    <section
      id="skills"
      className=" laptop:px-10 desktop:px-20 py-3  min-h-screen"
    >
      <div className="px-5 pt-28">
        <h1 className="text-3xl tablet:text-4xl laptop:text-5xl text-center ">
          My <span className="font-bold">Skills</span>
        </h1>

        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-5 tablet:gap-10 mt-10 pb-10">
          <BoxComponent
            size={"h-48 w-48"}
            icon={<AiOutlineHtml5 size={50} />}
            iconName={"HTML"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<IoLogoCss3 size={50} />}
            iconName={"CSS"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<IoLogoJavascript size={50} />}
            iconName={"Java Script"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<FaReact size={50} />}
            iconName={"React JS"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<FaNodeJs size={50} />}
            iconName={"Node JS"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<RiTailwindCssFill size={50} />}
            iconName={"Tailwind CSS"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<BsGit size={50} />}
            iconName={"Github"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<SiChakraui size={50} />}
            iconName={"Chakra UI"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<FaBootstrap size={50} />}
            iconName={"Bootstrap CSS"}
          />
          <BoxComponent
            size={"h-48 w-48"}
            icon={<SiSocketdotio size={50} />}
            iconName={"Socket IO"}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
