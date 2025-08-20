import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ComponentProps } from "react";
import { chunkArray, cn } from "@/lib/utils";
import { type TopSong } from "@/types";
import SongCard from "./SongCard";

type SongListCarouselProps = ComponentProps<"div"> & {
  title: string;
  subTitle?: string;
  thumbname?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList }: { songList: TopSong[] }) => <>{songList.map(song => <SongCard key={song.rank} song={song} />)}</>

const SongListCarousel = ({
  title,
  subTitle,
  thumbname,
  songListTop10,
  className
}: SongListCarouselProps) => {
  const chunkedTop10List = chunkArray(songListTop10, 4);

  return (
    <Carousel className={cn("w-full", className)}>
      <div className="flex items-center gap-4 mt-8">
        {thumbname}
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
            <CarouselItem key={i} className="lg:basis-1/2">
              <SongColumn songList={songList} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default SongListCarousel