import axios from "axios";
import { useEffect, useState } from "react"
import api from "../api/ClientApi";

function useApi() {
  const [data, setData] = useState([]);

  async function getData() {
    let { data } = await api.get('/movie/upcoming')
    setData(data.results)
  }

  useEffect(() => {
    getData()
  }, [])


  return {data}
}

export default useApi