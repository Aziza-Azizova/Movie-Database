import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { router } from "./router"
import { useAxiosInterceptor } from "./api/ClientApi"
import Loading from "./components/UI/Loading"
import useApi from "./hooks/useApi"
import useUpcoming from "./store/Upcoming"
import { useEffect } from "react"

function App() {
  const { loading } = useAxiosInterceptor()
  const { data } = useApi();
  const { getUpcoming } = useUpcoming();

  useEffect(() => {
    getUpcoming(data);
  }, [data])

  return (
    <div className="wrapper">
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <Routes>
          {
            router.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))
          }
        </Routes>
      )}
    </div>
  )
}

export default App