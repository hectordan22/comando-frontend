 import { create }from "zustand" 

export const useInitialStore = create((set,get) => ({
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

    // Nuevo método: Actualizar dataInicial (merge con datos existentes)
  updateDataInicial: (newData) => {
    const currentData = get().dataInicial; // Obtenemos el estado actual
    
    set({ 
      dataInicial: {
        ...currentData,    // Mantenemos los datos existentes
        ...newData         // Sobrescribimos/agregamos nuevos datos
      } 
    });
    }
  }));
