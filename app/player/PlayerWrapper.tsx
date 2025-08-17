"use client"

import PlayerContent from "./PlayerContent"
import usePlayerStore from "@/store/usePlayerStore"

const PlayerWrapper = () => {
  const isVisiblePlayer = usePlayerStore(s => s.isVisiblePlayer);

  if (!isVisiblePlayer) {
    return null;
  };

  return (
    <div className="fixed bottom-0 w-full h-16 z-50">
      <PlayerContent />
    </div>
  )
}

export default PlayerWrapper