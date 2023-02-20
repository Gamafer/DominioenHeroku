import React, {useEffect } from "react";
import "./styles.css";
import Index  from "./paginas/Index";
import Main from "./paginas/main";
import FirebaseFunctions from "./funciones/FirebaseFunctions";

export default function App(props) {

  const { firebase, currentUser, getCurrentUser } = FirebaseFunctions(props);

  useEffect((e) => {
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          getCurrentUser(authUser.email);
        } else {
          getCurrentUser(null);
        }
      });
    }
   
  }, []);

  const socialLogin = async (props) => {
    await firebase
      .auth()
      .signInWithPopup(props)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return currentUser === "Cargando..." || currentUser === null ? (
      <div>
          <Index
            socialLogin={socialLogin}
            currentUser={currentUser}
            getFirebase={props.getFirebase}
            history={props.history}
          />
    </div>
  ) : (
    <div className="App">
      <h1>Welcome, Chef {currentUser} </h1>

      <Main
        getFirebase={props.getFirebase}
        history={props.history}
      />
      {/* {process.env.REACT_APP_VAR} */}
    </div>
  );
}
