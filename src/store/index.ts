import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import {
  chatSettings,
  ChatSettings,
  TwinSlice,
  twinSlice,
} from './slices/chat.slice';
import { appSettingsSlice, SettingsSlice } from './slices/settings.slice';
import { themeSlice, ThemeSlice } from './slices/theme.slice';
import {
  profileSlice,
  ProfileSlice,
  TokenSlice,
  tokenSlice,
  userSlice,
  UserSlice,
} from './slices/user.slice';

export const useSettingsStore = create<ThemeSlice & SettingsSlice>()(
  persist(
    (...a) => ({
      ...themeSlice(...a),
      ...appSettingsSlice(...a),
    }),
    { name: 'app-store' }
  )
);

export const useUserStore = create<UserSlice>()(
  persist(
    (...a) => ({
      ...userSlice(...a),
    }),
    { name: 'user-store' }
  )
);

export const useProfileStore = create<ProfileSlice>()((...a) => ({
  ...profileSlice(...a),
}));

export const useTokenStore = create<TokenSlice>()((...a) => ({
  ...tokenSlice(...a),
}));

export const useChatStore = create<ChatSettings>()(
  persist(
    (...a) => ({
      ...chatSettings(...a),
    }),
    { name: 'chat-word-limit' }
  )
);

export const useTwinStore = create<TwinSlice>()(
  persist(
    (...a) => ({
      ...twinSlice(...a),
    }),
    {
      name: 'twin-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
