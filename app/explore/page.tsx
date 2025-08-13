import GenreListCarousel from '@/components/ui/GenreListCarousel';
import Category from './components/Category'
import PlayListCarousel from '@/components/ui/PlayListCarousel';
import SongListCarousel from '@/components/ui/SongListCarousel';
import { dymmyGenreList, getAllPlaylist, getSongListTop10 } from '@/lib/dummyData'

const page = async () => {
  const [playlistrArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()]);

  return (
    <div className="contents-padding pt-0 pb-40">
      <Category />
      <PlayListCarousel playlistArray={playlistrArray} title="Goodbye, My Summer" />
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
      <GenreListCarousel genreList={dymmyGenreList} title="분위기 및 장르" />
    </div>
  )
}

export default page