import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return <>
    <NextNprogress
      color="#29D"
      startPosition={0.3}
      stopDelayMs={30}
      height="6"
    />
    <Component {...pageProps} />
    </>
}
