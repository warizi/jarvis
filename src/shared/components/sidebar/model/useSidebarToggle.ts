import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSidebarToggleStore = create(
  persist<{ isOpen: boolean; toggleSidebar: () => void }>(
    (set) => ({
      isOpen: true,
      toggleSidebar: () =>
        set((state) => ({ isOpen: !state.isOpen })),
    }),
    { name: "sidebar-toggle-storage" }
  )
);

export default useSidebarToggleStore;
