import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RegistServiceWorker } from 'utils/serviceWorker/serviceWorker';

function MyApp({ Component, pageProps }: AppProps) {
  RegistServiceWorker();
  return <Component {...pageProps} />;
}

export default MyApp;
