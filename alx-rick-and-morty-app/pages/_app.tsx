
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ApolloProvider from "@/graphql/ApolloProvider";
import ErrorBoundary from "@/components/ErrorBoundary";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ApolloProvider>
  );
}
