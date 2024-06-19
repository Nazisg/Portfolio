import { TitleProps } from "@/shared/types";

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <header>
      <h2 className="text-[#F9F9F9] text-xl md:text-2xl lg:text-3xl font-semibold">{title}</h2>
      <div className="w-11 h-[3px] md:h-[5px] bg-primary-color mt-1 md:mt-3 rounded-lg"></div>
    </header>
  );
};

export default Title;
