import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { chunkArray } from "@/lib/utils";
import { type TopSong } from "@/types";
import SongCard from "./SongCard";

type SongListCarouselProps = {
  title: string;
  subTitle?: string;
  thumbname?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList }: { songList: TopSong[] }) => {
  return (
    <>
      {songList.map(song => <SongCard key={song.channelId} song={song} />)}
    </>
  )
}

const SongListCarousel = ({
  title,
  subTitle,
  thumbname,
  songListTop10
}: SongListCarouselProps) => {
  const chunkedTop10List = chunkArray(songListTop10, 4);

  return (
    <Carousel className="w-full">
      <div className="flex items-center gap-4 mt-8">
        {thumbname && thumbname}
        <div className="flex flex-col">
          {subTitle && <span className="text-xs text-neutral-500 leading-none">{subTitle}</span>}
          {title && <span className="text-2xl font-bold">{title}</span>}
        </div>
        <>
          <CarouselPrevious className="static translate-y-0 ml-auto" />
          <CarouselNext className="static translate-y-0" />
        </>
      </div>
      <CarouselContent className="mt-4">
        {chunkedTop10List.map((songList, i) => {
          return (
            <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <SongColumn songList={songList} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default SongListCarousel