import { useState } from "react"
import api from "../api/ClientApi";

function useApi() {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  console.log("data", data);
  

  async function getData(url:string) {
    let { data } = await api.get(url, {
      params:{
        page:page
      }
    })
    if(data.results){
      setData(data.results)
    } else{
      setData(data)
    }
  }

  return {data, getData, page, setPage}
}

export default useApi