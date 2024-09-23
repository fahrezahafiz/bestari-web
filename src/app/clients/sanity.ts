import SanityClient from "next-sanity-client";

export const client = new SanityClient({
    projectId: process.env.SANITY_PROJECT_ID ?? '',
    dataset: process.env.SANITY_DATASET ?? '',
    useCdn: process.env.NODE_ENV === 'production',
});
