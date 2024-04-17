interface IRouter {
    path: string,
    element: JSX.Element,
    name: string | JSX.Element
}

interface IUpcoming{
    backdrop_path: string,
    id: number,
    overview: string,
    poster_path: string,
    title: string
}

interface IStoreState {
    upcoming: IUpcoming[],
    getUpcoming: (data:IUpcoming[]) => void
}
