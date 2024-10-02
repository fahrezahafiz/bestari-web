import { defineQuery } from "next-sanity";
import { client } from "./client";
import { Activity, Article, ArticlePreview } from "./types";

export async function getArticles(): Promise<ArticlePreview[]> {
    const ARTICLES_QUERY = defineQuery(`*[_type == "article" && defined(slug.current)][0...5]{
        _id, _createdAt, title, slug, abstract, coverImage {alt, "url": asset->url}
    }`);
    return await client.fetch(ARTICLES_QUERY) as ArticlePreview[];
}

export async function getArticleBySlug(slug: string): Promise<Article> {
    const ARTICLE_QUERY = defineQuery(`*[_type == "article" && slug.current == $slug][0]{
        _id, _createdAt, title, slug, abstract, content, coverImage {alt, "url": asset->url}
    }`);
    return await client.fetch(ARTICLE_QUERY, { slug }) as Article;
}

export async function getActivities(): Promise<Activity[]> {
    const ACTIVITES_QUERY = defineQuery(`*[_type == "activity"]{
        name, slug, icon {name, provider, svg}, description, image  {alt, "url": asset->url}
      }`);
      return await client.fetch(ACTIVITES_QUERY) as Activity[];
}
