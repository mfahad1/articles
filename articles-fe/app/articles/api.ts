import httpRequest from '../services/config/HttpRequest';

type Article = {
  id: string;
  name: string;
  description: string;
}

export async function getAll(): Promise<Article[]> {
  return httpRequest.request({
    url: '/articles',
    method: 'get',
  });
}

export async function get(id: string): Promise<Article> {
  return httpRequest.request({
    url: `/articles/${id}`,
    method: 'get',
  });
}

export async function getArticles(): Promise<{ articles: Article[] }> {
  return httpRequest.request({
    url: "/articles/user/visited",
    method: 'get',
  });
}