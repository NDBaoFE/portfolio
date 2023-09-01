import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Head from "next/head";
import "@/styles/button.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Toast from "@/components/Toast";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
import StyledComponentsRegistry from "@/lib/registry";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>My App</title>
            </Head>

            <>
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                    <Toast />
                </Layout>
            </>
        </>
    );
}
