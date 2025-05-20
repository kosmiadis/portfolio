import { create } from "zustand";

export type activeItems = 'hero' | 'projects' | 'about-me' | 'skills' | 'contact';

interface MenuI {
    isMobileMenuOpen: boolean;
    activeItem: activeItems;
    menuActiveItem: activeItems;
    toggleMenu: () => void;
    setActiveItem: (item:activeItems) => void;
    setMenuActiveItem: (item:activeItems) => void;
}

export const useMenu = create<MenuI>()((set) => ({
    isMobileMenuOpen: false,
    activeItem: 'hero',
    menuActiveItem: 'hero',
    toggleMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    setActiveItem: (item: activeItems) => set(() => ({ activeItem: item, menuActiveItem: item })),
    setMenuActiveItem: (item:activeItems) => set(() => ( { menuActiveItem: item }))
}))