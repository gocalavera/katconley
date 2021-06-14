import React from "react";
import styles from "../styles/Contact.module.css"

export default function contact() {
    return (
        <div id={styles["contact"]}>
        <div className={styles.contact}>
            <h1>Contact Kat</h1>
            <a href="mailto: mail@example.com">katconley@mail.com</a>
            <br/>
            <a href="tel:123-456-7890">123-456-7890</a>
        </div>
        </div>
    );
}
