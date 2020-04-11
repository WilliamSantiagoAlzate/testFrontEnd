//Import libraries
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//Import views
import LogIn from './views/LogIn/LogIn';
import Home from './views/Home/Home';
import User from './views/User/User';
import Figure from './views/Figure/Figure';
import GroupFigure from './views/GroupFigure/GroupFigure';
import CreateFigure from './views/CreateFigure/CreateFigure';
import UpdateFigure from './views/UpdateFigure/UpdateFigure';

//Create App
function App() {

  const auth = localStorage.getItem('auth');

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn} />
        {auth ? 
          <Route path="/home" component={Home} /> 
          : <Redirect to="/"/>
        }
        {auth ? 
          <Route path="/user" component={User} /> 
          : <Redirect to="/"/>
        }
        {auth ? 
          <Route path="/figure" component={Figure} /> 
          : <Redirect to="/"/>
        }
        {auth ? 
          <Route path="/groupFigure" component={GroupFigure} /> 
          : <Redirect to="/"/>
        }
        {auth ? 
          <Route path="/createFigure" component={CreateFigure} /> 
          : <Redirect to="/"/>
        }
        {auth ? 
          <Route path="/updateFigure" component={UpdateFigure} /> 
          : <Redirect to="/"/>
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
