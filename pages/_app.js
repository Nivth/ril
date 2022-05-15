import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Head from "next/head";
import { useRouter } from "next/router";

export let symbols;
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname === "/level/hard") {
    symbols = ["+", "-", "/", "*", "/", "*"];
  } else if (router.pathname === "/level/medium") {
    symbols = ["+", "-", "*", "*"];
  } else if (router.pathname === "/level/easy") {
    symbols = ["+", "-"];
  }

  return (
    <Provider store={store}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
