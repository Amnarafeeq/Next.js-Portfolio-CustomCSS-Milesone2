"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HomePageDetail() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <section>
      <div className="home-page-img ">
        <div className="home-page-flex ">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="pic-sec "
          >
            {/* image */}

            <Image
              src="/Images/img4.jpg"
              alt="profile-pic"
              width={230}
              height={350}
              className="pro-pic  "
            />

            <div className="social-accounts ">
              {/* Social Media Accounts */}

              <div className="social-accounts-icon  ">
                {/* linkedin */}

                <div>
                  <Link
                    href="https://www.linkedin.com/in/amna-rafeeq-823b3a300/"
                    target="_blank"
                  >
                    <FaLinkedin className="icon-1" />
                  </Link>
                </div>

                {/* Github */}

                <div>
                  <Link href="https://github.com/Amnarafeeq" target="_blank">
                    <FaGithubSquare className="icon-2" />
                  </Link>
                </div>
                <div>
                  <Link href="mailto:amnarafeeq68@gmail.com" target="_blank">
                    <MdMarkEmailUnread className="icon-3" />
                  </Link>
                </div>
              </div>

              {/* Download Button */}

              <Link
                href="./Images/pdf2.pdf"
                target="_blank"
                className="mt-5 link"
              >
                <button className="download-btn">
                  <FaCloudDownloadAlt className="cv-link" /> Download CV
                </button>
              </Link>
            </div>
          </div>
          {/* Name */}

          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="pro-detail-sec"
          >
            <h2>Hi I'm</h2>
            <h1>Amna</h1>

            <div className="typewriter">
              <h3>Web Developer</h3>
            </div>
            <p>
              I am currently immersed in learning frontend development, driven
              by a passion for creating visually appealing and user-friendly web
              experiences. My journey in this field has been fueled by curiosity
              and a desire to bring ideas to life through code.
            </p>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
