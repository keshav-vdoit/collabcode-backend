import { StateCreator } from 'zustand';

export interface ThemeSlice {
  lightThemeColors: Record<string, string>;
  setLightThemeColors: (theme: Record<string, string>) => void;
  darkThemeColors: Record<string, string>;
  setDarkThemeColors: (theme: Record<string, string>) => void;
  hexColors: Record<string, string>;
  setHexColors: (theme: Record<string, string>) => void;
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
}

const lightThemeColors = {
  '--background': '0 0% 100%',
  '--foreground': '222.2 84% 4.9%',
  '--card': '0 0% 100%',
  '--card-foreground': '222.2 84% 4.9%',
  '--popover': '0 0% 100%',
  '--popover-foreground': '222.2 84% 4.9%',
  '--primary': '197 89% 45%',
  '--primary-foreground': '210 40% 98%',
  '--secondary': '199 76% 92%',
  '--secondary-foreground': '215 25% 27%',
  '--muted': '210 40% 96.1%',
  '--muted-foreground': '215.4 16.3% 46.9%',
  '--accent': '210 40% 96.1%',
  '--accent-foreground': '222.2 47.4% 11.2%',
  '--success': '161 94% 30%',
  '--success-foreground': '210 40% 98%',
  '--destructive': '0 84.2% 60.2%',
  '--destructive-foreground': '210 40% 98%',
  '--border': '213 27% 84%',
  '--input': '214.3 20% 65%',
  '--ring': '197 89% 45%',
  '--radius': '0.5rem',
};

const darkThemeColors = {
  '--background': '222.2 84% 4.9%',
  '--foreground': '210 40% 98%',
  '--card': '222.2 84% 4.9%',
  '--card-foreground': '210 40% 98%',
  '--popover': '222.2 84% 4.9%',
  '--popover-foreground': '0 0% 100%',
  '--primary': '198 100% 39%',
  '--primary-foreground': '210 40% 98%',
  '--secondary': '199 76% 18%',
  '--secondary-foreground': '210 40% 98%',
  '--muted': '217.2 32.6% 17.5%',
  '--muted-foreground': '215 20.2% 65.1%',
  '--accent': '217.2 32.6% 17.5%',
  '--accent-foreground': '210 40% 98%',
  '--success': '161 94% 30%',
  '--success-foreground': '210 40% 98%',
  '--destructive': '0 84.2% 60.2%',
  '--destructive-foreground': '0 0% 100%',
  '--border': '217.2 32.6% 17.5%',
  '--input': '215 19% 35%',
  '--ring': '197 89% 45%',
  '--radius': '0.5rem',
};

const hexColors = {
  primaryLight: '',
  secondaryLight: '',
  primaryDark: '',
  secondaryDark: '',
};

export const themeSlice: StateCreator<ThemeSlice> = (set) => ({
  lightThemeColors,
  setLightThemeColors: (themeColors: Record<string, string>) =>
    set((state) => ({
      lightThemeColors: { ...state.lightThemeColors, ...themeColors },
    })),
  darkThemeColors,
  setDarkThemeColors: (themeColors: Record<string, string>) =>
    set((state) => ({
      darkThemeColors: { ...state.darkThemeColors, ...themeColors },
    })),
  hexColors,
  setHexColors: (themeColors: Record<string, string>) =>
    set((state) => ({ hexColors: { ...state.hexColors, ...themeColors } })),
  themeMode: 'auto',
  setThemeMode: (themeMode: string) => set(() => ({ themeMode })),
});
