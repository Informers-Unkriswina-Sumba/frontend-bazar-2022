// REDUX APP
// CSS GLOBAL
import { css, Global } from '@emotion/react';
// import 'focus-visible/dist/focus-visible';
import type { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import type { NextRouter } from 'next/router';
import '../styles/normalize.css';
import '../styles/suitcss-base.css';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

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
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
