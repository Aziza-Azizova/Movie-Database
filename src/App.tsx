import { Route, Routes, useLocation  } from "react-router-dom"
import Header from "./components/Header"
import { router } from "./router"

function App() {
  const location = useLocation();
  return (
    <div className="wrapper">
      <Header />
        <Routes location={location} key={location.pathname}>
          {
            router.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))
          }
        </Routes>
    </div>
  )
}

export default App