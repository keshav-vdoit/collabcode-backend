import { useSettingsStore } from '@/store';
import { AppConfigTypes } from '@/types/appConfigTypes';

import { hexToHslString } from '../helpers/color-converter';

export const useThemeConfig = () => {
  const {
    lightThemeColors,
    darkThemeColors,
    themeMode,
    settings,
    setSettings,
    setDarkThemeColors,
    setLightThemeColors,
    setThemeMode,
    setHexColors,
  } = useSettingsStore();

  const setAppConfig = (data: AppConfigTypes) => {
    setSettings(data);

    if (data?.ui?.theming?.themeMode !== 'auto') {
      setThemeMode(data?.ui?.theming?.themeMode || 'auto');
    }

    const primaryLight = data?.ui?.theming?.colors?.primary?.light;
    const secondaryLight = data?.ui?.theming?.colors?.secondary?.light;
    const primaryDark = data?.ui?.theming?.colors?.primary?.dark;
    const secondaryDark = data?.ui?.theming?.colors?.secondary?.dark;

    setHexColors({
      primaryLight,
      secondaryLight,
      primaryDark,
      secondaryDark,
    });

    const lightPrimaryHsl = hexToHslString(
      data?.ui?.theming?.colors?.primary?.light
    );
    const lightSecondaryHsl = hexToHslString(
      data?.ui?.theming?.colors?.secondary?.light
    );
    const darkPrimaryHsl = hexToHslString(
      data?.ui?.theming?.colors?.primary?.dark
    );

    const darkSecondaryHsl = hexToHslString(
      data?.ui?.theming?.colors?.secondary?.dark
    );

    const lightPrimaryForegroundHsl = hexToHslString(
      data?.ui?.theming?.colors?.primary?.foregroundLight
    );

    const lightSecondaryForegroundHsl = hexToHslString(
      data?.ui?.theming?.colors?.secondary?.foregroundLight
    );

    const darkPrimaryForegroundHsl = hexToHslString(
      data?.ui?.theming?.colors?.primary?.foregroundDark
    );

    const darkSecondaryForegroundHsl = hexToHslString(
      data?.ui?.theming?.colors?.secondary?.foregroundDark
    );

    setLightThemeColors({
      '--primary': lightPrimaryHsl,
      '--ring': lightPrimaryHsl,
      '--secondary': lightSecondaryHsl,
      '--primary-foreground': lightPrimaryForegroundHsl,
      '--secondary-foreground': lightSecondaryForegroundHsl,
    });
    setDarkThemeColors({
      '--primary': darkPrimaryHsl,
      '--ring': darkPrimaryHsl,
      '--secondary': darkSecondaryHsl,
      '--primary-foreground': darkPrimaryForegroundHsl,
      '--secondary-foreground': darkSecondaryForegroundHsl,
    });
  };

  return {
    setAppConfig,
    lightThemeColors,
    darkThemeColors,
    themeMode,
    settings,
    setThemeMode,
  };
};
