import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../template/Footer';
import Navbar  from '../template/navbar/Navbar';
import PageLoader from '../template/PageLoader';

const UserLayout = () => {
  return (
    <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
      <Navbar />
      <div className="h-full flex flex-auto flex-col justify-between">
        <Suspense fallback={<PageLoader />}>
          <main className="relative h-full flex flex-auto flex-col p-2 sm:px-6 md:px-8 sm:py-6">
            <Outlet />
          </main>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
