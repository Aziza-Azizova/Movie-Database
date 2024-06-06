import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { router } from "./router"

function App() {
  return (
    <div className="wrapper">
      <Header />
        <Routes>
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