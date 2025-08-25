import { HeaderBgChanger } from '@/components/HeaderBgChanger'
import { getChannelById } from '@/lib/dummyData'
import { getRandomElementFromArray } from '@/lib/utils'
import { permanentRedirect } from 'next/navigation'
import SongCard from '@/components/SongCard'
import PlayListCarousel from '@/components/PlayListCarousel'
import usePlayerStore from '@/store/usePlayerStore'
import ChannelHead from '../components/ChannelHead'

type ParamsProps = Promise<{ id: string[] }>

const page = async (props: { params: ParamsProps }) => {
  const params = await props.params
  const channel = await getChannelById(params.id)
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc

  if (!channel) {
    permanentRedirect('/')
  }

  return (
    <section className="contents-padding">
      <HeaderBgChanger imgSrc={imageSrc} />
      <h2 className="pt-20 text-2xl font-bold">{channel.name}</h2>
      <ChannelHead songList={channel.songList} />
      <h3 className="mt-12 text-xl font-bold">노래</h3>
      {channel.songList.map((song) => (
        <SongCard key={song.name} song={song} />
      ))}
      <h3 className="mt-12 text-xl font-bold">앨범</h3>
      {<PlayListCarousel playlistArray={channel.playlistArray} />}
    </section>
  )
}

export default page
