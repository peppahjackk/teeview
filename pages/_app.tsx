import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultQueryFn } from "utils/default-query-fn";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { queryFn: defaultQueryFn } },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />;
        </QueryClientProvider>
    );
}

export default MyApp;
