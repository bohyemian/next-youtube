import Category from './components/Category';
import PlayListCarousel from '@/components/ui/PlayListCarousel';
import UserIcon from '@/components/ui/UserIcon';
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData';

const page = async () => {
  const dummyPlaylistArr1 = [...dummyPlaylistArray];
  const dummyPlaylistArr2 = [await getPlaylistById(1)];
  const dummyPlaylistArr3 = [await getPlaylistById(2)];
  const dummyPlaylistArr4 = [await getPlaylistById(3)];

  console.log(dummyPlaylistArr2)

  return (
    <div className="contents-padding pt-0">
      <Category />
      <PlayListCarousel playlistArray={dummyPlaylistArr1} thumbname={<UserIcon className="w-10 h-10" />} title="Goodbye, My Summer" subTitle="다시듣기" />
      <PlayListCarousel playlistArray={dummyPlaylistArr2} thumbname={<UserIcon className="w-10 h-10" />} title="된장찌개를 좋아해" subTitle="새로운 앨범" />
      <PlayListCarousel playlistArray={dummyPlaylistArr3} thumbname={<UserIcon className="w-10 h-10" />} title="I want to know" subTitle="K-라이징" />
      <PlayListCarousel playlistArray={dummyPlaylistArr4} thumbname={<UserIcon className="w-10 h-10" />} title="선샤인코메디클럽 M/V" subTitle="NEXT ON" />
    </div>
  )
}

export default page;