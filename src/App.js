import React, { Component } from 'react';

import * as firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { db_config } from './Config';
import Toolbar from './Components/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

import Home from './Components/Home';
import Students from './Components/Students';
import Payments from './Components/Payments';
import Schools from './Components/Schools';
import Error from './Components/Error';
import StudentsCatalog from './Components/Students/Catalogo';

class App extends Component {

  state = {
    nombre: 'Invalido',
    display: 'Anonimo',
    sideDrawerOpen: false,
  };


  constructor() {
    super();
    this.app = firebase.initializeApp(db_config);
    this.database = this.app.database().ref().child('escuelas/Nombre');
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.GoogleSignIn = this.GoogleSignIn.bind(this);
    this.GoogleSignOut = this.GoogleSignOut.bind(this);
  }

  componentDidMount() {
    this.database.on('value', snap => {
      this.setState({
        nombre: snap.val(),
      });
    });
  }




  GoogleSignIn() {
    this.setState({
      userName: 'Validando'
    });
    var user;
    firebase.auth().signInWithPopup(this.provider).then(result => {
      //var token = result.credential.accessToken;
      user = result.user;
      console.log(user.displayName);
      return user;
    }).then(user => {
      this.newFunction(user);
    }).catch(function (error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      //  The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });


  }

  GoogleSignOut() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
    this.setState({
      display: 'Logged out'
    });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });

  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}  >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} 
        signinGoogle={this.GoogleSignIn} 
        loggedInUser={this.state.display} 
        signOutGoogle={this.GoogleSignOut}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '75px', }}>
          <div>

            <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Payments" component={Payments} />
                <Route path="/Schools" component={Schools} />
                <Route path="/Students" component={StudentsCatalog} />
                <Route component={Error} />

              </Switch>
              </BrowserRouter>
            </div>
        </main>

      </div>


    );
  }

  newFunction(user) {
    this.setState({ display: user.displayName });
  }
}

export default App;
