import { Button, Col, Form, Input, Row, notification, message } from 'antd';
import { useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { MainContext } from '../context/main.context';

const loadingKey = 'updatable';

const Search = (): JSX.Element => {
  const queryInput = useRef<Input | null>();
  const limitInput = useRef<Input | null>();
  const { setTrackList } = useContext(MainContext);

  const handleSubmit = () => {
    const q = queryInput.current?.state.value;
    const limit = limitInput.current?.state.value;

    message.loading('Cargando...', loadingKey as any);

    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/search?q=${q || ''}&limit=${limit}`)
      .then(({ data }) => {
        if (!data.status) {
          setTrackList?.(data, limit, q);
        } else {
          notification.error({
            message: 'Error',
            description: `${data.status} - ${data.message}`,
          });
        }
      });
  };

  useEffect(() => {
    limitInput.current?.setState({ value: 10 });
  }, []);

  return (
    <div className="mt-5">
      <Form onFinish={handleSubmit}>
        <Row justify="center" className="p-md-2">
          <Col md={10} sm={18} xs={24}>
            <Input
              placeholder="Canción a buscar"
              ref={queryInput as any}
              name="q"
            />
          </Col>
          <Col className="ml-md-2 limit-input" md={2} sm={4} xs={24}>
            <Input placeholder="Limite" name="limit" ref={limitInput as any} />
          </Col>
        </Row>
        <Row justify="center" className="mt-3">
          <Col md={12} sm={22} xs={24}>
            <div>
              <Button type="primary" block htmlType="submit">
                Buscar
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Search;
