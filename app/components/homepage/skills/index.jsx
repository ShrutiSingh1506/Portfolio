"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* glow */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      {/* marquee */}
      <div className="w-full my-12">
        <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick play direction="left">
          {skillsData.map((skill, id) => {
            const { png, svg } = skillsImage(skill);

            return (
              <div
                key={id}
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              >
                <div className="h-full w-full rounded-lg border-2 border-black bg-white shadow-none group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-16 w-16 flex items-center justify-center">
                      <img
                        src={svg}
                        alt={skill}
                        className="h-20 w-20 object-contain scale-110 group-hover:scale-125 transition-transform duration-300"
                        onError={(e) => {
                          // Try PNG if SVG not found
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = png;
                        }}
                      />
                    </div>
                    <p className="text-black text-sm sm:text-lg font-semibold text-center">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
