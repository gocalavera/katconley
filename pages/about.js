import React from "react";
import {getAbout} from "../contentful-helper";
import styles from "../styles/About.module.css";

export async function getStaticProps() {
    const about = await getAbout();

    return {
        props: {
            about: about.aboutCollection.items
        }
    };
}

export default function about({about}) {
    console.log(about);
    return (
        <div>
            <div id={styles.about}>
                {about.map((item, i) => (
                    <div key={i}>
                        <h1>About {item.name}</h1>
                        <img src={item.image.url} alt={item.name}/>
                        <div>{item.bio.json.content.map((bio) => bio.content[0].value)}</div>
                        {/* {listing.description.json.content.map((desc) => desc.content[0].value)} */}
                    </div>
                ))}
            </div>
        </div>
    );
}
