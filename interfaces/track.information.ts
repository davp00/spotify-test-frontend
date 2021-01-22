import { Album, Artist, TrackExternalUrl } from './track.list';

export interface TrackInformation {
  album: Album;
  artists: Artist[];

  name: string;
  preview_url: string;
  external_urls: TrackExternalUrl;
  duration: string;

  type?: string;
}
