import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { auth, firedb } from "./firebase";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const [user, setUser] = useState(null);
  console.log(`user`, user);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        console.log(`userAuth`, userAuth);
        setUser({
          uid: userAuth.uid,
          email: userAuth.email,
        });
      } else {
        //Logged out
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen user={user} />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
