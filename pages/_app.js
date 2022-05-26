import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showLayout = router.pathname.includes('admin') ? false : true;

  return (
    <>
      {showLayout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
