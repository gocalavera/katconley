import React from "react";
import {getSetArt} from "../../contentful-helper";
import styles from "../../styles/SetArt.module.css";
import Link from "next/link";

export async function getStaticProps() {
    const setArt = await getSetArt();

    return {
        props: {
            setArt: setArt.setArtCollection.items
        }
    };
}

export default function setArt({setArt}) {
    console.log(setArt);
    return (
        <div id={styles["set-art"]}>
            <h1>Scenic Art</h1>
            <div className={styles["set-art-container"]}>
                {setArt.map((art, i) => (
                    <Link href={`set-art/${art.pageName}`} key={i}>
                        <div className={styles["image-container"]}>
                                <img className={styles["image"]} src={art.image.url} />
                                <div className={styles["image-overlay"]}>
                                    <div className={styles["image-text"]}>{art.name}</div>
                                </div>
                            </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
