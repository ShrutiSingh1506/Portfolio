// @flow strict

import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/*  no absolute positioning, so it won't overlap */}
      <div className="px-4 lg:px-8 py-3 lg:py-5">
        <div className="flex items-center gap-3">
          {/* Window buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#23950A]"></div>
          </div>

          {/* Title */}
          <p className="text-[#fff] text-sm md:text-base lg:text-xl font-medium leading-tight break-words">
            {project.name}
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>

          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools?.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>

          {/* render array as multiple lines */}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
          </div>

          {Array.isArray(project.description) ? (
            project.description.map((line, i) => (
              <div key={i} className="ml-8 lg:ml-16 mr-2">
                <span className="text-cyan-400">• {line}</span>
              </div>
            ))
          ) : (
            <div className="ml-8 lg:ml-16 mr-2">
              <span className="text-cyan-400">{project.description}</span>
            </div>
          )}

          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
