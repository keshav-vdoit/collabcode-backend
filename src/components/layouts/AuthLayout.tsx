import { Suspense } from "react";

import { Outlet } from "react-router-dom";

// import AuthSectionImage from '../shared/AuthSectionImage';
// import { Logo } from '../shared/Logo';
import Footer from "../template/Footer";
import PageLoader from "../template/PageLoader";
import Navbar from "../template/Navbar";

const AuthLayout = () => {
  return (
    <Suspense>
      <div className="flex flex-auto flex-col justify-between min-h-screen">
        {/* <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-6"> */}
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            {/* <div className="flex flex-col justify-center gap-4 md:gap-8 items-center relative"> */}
            <div>
              {/* <Logo className="lg:absolute top-0 right-0 w-28" /> */}
              <div className="flex flex-col w-full">
                <Outlet />
              </div>
            </div>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};
export default AuthLayout;
