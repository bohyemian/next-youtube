import { permanentRedirect } from "next/navigation";
import { getRandomElementFromArray } from "@/lib/utils";
import { getPlaylistById } from "@/lib/dummyData";
import { HeaderBgChanger } from "@/components/HeaderBgChanger";
import PlayListHead from "@/components/PlayListHead";

type searchParamsProps = Promise<{ [key: string]: string | string[] | undefined }>

const page = async (props: { searchParams: searchParamsProps }) => {
  const searchParams = await props.searchParams;
  const playlist = await getPlaylistById(searchParams.list);

  if (!playlist) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  return (
    <div className="contents-padding text-center">
      <HeaderBgChanger imgSrc={imageSrc} />
      <PlayListHead playlist={playlist} />
    </div>
  )
}

export default page