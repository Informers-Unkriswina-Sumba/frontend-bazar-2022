import Layout from 'components/Layout';
import { APP_TITLE, PELAPAK_TOKEN_LOCAL_STORAGE } from 'constant';
import { getLocal } from 'helper/localStorage';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  ModalOverlay,
  ModalContent,
  Spinner,
  Modal,
} from '@chakra-ui/react';
import { IPelapakState } from 'provider/redux/Pelapak/PelapakReducer';
import { useSelector } from 'react-redux';
import { ICombinedState } from 'provider/redux/store';
import { ApiGetListInvoice } from 'api/pelapak';
import { ApiGetLapakById } from 'api/shared';
import { ApiPrintInvoice } from 'api/invoice';
import InvoiceItem from 'components/InvoiceItem';

interface IReduxStateWorkspace {
  pelapak: IPelapakState;
}

const DashboardLapak: NextPage = () => {
  const router = useRouter();
  const [loadingGetInvoice, setLoadingGetInvoice] = useState(false);
  const [loadingPrintInvoice, setLoadingPrintInvoice] = useState(false);
  const [listInvoice, setListInvoice] = useState<any[]>([]);
  const [lapak, setLapak] = useState<any>();

  const { pelapak } = useSelector<ICombinedState, IReduxStateWorkspace>(
    (state) => {
      return {
        pelapak: state.pelapak,
      };
    }
  );

  const getListInovice = async () => {
    setLoadingGetInvoice(true);
    const res = await ApiGetListInvoice(pelapak.pelapak.lapak);
    if (res.status === 200) {
      setListInvoice(res.data.data);
    }
    setLoadingGetInvoice(false);
  };

  const getLapakInfo = async () => {
    const reslapak = await ApiGetLapakById(pelapak.pelapak.lapak);
    if (reslapak.status === 200) {
      setLapak(reslapak.data.data);
    }
  };

  const printInvoice = async (id: string) => {
    setLoadingPrintInvoice(true);
    await ApiPrintInvoice(id);
    setLoadingPrintInvoice(false);
  };

  useEffect(() => {
    const token = getLocal(PELAPAK_TOKEN_LOCAL_STORAGE);
    if (!token || token === 'undefined') {
      router.push('/');
    } else {
      if (pelapak.pelapak) {
        getLapakInfo();
        getListInovice();
      }
    }
  }, [pelapak.pelapak]);

  return (
    <Layout>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption fontSize='22' fontWeight='600'>
            Daftar Pemesanan Lapak {lapak?.namaLapak}
          </TableCaption>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Nomor Invoice</Th>
              <Th>Status</Th>
              <Th>Aksi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loadingGetInvoice ? (
              <Spinner />
            ) : (
              listInvoice.map((invoice, index) => (
                <InvoiceItem
                  key={index}
                  invoiceNumber={invoice.invoiceNumber}
                  status={invoice.status}
                  index={index}
                  id={invoice._id}
                  printInvoice={printInvoice}
                />
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={loadingPrintInvoice} size='xs' onClose={() => undefined}>
        <ModalOverlay />
        <ModalContent>
          <Spinner />
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default DashboardLapak;
