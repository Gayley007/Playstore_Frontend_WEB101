import { create } from 'zustand';
export const useUserStore = create(set => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
import { useUserStore } from '../store/useUserStore';
const user = useUserStore(state => state.user);