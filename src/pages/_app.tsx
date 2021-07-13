import { ThemeProvider } from '@material-ui/core';
import '../../public/assets/css/global.css';
import { Theme } from '../shared/theme';

export default function WeddingPage({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}