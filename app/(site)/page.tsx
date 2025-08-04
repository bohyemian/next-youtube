import Category from './components/Category';
import PlayListCarousel from '@/components/ui/PlayListCarousel';
import UserIcon from '@/components/ui/UserIcon';
import { dummyPlaylistArray } from '@/lib/dummyData';

const page = async () => {
  const dummyPlaylistArr = [...dummyPlaylistArray];

  return (
    <div className="contents-padding pt-0">
      <Category />
      <PlayListCarousel playlistArray={dummyPlaylistArr} thumbname={<UserIcon className="w-10 h-10" />} title="다시듣기" subTitle="Bono" />
    </div>
  )
}

export default page;