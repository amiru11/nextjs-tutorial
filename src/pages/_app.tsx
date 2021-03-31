import '../styles/global.css';

export default function App({ Component, pageProps }) {
  console.log('pageProps', Component, pageProps);
  return <Component {...pageProps} />;
}
