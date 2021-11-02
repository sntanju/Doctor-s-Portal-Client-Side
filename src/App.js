import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Home></Home>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
