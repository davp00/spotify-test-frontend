import { FunctionComponent } from 'react';
import { Avatar } from 'antd';
import ArtistsLinks from '../Artists';
import { Album, Artist } from '../../interfaces/track.list';
import { Typography } from 'antd';

const { Title } = Typography;

export interface TrackHeadProps {
  album: Album;
  name: string;
  artists: Artist[];
}

const TrackHead: FunctionComponent<TrackHeadProps> = ({
  album,
  name,
  artists,
}) => (
  <div className="text-center mt-4">
    <Avatar size={album.images[1].height - 150} src={album.images[1].url} />
    <Title level={1} className="mt-2">
      {name}
    </Title>
    <Title level={3} className="artist-name">
      <ArtistsLinks artists={artists} />
    </Title>
  </div>
);

export default TrackHead;
