'use client';

import { FaRegCirclePlay } from "react-icons/fa6";

type PlaylistProps = {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: string[];
  }
}

const PlayListNav = ({ playlist }: PlaylistProps) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {
    // [TODO] play music
  }

  return (
    <li key={id} className="flex flex-row flex-nowrap justify-between items-center mt-3 first:mt-0 group">
      <div className="flex flex-col overflow-hidden">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-md text-neutral-300 group-hover:pr-2">{playlistName}</p>
        <span className="text-xs text-neutral-500">{owner}</span>
      </div>
      <FaRegCirclePlay size={24} color="#aaa" onClick={onClickPlay} className="hidden shrink-0 group-hover:block group-hover:cursor-pointer" />
    </li>
  )
};

export default PlayListNav;