'use client'
import { useState } from 'react';
import { weeklyData } from "@/types/data";
import { DomainList } from "./domainList";

export default function Weekly() {
  const [showDomainList, setShowDomainList] = useState(false);

  const toggleDomainList = () => {
    setShowDomainList(!showDomainList);
  };

  return (
    <div className="text-[#FFFFFF] mt-10">
        <div className="flex justify-between items-center">
      <h1 className="text-2xl">Weekly Overview</h1>
      <button onClick={toggleDomainList}>
        <span className="material-symbols-outlined">
          expand_more
        </span>
      </button>
        </div>

      <div className="flex justify-between gap-3">
        {/* total time */}
        <div className="bg-[#1C1C1C] rounded-xl w-[47%]  mt-5">
          <p className="p-4">Total Time</p>

          <div className="bg-[#212121] rounded-b-xl">
            <p className="p-4">85 hours</p>
          </div>
        </div>

        {/* domains */}
        <div 
          className="bg-[#1C1C1C] rounded-xl w-[47%] mt-5 cursor-pointer"
        >
          <p className="p-4">Domains</p>
          <div className="bg-[#212121] rounded-b-xl">
            <p className="p-4">7 </p>
          </div>
        </div>
      </div>

      {showDomainList && (
        <div className="mt-5">
          <DomainList domains={weeklyData.dailyData[0].domains} />
        </div>
      )}
    </div>
  );
}
