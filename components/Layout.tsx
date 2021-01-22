import { FunctionComponent } from 'react';
import Head from 'next/head';

export interface LayoutProps {
  title: string;
}

const AppLayout: FunctionComponent<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title} - Spotify Consumer App</title>
    </Head>
    <div>{children}</div>
  </>
);

export default AppLayout;
