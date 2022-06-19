import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';

const Profile: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Lapak Kenangan Profile</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Lapak Kenangan Profile
    </LayoutMainApp>
  );
};

export default Profile;
