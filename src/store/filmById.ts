import { create } from "zustand";

const useFilmById = create<IMovieTvByIdStore>((set) =>( {
    movie: [],
    tv: [],
    getMovie: (data:IMovieById[], type) => {
        if(type === 'movie'){
            set({movie:data})
        } else {
            set({tv:data})
        }
    }
}));

export default useFilmById