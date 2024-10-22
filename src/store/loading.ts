import { create } from 'zustand';

interface LoadingState {
    loadingOperations: number;
    addLoadingOperation: () => void;
    removeLoadingOperation: () => void;
    isLoading: boolean;
}

export const useLoadingStore = create<LoadingState>((set) => ({
    loadingOperations: 0,
    isLoading: false,
    addLoadingOperation: () => {
        set((state) => {
            const newLoadingOperations = state.loadingOperations + 1;
            return {
                loadingOperations: newLoadingOperations,
                isLoading: newLoadingOperations > 0,
            };
        });
    },
    removeLoadingOperation: () => {
        set((state) => {
            const newLoadingOperations = Math.max(0, state.loadingOperations - 1);
            return {
                loadingOperations: newLoadingOperations,
                isLoading: newLoadingOperations > 0,
            };
        });
    },
}));


