import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const RightMenu = () => {
  const iconClass = "cursor-pointer hover:text-primary";
  return (
    <div className="flex items-center gap-14">
      <ul className="flex text-lg items-center gap-10 font-semibold tracking-wider">
        <li className={iconClass}>Home</li>
        <li className={iconClass}>Features</li>
        <li className={iconClass}>About</li>
      </ul>

      <Button className={`text-lg py-5`}>
        Create Session <ChevronUp className="" />
      </Button>
    </div>
  );
};

export default RightMenu;
{
  /* <div className="flex items-center rounded-lg bg-primary text-white">
  <span className="p-2 px-4 border-e-2 border-secondary">Create Session</span>
  <ChevronUp />
</div>; */
}
