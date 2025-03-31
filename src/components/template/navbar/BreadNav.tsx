// import { ChevronRight } from "lucide-react";
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const BreadNav = () => {
  // const url = useLocation().pathname.split("/");
  // const navigate = useNavigate();

  return (
    <div className="bg-green-100 p-3 border-b-2 shadow-md">
      <Link to={"/"}>
        <p className="text-xl font-bold colored-text text-center">
          Code Colab : Collaborative Editor
        </p>
      </Link>
      {/* <div className="flex items-center gap-2 p-3 text-primary">
        {url.map((item, index) => (
          <div
            className="flex items-center gap-2 font-semibold underline underline-offset-4 capitalize"
            onClick={() => navigate("/" + url.slice(0, index + 1).join("/"))}
          >
            <span>{index === 0 ? "Home" : item}</span>
            {index !== url.length - 1 && <ChevronRight size={15} />}
          </div>
        ))} 
      </div>*/}
      {/* <button className="border border-secondary text-white rounded-lg">
        startsession-> two options
      </button> */}
      {/* <button className="border border-secondary text-white rounded-lg">
        connect to server
      </button> */}
    </div>
  );
};

export default BreadNav;
