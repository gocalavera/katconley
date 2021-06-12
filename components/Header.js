import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.nav}>
            <Link href="/"><div className={styles["nav-item"]}>Kat Conley</div></Link>
            <Link href="/set-art"><div className={styles["nav-item"]}>Scenic Art</div></Link>
            <Link href="/set-design"><div className={styles["nav-item"]}>Set Design</div></Link>
            <Link href="/contact"><div className={styles["nav-item"]}>Contact</div></Link>
            <Link href="/about"><div className={styles["nav-item"]}>About</div></Link>
        </div>
    );
}
