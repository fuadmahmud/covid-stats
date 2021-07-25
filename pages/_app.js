import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import PageBase from './pagebase';

function MyApp({ Component, pageProps }) {
  return (
    <PageBase {...pageProps}>
      <Component {...pageProps} />
    </PageBase>
  );
}

export default MyApp
