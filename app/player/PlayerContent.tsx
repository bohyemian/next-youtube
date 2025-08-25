'use client'

import Image from 'next/image'
import usePlayerStore from '@/store/usePlayerStore'
import { useAudio } from 'react-use'
import { Slider } from '@/components/ui/slider'
import { ClockLoader } from 'react-spinners'
import { FaPause, FaPlay } from 'react-icons/fa'
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from 'react-icons/md'
import { useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

const PlayerContent = () => {
  const activeSong = usePlayerStore((s) => s.activeSong)
  const playPrev = usePlayerStore((s) => s.playPrev)
  const playNext = usePlayerStore((s) => s.playNext)
  const prevPlayerQueue = usePlayerStore((s) => s.prevPlayerQueue)
  const nextPlayerQueue = usePlayerStore((s) => s.nextPlayerQueue)
  const [audio, { playing, buffered, time, duration }, controls, ref] =
    useAudio({
      src: activeSong?.src || '',
      autoPlay: true,
    })
  const isLoading = activeSong?.src && buffered?.length === 0
  const playTime = (duration / 60).toFixed(2).split('.')
  const second = Math.floor((duration - time) / 60)
  const milliSecond = ((duration - time) / 60).toFixed(2).split('.')[1]

  const handlePlay = () => controls.play()

  const handlePrev = () => {
    if (playing && time > 10) {
      return controls.seek(0)
    }
    if (prevPlayerQueue.length === 0) {
      return
    }
    playPrev()
  }

  const handleNext = useCallback(() => {
    if (nextPlayerQueue.length) {
      playNext()
    }
  }, [nextPlayerQueue, playNext])

  useEffect(() => {
    const audioEl = ref.current

    audioEl?.addEventListener('ended', handleNext)

    return () => {
      audioEl?.removeEventListener('ended', handleNext)
    }
  }, [ref, handleNext])

  // TODO: 재생 중 state.time이 바뀌면서 계속 리랜더링이 일어남
  // console.log('재생 중 계속 리랜더링');

  return (
    <>
      <Slider
        className="absolute left-0 right-0 py-1"
        max={duration}
        defaultValue={[0]}
        value={[time]}
        onValueChange={(value) => controls.seek(value[0])}
      />
      {audio}
      <div className="flex items-center justify-center mt-6">
        <div className="inline-flex items-center gap-2 px-7">
          <button
            type="button"
            className="relative p-1 disabled:opacity-40 group"
            disabled={!prevPlayerQueue.length}
            onClick={handlePrev}
          >
            <MdOutlineSkipPrevious aria-label="이전 곡" size={24} />
            <span
              className={cn(
                'hidden absolute bottom-full p-2 bg-neutral-300/30 text-xs whitespace-nowrap -translate-x-1/4 rounded-lg',
                prevPlayerQueue.length > 0 && 'group-hover:block'
              )}
            >
              {prevPlayerQueue[0]?.name}
            </span>
          </button>
          {isLoading ? (
            <ClockLoader aria-label="로딩중" size={18} color="#acacac" />
          ) : playing ? (
            <button type="button" className="p-2" onClick={controls.pause}>
              <FaPause size={12} />
            </button>
          ) : (
            <button type="button" className="p-2" onClick={handlePlay}>
              <FaPlay size={12} />
            </button>
          )}
          <button
            type="button"
            className="relative p-1 disabled:opacity-60 group"
            disabled={!nextPlayerQueue.length}
            onClick={handleNext}
          >
            <MdOutlineSkipNext size={24} aria-label="다음 곡" />
            <span
              className={cn(
                'hidden absolute bottom-full p-2 bg-neutral-300/30 text-xs whitespace-nowrap -translate-x-1/4 rounded-lg',
                nextPlayerQueue.length > 0 && 'group-hover:block'
              )}
            >
              {nextPlayerQueue[0]?.name}
            </span>
          </button>
        </div>
        {activeSong?.imageSrc && (
          <Image
            src={activeSong?.imageSrc}
            className={activeSong?.imageSrc && 'mr-2'}
            width={24}
            height={24}
            alt="thumbnail"
          />
        )}
        <strong className="text-sm text-neutral-300 font-normal">
          {activeSong?.name}
        </strong>
        <div className="flex justify-center gap-2 min-w-28 text-sm text-neutral-500">
          <span>
            {second}:{milliSecond}
          </span>{' '}
          / {playTime[0]}:{playTime[1]}
        </div>
      </div>
    </>
  )
}

export default PlayerContent
