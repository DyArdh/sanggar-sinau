import { create } from 'zustand';

export const useStore = create(set => ({
  isLogin: false,
  setLogin: () => set(state => ({ isLogin: !state.isLogin })),
}))