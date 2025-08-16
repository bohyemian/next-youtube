import Category from "./components/Category"
import PlayListCard from '@/components/PlayListCard';
import { dummyPlaylistArray } from '@/lib/dummyData';
import { getRandomElementFromArray } from "@/lib/utils";

const page = () => {
  return (
    <div className="contents-padding pt-0">
      <Category />
      <div className="grid grid-cols-3 gap-6 md:grid-cols-4 2xl:grid-cols-5 mt-8">
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)} />
      </div>
    </div>
  )
}

export default page