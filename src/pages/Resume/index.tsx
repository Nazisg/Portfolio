import { MdOutlineSchool } from "react-icons/md";

function Resume() {
  return (
    <div className="flex flex-col gap-7">
      <header>
        <h2 className="text-[#F9F9F9] text-3xl font-semibold">Resume</h2>
        <div className="w-11 h-[5px] bg-primary-color mt-3 rounded-lg"></div>
      </header>

      <div className="timer">
        <div className="flex gap-3 items-center mb-6">
          <div className="w-12 h-12 relative bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineSchool className="text-primary-color text-2xl" />
          </div>
          <h3 className="text-[#fafafa] text-2xl font-semibold">Education</h3>
        </div>

        <ol className="ml-[3rem]">
          <li className="timeline-item relative ml-3">
            <h4>University school of the arts</h4>
            <span className="text-[#CEB15A] text-[15px]">2019 — 20</span>
            <p>Bachelor Degree : Computer engineering</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Resume;
