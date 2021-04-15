import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

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
