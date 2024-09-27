import { PortableTextBlock } from "next-sanity";

export type ArticlePreview = {
    _id: string;
    _createdAt: Date;
    title: string;
    abstract: string;
    slug: {
        current: string;
    };
    coverImage: {
        alt: string,
        url: string
    }
}

export type Article = {
    _id: string;
    _createdAt: Date;
    title: string;
    abstract: string;
    slug: {
        current: string;
    };
    content: PortableTextBlock[]
    coverImage: {
        alt: string,
        url: string
    }
}
