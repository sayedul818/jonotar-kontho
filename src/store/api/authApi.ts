import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  mockLogin, 
  mockRegister, 
  mockLogout, 
  mockGetCurrentUser,
  type AuthResponse,
  type LoginRequest,
  type RegisterRequest,
  type User
} from '@/data/mockData';

// Types are imported from mockData
export type { User, LoginRequest, RegisterRequest, AuthResponse } from '@/data/mockData';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth',  // This won't be used for mock data
  }),
  tagTypes: ['Auth', 'User'],
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      queryFn: async (credentials) => {
        try {
          const data = await mockLogin(credentials);
          return { data };
        } catch (error: any) {
          return { error: { status: 401, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Auth'],
    }),
    
    register: builder.mutation<AuthResponse, RegisterRequest>({
      queryFn: async (userData) => {
        try {
          const data = await mockRegister(userData);
          return { data };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Auth'],
    }),
    
    logout: builder.mutation<void, void>({
      queryFn: async () => {
        try {
          await mockLogout();
          return { data: undefined };
        } catch (error: any) {
          return { error: { status: 500, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['Auth'],
    }),
    
    getCurrentUser: builder.query<User, void>({
      queryFn: async () => {
        try {
          const data = await mockGetCurrentUser();
          return { data };
        } catch (error: any) {
          return { error: { status: 401, data: { message: error.message } } };
        }
      },
      providesTags: ['User'],
    }),
    
    updateProfile: builder.mutation<User, Partial<User>>({
      queryFn: async (userData) => {
        // Mock implementation - in real app this would call API
        try {
          await new Promise(resolve => setTimeout(resolve, 500));
          const currentUser = await mockGetCurrentUser();
          const updatedUser = { ...currentUser, ...userData };
          return { data: updatedUser };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
      invalidatesTags: ['User'],
    }),
    
    changePassword: builder.mutation<void, { 
      currentPassword: string; 
      newPassword: string;
    }>({
      queryFn: async (passwords) => {
        // Mock implementation - in real app this would call API
        try {
          await new Promise(resolve => setTimeout(resolve, 500));
          // Simulate password change
          return { data: undefined };
        } catch (error: any) {
          return { error: { status: 400, data: { message: error.message } } };
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authApi;