"use client"

import usePlayerStore from "@/store/usePlayerStore"
import { useAudio } from "react-use"
import { Slider } from "@/components/ui/slider"
import { ClockLoader } from "react-spinners"
import { FaPause, FaPlay } from "react-icons/fa"
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md"
import { useCallback } from "react"

const PlayerContent = () => {
  const activeSong = usePlayerStore(s => s.activeSong);
  const playPrev = usePlayerStore(s => s.playPrev);
  const playNext = usePlayerStore(s => s.playNext);
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || '',
    autoPlay: true,
  });
  const isLoading = !!activeSong?.src && !ref.current;

  const handlePrev = () => playPrev();
  const handleNext = () => playNext();
  const handlePlay = useCallback(() => controls.play(), []);

  return (
    <>
      <Slider />
      {audio}
      <div className="flex items-center justify-center gap-2 px-7">
        <button type="button" className="p-1" onClick={handlePrev}><MdOutlineSkipPrevious aria-label="이전 곡" size={24} /></button>
        {
          isLoading ? <ClockLoader aria-label="로딩중" size={18} color="#acacac" /> :
            state.playing ?
              <button type="button" className="p-2" onClick={controls.pause}><FaPause size={12} /></button> :
              <button type="button" className="p-2" onClick={handlePlay}><FaPlay size={12} /></button>
        }
        <button type="button" className="p-1" onClick={handleNext}><MdOutlineSkipNext size={24} aria-label="다음 곡" /></button>
      </div>
    </>
  )
}

export default PlayerContent