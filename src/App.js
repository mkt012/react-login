import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import LoginContainer from './components/loginForm.jsx';
import ProtectedRoute from './protectedroutes.jsx';

import './media/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <Router>
        <div>
            <Switch>
              <Route path="/" exact component={LoginContainer} />
              <ProtectedRoute path="/dashboard" isEnabled={sessionStorage.getItem('login')} />
             </Switch> 
           </div>
        </Router> 
  );
}

export default App;
