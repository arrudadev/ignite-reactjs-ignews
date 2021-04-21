import { Session } from 'next-auth'

export interface NextAuthSession extends Session {
  activeSubscription: Object | null;
}