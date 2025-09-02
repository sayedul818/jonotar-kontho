import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  publishedAt: string;
  imageUrl?: string;
  tags: string[];
  status: 'published' | 'draft' | 'archived';
  featured: boolean;
  breaking: boolean;
  emergency: boolean;
  views: number;
}

export interface NewsResponse {
  articles: NewsArticle[];
  total: number;
  page: number;
  limit: number;
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/news',
  }),
  tagTypes: ['News', 'BreakingNews', 'Headlines'],
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, { 
      page?: number; 
      limit?: number; 
      category?: string; 
      search?: string;
    }>({
      query: ({ page = 1, limit = 10, category, search }) => ({
        url: '',
        params: { page, limit, category, search },
      }),
      providesTags: ['News'],
    }),
    
    getNewsById: builder.query<NewsArticle, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'News', id }],
    }),
    
    getBreakingNews: builder.query<NewsArticle[], void>({
      query: () => '/breaking',
      providesTags: ['BreakingNews'],
    }),
    
    getTodaysHeadlines: builder.query<NewsArticle[], void>({
      query: () => '/headlines',
      providesTags: ['Headlines'],
    }),
    
    getFeaturedNews: builder.query<NewsArticle[], void>({
      query: () => '/featured',
      providesTags: ['News'],
    }),
    
    getNewsByCategory: builder.query<NewsResponse, { 
      category: string; 
      page?: number; 
      limit?: number;
    }>({
      query: ({ category, page = 1, limit = 10 }) => ({
        url: `/category/${category}`,
        params: { page, limit },
      }),
      providesTags: ['News'],
    }),
    
    searchNews: builder.query<NewsResponse, { 
      query: string; 
      page?: number; 
      limit?: number;
    }>({
      query: ({ query, page = 1, limit = 10 }) => ({
        url: '/search',
        params: { q: query, page, limit },
      }),
      providesTags: ['News'],
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useGetBreakingNewsQuery,
  useGetTodaysHeadlinesQuery,
  useGetFeaturedNewsQuery,
  useGetNewsByCategoryQuery,
  useSearchNewsQuery,
} = newsApi;