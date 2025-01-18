import { create } from 'zustand';

interface AuthStore {
    user: { role: string, id: number } | null;
    setUser: (to: { role: string, id: number }) => void;
};

const useAuthStore = create<AuthStore>((set) => {
    return {
        user: { role: '', id: 0 },
        setUser: (to: any) => set((_) => ({ user: to }))
    }
});

export default useAuthStore;
