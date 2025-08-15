import { Button } from "@/components/ui/button";
import { HeaderBgChanger } from "@/components/ui/HeaderBgChanger";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { FiRadio } from "react-icons/fi";
import { TiArrowShuffle } from "react-icons/ti";
import { permanentRedirect } from "next/navigation";
import SongCard from "@/components/ui/SongCard";
import PlayListCarousel from "@/components/ui/PlayListCarousel";

type ParamsProps = Promise<{ id: string[] }>;

const page = async (props: { params: ParamsProps }) => {
  const params = await props.params;
  const channel = await getChannelById(params.id);
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  if (!channel) {
    permanentRedirect("/");
  }

  return (
    <section className="contents-padding">
      <HeaderBgChanger imgSrc={imageSrc} />
      <h2 className="pt-20 text-2xl font-bold">{channel.name}</h2>
      <div className="flex flex-row gap-3 flex-wrap mt-3 lg:max-w-[400px]">
        <Button variant="outline" size="sm" className="px-5 border-neutral-400 bg-transparent text-sm rounded-full lg:w-full lg:flex-grow-0">구독중</Button>
        <Button className="rounded-full flex-grow-0 px-5 text-sm lg:flex-grow" size="sm"><TiArrowShuffle size={12} />셔플</Button>
        <Button className="rounded-full flex-grow-0 px-5 text-sm lg:flex-grow" size="sm"><FiRadio size={12} />뮤직 스테이션</Button>
      </div>
      <h3 className="mt-12 text-xl font-bold">노래</h3>
      {channel.songList.map(song => <SongCard song={song} />)}
      <h3 className="mt-12 text-xl font-bold">앨범</h3>
      {<PlayListCarousel playlistArray={channel.playlistArray} />}
    </section>
  )
}

export default page