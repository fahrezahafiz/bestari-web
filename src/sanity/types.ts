export interface Article {
    _id: string;
    title: string;
    body: string;
    slug: {
        current: string;
    };
}
