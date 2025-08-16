'use client';

import useUIStateStore from '@/app/store/useUIStore';
import { useEffect } from 'react';

export const HeaderBgChanger = ({ imgSrc }: { imgSrc: string }) => {
  const setHeaderImageSrc = useUIStateStore(s => s.setHeaderImageSrc);

  useEffect(() => {
    imgSrc && setHeaderImageSrc(imgSrc);
  }, []);

  return <></>;
}