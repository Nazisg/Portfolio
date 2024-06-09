// import avatar from "@/shared/media/imgs/avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-5 items-center max-h-max h-full sticky top-4 py-6 px-5 bg-primary-bg border border-[#383838] rounded-[20px] text-white w-[17.5rem]">
      <div className="flex flex-col  items-center gap-2">
        <div className="rounded-3xl bg-[#343434] w-36">
          <div className="w-36 h-36"></div>
        </div>
        <h1 className="text-head-color text-2xl text-center">
          Nazrin Isgandarova
        </h1>
        <p className="bg-[#2b2b2c] text-xs text-[#ffff] py-2 px-4 rounded-lg">
          Frontend Developer
        </p>
      </div>
      <div className="w-full h-[1px] bg-head-color bg-[#383838]"></div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineMailOutline className="text-primary-color text-lg" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#d6d6d6b2] text-xs">EMAIL</p>
            <p className="text-[#fafafa] text-sm">isgnezrin@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineLocalPhone className="text-primary-color text-lg" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#d6d6d6b2] text-xs">PHONE</p>
            <p className="text-[#fafafa] text-sm">+994 70 800 60 30</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineLocationOn className="text-primary-color text-lg" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#d6d6d6b2] text-xs">LOCATION</p>
            <p className="text-[#fafafa] text-sm">Baku, Azerbaijan</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/nazrin-isgandarova-4104841a6/"
          target="_blank"
        >
          <FaLinkedin className="text-[#9F9F9F] text-lg" />
        </a>
        <a href="https://github.com/Nazisg" target="_blank">
          <FaGithub className="text-[#9F9F9F] text-lg" />
        </a>
      </div>
    </div>
  );
}
