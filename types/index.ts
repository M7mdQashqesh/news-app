export namespace News {
  export interface IResponseNewsItems {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: string;
      name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }

  export interface IResponse {
    status: string;
    totalResults: number;
    articles: IResponseNewsItems[];
  }

  export interface Item {
    id: string;
    title: string;
    imageUrl: string | null;
    content: string;
  }

  export interface ICategory {
    title: string;
    image: string;
    content: string;
  }

  export interface DBItem {
    id: number,
    title: string,
    content: string,
    image: string,
    author: string,
    author_email: string;
    created_date: number;
    slug: string;
    category:string;
  }
}
