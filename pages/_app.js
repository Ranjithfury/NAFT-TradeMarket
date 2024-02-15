import Layout from '../components/Layout';
import '../styles/global.css';
import { Inter, Roboto } from 'next/font/google'
import Head from 'next/head';

 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100","500","700","900"],
})


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <title>NAFT-TradeMarket</title>
  </Head>
    <main className={inter.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </>
  );
}

export default MyApp;
