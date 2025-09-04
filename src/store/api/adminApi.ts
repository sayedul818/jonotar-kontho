import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  mockDashboardStats, 
  mockAnalyticsData, 
  mockUsers, 
  mockCategories, 
  mockNewsArticles,
  type User,
  type Category,
  type NewsArticle
} from '@/data/mockData';

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
}

export interface UpdateNewsRequest extends Partial<CreateNewsRequest> {
  id: string;
}

export interface DashboardStats {
  totalNews: number;
  publishedNews: number;
  draftNews: number;
  totalViews: number;
  totalUsers: number;
  activeUsers: number;
  totalCategories: number;
  breakingNews: number;
}

export interface AnalyticsData {
  dailyViews: Array<{ date: string; views: number }>;
  topCategories: Array<{ category: string; views: number }>;
  recentActivity: Array<{ action: string; time: string }>;
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
      queryFn: async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          return { data: mockDashboardStats };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['Dashboard'],
    }),

    getAnalytics: builder.query<AnalyticsData, void>({
      queryFn: async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          return { data: mockAnalyticsData };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['Analytics'],
    }),

    // News Management
    getAllNews: builder.query<{ articles: NewsArticle[]; total: number }, { 
      page?: number; 
      limit?: number; 
      status?: string;
    }>({
      queryFn: async ({ page = 1, limit = 10, status }) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          let filteredNews = mockNewsArticles;
          if (status) {
            filteredNews = mockNewsArticles.filter(article => article.status === status);
          }
          const startIndex = (page - 1) * limit;
          const endIndex = startIndex + limit;
          
          return {
            data: {
              articles: filteredNews.slice(startIndex, endIndex),
              total: filteredNews.length
            }
          };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['AdminNews'],
    }),

    createNews: builder.mutation<NewsArticle, CreateNewsRequest>({
      queryFn: async (newsData) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 500));
          const newArticle: NewsArticle = {
            id: `${mockNewsArticles.length + 1}`,
            ...newsData,
            imageUrl: newsData.imageUrl || '/src/assets/culture-news.jpg',
            author: 'Current User',
            publishedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            views: 0,
            status: 'published'
          };
          mockNewsArticles.unshift(newArticle);
          return { data: newArticle };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['AdminNews'],
    }),

    updateNews: builder.mutation<NewsArticle, UpdateNewsRequest>({
      queryFn: async ({ id, ...updateData }) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 500));
          const articleIndex = mockNewsArticles.findIndex(article => article.id === id);
          if (articleIndex === -1) {
            return { error: { status: 404, data: { message: 'Article not found' } } };
          }
          
          const updatedArticle = {
            ...mockNewsArticles[articleIndex],
            ...updateData,
            updatedAt: new Date().toISOString()
          };
          mockNewsArticles[articleIndex] = updatedArticle;
          return { data: updatedArticle };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['AdminNews'],
    }),

    deleteNews: builder.mutation<void, string>({
      queryFn: async (id) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const articleIndex = mockNewsArticles.findIndex(article => article.id === id);
          if (articleIndex === -1) {
            return { error: { status: 404, data: { message: 'Article not found' } } };
          }
          mockNewsArticles.splice(articleIndex, 1);
          return { data: undefined };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['AdminNews'],
    }),

    bulkUpdateNews: builder.mutation<void, { 
      ids: string[]; 
      updates: Partial<NewsArticle> 
    }>({
      queryFn: async ({ ids, updates }) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 500));
          ids.forEach(id => {
            const articleIndex = mockNewsArticles.findIndex(article => article.id === id);
            if (articleIndex !== -1) {
              mockNewsArticles[articleIndex] = {
                ...mockNewsArticles[articleIndex],
                ...updates,
                updatedAt: new Date().toISOString()
              };
            }
          });
          return { data: undefined };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['AdminNews'],
    }),

    // Category Management
    getCategories: builder.query<Category[], void>({
      queryFn: async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 200));
          return { data: mockCategories };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['Categories'],
    }),

    createCategory: builder.mutation<Category, Omit<Category, 'id' | 'createdAt'>>({
      queryFn: async (categoryData) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const newCategory: Category = {
            id: `${mockCategories.length + 1}`,
            ...categoryData,
            createdAt: new Date().toISOString()
          };
          mockCategories.push(newCategory);
          return { data: newCategory };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Categories'],
    }),

    updateCategory: builder.mutation<Category, Partial<Category> & { id: string }>({
      queryFn: async ({ id, ...updateData }) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const categoryIndex = mockCategories.findIndex(category => category.id === id);
          if (categoryIndex === -1) {
            return { error: { status: 404, data: { message: 'Category not found' } } };
          }
          
          const updatedCategory = { ...mockCategories[categoryIndex], ...updateData };
          mockCategories[categoryIndex] = updatedCategory;
          return { data: updatedCategory };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Categories'],
    }),

    deleteCategory: builder.mutation<void, string>({
      queryFn: async (id) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const categoryIndex = mockCategories.findIndex(category => category.id === id);
          if (categoryIndex === -1) {
            return { error: { status: 404, data: { message: 'Category not found' } } };
          }
          mockCategories.splice(categoryIndex, 1);
          return { data: undefined };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Categories'],
    }),

    // User Management
    getAllUsers: builder.query<User[], void>({
      queryFn: async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          return { data: mockUsers };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      providesTags: ['Users'],
    }),

    updateUserRole: builder.mutation<User, { id: string; role: User['role'] }>({
      queryFn: async ({ id, role }) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const userIndex = mockUsers.findIndex(user => user.id === id);
          if (userIndex === -1) {
            return { error: { status: 404, data: { message: 'User not found' } } };
          }
          
          mockUsers[userIndex] = { ...mockUsers[userIndex], role };
          return { data: mockUsers[userIndex] };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Users'],
    }),

    deleteUser: builder.mutation<void, string>({
      queryFn: async (id) => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const userIndex = mockUsers.findIndex(user => user.id === id);
          if (userIndex === -1) {
            return { error: { status: 404, data: { message: 'User not found' } } };
          }
          mockUsers.splice(userIndex, 1);
          return { data: undefined };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
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