import { TrackList } from '../interfaces/track.list';
import { Component, createContext } from 'react';

export interface MainContextProps {
  page: number;
  data: TrackList;
  loading: boolean;
  query: string;
  limit: number;
  setTrackList: (data: TrackList, limit?: number, query?: string) => void;
  setLoading: (newValue: boolean) => void;
  setPage: (newValue: number) => void;
}

export const MainContext = createContext<
  Partial<MainContextProps> | MainContextProps
>({});

export class MainContextProvider extends Component<any, MainContextProps> {
  state = {
    page: 1,
    limit: 0,
    query: '',
    loading: false,
    data: {
      items: [],
      total: 0,
    },
    setTrackList: this.setTrackList.bind(this),
    setLoading: this.setLoading.bind(this),
    setPage: this.setPage.bind(this),
  };

  setPage(newValue: number): void {
    this.setState({ page: newValue });
  }

  setLoading(newValue: boolean): void {
    this.setState({ loading: newValue });
  }

  setTrackList(data: TrackList, limit?: number, query?: string): void {
    this.setState({
      data,
      limit: limit || this.state.limit,
      query: query || this.state.query,
    });
  }

  render(): JSX.Element {
    const { children } = this.props;

    return (
      <MainContext.Provider value={this.state}>{children}</MainContext.Provider>
    );
  }
}
