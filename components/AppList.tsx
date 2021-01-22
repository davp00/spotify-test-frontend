import { useContext } from 'react';
import { MainContext } from '../context/main.context';
import { Avatar, Button, Table } from 'antd';
import { Track } from '../interfaces/track.list';
import { InfoCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import TrackPagination from './TrackPagination';

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
      return <p>{item.album.name}</p>;
    },
    responsive: ['md'],
  },
  {
    title: 'Artistas',
    key: 'artists',
    render(item: Track): JSX.Element {
      return (
        <span>
          {item.album.artists.map((artist, index) => {
            return (
              <span key={artist.id}>
                {artist.name}
                {index !== item.album.artists.length - 1 && ', '}
              </span>
            );
          })}
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
            <Button type="text" icon={<InfoCircleOutlined />} />
          </Link>
          <a href={item.spotify} target="_blank" rel="noreferrer">
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
