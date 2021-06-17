import React from 'react'
import {getSetDesign, getSetDesignSubpage} from "../../contentful-helper";
import styles from "../../styles/Subpage.module.css";

export async function getStaticPaths() {
    const setDesign = await getSetDesign();

    // map data to an array of path objects with params (id)
    const paths = setDesign.setDesignCollection.items.map(design => {
      return {
        // params: { pageName: design.pageName.split(' ').join('-').toLowerCase() }
        params: { pageName: design.pageName }
      }
    })
  
    return {
        paths,
        fallback: false
      }
  }

  export async function getStaticProps(context) {
    const subpage = await getSetDesignSubpage(context.params.pageName);

    return {
        props: {
            setDesignSubpage: subpage.setDesignSubpageCollection.items
        }
    };
}

export default function SetDesignSubpage({setDesignSubpage}) {

    return (
        <div id={styles.subpage}>
            <div>{setDesignSubpage.pageTitle}</div>
            <div className={styles["subpage-container"]}>
                {setDesignSubpage[0].imagesCollection.items.map((image) => (
                    <img className={styles.image} src={image.url} alt={setDesignSubpage.pageTitle}/>
                ))}
            </div>
        </div>
    )
}
