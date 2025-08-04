'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getRandomElementFromArray } from '@/lib/utils';
import { type Playlist } from '@/types'

const PlayListCard = ({ playlist }: { playlist: Playlist }) => {
  const { push } = useRouter();
  const { id, owner, playlistName, songList } = playlist;

  return (
    <dl className="flex flex-col cursor-pointer" onClick={() => push(`/playlist?${id}`)}>
      <dt className="mt-2">{playlistName}</dt>
      <dd className="relative h-[136px] -order-last"><Image src={getRandomElementFromArray(songList).imageSrc} fill={true} alt="thumbnail" className="object-cover" /></dd>
      <dd className="text-sm text-neutral-500">{owner} {songList?.length && `- 트랙 ${songList?.length}개`}</dd>
    </dl>
  )
}

export default PlayListCard