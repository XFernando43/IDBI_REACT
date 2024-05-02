import { Route, Router } from "wouter"
import LogginPage from "./views/LogginPage"
import RegisterPage from "./views/RegisterPage"

function App() {
  
  return (
    <Router>
        <Route path="/home"  />
        <Route path="/login" component={LogginPage} />
        <Route path="/register" component={RegisterPage} />
    </Router>
  )
}

export default App
