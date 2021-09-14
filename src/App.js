import { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Home = lazy(() => import('./pages/home'));
const Device = lazy(() => import('./pages/device'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/device">
              <Device />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
