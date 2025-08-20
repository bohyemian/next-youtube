'use client';

import Image from 'next/image';
import IconButton from './elements/IconButton';
import { MouseEvent } from 'react';
import { IoMdMore } from 'react-icons/io';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { getRandomElementFromArray } from '@/lib/utils';
import { type Playlist } from '@/types'
import usePlayerStore from '@/store/usePlayerStore';

const PlayListCard = ({ playlist }: { playlist: Playlist }) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;
  const addSongList = usePlayerStore(s => s.addSongList);
  const handleClickPlay = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    addSongList(songList);
  };

  return (
    <dl className="flex flex-col relative cursor-pointer group h-full" onClick={() => push(`/playlist?list=${id}`)}>
      <dt className="mt-2 leading-tight">{playlistName}</dt>
      <dd className="relative h-[136px] -order-last"><Image src={getRandomElementFromArray(songList).imageSrc} fill={true} alt="thumbnail" className="object-cover rounded-sm" /></dd>
      <dd className="mt-auto pt-1 text-xs text-neutral-500">{owner} {songList?.length && `- 트랙 ${songList?.length}개`}</dd>
      <dd className="hidden absolute top-0 w-full bg-gradient-to-b from-gray-950/70 group-hover:block">
        <IconButton icon={<IoMdMore size={28} className="p-1 hover:bg-gray-600/40 rounded-full" />} className="absolute top-2 right-2" />
        <button type="button" onClick={handleClickPlay}><FaRegCirclePlay className="absolute top-[128px] right-2 p-1.5 bg-black/50 -translate-y-full rounded-full hover:scale-110 transform-gpu transition-transform z-10" size={36} color="red" /></button>
      </dd>
    </dl>
  )
}

export default PlayListCard