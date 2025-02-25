import { Navigate, Route, Routes } from "react-router";
import { ROUTES } from "./constants/routes.ts";
import Origin from "./pages/origin/Origin.tsx";
import Home from "pages/home/Home.tsx";

function App() {
  return (
    <Routes>
      <Route index element={<Home /> }  />
      <Route path={ROUTES.origin} element={<Origin />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to={ROUTES.home} />} />
    </Routes>
  )
}

export default App
