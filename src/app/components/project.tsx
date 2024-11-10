import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="projects-section ">
        <section>
          <div className="container">
            <div className="projects-heading">
              <h1></h1>
            </div>
            <div className="project-main-div ">
              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="project-pic-div"
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic"
                    src="/Images/cal2.gif"
                  />
                  <div className="project-text-div">
                    <p className="  leading-relaxed ">
                      Developed a simple calculator using TypeScript that
                      performs basic arithmetic operations such as addition,
                      subtraction, multiplication, and division.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/simple-calculator"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Simple Calculator</h3>
              </div>
              {/* pic2 */}
              <div
                data-aos="zoom-in-down"
                data-aos-duration="3000"
                className="project-pic-div"
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic"
                    src="/Images/guess3.gif"
                  />
                  <div className="project-text-div ">
                    <p className=" leading-relaxed">
                      Created a number guessing game using TypeScript where
                      players attempt to guess a randomly generated number
                      within a specified range.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/number-guessing-game"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Number Guessing Game </h3>
              </div>
              {/* pic3 */}

              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className="project-pic-div border-4 border-black "
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic  "
                    src="/Images/200w.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Created a To-Do app using TypeScript with features like
                      adding, editing, and deleting tasks. Focused on clean
                      code, type safety, and a user-friendly interface
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/cli-todos-app-"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Todo List</h3>
              </div>

              {/* pic4 */}

              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="project-pic-div border-4 border-black "
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/atm.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Developed an ATM simulation in TypeScript, featuring
                      functionalities like balance inquiry, cash withdrawal and
                      fast cash.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/cli-atm-machine"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>ATM Machine</h3>
              </div>

              {/* pic 5 */}

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="project-pic-div "
              >
                <div className=" project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/count.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Created a countdown timer application with TypeScript,
                      featuring customizable time settings and real-time
                      updates.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/Countdown-Timer"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Countdown Timer</h3>
              </div>

              {/* pic 6 */}

              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className="project-pic-div "
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/exchange.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Built a currency converter application with TypeScript,
                      enabling real-time exchange rate calculations between
                      multiple currencies.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/currency-converter"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Currency Converter</h3>
              </div>

              {/* pic 7 */}

              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="project-pic-div "
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic  "
                    src="/Images/netflix.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Created a Netflix clone using HTML and CSS, replicating
                      the look and feel of the original site. Focused on layout
                      and styling for a clean, responsive design.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/BNQ-Web-Dev-Work/tree/main/Netflix-Clone"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Netflix Clone</h3>
              </div>

              {/* pic 8 */}

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="project-pic-div "
              >
                <div className="project-pic-flex  ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic  "
                    src="/Images/100days.gif"
                  />
                  <div className=" project-text-div ">
                    <p>
                      Embarked on a '100 Days of Coding' journey with
                      TypeScript, tackling diverse coding challenges
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/-100DaysOfCodingChallenge"
                      target="_blank"
                    >
                      <p className="project-link mt-12">
                        View Project On Github
                      </p>
                    </Link>
                  </div>
                </div>
                <h3>100Days of Code</h3>
              </div>

              {/* pic 9 */}

              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className=" project-pic-div"
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic  bg-slate-500"
                    src="/Images/panda.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Developed a Foodpanda clone with HTML and CSS, mimicking
                      the app’s layout and design. Focused on creating a
                      responsive, visually appealing interface for a seamless
                      user experience.
                    </p>
                    <Link href="#" target="_blank">
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Foodpanda Clone</h3>
              </div>

              {/* pic 10 */}

              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="project-pic-div "
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic"
                    src="/Images/assignment.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Completed a 45-question assignment in TypeScript,
                      addressing various concepts from basic to advanced.
                      Showcased problem-solving skills and proficiency in
                      type-safe code practices.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/45-Questions-Typescript"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>45Assignment of Typescript</h3>
              </div>

              {/* pic 11 */}

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="project-pic-div "
              >
                <div className="project-pic-flex ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="project-pic "
                    src="/Images/word.gif"
                  />
                  <div className="project-text-div ">
                    <p>
                      Developed a word counter application using TypeScript,
                      capable of accurately counting words, characters, and
                      sentences in user-provided text.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/word-counter-project"
                      target="_blank"
                    >
                      <p className="project-link">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h3>Word Counter</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
