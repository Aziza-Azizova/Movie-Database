import { create } from "zustand";

const useUpcoming = create<IUpcomingStore>((set) =>( {
    upcoming: [],
    getUpcoming: (data:IUpcoming[]) => {
        set({upcoming:data})
    }
}));

export default useUpcoming