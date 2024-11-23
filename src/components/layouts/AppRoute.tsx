import { useEffect } from 'react';

import { ProtectedRouteInterface } from '@/configs/routes/protected-routes';
import { APP_CONFIG } from '@/constants/app-config';
import { useSettingsStore } from '@/store';

const AppRoute = ({ ...props }: ProtectedRouteInterface) => {
  const { component: Component, name } = props;
  const { settings } = useSettingsStore();
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      const title = name
        ? name + ` | ${settings?.ui?.appName || APP_CONFIG.appName}`
        : APP_CONFIG.appName;
      document.title = title;
    } else {
      const title = name
        ? name + ` | ${settings?.ui?.appName || APP_CONFIG.appName}`
        : APP_CONFIG.appName;
      document.title = title;
    }
  }, [isAuthenticated, name, settings?.ui?.appName]);

  return <Component />;
};

export default AppRoute;
