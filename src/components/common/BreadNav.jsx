import { ChevronRight } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BreadNav = () => {
  const url = useLocation().pathname.split("/");
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-2 p-3 bg-primary text-white">
        {url.map((item, index) => (
          <div
            className="flex items-center gap-2 font-semibold underline underline-offset-4 capitalize"
            onClick={() => navigate("/" + url.slice(0, index + 1).join("/"))}
          >
            <span>{index === 0 ? "Home" : item}</span>
            {index !== url.length - 1 && <ChevronRight size={15} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadNav;
