import Link from 'next/link'
import Image from 'next/Image'
import Head from 'next/Head'

export default function CurrentEvents() {
    return (
        <>
            <Head>
                <title>Current Events</title>
            </Head>
            <h1>Current Events</h1>
            <h2>
                <Link href={"/"}>
                    <a>Back to home</a>
                </Link>
            </h2>
            <MyComponent/>
        </>
    )
}

const MyComponent = () => (
    <Image
        src={"/images/pfp.png"}
        height={200}
        width={200}
        alt={"Stan the man"}
    />
)