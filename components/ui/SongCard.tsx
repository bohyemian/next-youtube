import Image from 'next/image'
import { type TopSong } from '@/types'
import { FaCircle } from 'react-icons/fa'
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb'

const SongCard = ({ song }: { song: TopSong }) => {
  return (
    <dl className="flex flex-row items-center gap-4 mt-4 first:mt-0" >
      <dt className="flex flex-col">
        {song.name}
        <span className="text-xs text-neutral-500">{song.channel}</span>
      </dt>
      <dd className="order-first">
        <Image src={song.imageSrc} width={48} height={48} alt="thumbnail" />
      </dd>
      <dd className="flex flex-row order-first justify-center items-center gap-2 text-sm">
        {song.rank === song.prevRank ? <FaCircle size={10} /> :
          song.rank > song.prevRank ? <TbTriangleInvertedFilled size={10} color="green" /> : <TbTriangleFilled size={10} color="#db1515" />}
        {song.rank + 1}
      </dd>
    </dl>
  )
}

export default SongCard