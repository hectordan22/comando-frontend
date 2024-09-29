 import { create }from "zustand" 

export const useInitialStore = create((set) => ({
    dataInicial: null,
    isLoading: false,
    error: false,
    fetchDataInicial: async () => {
      set({ isLoading: true });
      try {
        const response = await fetch('http://localhost:3000/api/initialData');
        const data = await response.json();
        set({ dataInicial: data.response, isLoading: false, error:false});
      } catch (error) {
        set({ error: true, isLoading: false });
      }
    },
  }));
