import avatar from "@/shared/media/imgs/avatar.png";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className=" flex flex-col gap-5 justify-center items-center sticky top-4 p-5 bg-primary-bg max-h-screen h-full border border-[#383838] rounded-xl text-white w-64">
      <div className="flex flex-col justify-center items-center gap-2">
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
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-[#202022] bg-custom-gradient shadow-custom rounded-xl flex justify-center items-center">
            <MdOutlineMailOutline className="text-primary-color text-lg"/>
          </div>
          <div>
            <p className="text-[#d6d6d6b2] text-xs">EMAIL</p>
            <p className="text-[#fafafa] text-sm">isgnezrin@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
