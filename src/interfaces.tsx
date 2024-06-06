interface IRouter {
    path: string,
    element: JSX.Element,
    name?: string | JSX.Element
}

interface IUpcoming {
    backdrop_path: string,
    id: number,
    overview: string,
    poster_path: string,
    title: string,
    name: string
}

interface IUpcomingStore {
    upcoming: IUpcoming[],
    getUpcoming: (data: IUpcoming[]) => void
}

interface IMovieTv extends IUpcoming { }

interface IMovieTvStore {
    movie: IMovieTv[],
    tv: IMovieTv[],
    getMovieTv: (data: IMovieTv[], type: string) => void
}

interface IMovieTvByIdStore {
    movie: IMovieById[],
    tv: IMovieTv[],
    getMovie: (data: IMovieById[], type: string | undefined) => void
}

interface IGenres {
    id: number,
    name: string
}

interface IMovieById extends IUpcoming {
    genres: IGenres[],
    original_title: string,
    status: string,
    budget: number,
    release_date: string,
    runtime: number,
    revenue: number,
    backdrop_path:string
}

interface IActor {
    profile_path: string,
    name: string,
}