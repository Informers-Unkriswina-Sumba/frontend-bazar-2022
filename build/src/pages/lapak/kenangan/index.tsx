import LayoutMainApp from 'components/Layout/LayoutMainApp';
import ProdukItem from 'components/ProdukItem';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Kenangan: NextPage = () => {
  return (
    <LayoutMainApp>
      <Head>
        <title>{APP_TITLE} | Lapak Kenangan</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Lapak Kenangan
      <Link href='/lapak/kenangan/profile'>Profile</Link>
      {[1, 2, 3, 4, 5, 6].map((item: number) => (
        <ProdukItem
          image='https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80'
          productName='Kacamata Wayfarer Classic'
          numReviews='32'
          harga='150.000'
          link='/lapak/kenangan/produk/34f34rt'
          key={item}
        />
      ))}
    </LayoutMainApp>
  );
};

export default Kenangan;
