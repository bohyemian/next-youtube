import { create } from 'zustand';

export const defaultHeaderImage = 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b';

type UiStateType = {
  homeCategory: string;
  headerImagesrc: string;
  setHomeCategory: (value: string) => void;
  setHeaderImageSrc: (src: string) => void;
};

const useUIStateStore = create<UiStateType>((set) => ({
  homeCategory: '',
  headerImagesrc: defaultHeaderImage,
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImagesrc: src }),
}));

export default useUIStateStore;
