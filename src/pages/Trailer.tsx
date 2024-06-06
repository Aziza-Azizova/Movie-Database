import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { useEffect } from "react";
import YouTube, {YouTubeProps} from "react-youtube";

function Trailer() {
  let { id, type } = useParams();
  const { getData, data } = useApi();


  useEffect(() => {
    getData(`/${type}/${id}/videos?language=en-US`)
  }, []);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {    
    event.target.playVideo();
  }

  return (
    <div className="trailer">
      {
        (() => {
          const item = data.find((item: any) => item.type === 'Trailer' || item.type === 'Opening Credits' || item.type === 'Behind the Scenes');

          if (item) {
            return <YouTube className="trailer__video" videoId={item.key} onReady={onPlayerReady}/>;
          }
          return null;
        })()
      }
    </div>
  )
}

export default Trailer