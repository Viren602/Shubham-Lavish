import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { getAuthProps } from "../utils/AuthenticationLibrary";
import 'react-multi-carousel/lib/styles.css';
import Layout from "./shared/Layout";
import "../styles/style.scss";
import "../styles/responsive.scss"
import "../styles/index.css"
import "../styles/App.css"
import PreLoader from "../components/preLoader/PreLoader";
import { AnimatePresence, motion } from 'framer-motion'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const authString = getAuthProps();
    let authProps = {};
    if (authString != undefined) {
      authProps = {
        authUser: authString,
      };
    }
    return {
      pageProps: {
        ...authProps,
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  state = {
    history: [],
    loading: true,
  };

  componentDidMount() {
    const { asPath } = this.props.router;
    this.setState((prevState) => ({ history: [...prevState.history, asPath] }));

    const hasLoaded = localStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false });
        localStorage.setItem("hasLoaded", "true");
      }, 4000);
    } else {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate() {
    const { history } = this.state;
    const { asPath } = this.props.router;
    if (history[history.length - 1] !== asPath) {
      this.setState((prevState) => ({
        history: [...prevState.history, asPath],
      }));
    }
  }

  render() {
    const authString = getAuthProps();
    let authProps = {};
    if (authString != undefined) {
      authProps = authString;
    }

    const { Component, pageProps, store, router } = this.props;
    let finalpageProps = {
      ...authProps,
      ...pageProps,
    };
    const { loading } = this.state;

    return loading ? (
      <div className="page-wrapper">
        <PreLoader />
      </div>
    ) : (
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >

          <Provider store={store}>
            <Layout>
              <PersistGate persistor={store.__PERSISTOR} loading={null}>
                <Component history={this.state.history} {...finalpageProps} />
              </PersistGate>
            </Layout>
          </Provider>
        </motion.div>
      </AnimatePresence>

    );
  }
}

export default withRedux(initStore)(MyApp);