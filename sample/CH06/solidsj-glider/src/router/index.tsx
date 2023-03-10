import { Route, Routes } from "@solidjs/router"
import { lazy } from "solid-js"
import HomeScreen from "../screens/Home"
// import LoginScreen from "../screens/Login"
// import RegisterScreen from "../screens/Register"

const LoginScreen = lazy(() => import("../screens/Login"))
const RegisterScreen = lazy(() => import("../screens/Register"))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Routes>
  )
}

export default AppRoutes
