import Layout from '../components/layout'
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <Layout>
            <div>
                <Link href="/">
                    <a>
                        <Image
                            priority
                            src="/images/pfp.png"
                            className={utilStyles.borderCircle}
                            height={108}
                            width={108}
                            alt={name}
                        />
                    </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>

                <h1>About Me</h1>
                <p>My name is Stan Runge.</p>
            </div>
        </Layout>
    )
}