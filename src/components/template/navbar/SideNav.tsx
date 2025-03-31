import { ChartBar, HelpCircle, Network, Rocket, Share } from "lucide-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SideNav = () => {
  const newSessionId = uuidv4().slice(0, 6);

  return (
    <div className="w-56 bg-secondary h-screen">
      <ul className="">
        <Link to={"/"}>
          <li className="hover:bg-primary border-primary flex items-center gap-2 p-3 py-2 rounded text-white border-b">
            <Rocket size={20} /> Get Started
          </li>
        </Link>
        <Link to={`/realtime/${newSessionId}`}>
          <li className="hover:bg-primary border-primary flex items-center gap-2 p-3 py-2 text-white border-b">
            <Network size={20} /> Real time Share
          </li>
        </Link>
        <Link to={`/share/${newSessionId}`}>
          <li className="hover:bg-primary border-primary flex items-center gap-2 p-3 py-2 text-white border-b">
            <Share size={20} /> Save and Share
          </li>
        </Link>
        <Link to={"/"}>
          <li className="hover:bg-primary border-primary flex items-center gap-2 p-3 py-2 text-white border-b">
            <ChartBar size={20} /> Chat and share
          </li>
        </Link>
        <Link to={"/"}>
          <li className="hover:bg-primary border-primary flex items-center gap-2 p-3 py-2 text-white border-b">
            <HelpCircle size={20} /> Help
          </li>
        </Link>
        {/* <li>Profile</li>
            <li>Logout</li> */}
      </ul>
    </div>
  );
};

export default SideNav;
