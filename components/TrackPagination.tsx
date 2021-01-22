import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/main.context';
import { notification, Pagination } from 'antd';
import axios from 'axios';

const TrackPagination = (): JSX.Element => {
  const { data, limit, query, setTrackList, setLoading } = useContext(
    MainContext
  );
  const [state, setState] = useState({
    nPages: 0,
    page: 1,
  });

  useEffect(() => {
    const nPages = (data?.total || 0) / (limit || 10);
    setState({
      ...state,
      nPages: nPages % 1 === 0 ? nPages : Math.trunc(nPages) + 1,
    });
  }, [data?.total, limit]);

  const handleOnChange = (page: number) => {
    setState({ ...state, page });

    setLoading?.(true);
    window.scrollTo(0, 0);

    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/search?q=${query}&limit=${limit}&page=${state.page}`
      )
      .then(({ data }) => {
        if (!data.status) {
          setTrackList?.(data);
        } else {
          notification.error({
            message: 'Error',
            description: `${data.status} - ${data.message}`,
          });
        }
      })
      .finally(() => setLoading?.(false));
  };

  return (
    <div className="mt-3 mb-5 float-right">
      <Pagination
        defaultCurrent={1}
        total={state.nPages}
        current={state.page}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TrackPagination;
