import { defineQuery } from "next-sanity";

export const ARTICLES_QUERY = defineQuery(`*[_type == "article" && defined(slug.current)][0...5]{
    _id, title, slug
}`);

export const ARTICLE_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    title, content
}`);
