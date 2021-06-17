import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import 'bulma/css/bulma.min.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Kat Conley</title>
                <link rel="icon" href="/theatre.ico" />
                <meta name="og:description" content="Set Art & Design" />
                <meta property="og:image" content="/theatre.jpeg" />
                <meta name="twitter:card" content="/theatre.jpeg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
            </Head>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <div style={{color: "white"}}>
                    </div>
                    <div className={`${styles["hero-name"]}`}>Kat Conley</div>
                </div>
            </main>
        </div>
    );
}
