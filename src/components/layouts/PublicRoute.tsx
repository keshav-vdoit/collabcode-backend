import { Navigate, useLocation, useSearchParams } from 'react-router-dom';

import { APP_CONFIG } from '@/constants/app-config';
// import { useAuth } from '@/lib/hooks/useAuth';
import AuthLayout from './AuthLayout';

const { authenticatedEntryPath } = APP_CONFIG;

export const PublicRoute = () => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = false
  const [searchParams] = useSearchParams();
  const location = useLocation();

  location.state = location.state || {};

  const redirectUrl = searchParams.get('redirect') ?? authenticatedEntryPath;

  if (isAuthenticated) {
    return <Navigate replace to={redirectUrl} />;
  }

  return <AuthLayout />;
};
