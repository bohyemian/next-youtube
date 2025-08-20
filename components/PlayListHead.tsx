"use client";

import Image from "next/image";
import { type Playlist } from "@/types";
import { getRandomElementFromArray } from "@/lib/utils";
import { FaPlay } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { FiMoreVertical } from "react-icons/fi";
import { TbCopyPlusFilled } from "react-icons/tb";
import IconButton from "@/components/elements/IconButton";
import SongCard from "./SongCard";
import usePlayerStore from "@/store/usePlayerStore";

const PlayListHead = ({ playlist }: { playlist: Playlist }) => {
  const { playlistName, owner, songList } = playlist as Playlist;
  const addSongList = usePlayerStore(s => s.addSongList);
  const randomSong = getRandomElementFromArray(songList);
  const handleClickPlay = () => addSongList(songList);

  return (
    <div className="flex flex-col items-center gap-8">
      <dl className="inline-flex flex-col gap-2 relative min-h-40 text-left lg:pl-44">
        <dt className="pb-2 text-2xl font-extrabold">{playlistName}</dt>
        <dd className="relative -order-last w-40 h-40 m-auto mb-4 lg:absolute lg:left-0">
          <Image src={randomSong?.imageSrc} fill alt="album thumbnail" />
        </dd>
        <dd className="text-sm text-neutral-400">앨범 &middot; {owner} &middot; 2025</dd>
        <dd className="text-sm text-neutral-400">{songList.length}곡 &middot; {songList.length * 4}분</dd>
      </dl>
      <div className="flex flex-row gap-4">
        <Button className="rounded-full" size="sm" onClick={handleClickPlay}><FaPlay size={12} />재생</Button>
        <Button variant="outline" size="sm"><TbCopyPlusFilled />보관함에 저장</Button>
        <IconButton icon={<FiMoreVertical size={20} />} />
      </div>
      <ul className="flex flex-col gap-2 min-w-72 mt-10 text-left">
        {songList.map((song, index) => <SongCard key={song.channelId + index} song={song} />)}
      </ul>
    </div>
  )
}

export default PlayListHead