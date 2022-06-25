import {
  Button,
  createStandaloneToast,
  Select,
  Spinner,
  Th,
  Tr,
} from '@chakra-ui/react';
import { ApiUpdateStatusInvoice } from 'api/invoice';
import { IPelapakState } from 'provider/redux/Pelapak/PelapakReducer';
import { ICombinedState } from 'provider/redux/store';
import { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';

interface IProps {
  invoiceNumber: number;
  status: string;
  index: number;
  id: string;
  printInvoice: (id: string) => void;
}
interface IReduxStateWorkspace {
  pelapak: IPelapakState;
}

const InvoiceItem: React.FC<IProps> = (props): ReactElement => {
  const [status, setStatus] = useState(props.status);
  const toast = createStandaloneToast();
  const [loadingChangeStatus, setLoadingChangeStatus] = useState(false);
  const { pelapak } = useSelector<ICombinedState, IReduxStateWorkspace>(
    (state) => {
      return {
        pelapak: state.pelapak,
      };
    }
  );

  const changeStatus = async (e: any) => {
    if (e.target.value) {
      setLoadingChangeStatus(true);
      const res = await ApiUpdateStatusInvoice({
        inovoiceId: props.id,
        status: e.target.value,
      });
      if (res.status === 200) {
        setStatus(e.target.value);
        toast.toast({
          status: 'success',
          title: 'Berhasil',
          duration: 5000,
          description: 'Berhasil update status',
        });
      }
      setLoadingChangeStatus(false);
    }
  };
  return (
    <Tr key={props.index}>
      <Th>{props.index + 1}</Th>
      <Th>{props.invoiceNumber}</Th>
      <Th>
        {loadingChangeStatus ? (
          <Spinner />
        ) : (
          <Select value={status} onChange={changeStatus}>
            <option value='Lunas'>Lunas</option>
            <option value='Belum Lunas'>Belum Lunas</option>
          </Select>
        )}
      </Th>
      <Th>
        <Button
          colorScheme='green'
          onClick={() => props.printInvoice(props.id)}
        >
          Cetak
        </Button>
      </Th>
    </Tr>
  );
};
export default InvoiceItem;
