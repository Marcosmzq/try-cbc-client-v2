import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LandingPage } from "./components/landing-page";
import { LoginPage } from "./components/login-page";
import { RegisterPage } from "./components/register-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
