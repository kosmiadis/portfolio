import { create } from "zustand";

interface ThemeI {
    theme: 'light' | 'dark';
    toggleTheme: () => void
}

export const useTheme = create<ThemeI>()((set) => ({
    theme: 'light',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
}))