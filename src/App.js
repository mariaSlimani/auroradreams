import Lost from './lost';
import ComingSoon from './comingSoon';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/ComingSoon" component={ComingSoon} ></Route>
    <Route exact path="/404" component={Lost} ></Route>
    <Route exact path="/">
      <Redirect to="/ComingSoon" />
    </Route>
    <Route path="/">
      <Redirect to="/404" />
    </Route>
    </Switch>
      <ComingSoon/>
      <script src="/__/firebase/8.8.0/firebase-app.js"></script>
      <script src="/__/firebase/8.8.0/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
    </div>
    </Router>
  );
}

export default App;
