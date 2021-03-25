import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes/routes';

function App() {
  return (

    <div>
      <Router>
        <Switch>
          {routes.map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={route.component}
              />
            )
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
