import {request, gql, GraphQLClient} from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`
    }
});

export const getAbout = async () => {
    const query = gql`
        {
            aboutCollection {
                items {
                    name
                    bio {
                        json
                    }
                    image {
                        url
                    }
                }
            }
        }
    `;

    return graphQLClient.request(query);
};

export const getSetArt = async () => {
    const query = gql`
        {
            setArtCollection {
                items {
                    name
                    pageName
                    date
                    image {
                        url
                    }
                }
            }
        }
    `;

    return graphQLClient.request(query);
};

export const getSetArtSubpage = async (pageName) => {
    const query = gql`
        query getSetArtSubpage($pageName: String!) {
            scenicArtSubpageCollection(where: {pageTitle: $pageName}) {
                items {
                    pageTitle
                    imagesCollection {
                        items {
                            url
                        }
                    }
                }
            }
        }
    `;

    const variables = {
        pageName
    }

    return graphQLClient.request(query, variables);
};


export const getSetDesign = async () => {
    const query = gql`
        {
            setDesignCollection {
                items {
                    name
                    pageName
                    date
                    image {
                        url
                    }
                }
            }
        }
    `;

    return graphQLClient.request(query);
};


export const getSetDesignSubpage = async (pageName) => {
    const query = gql`
        query getSetDesignSubpage($pageName: String!) {
            setDesignSubpageCollection(where: {pageTitle: $pageName}) {
                items {
                    pageTitle
                    imagesCollection {
                        items {
                            url
                        }
                    }
                }
            }
        }
    `;

    const variables = {
        pageName
    }

    return graphQLClient.request(query, variables);
};


