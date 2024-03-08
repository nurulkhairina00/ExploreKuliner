import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import Head from "next/head";
import Layout from "./components/main/layout";
import "../styles/globals.css";
import "../styles/Home.module.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ExploreKuliner</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
