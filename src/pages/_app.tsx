import { AppProps } from 'next/app';


export default ({ Component, pageProps }: AppProps): JSX.Element => (
    <>
        <div id="modal">こんにちは</div>
        <Component {...pageProps} />
    </>
);
