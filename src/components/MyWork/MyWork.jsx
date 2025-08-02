import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center gap-20 px-4 md:px-20 lg:px-[170px] my-20">
      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-white text-[32px] md:text-[60px] lg:text-[80px] font-semibold px-4">
          My Latest Work
        </h1>
        <img
          src={theme_pattern}
          alt="theme pattern"
          className="absolute bottom-0 right-2 w-16 md:w-20 lg:w-24 opacity-20 -z-10"
        />
      </div>

      {/* Work Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-11 w-full place-items-center">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={`work-${index}`}
            className="w-full max-w-[420px] max-h-[320px] object-cover rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:border-[3px] hover:border-fuchsia-500 hover:rounded-xl"
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center gap-4 border-2 border-white rounded-full px-8 py-6 text-white text-lg md:text-xl font-medium cursor-pointer transition-all duration-400 hover:gap-8 hover:bg-white/10">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default MyWork;
