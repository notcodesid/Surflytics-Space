import { weeklyData } from "@/types/data";
import { DomainList } from "./domainList";

export default function Today() {
  return (
    <div className="text-[#FFFFFF] mt-10">
      <h1 className="text-2xl">Today&apos;s Time</h1>

      <div className="flex justify-between gap-3">
        {/* total time */}
        <div className="bg-[#1C1C1C] rounded-xl w-[47%]  mt-5">
          <p className="p-4">Total Time</p>

          <div className="bg-[#212121] rounded-b-xl">
            <p className="p-4">7 hours</p>
          </div>
        </div>

        {/* domains */}
        <div className="bg-[#1C1C1C] rounded-xl w-[47%]  mt-5">
          <p className="p-4">Domains</p>

          <div className="bg-[#212121] rounded-b-xl">
            <p className="p-4">7 </p>
          </div>
        </div>
      </div>

      <DomainList domains={weeklyData.dailyData[0].domains} />   
    </div>
  );
}
