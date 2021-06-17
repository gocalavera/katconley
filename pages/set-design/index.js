import React from "react";
import {getSetDesign} from "../../contentful-helper";
import styles from "../../styles/SetDesign.module.css";
import Link from "next/link";

export async function getStaticProps() {
    const setDesign = await getSetDesign();

    return {
        props: {
            setDesign: setDesign.setDesignCollection.items
        }
    };
}

export default function setDesign({setDesign}) {
    console.log(setDesign)
    // const page_name = setDesign.pageName.split(" ").join("-")
    // console.log(page_name)
    return (
        <div id={styles["set-design"]}>
            <h1>Set Design</h1>

            <div className={styles["set-design-container"]}>
                {setDesign.map((design, i) => (
                    <div key={i}>
                        {/* <Link href={`set-design/${design.pageName.split(" ").join("-").toLowerCase()}`}> */}
                        <Link href={`set-design/${design.pageName}`}>
                            <div>
                                <img className={styles["image"]} src={design.image.url} />
                                <div>{design.name}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
