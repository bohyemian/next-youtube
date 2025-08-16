import Link from 'next/link'
import Image from 'next/image'
import { type Song, TopSong } from '@/types'
import { GoDash } from 'react-icons/go'
import { FaRegCirclePlay, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa6'
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Rank = ({ rank, prevRank }: Pick<TopSong, 'rank' | 'prevRank'>) => {
  return (
    <dd className="flex flex-row order-first justify-center items-center gap-2 text-sm">
      {
        rank === prevRank ? <GoDash size={10} color="#ccc" /> :
          rank > prevRank ? <TbTriangleInvertedFilled size={10} color="green" /> : <TbTriangleFilled size={10} color="#db1515" />
      }
      {rank + 1}
    </dd>
  );
}

const SongCard = ({ song }: { song: Song & Partial<Pick<TopSong, 'prevRank' | 'rank'>> }) => {
  const hasRank = song.rank !== undefined;

  return (
    <dl className="flex flex-row items-center gap-4 mt-4 relative w-full first:mt-0 group" >
      <dt className="flex flex-col">
        {song?.name}
        <Link href={`/channel/${song.channelId}`} className="text-xs text-neutral-500 hover:underline">{song?.channel}</Link>
      </dt>
      <dd className="relative order-first">
        {<Image src={song.imageSrc} width={48} height={48} alt="thumbnail" />}
        {hasRank &&
          <button type="button" className="hidden absolute inset-0 w-full h-full p-2.5 bg-black/70 z-10 group-hover:block">
            <FaRegCirclePlay className="w-full h-full" />
          </button>
        }
      </dd>
      {(song.rank !== undefined && song.prevRank !== undefined) && <Rank rank={song.rank} prevRank={song.prevRank} />}
      {hasRank &&
        <dd className="hidden group-hover:flex flex-row items-center gap-1 absolute top-0 right-0 bottom-0 pl-3 bg-gradient-to-l from-[#0c0a09]">
          <button type="button" className="p-1"><FaRegThumbsUp size={18} /></button>
          <button type="button" className="p-1"><FaRegThumbsDown size={18} /></button>
          <button type="button" className="p-1"><BsThreeDotsVertical size={18} /></button>
        </dd>}
    </dl >
  )
}

export default SongCard