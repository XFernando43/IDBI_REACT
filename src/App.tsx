import { Route, Router } from "wouter"
import LogginPage from "./views/LogginPage"
import RegisterPage from "./views/RegisterPage"
import HomePage from "./views/HomePage"

function App() {
  
  return (
    <Router>
        <Route path="/home" component={HomePage}  />
        <Route path="/login" component={LogginPage} />
        <Route path="/register" component={RegisterPage} />
    </Router>
  )
}

export default App
