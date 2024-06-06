import { Link, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

function Recomendations() {
    let { id, type } = useParams();
    const { getData, data } = useApi();

    useEffect(() => {
        getData(`/${type}/${id}/recommendations`)
    }, []);

    console.log("recomended", data);


    return (
        <div className="recomended">
            <h3 className="recomended__title">Рекомендации</h3>
            <div className="recomended__films">
                {
                    data.map((movie: any, index: number) => {
                        if (index < 4) {
                            return (
                                <Link to={`/watch/${type}/${movie.id}`}>
                                    <img className="recomended__films-img" src={import.meta.env.VITE_IMG + movie.poster_path} alt="" />
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Recomendations