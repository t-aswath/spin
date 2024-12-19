import { create } from 'zustand';

interface ComponentType {
    component: string;
    setComponent: (to: string) => void;
};

const useComponent = create<ComponentType>((set) => {
    return {
        component: 'CHAT BOT',
        setComponent: (to: string) => set((_) => ({ component: to }))
    }
});

export default useComponent;