import { NextPage } from 'next';
import AppLayout from '../components/Layout';
import Search from '../components/Search';
import { Col, Row } from 'antd';
import { MainContextProvider } from '../context/main.context';
import AppList from '../components/AppList';

const IndexPage: NextPage = () => (
  <AppLayout title="Lista de Canciones">
    <Row justify="center">
      <Col md={18} sm={20} xs={23}>
        <MainContextProvider>
          <Search />
          <AppList />
        </MainContextProvider>
      </Col>
    </Row>
  </AppLayout>
);

export default IndexPage;
