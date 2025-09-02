import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NewsArticle } from './newsApi';
import type { User } from './authApi';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  articleCount: number;
  createdAt: string;
}

export interface CreateNewsRequest {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  featured: boolean;
  breaking: boolean;
  emergency: boolean;
  status: 'published' | 'draft';
}

export interface UpdateNewsRequest extends Partial<CreateNewsRequest> {
  id: string;
}

export interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalViews: number;
  todayViews: number;
  totalUsers: number;
  activeUsers: number;
  categories: number;
}

export interface AnalyticsData {
  views: Array<{ date: string; count: number }>;
  topArticles: Array<{ id: string; title: string; views: number }>;
  categoryDistribution: Array<{ category: string; count: number }>;
}

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/admin',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['AdminNews', 'Categories', 'Users', 'Dashboard', 'Analytics'],
  endpoints: (builder) => ({
    // Dashboard
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => '/dashboard/stats',
      providesTags: ['Dashboard'],
    }),
    
    getAnalytics: builder.query<AnalyticsData, { 
      period: 'week' | 'month' | 'year';
    }>({
      query: ({ period }) => `/dashboard/analytics?period=${period}`,
      providesTags: ['Analytics'],
    }),
    
    // News Management
    getAllNews: builder.query<{
      articles: NewsArticle[];
      total: number;
      page: number;
    }, {
      page?: number;
      limit?: number;
      status?: string;
      category?: string;
    }>({
      query: ({ page = 1, limit = 10, status, category }) => ({
        url: '/news',
        params: { page, limit, status, category },
      }),
      providesTags: ['AdminNews'],
    }),
    
    createNews: builder.mutation<NewsArticle, CreateNewsRequest>({
      query: (newsData) => ({
        url: '/news',
        method: 'POST',
        body: newsData,
      }),
      invalidatesTags: ['AdminNews', 'Dashboard'],
    }),
    
    updateNews: builder.mutation<NewsArticle, UpdateNewsRequest>({
      query: ({ id, ...newsData }) => ({
        url: `/news/${id}`,
        method: 'PUT',
        body: newsData,
      }),
      invalidatesTags: ['AdminNews', 'Dashboard'],
    }),
    
    deleteNews: builder.mutation<void, string>({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminNews', 'Dashboard'],
    }),
    
    bulkUpdateNews: builder.mutation<void, {
      ids: string[];
      action: 'publish' | 'draft' | 'delete';
    }>({
      query: ({ ids, action }) => ({
        url: '/news/bulk',
        method: 'POST',
        body: { ids, action },
      }),
      invalidatesTags: ['AdminNews', 'Dashboard'],
    }),
    
    // Categories
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),
    
    createCategory: builder.mutation<Category, {
      name: string;
      description?: string;
    }>({
      query: (categoryData) => ({
        url: '/categories',
        method: 'POST',
        body: categoryData,
      }),
      invalidatesTags: ['Categories'],
    }),
    
    updateCategory: builder.mutation<Category, {
      id: string;
      name: string;
      description?: string;
    }>({
      query: ({ id, ...categoryData }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: categoryData,
      }),
      invalidatesTags: ['Categories'],
    }),
    
    deleteCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),
    
    // User Management
    getAllUsers: builder.query<{
      users: User[];
      total: number;
      page: number;
    }, {
      page?: number;
      limit?: number;
      role?: string;
    }>({
      query: ({ page = 1, limit = 10, role }) => ({
        url: '/users',
        params: { page, limit, role },
      }),
      providesTags: ['Users'],
    }),
    
    updateUserRole: builder.mutation<User, {
      id: string;
      role: 'admin' | 'editor' | 'user';
    }>({
      query: ({ id, role }) => ({
        url: `/users/${id}/role`,
        method: 'PUT',
        body: { role },
      }),
      invalidatesTags: ['Users'],
    }),
    
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetAnalyticsQuery,
  useGetAllNewsQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
  useBulkUpdateNewsMutation,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = adminApi;