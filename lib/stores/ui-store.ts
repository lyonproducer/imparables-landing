import { create } from "zustand";

interface UIState {
  mobileNavOpen: boolean;
  activeSection: string;
  setMobileNavOpen: (open: boolean) => void;
  setActiveSection: (id: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  activeSection: "hero",
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
  setActiveSection: (id) => set({ activeSection: id }),
}));
