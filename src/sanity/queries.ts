import { defineQuery } from "next-sanity";

export const ARTICLES_QUERY = defineQuery(`*[_type == "article" && defined(slug.current)]{
    _id, title, slug, abstract, coverImage
}`);

export const ARTICLE_QUERY = defineQuery(`*[_type == "article" && slug.current == $slug][0]{
    _id, title, slug, abstract, content, coverImage
}`);
