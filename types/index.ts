export type Song = {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
};

export type TopSong = Song & {
  prevRank: number;
  rank: number;
};

export type Playlist = {
  id: number;
  owner: string;
  playlistName: string;
  songList: Song[];
};

export type Channel = {
  id: number;
  subscribers: number;
  name: string;
  songList: Song[];
  playlistArray: Playlist[];
};
