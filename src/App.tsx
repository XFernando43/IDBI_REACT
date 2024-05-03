import { Route, Router } from "wouter"
import LogginPage from "./views/LogginPage"
import RegisterPage from "./views/RegisterPage"
import HomePage from "./views/HomePage"
import CreateIncidentPage from "./views/createIncident"

function App() {
  
  return (
    <Router>
        <Route path="/home" component={HomePage}  />
        <Route path="/login" component={LogginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/createIncident" component={CreateIncidentPage} />
    </Router>
  )
}

export default App
