"use client";
import { useState } from "react";
import { classesITake, classesITeach, videoProjects } from "../../dance-data";
import VideoGrid from "./videogrid";
import InViewWrapper from "../inviewwrapper";

const tabs = [
  { label: "Classes I Teach", data: classesITeach },
  { label: "Classes I Take", data: classesITake },
  { label: "Performances", data: videoProjects },
];

const VideoTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div id="videos" className="min-h-screen pt-24 pb-16 px-8 md:px-16 lg:px-28 max-w-screen-xl mx-auto">
      <InViewWrapper>
        <div className="flex gap-8 border-b border-slate-700 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`pb-3 text-sm font-medium tracking-wide transition-colors duration-200 border-b-2 -mb-px ${
                active === i
                  ? "border-sky-400 text-sky-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <VideoGrid videos={tabs[active].data} />
      </InViewWrapper>
    </div>
  );
};

export default VideoTabs;
