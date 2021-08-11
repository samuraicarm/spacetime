import FetchNasaImage from "./fetchnasaimage";
import About from "./About";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <FetchNasaImage />
      </div>

      <Switch>
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
