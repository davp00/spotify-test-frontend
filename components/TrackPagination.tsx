import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/main.context';
import { notification, Pagination } from 'antd';
import axios from 'axios';

const TrackPagination = (): JSX.Element => {
  const {
    data,
    limit,
    query,
    setTrackList,
    setLoading,
    setPage,
    page,
  } = useContext(MainContext);
  const [state, setState] = useState({
    nPages: 0,
  });

  useEffect(() => {
    let nPages = data?.total || 0;

    if (nPages > 2000) nPages = 2000;

    setState({
      nPages: nPages % 1 === 0 ? nPages : Math.trunc(nPages) + 1,
    });
  }, [data?.total, limit]);

  const handleOnChange = (page: number) => {
    setPage?.(page);

    setLoading?.(true);
    window.scrollTo(0, 0);

    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/search?q=${query}&limit=${limit}&page=${page}`
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
        data-cy="ant-pagination"
        data-page={page}
        defaultCurrent={1}
        total={state.nPages}
        current={page}
        showSizeChanger={false}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TrackPagination;
