import educationData from "@/db/education";
import experienceData from "@/db/experience";
import skills from "@/db/skills";
import Title from "@/shared/components/Title";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";

function Resume() {
  return (
    <section>
      <Title title={"Resume"} />

      {/* experience */}
      <div className="timer">
        <div className="flex gap-3 items-center mb-3 md:mb-6">
          <div className="w-10 h-10 ml-1 md:ml-0 md:w-12 md:h-12 relative bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineWorkOutline className="text-primary-color text-xl md:text-2xl" />
          </div>
          <h3 className="text-[#fafafa] text-lg md:text-xl lg:text-2xl font-semibold">
            Experience
          </h3>
        </div>

        <ol className="ml-[3rem]">
          {experienceData.map((item, index) => (
            <li key={index} className="timeline-item relative ml-3 mb-6">
              <h4>
                {item.company} | {item.industry}
              </h4>
              <span className="text-[#CEB15A] text-[15px]">{item.period}</span>
              <p>{item.position}</p>
              <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
                <ul className="list-disc ml-4">
                  {item.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* education */}
      <div className="timer">
        <div className="flex gap-3 items-center mb-3 md:mb-6">
          <div className="w-10 h-10 ml-1 md:ml-0 md:w-12 md:h-12 relative bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineSchool className="text-primary-color text-xl md:text-2xl" />
          </div>
          <h3 className="text-[#fafafa] text-lg md:text-xl lg:text-2xl font-semibold">
            Education
          </h3>
        </div>

        <ol className="ml-[3rem]">
          {educationData.map((item, index) => (
            <li key={index} className="timeline-item relative ml-3 mb-6">
              <h4>{item.institution}</h4>
              <span className="text-[#CEB15A] text-[15px]">{item.period}</span>
              <p>{item.program}</p>
              <p className="text-[#d6d6d6] text-[15px] mt-1 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* skills */}
      <h2 className="text-[#fafafa] text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 lg:mb-5">
        My Skills
      </h2>
      <div className="flex gap-2 md:gap-3 lg:gap-5 flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            <div className="flex justify-center items-center bg-primary-bg border border-[#383838] rounded-xl w-12 h-12 md:w-14 md:h-14 lg:w-[4.5rem] lg:h-[4.5rem] p-2 transition duration-300 ease-in-out transform ">
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
    </section>
  );
}

export default Resume;
