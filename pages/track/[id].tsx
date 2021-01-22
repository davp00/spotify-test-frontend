import { Alert, Card, Col, Row } from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TrackInformation } from '../../interfaces/track.information';
import AppLayout from '../../components/Layout';
import AppLoader from '../../components/Loader';
import TrackHead from '../../components/track/TrackHead';
import TrackDetails from '../../components/track/TrackDetails';

const TrackInformationPage: NextPage = () => {
  const router = useRouter();
  const [state, setState] = useState<TrackInformation>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { id } = router.query;

    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/track/${id}`)
      .then(({ data }) => {
        if (!data.status) {
          setState(data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    document.title = 'Cargando Información';
    return <AppLoader />;
  }

  if (state) {
    return (
      <AppLayout title={`${state.name} - ${state.artists[0].name}`}>
        <TrackHead
          album={state.album}
          name={state.name}
          artists={state.artists}
        />
        <Row justify="center" className="mt-4">
          <Col md={15} sm={20} xs={23} className="mt-2">
            <Card>
              <TrackDetails
                album={state.album}
                duration={state.duration}
                type={state.type || ''}
                preview_url={state.preview_url}
              />
            </Card>
          </Col>
        </Row>
      </AppLayout>
    );
  } else {
    return (
      <div>
        <Alert
          type="error"
          message="Error"
          description="La canción no ha sido encontrada"
          showIcon
        />
      </div>
    );
  }
};

export const getServerSideProps = ({ params }: any) => {
  const id = params.id;
  return {
    props: { id },
  };
};

export default TrackInformationPage;
