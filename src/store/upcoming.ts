import { create } from "zustand";

const useUpcoming = create<IStoreState>((set) =>( {
    upcoming: [],
    getUpcoming: (data) => {
        set({upcoming:data})
    }
}));

export default useUpcoming