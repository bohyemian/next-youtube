import GenreListCarousel from '@/components/GenreListCarousel'
import Category from './components/Category'
import PlayListCarousel from '@/components/PlayListCarousel'
import SongListCarousel from '@/components/SongListCarousel'
import {
  dymmyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from '@/lib/dummyData'

const page = async () => {
  const [playlistrArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ])

  return (
    <div className="contents-padding pt-0 pb-40">
      <Category />
      <PlayListCarousel
        playlistArray={playlistrArray}
        title="Goodbye, My Summer"
        className="mt-8"
      />
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
      <GenreListCarousel genreList={dymmyGenreList} title="분위기 및 장르" />
    </div>
  )
}

export default page
