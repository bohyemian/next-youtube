'use client';

import Link from "next/link";
import usePlayerStore from "@/store/usePlayerStore";
import { FaRegCirclePlay } from "react-icons/fa6";

type PlaylistProps = {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: { name: string; channelId: number; channel: string; src: string; imageSrc: string; }[];
  }
}

const PlayListNav = ({ playlist }: PlaylistProps) => {
  const { id, owner, playlistName, songList } = playlist;
  const addSongList = usePlayerStore(s => s.addSongList);
  const onClickPlay = () => addSongList(songList);

  return (
    <li className="flex flex-row flex-nowrap justify-between items-center mt-3 first:mt-0 group">
      <div className="flex flex-col items-start overflow-hidden">
        <Link href={`/playlist?list=${id}`} className="overflow-hidden w-full text-ellipsis whitespace-nowrap text-md text-neutral-300 group-hover:pr-2">{playlistName}</Link>
        <Link href={`/channel/${id}`} className="text-xs text-neutral-500 hover:underline">{owner}</Link>
      </div>
      <FaRegCirclePlay size={24} color="#aaa" onClick={onClickPlay} className="hidden shrink-0 group-hover:block group-hover:cursor-pointer" />
    </li>
  )
};

export default PlayListNav;