import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
