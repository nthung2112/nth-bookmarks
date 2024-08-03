import { ConfigItem } from '@/types';
import { create } from 'zustand';
import { searchInData } from './helper';

interface AppState {
  isLoading: boolean;
  data: ConfigItem[];
  bookmarks: ConfigItem[];
  pathMapping: Record<string, string>;
  activeFolder?: ConfigItem | null;
  setActiveFolder: (item: ConfigItem) => void;
  searchKey: string;
  setSearchKey: (key: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  isLoading: true,
  data: [],
  bookmarks: [],
  pathMapping: {},
  activeFolder: null,
  searchKey: '',
  setActiveFolder: (activeFolder: ConfigItem) => {
    set({ activeFolder });
  },
  setSearchKey: (key: string) => {
    set((state) => ({
      searchKey: key,
      activeFolder: key ? null : state.bookmarks[0],
      bookmarks: searchInData(state.bookmarks, key),
    }));
  },
}));
