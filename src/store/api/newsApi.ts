import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  getMockNewsByCategory, 
  getMockAllNews, 
  getMockFeaturedNews,
  getMockBreakingNews,
  searchMockNews,
  type NewsArticle
} from '@/data/mockData';

// NewsArticle type is imported from mockData
export type { NewsArticle } from '@/data/mockData';

export interface NewsResponse {
  articles: NewsArticle[];
  total: number;
  page: number;
  limit: number;
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/news',  // This won't be used for mock data
  }),
  tagTypes: ['News', 'BreakingNews', 'Headlines'],
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, { 
      page?: number; 
      limit?: number; 
      category?: string; 
      search?: string;
    }>({
      queryFn: async ({ page = 1, limit = 10, category, search }) => {
        try {
          let data;
          if (search) {
            data = searchMockNews(search, page, limit);
          } else if (category) {
            data = getMockNewsByCategory(category, page, limit);
          } else {
            data = getMockAllNews(page, limit);
          }
          return { data };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['News'],
    }),
    
    getNewsById: builder.query<NewsArticle, string>({
      queryFn: async (id) => {
        try {
          const allNews = getMockAllNews(1, 1000);
          const article = allNews.articles.find(a => a.id === id);
          if (!article) {
            return { error: { status: 404, data: { message: 'Article not found' } } };
          }
          return { data: article };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: (result, error, id) => [{ type: 'News', id }],
    }),
    
    getBreakingNews: builder.query<NewsArticle[], void>({
      queryFn: async () => {
        try {
          const data = getMockBreakingNews();
          return { data };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['BreakingNews'],
    }),
    
    getTodaysHeadlines: builder.query<NewsArticle[], void>({
      queryFn: async () => {
        try {
          const data = getMockFeaturedNews();
          return { data };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['Headlines'],
    }),
    
    getFeaturedNews: builder.query<NewsArticle[], void>({
      queryFn: async () => {
        try {
          const data = getMockFeaturedNews();
          return { data };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['News'],
    }),
    
    getNewsByCategory: builder.query<NewsResponse, { 
      category: string; 
      page?: number; 
      limit?: number;
    }>({
      queryFn: async ({ category, page = 1, limit = 10 }) => {
        try {
          const data = getMockNewsByCategory(category, page, limit);
          return { data };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['News'],
    }),
    
    searchNews: builder.query<NewsResponse, { 
      query: string; 
      page?: number; 
      limit?: number;
    }>({
      queryFn: async ({ query, page = 1, limit = 10 }) => {
        try {
          const data = searchMockNews(query, page, limit);
          return { data };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
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