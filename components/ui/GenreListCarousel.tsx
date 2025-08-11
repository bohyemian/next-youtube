import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { chunkArray } from "@/lib/utils";
import GenreCard from "./GenreCard";

type GenreListCarouselProps = {
  title: string;
  subTitle?: string;
  thumbname?: React.ReactNode;
  genreList: string[];
}

const GenreColumn = ({ genreList }: Pick<GenreListCarouselProps, 'genreList'>) => {
  return <>{genreList.map(genre => <GenreCard key={genre} genre={genre} />)}</>
}

const GenreListCarousel = ({
  title,
  subTitle,
  thumbname,
  genreList
}: GenreListCarouselProps) => {
  const chunkedGenreList = chunkArray(genreList, 4);

  return (
    <Carousel>
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
        {chunkedGenreList.map((genre, i) => {
          return (
            <CarouselItem key={i} className="basis-1/3 lg:basis-1/4">
              <GenreColumn genreList={genre} />
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default GenreListCarousel