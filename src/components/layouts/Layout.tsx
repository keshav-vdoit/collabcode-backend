import { Suspense } from "react";
import BreadNav from "../template/navbar/BreadNav";
import SideNav from "../template/navbar/SideNav";
import { Outlet } from "react-router-dom";
import PageLoader from "../template/PageLoader";

const Layout = () => {
  return (
    <div>
      <BreadNav />
      <div className="flex">
        <SideNav />
        <div className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
