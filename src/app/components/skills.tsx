import React from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-section ">
        <div className="skills-heading">
          <h1></h1>
        </div>

        <div className="skills-grid">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="skills-flex"
          >
            <FaHtml5 className="icons icon1 " />
            <h3>HTML</h3>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="skills-flex"
          >
            <FaCss3Alt className="icons icon2" />
            <h3>CSS</h3>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="skills-flex"
          >
            <SiTypescript className="icons icon3" />
            <h3>TypeScript</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="skills-flex"
          >
            <IoLogoJavascript className="icons icon4" />
            <h3>JavaScript</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="skills-flex"
          >
            <RiTailwindCssFill className="icons icon5 " />
            <h3>Tailwind CSS</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="skills-flex"
          >
            <RiNextjsFill className="icons icon6 " />
            <h3>Next.js</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
