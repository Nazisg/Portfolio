import React from 'react';
import Title from "@/shared/components/Title";
import movie from '@/shared/media/imgs/movie.png';

const Projects: React.FC = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-2 bg-primary-bg border border-[#383838] p-4 rounded-xl">
          <img src={movie} alt="movie" className="w-full h-full object-cover rounded-xl" />
          <h2 className="text-[#f6f6f6] text-xl">
            StreamVibe - <span className="text-[#f6f6f6b6] font-light">Movie page</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            <div className="bg-primary-bg border border-[#383838] p-2 text-[#d6d6d6] text-xs rounded-2xl">React</div>
            <div className="bg-primary-bg border border-[#383838] p-2 text-[#d6d6d6] text-xs rounded-2xl">TypeScript</div>
            <div className="bg-primary-bg border border-[#383838] p-2 text-[#d6d6d6] text-xs rounded-2xl">TMDb API</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
