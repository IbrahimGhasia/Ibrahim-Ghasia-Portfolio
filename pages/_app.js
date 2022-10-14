import "../styles/globals.css"
import Head from "next/head"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
    return (
        <div className="dark:bg-gray-800 h-screen">
            <Head>
                <title>Ibrahim Ghasia</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
