import { StateCreator } from 'zustand';

export interface ChatSettings {
  wordLimit: number;
  setWordLimit: (wordLimit: number) => void;
  audio: Blob | null;
  setAudio: (audio: Blob | null) => void;
  category: Record<string, any> | null;
  setCategory: (category: Record<string, any> | null) => void;
  audioEnabled: boolean;
  setAudioEnabled: (audioEnabled: boolean) => void;
}

export interface TwinSlice {
  twin: string | null;
  setTwin: (chat: string | null) => void;
}

export const chatSettings: StateCreator<ChatSettings> = (set) => ({
  wordLimit: 50,
  setWordLimit: (wordLimit: number) => {
    set(() => ({ wordLimit }));
  },
  audio: null,
  setAudio: (audio: Blob | null) => {
    set(() => ({ audio }));
  },
  category: null,
  setCategory: (category: Record<string, any> | null) => {
    set(() => ({ category }));
  },
  audioEnabled: true,
  setAudioEnabled: (audioEnabled: boolean) => {
    set(() => ({ audioEnabled }));
  },
});

export const twinSlice: StateCreator<TwinSlice> = (set) => ({
  twin: null,
  setTwin: (twin: string | null) => {
    set(() => ({ twin }));
  },
});
