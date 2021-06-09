import React from "react";
import {getSetDesign} from "../contentful-helper";
import styles from "../styles/SetDesign.module.css";

export async function getStaticProps() {
    const setDesign = await getSetDesign();

    return {
        props: {
            setDesign: setDesign.setDesignCollection.items
        }
    };
}

export default function setDesign({setDesign}) {
    return (
        <div id={styles["set-design"]}>
            <h1>Set Design</h1>

            <div className={styles["set-design-container"]}>
                {setDesign.map((design, i) => (
                    <div key={i}>
                        <img className={styles["image"]} src={design.image.url} />
                    </div>
                ))}
            </div>
        </div>
    );
}
