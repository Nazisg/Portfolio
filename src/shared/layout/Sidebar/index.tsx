// import avatar from "@/shared/media/imgs/avatar.png";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div className="flex flex-col gap-5 static items-start lg:items-center h-fit lg:sticky top-8 py-4 px-3 md:py-6 md:px-5 bg-primary-bg border border-[#383838] rounded-[20px] text-white lg:w-[17.5rem] w-full">
      <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-2">
        <div className="rounded-3xl bg-[#343434] lg:h-36 lg:w-36 md:w-28 md:h-28 w-20 h-20">
          <div className="lg:w-36 lg:h-36 md:w-28 md:h-28 w-20 h-20 ">
            {/* <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover rounded-3xl"
            /> */}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start lg:items-center">
          <h1 className="text-head-color text-xl md:text-2xl lg:text-center">
            Nazrin Isgandarova
          </h1>
          <p className="bg-[#2b2b2c] text-xs text-[#ffff] py-2 px-4 rounded-lg">
            Frontend Developer
          </p>
        </div>
        {!isDesktop && (
          <button
            onClick={toggleContacts}
            className="lg:hidden flex gap-1 items-center bg-[#282829] border border-[#383838] duration-150 absolute top-0 right-0 rounded-tr-xl rounded-bl-xl py-1 px-2"
          >
            {showContacts ? (
              <MdKeyboardArrowUp className="text-2xl text-primary-color" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl text-primary-color" />
            )}
          </button>
        )}
      </div>

      {(showContacts || isDesktop) && (
        <div className="flex-col gap-5 flex w-full">
          <div className="w-full h-[1px] bg-head-color bg-[#383838]"></div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
              <MdOutlineMailOutline className="text-primary-color text-base md:text-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#d6d6d6b2] text-xs">EMAIL</p>
              <p className="text-[#fafafa] text-sm">isgnezrin@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
              <MdOutlineLocalPhone className="text-primary-color text-base md:text-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#d6d6d6b2] text-xs">PHONE</p>
              <p className="text-[#fafafa] text-sm">+994 70 800 60 30</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
              <MdOutlineLocationOn className="text-primary-color text-base md:text-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#d6d6d6b2] text-xs">LOCATION</p>
              <p className="text-[#fafafa] text-sm">Baku, Azerbaijan</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full h-[1px] bg-head-color bg-[#383838] lg:hidden"></div>
            <div className="gap-2 flex items-center justify-start lg:justify-center ml-3">
              <a
                href="https://www.linkedin.com/in/nazrin-isgandarova-4104841a6/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-[#9F9F9F] text-lg" />
              </a>
              <a
                href="https://github.com/Nazisg"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-[#9F9F9F] text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
