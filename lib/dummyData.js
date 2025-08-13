import { getRandomInt } from './utils';

export const dummyAllSongList = [
  {
    name: 'Canopus',
    channelId: 1,
    channel: '50meru',
    src: '/music/50meru - Canopus.mp4',
    imageSrc: '/img/50meru - Canopus.jpeg',
  },
  {
    name: 'Vega',
    channelId: 1,
    channel: '50meru',
    src: '/music/50meru - Vega.mp4',
    imageSrc: '/img/50meru - Vega.jpeg',
  },
  {
    name: 'aldebaran',
    channelId: 1,
    channel: '50meru',
    src: '/music/50meru - aldebaran.mp4',
    imageSrc: '/img/50meru - aldebaran.jpeg',
  },
  {
    name: 'constellations',
    channelId: 1,
    channel: '50meru',
    src: '/music/50meru - constellations.mp4',
    imageSrc: '/img/50meru - constellations.jpeg',
  },
  {
    name: '불 붙인 양초',
    channelId: 2,
    channel: 'CattyBGM',
    src: '/music/CattyBGM - 불 붙인 양초.mp4',
    imageSrc: '/img/CattyBGM - 불 붙인 양초.jpeg',
  },
  {
    name: '신난 양말',
    channelId: 2,
    channel: 'CattyBGM',
    src: '/music/CattyBGM - 신난 양말.mp4',
    imageSrc: '/img/CattyBGM - 신난 양말.jpeg',
  },
  {
    name: '고양이 코',
    channelId: 2,
    channel: 'CattyBGM',
    src: '/music/CattyBGM - 고양이 코.mp4',
    imageSrc: '/img/CattyBGM - 고양이 코.jpeg',
  },
  {
    name: '휴화산',
    channelId: 2,
    channel: 'CattyBGM',
    src: '/music/CattyBGM - 휴화산.mp4',
    imageSrc: '/img/CattyBGM - 휴화산.jpeg',
  },
  {
    name: 'butter',
    channelId: 3,
    channel: 'ClearnEars',
    src: '/music/ClearnEars - butter.mp4',
    imageSrc: '/img/ClearnEars - butter.jpeg',
  },
  {
    name: '크리스마스',
    channelId: 3,
    channel: 'ClearnEars',
    src: '/music/ClearnEars - Christmas.mp4',
    imageSrc: '/img/ClearnEars - Christmas.jpeg',
  },
  {
    name: '붕 뜬 코끼리',
    channelId: 4,
    channel: 'daldam music',
    src: '/music/daldam music - 붕 뜬 코끼리.mp4',
    imageSrc: '/img/daldam music - 붕 뜬 코끼리.jpeg',
  },
  {
    name: '밥',
    channelId: 4,
    channel: 'daldam music',
    src: '/music/daldam music - 밥.mp4',
    imageSrc: '/img/daldam music - 밥.jpeg',
  },
  {
    name: '차',
    channelId: 4,
    channel: 'daldam music',
    src: '/music/daldam music - 차.mp4',
    imageSrc: '/img/daldam music - 차.jpeg',
  },
  {
    name: '목욕오리',
    channelId: 4,
    channel: 'daldam music',
    src: '/music/daldam music - 목욕오리.mp4',
    imageSrc: '/img/daldam music - 목욕오리.jpeg',
  },
];

export const getSongsBychannel = (channel) => {
  return dummyAllSongList.filter((song) => song.channel === channel);
};

// playlist
export const dummyPlaylistArray = [
  {
    id: 1,
    owner: '50meru',
    playlistName: "50meru's playlist",
    songList: getSongsBychannel('50meru'),
  },
  {
    id: 2,
    owner: 'CattyBGM',
    playlistName: "CattyBGM's playlist",
    songList: getSongsBychannel('CattyBGM'),
  },
  {
    id: 3,
    owner: 'ClearnEars',
    playlistName: "ClearnEars's playlist ears",
    songList: getSongsBychannel('ClearnEars'),
  },
  {
    id: 4,
    owner: 'daldam music',
    playlistName: "daldam's playlist music",
    songList: getSongsBychannel('daldam music'),
  },
  {
    id: 5,
    owner: '도도',
    playlistName: "dodo's playlist music",
    songList: [...getSongsBychannel('CattyBGM'), ...getSongsBychannel('ClearnEars'), ...getSongsBychannel('daldam music')],
  },
];

export const getAllPlaylist = async () => [...dummyPlaylistArray];

export const getPlaylistByOwner = (owner) => {
  return dummyPlaylistArray.filter((playlist) => playlist.owner === owner);
};

export const getPlaylistById = async (id) => {
  return dummyPlaylistArray.filter((playlist) => playlist.id === +id)?.[0];
};

export const getSongListTop10 = async () =>
  dummyAllSongList.map((song, idx) => {
    return {
      rank: idx,
      prevRank: idx + getRandomInt(-3, 3),
      ...song,
    };
  });

// channel
export const dummyChannelList = [
  {
    id: 1,
    subscribers: 4200,
    name: '50meru',
    songList: getSongsBychannel('50meru'),
    playlistArray: getPlaylistByOwner('50meru'),
  },
  {
    id: 2,
    subscribers: 2900,
    name: 'CattyBGM',
    songList: getSongsBychannel('CattyBGM'),
    playlistArray: getPlaylistByOwner('CattyBGM'),
  },
  {
    id: 3,
    subscribers: 3900,
    name: 'daldam music',
    songList: getSongsBychannel('daldam music'),
    playlistArray: getPlaylistByOwner('daldam music'),
  },
  {
    id: 4,
    subscribers: 3900,
    name: 'ClearnEars',
    songList: getSongsBychannel('ClearnEars'),
    playlistArray: getPlaylistByOwner('ClearnEars'),
  },
  {
    id: 5,
    subscribers: 3900,
    name: '도도',
    songList: [...getSongsBychannel('50meru'), ...getSongsBychannel('CattyBGM')],
    playlistArray: [...getPlaylistByOwner('50meru'), ...getPlaylistByOwner('CattyBGM')],
  },
];

export const getChannelById = async (id) => {
  return dummyChannelList.filter((channel) => channel.id === id)?.[0];
};

// home - 카테고리
export const homeCategoryList = [
  {
    label: '운동',
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
  },
  {
    label: '행복한 기분',
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
  },
  {
    label: '에너지 충전',
    src: 'https://images.unsplash.com/photo-1464808646948-8f732deb6e4b',
  },
  {
    label: '휴식',
    src: 'https://images.unsplash.com/photo-1494947356691-434358cea5a3',
  },
  {
    label: '집중',
    src: 'https://images.unsplash.com/photo-1503945438517-f65904a52ce6',
  },
  {
    label: '출퇴근길',
    src: 'https://images.unsplash.com/reserve/NV0eHnNkQDHA21GC3BAJ_Paris%20Louvr.jpg',
  },
  {
    label: '로맨스',
    src: 'https://images.unsplash.com/photo-1517867065801-e20f409696b0',
  },
  {
    label: '파티',
    src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec',
  },
  {
    label: '슬픔',
    src: 'https://images.unsplash.com/photo-1511634829096-045a111727eb',
  },
  {
    label: '자기 전',
    src: 'https://images.unsplash.com/photo-1703783010857-9bd7a7b97c50',
  },
];

// 분위기 및 장르
// Array.from(document.querySelectorAll("#items")[7].querySelectorAll("button")).map( el => el.textContent.replaceAll("\n","").trim())
export const dymmyGenreList = [
  '잠잘 때',
  '인디 & 얼터너티브',
  '계절 변화를 위한 테마',
  '국내 발라드',
  '국내 록/얼터너티브',
  '슬픔',
  '연말연시',
  '아프리카',
  '출퇴근 & 등하교',
  '사랑 노래',
  '한국 힙합',
  '힙합',
  '국내 R&B',
  '2010년대',
  'R&B 및 소울',
  '록',
  '국내 댄스',
  '힘이 필요할 때',
  '편안한 분위기',
  '운동할 때',
  'OST & 뮤지컬',
  '파티 음악',
  '행복한 기분',
  '트로트',
  'Reggae & Caribbean',
  '집중할 때',
  '1980년대',
  '2000년대',
  '포크/어쿠스틱',
  '크리스마스',
  '1990년대',
  'Pop',
  '블랙 라이브즈 매터',
  '재즈',
  '클래식',
  '가족',
  '1970년대 음악',
  '아랍 음악',
  '1960년대',
  '댄스 & 일렉트로닉',
  '만도팝 및 캔터팝',
  '컨트리 & 아메리카나',
  'J팝',
  '블루스',
  '라틴',
  '메탈',
  '이라크 음악',
  '발리우드 & 인도',
];
