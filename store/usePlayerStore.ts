import type { Song } from '@/types';
import { create } from 'zustand';

interface PlayerType {
  isVisiblePlayer: boolean;
  activeSong?: Song | null;
  prevPlayerQueue: Song[];
  nextPlayerQueue: Song[];
  addSong: (song: Song) => void;
  addSongList: (songList: Song[]) => void;
  playPrev: () => void;
  playNext: () => void;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
}

const usePlayerStore = create<PlayerType>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (isVisiblePlayer) => set({ isVisiblePlayer }),
  activeSong: null,
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  addSong: (song) =>
    set(() => {
      return {
        isVisiblePlayer: !!song,
        activeSong: song,
      };
    }),
  addSongList: (songList) =>
    set((prev) => {
      const prevSong = prev.activeSong;
      const [currentSong, ...restNextQueue] = songList;

      return {
        isVisiblePlayer: !!currentSong,
        activeSong: currentSong,
        prevPlayerQueue: [...(prevSong ? [prevSong] : []), ...prev.prevPlayerQueue],
        nextPlayerQueue: restNextQueue,
      };
    }),
  playPrev: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const [prevSrc, ...restPrevQueue] = prev.prevPlayerQueue;

      return {
        activeSong: prevSrc,
        prevPlayerQueue: restPrevQueue,
        nextPlayerQueue: [...(currentSong ? [currentSong] : []), ...prev.nextPlayerQueue],
      };
    }),
  playNext: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const [nextSrc, ...restNextQueue] = prev.nextPlayerQueue;

      return {
        activeSong: nextSrc,
        prevPlayerQueue: [...(currentSong ? [currentSong] : []), ...prev.prevPlayerQueue],
        nextPlayerQueue: restNextQueue,
      };
    }),
}));

export default usePlayerStore;
