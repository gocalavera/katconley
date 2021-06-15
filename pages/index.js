import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
// import 'bulma/css/bulma.min.css';

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
            </Head>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <div style={{color: "white"}}>
                        <Header />
                    </div>
                    <div className={styles["hero-name"]}>Kat Conley</div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a href="" target="_blank" rel="noopener noreferrer">IMDB </a>
                <a href="" target="_blank" rel="noopener noreferrer">Facebook </a>
                <a href="" target="_blank" rel="noopener noreferrer">Instagram </a>
                <a href="" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="" target="_blank" rel="noopener noreferrer">Twitter </a>
                {/* <a href="https://www.gocalavera.com/" target="_blank" rel="noopener noreferrer">
                    Powered by Calavera
                </a> */}
            </footer>
        </div>
    );
}
