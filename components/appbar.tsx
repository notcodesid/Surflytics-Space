import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Appbar() {
    return (
    <div className="flex justify-between items-center bg-[#1C1C1C] text-[#FFFFFF] py-4 px-6 border border-[#292929] rounded-b-3xl">
      <h1 className="text-xl font-bold">Surflytics Space.</h1>

      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          <p>Hi, Siddharth!</p>
        </div>
    </div>
  );
}