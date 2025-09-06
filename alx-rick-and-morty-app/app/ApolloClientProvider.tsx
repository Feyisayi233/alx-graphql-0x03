"use client";
import ApolloProvider from "../graphql/ApolloProvider";

export default function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider>{children}</ApolloProvider>;
}
