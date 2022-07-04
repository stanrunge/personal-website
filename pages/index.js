import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import ButtonAppBar from "../components/ButtonAppBar";
import ActionAreaCard from "../components/ActionAreaCard";

export default function Home() {
    return (
        <div>
            <ButtonAppBar/>
            <div className={styles.container}>
                <Head>
                    <title>Stan&#39;s website</title>
                    <meta name="description" content="Home page for Stan's personal website"/>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                    <link rel="icon" href="/favicon.ico"/>

                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />

                    <Script
                        async
                        src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9928063674893352"}
                        crossOrigin={"anonymous"}
                    />
                </Head>

                <h1>Stan Runge</h1>

                <h2>Projects</h2>
                <ActionAreaCard title={"CES Gaming"} description={"Organization for hosting videogame tournaments."}/>
                <ActionAreaCard title={"OpenBionicReading"} description={"Chrome plugin for easier text reading."}/>
            </div>
        </div>
    )
}
