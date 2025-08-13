'use client';

import useUIStateStore from '@/app/hooks/useUIState';
import { useEffect } from 'react';

export const HeaderBgChanger = ({ imgSrc }: { imgSrc: string }) => {
  const setHeaderImageSrc = useUIStateStore(s => s.setHeaderImageSrc);

  useEffect(() => {
    imgSrc && setHeaderImageSrc(imgSrc);
  }, []);

  return <></>;
}