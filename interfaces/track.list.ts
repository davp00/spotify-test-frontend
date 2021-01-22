export interface TrackExternalUrl {
  spotify: string;
}

export interface Artist {
  id: string;
  name: string;
  type: string;
  externals_urls: TrackExternalUrl[];
}

export interface TrackImage {
  height: number;
  url: string;
  width: number;
}

export interface Album {
  artists: Artist[];
  name: string;
  spotify: string;
  type: string;
  images: TrackImage[];
}

export interface Track {
  id: string;
  album: Album;
  duration: string;
  name: string;
  spotify: string;
}

export interface TrackList {
  items: Track[];
  total: number;
}
