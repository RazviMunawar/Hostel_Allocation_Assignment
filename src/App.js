import React from "react";
// import firebase from "firebase";
import SignInScreen, { success } from './components/SignInScreen';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <SignInScreen />
      {/* {
        success ? <HomePage /> : ''
      } */}
    </div>
  );
}

export default App;