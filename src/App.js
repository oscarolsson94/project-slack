import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">          
          <Router>
            <>
                <Switch>
                    <Route exact path="/">
                        <Header />
                    </Route>
                </Switch>
            </>
          </Router>       
    </div>
  );
}

export default App;
