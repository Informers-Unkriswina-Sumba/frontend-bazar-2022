import Layout from 'components/Layout';
import { APP_TITLE } from 'constant';
import type { NextPage } from 'next';
import Head from 'next/head';
import { BsTelephone } from 'react-icons/bs';
import {
  Avatar,
  Box,
  chakra,
  Collapse,
  Flex,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  SimpleGrid,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import moment from 'moment';
import {
  Badge,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import {
  ApiGetBestPerformanceLapak,
  ApiGetBestPerformanceMahasiswa,
  ApiGetSummaryData,
} from 'api/summary';
import {
  ISummaryInfoPenilaianLapak,
  ISummaryPenilainMahasiswa,
  ISummaryReviewPenilainLapak,
  ISummaryReviewPenilainMahasiswa,
} from 'interfaces/penilaian';
import Link from 'next/link';
import { DATA_MAHASISWA } from 'constant/data-mahasiswa';
import { Tooltip } from '@chakra-ui/react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ApiGetListPenilaianMahasiswa } from 'api/penilaianAnggota';

const dummy = [
  {
    id: 1,
    name: 'Rendy',
    nim: '2119070',
    description: 'Sangat menyenangkan',
    createAt: 'Sabtu 23 Juni 2022',
  },
  {
    id: 2,
    name: 'Lendy',
    nim: '2119070',
    description: 'Sangat menyenangkan',
    createAt: 'Sabtu 23 Juni 2022',
  },
  {
    id: 3,
    name: 'Pendy',
    nim: '2119070',
    description: 'Sangat menyenangkan',
    createAt: 'Sabtu 23 Juni 2022',
  },
  {
    id: 4,
    name: 'Fendy',
    nim: '2119070',
    description: 'Sangat menyenangkan',
    createAt: 'Sabtu 23 Juni 2022',
  },
];

const RangkumanPenilaianMahasiswa: NextPage = () => {
  const [loadingGet, setLoadingGet] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [dataPenilaian, setDataPenilaian] = useState<any[]>([]);
  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: 'id', width: 90, hide: true },
      {
        field: 'name',
        // headerCheckboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // checkboxSelection: true,
        // pinned: 'left',
        headerName: 'Nama',
        width: 380,
      },
      {
        field: 'nim',
        headerName: 'NIM',
      },
      {
        field: 'totalMenyenangkan',
        headerName: 'Menyenangkan',
      },
      {
        field: 'totalAsik',
        headerName: 'Asik',
      },
      {
        field: 'totalCukup',
        headerName: 'Cukup',
      },
      {
        field: 'totalTidakMenyenangkan',
        headerName: 'Tidak Menyenangkan',
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      filter: true,
    }),
    []
  );

  const renderName = (nim: string) => {
    const mhs = DATA_MAHASISWA.filter(
      (msh) => msh.nim.toLowerCase() === nim.toLowerCase()
    )[0];
    return mhs?.nama ?? 'Nama Tidak Diketahui';
  };

  const getListPenilaian = async () => {
    setLoadingGet(true);
    const res = await ApiGetListPenilaianMahasiswa();

    if (res.status === 200) {
      const result = [];
      for (const mahasiswa of res.data.data) {
        const totalMenyenangkan = mahasiswa.dataRating.filter(
          (rat: any) => rat.description === 'Sangat Menyenangkan'
        );
        const totalAsik = mahasiswa.dataRating.filter(
          (rat: any) => rat.description === 'Asik'
        );
        const totalCukup = mahasiswa.dataRating.filter(
          (rat: any) => rat.description === 'Cukup'
        );
        const totalTidakMenyenangkan = mahasiswa.dataRating.filter(
          (rat: any) => rat.description === 'Tidak Menyenangkan'
        );
        result.push({
          id: mahasiswa.dataRating[0]._id,
          name: renderName(mahasiswa.dataRating[0].nim),
          nim: mahasiswa.dataRating[0].nim,
          totalMenyenangkan: totalMenyenangkan.length,
          totalAsik: totalAsik.length,
          totalCukup: totalCukup.length,
          totalTidakMenyenangkan: totalTidakMenyenangkan.length,
        });
      }
      setDataPenilaian(result);
    }

    setLoadingGet(false);
  };

  const search = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    getListPenilaian();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{APP_TITLE}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box py='6' w='full'>
        <InputGroup size='sm' w='full' border='3px solid #1f5f51'>
          <Input
            placeholder='Cari Nama ...'
            value={searchText}
            onChange={search}
          />
          <InputRightElement />
        </InputGroup>
        <div
          className='ag-theme-alpine'
          style={{ height: 1000, width: '100%' }}
        >
          {loadingGet ? (
            <Spinner />
          ) : (
            <AgGridReact
              // reactUi={true}
              // className='ag-theme-alpine'
              // animateRows={true}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowData={dataPenilaian}
              // frameworkComponents={{
              //   btnCellRenderer: BtnCellRenderer,
              // }}
              quickFilterText={searchText}
              pagination={true}
              paginationAutoPageSize={true}
            />
          )}
        </div>
      </Box>
    </Layout>
  );
};

export default RangkumanPenilaianMahasiswa;
