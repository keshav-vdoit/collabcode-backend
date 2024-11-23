import { StateCreator } from 'zustand';

import { AppConfigTypes } from '@/types/appConfigTypes';

export interface SettingsSlice {
  settings: AppConfigTypes | null;
  setSettings: (settings: AppConfigTypes) => void;
}

export const appSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
  settings: null,
  setSettings: (settings: AppConfigTypes | null) => set(() => ({ settings })),
});
