import React from "react";
import {getSetArt} from "../contentful-helper";
import styles from "../styles/SetArt.module.css";

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
            <h1>Set Art</h1>
            <div className={styles["set-art-container"]}>
                {setArt.map((art, i) => (
                    <div key={i}>
                        <img className={styles["image"]} src={art.image.url} />
                    </div>
                ))}
            </div>
        </div>
    );
}
