import Layout from '../components/Layout';
import '../styles/global.css';
import { Inter, Roboto } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100","500","700"],
})


function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
}

export default MyApp;
