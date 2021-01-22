import { Col, Row } from 'antd';
import { Typography } from 'antd';
import { Album } from '../../interfaces/track.list';
import { FunctionComponent } from 'react';

const { Title } = Typography;

export interface TrackDetailsProps {
  album: Album;
  duration: string;
  type: string | undefined;
  preview_url: string;
}

const TrackDetails: FunctionComponent<TrackDetailsProps> = ({
  album,
  duration,
  type,
  preview_url,
}) => (
  <>
    <Row>
      <Col md={12} sm={24} xs={24}>
        <Title level={5}>Álbum: {album.name}</Title>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Title level={5}>Fecha de Realización: {album.release_date}</Title>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Title level={5}>Explicíto: {album.explicit ? 'Si' : 'No'}</Title>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Title level={5}>
          Disponibilidad: {album.available_markets?.length} Países
        </Title>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Title level={5}>Duración: {duration}</Title>
      </Col>
      <Col md={12} sm={24} xs={24}>
        <Title level={5}>
          <p className="capitalize">Tipo: {type}</p>
        </Title>
      </Col>
    </Row>
    <div className={'mt-4'}>
      <Title level={2}>Muestra</Title>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio controls>
        <source src={preview_url} type="audio/mp3" />
      </audio>
    </div>
  </>
);

export default TrackDetails;
