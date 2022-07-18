import Head from "next/head";
import Button from "@mui/material/Button"
import { AppBar } from "@mui/material";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Stan's website</title>
            </Head>

            <AppBar>

            </AppBar>

            <Button
            variant={"contained"}
            >
                Hello world
            </Button>
        </div>
    )
}
