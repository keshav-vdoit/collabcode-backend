// import { useEffect, useLayoutEffect, useState } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { APP_CONFIG } from '@/constants/app-config';
import { useAuth } from '@/lib/hooks/useAuth';
import PageLoader from '../template/PageLoader';
import { useAppConfig } from './AppConfigProvider';
import UserLayout from './UserLayout';

const { unAuthenticatedEntryPath } = APP_CONFIG;

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const { isLoading } = useAppConfig();
  const location = useLocation();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={unAuthenticatedEntryPath}
        state={{ from: location }}
      />
    );
  }

  return <UserLayout />;
};
