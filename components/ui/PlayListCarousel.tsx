import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PlayListCard from "./PlayListCard";
import { type Playlist } from "@/types";

type PlayListCarouselProps = {
  title: string;
  subTitle?: string;
  thumbname?: React.ReactNode;
  playlistArray: Playlist[];
}


const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  thumbname,
  playlistArray
}) => {
  return (
    <Carousel className="w-full">
      <div className="flex items-center gap-4 mt-8">
        {thumbname}
        <div className="flex flex-col">
          {subTitle && <span className="text-neutral-500 leading-none">{subTitle}</span>}
          <span className="text-2xl font-bold">{title}</span>
        </div>
        <CarouselPrevious className="static translate-y-0 ml-auto" />
        <CarouselNext className="static translate-y-0" />
      </div>
      <CarouselContent className="mt-4">
        {playlistArray.map(item => {
          return (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <PlayListCard playlist={item} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default PlayListCarousel