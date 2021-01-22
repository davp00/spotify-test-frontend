import { useContext } from 'react';
import { MainContext } from '../context/main.context';
import { Avatar, Button, Table } from 'antd';
import { Track } from '../interfaces/track.list';
import { InfoCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import TrackPagination from './TrackPagination';
import ArtistsLinks from './Artists';

const columns: any[] = [
  {
    title: 'Portada',
    key: 'image',
    render(item: Track) {
      return <Avatar size={50} src={item.album.images[0].url} />;
    },
  },
  {
    title: 'Nombre',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Album',
    key: 'name',
    render(item: Track): JSX.Element {
      return (
        <a
          href={item.album.spotify}
          target="_blank"
          rel="noreferrer"
          data-cy="btn-album-spotify-link"
        >
          <p>{item.album.name}</p>
        </a>
      );
    },
    responsive: ['md'],
  },
  {
    title: 'Artistas',
    key: 'artists',
    render(item: Track): JSX.Element {
      return (
        <span data-cy="artist-row-links">
          <ArtistsLinks artists={item.artists} />
        </span>
      );
    },
  },
  {
    title: 'Duración',
    key: 'duration',
    dataIndex: 'duration',
    responsive: ['md'],
  },
  {
    title: 'Acciones',
    key: 'actions',
    render(item: Track): JSX.Element {
      return (
        <span>
          <Link
            href={{
              pathname: '/track/[id]',
              query: { id: item.id },
            }}
          >
            <Button
              data-cy="btn-app-track-info"
              type="text"
              icon={<InfoCircleOutlined />}
            />
          </Link>
          <a
            href={item.spotify}
            target="_blank"
            rel="noreferrer"
            data-cy="btn-track-spotify-link"
          >
            <Button type="link" icon={<PlayCircleOutlined />} />
          </a>
        </span>
      );
    },
  },
];

const AppList = (): JSX.Element => {
  const { data, loading } = useContext(MainContext);

  return (
    <div className="mt-4 mb-5">
      <Table
        data-cy="track-list-table"
        rowKey={(item) => item.id}
        columns={columns}
        dataSource={data?.items}
        pagination={false}
        loading={loading}
        scroll={{ x: 300 }}
      />
      <TrackPagination />
    </div>
  );
};

export default AppList;
