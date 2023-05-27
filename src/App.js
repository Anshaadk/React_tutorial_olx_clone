import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/postContext'
function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/sell'>
              <Create />
            </Route>
            <Route path='/view'>
              <View />
            </Route>
          </Switch>
        </Router>
      </Post>
    </div>
  );
}

export default App;
