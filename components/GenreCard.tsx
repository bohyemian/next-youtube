import { cn, generateRandomHex } from "@/lib/utils"

const GenreCard = ({ genre }: { genre: string }) => {
  const hex = generateRandomHex();

  return (
    <button type="button" className="flex gap-4 items-center overflow-hidden w-full h-12 mt-4 first:mt-0 bg-neutral-800 rounded-lg">
      <span className="w-2 h-full" style={{ backgroundColor: hex }}></span>{genre}
    </button>
  )
}

export default GenreCard