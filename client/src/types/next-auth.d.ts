import { User } from '@/model/user';
import NextAuth, { DefaultSession } from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}
