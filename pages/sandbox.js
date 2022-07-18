"use strict";

import Head from "next/head";
import Script from "next/script";

export default function Sandbox() {
    return (
        <div>
            <Head>
                <title>Sandbox</title>
            </Head>

            <h1>Sandbox</h1>
            <p> This is a sandbox page </p>

            <Script src={"./alert.js"} />
        </div>
    )
}