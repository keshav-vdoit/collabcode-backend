import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import { InternalAxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';
import WebFont from 'webfontloader';

import { useAuth } from '@/lib/hooks/useAuth';
import { useThemeConfig } from '@/lib/hooks/useThemeConfig';
import api from '@/services';
import { apiGetAppConfig } from '@/services/auth.api';
import { useTokenStore, useUserStore } from '@/store';
import PageLoader from '../template/PageLoader';

interface AppConfigContextProps {
  isLoading: boolean;
  colorScheme: 'auto' | 'light' | 'dark';
  setIsLoading: (isLoading: boolean) => void;
  refreshToken: () => Promise<void>;
}

const AppConfigContext = createContext<AppConfigContextProps | undefined>(
  undefined
);

const AppConfigProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { signOut, isAuthenticated } = useAuth();

  const [colorScheme, setColorScheme] = useState<'auto' | 'light' | 'dark'>(
    'auto'
  );

  const { token, setToken } = useTokenStore();

  const { setUser, setAuthenticated } = useUserStore();
  const {
    lightThemeColors,
    darkThemeColors,
    themeMode,
    setAppConfig,
    setThemeMode,
    settings,
  } = useThemeConfig();

  const { isLoading: isAppConfigLoading } = useQuery({
    queryKey: ['appConfig'],
    queryFn: apiGetAppConfig,
    onSuccess: (res) => {
      setAppConfig(res?.data?.data);
      setColorScheme(res?.data?.data?.ui?.theming?.themeMode || 'auto');
    },
    refetchOnWindowFocus: false,
  });

  // Function to apply theme colors to the root element
  const applyThemeColors = (colors: Record<string, string>) => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  // Apply theme mode and colors
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (themeMode === 'auto') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      setThemeMode(systemTheme);
      const colors =
        systemTheme === 'dark' ? darkThemeColors : lightThemeColors;
      applyThemeColors(colors);
    } else {
      root.classList.add(themeMode);
      const colors = themeMode === 'dark' ? darkThemeColors : lightThemeColors;
      applyThemeColors(colors);
    }
  }, [themeMode, darkThemeColors, lightThemeColors, setThemeMode]);

  // Set dynamic font
  useEffect(() => {
    const root = window.document.documentElement;
    const font = (settings?.ui?.theming?.font as string) || 'Inter';

    WebFont.load({
      google: {
        families: [font],
      },
      active() {
        root.style.setProperty('font-family', `${font}, sans-serif`);
      },
      inactive() {
        root.style.setProperty('font-family', 'Inter, sans-serif');
      },
    });
  }, [settings?.ui?.theming?.font]);

  const refreshToken = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await api.get('/auth/refresh-token');
      const { token: newToken, ...userInfo } = res?.data?.data ?? {};
      setToken(newToken);
      setUser(userInfo);
    } catch (refreshError) {
      console.log(refreshError);
      signOut({ apiCall: true });
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (isAuthenticated && !token) refreshToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (config: InternalAxiosRequestConfig<any> & { _retry?: boolean }) => {
        if (!config?._retry && token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest =
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error.config as InternalAxiosRequestConfig<any> & {
            _retry?: boolean;
          };
        if (
          error.response?.status === 403 &&
          error.response.data.message === 'Unauthorized'
        ) {
          if (!originalRequest._retry) {
            originalRequest._retry = true;
            try {
              const res = await api.get('/auth/refresh-token');
              const { token: newToken, ...userInfo } = res?.data?.data ?? {};
              setToken(newToken);
              setUser(userInfo);
              setAuthenticated(true);
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return api(originalRequest);
            } catch (refreshError) {
              signOut({ apiCall: false });
              return Promise.reject(refreshError);
            }
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppConfigContext.Provider
      value={{ isLoading, refreshToken, setIsLoading, colorScheme }}
    >
      {isLoading || isAppConfigLoading ? <PageLoader /> : children}
    </AppConfigContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppConfig = () => {
  const context = useContext(AppConfigContext);
  if (context === undefined) {
    throw new Error('useAppConfig must be used within a AppConfigProvider');
  }
  return context;
};

export default AppConfigProvider;
