import React from 'react'
import {getSetArt, getSetArtSubpage} from "../../contentful-helper";
import styles from "../../styles/Subpage.module.css";

export async function getStaticPaths() {
    const setArt = await getSetArt();

    // map data to an array of path objects with params (id)
    const paths = setArt.setArtCollection.items.map(art => {
      return {
        // params: { pageName: art.pageName.split(' ').join('-').toLowerCase() }
        params: { pageName: art.pageName }
      }
    })
  
    return {
        paths,
        fallback: false
      }
  }

  export async function getStaticProps(context) {
    const subpage = await getSetArtSubpage(context.params.pageName);

    return {
        props: {
            setArtSubpage: subpage.scenicArtSubpageCollection.items
        }
    };
}

export default function SetArtSubpage({setArtSubpage}) {

    return (
        <div id={styles.subpage}>
            <div>{setArtSubpage.pageTitle}</div>
            <div className={styles["subpage-container"]}>
                {setArtSubpage[0].imagesCollection.items.map((image) => (
                    <img className={styles.image} src={image.url} alt={setArtSubpage.pageTitle}/>
                ))}
            </div>
        </div>
    )
}
