import skills from "@/db/skills";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";

function Resume() {
  return (
    <div className="flex flex-col gap-7">
      <header>
        <h2 className="text-[#F9F9F9] text-3xl font-semibold">Resume</h2>
        <div className="w-11 h-[5px] bg-primary-color mt-3 rounded-lg"></div>
      </header>

      {/* experience */}
      <div className="timer">
        <div className="flex gap-3 items-center mb-6">
          <div className="w-12 h-12 relative bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineWorkOutline className="text-primary-color text-2xl" />
          </div>
          <h3 className="text-[#fafafa] text-2xl font-semibold">Experience</h3>
        </div>

        <ol className="ml-[3rem]">
          <li className="timeline-item relative ml-3 mb-6">
            <h4>AistGroup MMC | Software company </h4>
            <span className="text-[#CEB15A] text-[15px]">
              April 2023 - present
            </span>
            <p>Front-end Developer Intern</p>
            <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
              <ul className="list-disc ml-4">
                <li>
                  Completing tasks according to deadlines, utilizing HTML, CSS,
                  JavaScript, TypeScript, and React.
                </li>
                <li>
                  Utilizing version control systems like Git for efficient code
                  management and collaboration.
                </li>
                <li>
                  Learning and applying new technologies and frameworks to
                  enhance the front-end development process.
                </li>
              </ul>
            </p>
          </li>
          <li className="timeline-item relative ml-3 mb-6">
            <h4>Crocusoft | Software development company</h4>
            <span className="text-[#CEB15A] text-[15px]">
              October 2023 - March 2024
            </span>
            <p>Front-end Developer Intern</p>
            <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
              <ul className="list-disc ml-4">
                <li>
                  Successful completion of 3 projects with advanced technologies
                  according to the deadline
                </li>
                <li>
                  Setting up the web page according to the design, testing it on
                  different screen sizes
                </li>
                <li>
                  Utilize Git version control to manage and collaborate on
                  codebase changes effectively
                </li>
                <li>
                  Working effectively with the backend team using RESTful APIs
                </li>
              </ul>
            </p>
          </li>
        </ol>
      </div>

      {/* education */}
      <div className="timer">
        <div className="flex gap-3 items-center mb-6">
          <div className="w-12 h-12 relative bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineSchool className="text-primary-color text-2xl" />
          </div>
          <h3 className="text-[#fafafa] text-2xl font-semibold">Education</h3>
        </div>

        <ol className="ml-[3rem]">
          <li className="timeline-item relative ml-3 mb-6">
            <h4>Codelandia IT School and Software Center</h4>
            <span className="text-[#CEB15A] text-[15px]">
              January 2024 - present
            </span>
            <p>MERNstack Developer</p>
            <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
              This comprehensive program focuses on teaching full-stack
              development using MongoDB, Express.js, React, and Node.js. The
              course is enhancing my knowledge and proficiency in modern web
              technologies, preparing me for a successful career in web
              development.
            </p>
          </li>
          <li className="timeline-item relative ml-3 mb-6">
            <h4>Coders Azerbaijan </h4>
            <span className="text-[#CEB15A] text-[15px]">
              June 2021 - October 2021
            </span>
            <p>Front-end Developer</p>
            <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
              During this intensive program, I gained hands-on experience
              creating visually appealing and responsive user interfaces with
              HTML, CSS, JavaScript, and the React framework.
            </p>
          </li>
          <li className="timeline-item relative ml-3 mb-6">
            <h4>Milli Aviasiya Akademiyası</h4>
            <span className="text-[#CEB15A] text-[15px]">2019 — 2023</span>
            <p>Bachelor’s Degree in Computer Engineering</p>
            <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
              The projects I undertook during my academic studies served as
              invaluable opportunities to enhance both my theoretical knowledge
              and practical skills, resulting in a holistic understanding of the
              field.
            </p>
          </li>
        </ol>
      </div>

      {/* skills */}
      <h2 className="text-[#fafafa] text-2xl font-semibold">My Skills</h2>
      <div className="flex gap-5 flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            <div className="flex justify-center items-center bg-primary-bg border border-[#383838] rounded-xl w-[4.5rem] h-[4.5rem] p-2 transition duration-300 ease-in-out transform ">
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs w-full h-full absolute top-0 flex justify-center items-center left-0 right-0 bg-primary-bg border border-[#383838] rounded-xl text-center py-1 opacity-0 group-hover:opacity-85 transition-opacity duration-300">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
