// REDUX APP
// CSS GLOBAL
import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { checkIsGuestIdExist } from 'helper/user';
import { Provider } from 'react-redux';
// import 'focus-visible/dist/focus-visible';
import type { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import type { NextRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/normalize.css';
import '../styles/suitcss-base.css';
import { store } from 'provider/redux/store';
import { getLocal, setLocal } from 'helper/localStorage';
import { PELAPAK_TOKEN_LOCAL_STORAGE } from 'constant';
import { ApiCheckLoginPelapak } from 'api/pelapak';

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

/**
 *
 * Disable border-line by default in Chakra UI
 */
const GlobalStyles = css`
  /*
   This will hide the focus indicator if the element receives focus    via the mouse,
   but it will still show up on keyboard focus.
 */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const getPelapak = async () => {
    const res = await ApiCheckLoginPelapak();
    if (res.status === 200) {
      store.dispatch({ type: 'SET_PELAPAK', pelapak: res.data.data });
      setLocal(PELAPAK_TOKEN_LOCAL_STORAGE, res.data.data.token);
    }
  };

  useEffect(() => {
    if (!store.getState().pelapak.pelapak) {
      getPelapak();
    }
  }, []);

  useEffect(() => {
    checkIsGuestIdExist();
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
