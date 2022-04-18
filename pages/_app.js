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
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
          media="screen"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
