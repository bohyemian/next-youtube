import Category from './components/Category'
import UserIcon from '@/components/ui/UserIcon';
import PlayListCarousel from '@/components/ui/PlayListCarousel';
import SongListCarousel from '@/components/ui/SongListCarousel';
import { getAllPlaylist, getSongListTop10 } from '@/lib/dummyData'

const page = async () => {
  const [playlistrArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()]);

  return (
    <div className="contents-padding">
      <Category />
      <PlayListCarousel playlistArray={playlistrArray} title="Goodbye, My Summer" />
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
    </div>
  )
}

export default page