/* eslint-disable @next/next/no-img-element */
import { getArticleBySlug } from '@/sanity/queries'
import { Article } from '@/sanity/types'
import { PortableText } from 'next-sanity';
import React from 'react'

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
    console.log('slug', params.slug);
    const article: Article = await getArticleBySlug(params.slug);
    console.log('article', article);

    return (article &&
        <div>
            <img
                src={article.coverImage.url}
                alt={article.coverImage.alt ?? `${article.slug.current} cover image`}
            />
            <h1>{article.title}</h1>
            <PortableText value={article.content}/>
        </div>
    )
}

export default ArticlePage
