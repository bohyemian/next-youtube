import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { type Playlist } from "@/types";
import PlayListCard from "./PlayListCard";

type PlayListCarouselProps = ComponentProps<"div"> & {
  title?: string;
  subTitle?: string;
  thumbname?: React.ReactNode;
  playlistArray: Playlist[];
}

const PlayListCarousel = ({
  title,
  subTitle,
  thumbname,
  playlistArray,
  className
}: PlayListCarouselProps) => {
  return (
    <Carousel className={cn("w-full", className)}>
      <div className={cn("flex items-center gap-4 mt-8", (title && subTitle && playlistArray.length === 1) ?? "mt-0")}>
        {thumbname}
        <div className="flex flex-col">
          {subTitle && <span className="text-xs text-neutral-500 leading-none">{subTitle}</span>}
          {title && <span className="text-2xl font-bold">{title}</span>}
        </div>
        {playlistArray.length > 1 &&
          <>
            <CarouselPrevious className="static translate-y-0 ml-auto" />
            <CarouselNext className="static translate-y-0" />
          </>
        }
      </div>
      <CarouselContent className="mt-4">
        {playlistArray.map(item => {
          return (
            <CarouselItem key={item.id} className="items-stretch basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <PlayListCard playlist={item} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default PlayListCarousel