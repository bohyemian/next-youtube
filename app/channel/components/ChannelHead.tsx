'use client'

import { Button } from '@/components/ui/button'
import { shuffleArray } from '@/lib/utils'
import { FiRadio } from 'react-icons/fi'
import { TiArrowShuffle } from 'react-icons/ti'
import usePlayerStore from '@/store/usePlayerStore'
import type { Song } from '@/types'

const ChannelHead = ({ songList }: { songList: Song[] }) => {
  const addSongList = usePlayerStore((s) => s.addSongList)
  const handleShuffle = () => addSongList(shuffleArray(songList))

  return (
    <div className="flex flex-row gap-3 flex-wrap mt-3 lg:max-w-[400px]">
      <Button
        variant="outline"
        size="sm"
        className="px-5 border-neutral-400 bg-transparent text-sm rounded-full lg:w-full lg:flex-grow-0"
      >
        구독중
      </Button>
      <Button
        className="rounded-full flex-grow-0 px-5 text-sm lg:flex-grow"
        size="sm"
        onClick={handleShuffle}
      >
        <TiArrowShuffle size={12} />
        셔플
      </Button>
      <Button
        className="rounded-full flex-grow-0 px-5 text-sm lg:flex-grow"
        size="sm"
      >
        <FiRadio size={12} />
        뮤직 스테이션
      </Button>
    </div>
  )
}

export default ChannelHead
