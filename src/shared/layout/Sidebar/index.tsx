import avatar from "@/shared/media/imgs/avatar.png";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdKeyboardArrowDown,
} from "react-icons/md";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };
  return (
    <div className="flex flex-col gap-5 static items-start lg:items-center h-fit  lg:sticky top-8 py-6 px-5 bg-primary-bg border border-[#383838] rounded-[20px] text-white lg:w-[17.5rem] w-full">
      <div className="flex flex-row lg:flex-col items-center gap-4 ">
        <div className="rounded-3xl bg-[#343434] lg:h-36 lg:w-36 w-28">
          <div className="lg:w-36 lg:h-36 w-28 h-28">
            <img src={avatar} alt="" className="w-full h-full object-cover rounded-3xl"/>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start lg:items-center">
          <h1 className="text-head-color text-2xl lg:text-center">
            Nazrin Isgandarova
          </h1>
          <p className="bg-[#2b2b2c] text-xs text-[#ffff] py-2 px-4 rounded-lg">
            Frontend Developer
          </p>
        </div>
        <button  onClick={toggleContacts}  className="lg:hidden flex gap-1 items-center bg-[#282829] border border-[#383838] absolute top-0 right-0 rounded-tr-xl rounded-bl-xl py-2 px-3">
          <MdKeyboardArrowDown className="text-xl text-primary-color max-w-[400px]:block hidden" />
          <span className="text-sm text-primary-color"> {showContacts ? "Hide Contacts" : "Show Contacts"}</span>
        </button>
      </div>
      <div className="w-full h-[1px] bg-head-color hidden lg:block bg-[#383838]"></div>
      {(showContacts || window.innerWidth >= 1024) && (<div className="flex-col gap-6  flex">
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
      </div>)}
      <div className="gap-2 hidden lg:flex">
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
