import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./components/Mail";
import Emaillist from "./components/Emaillist";
import Sendmail from "./components/Sendmail";
import Login from "./components/Login"
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser, login } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, []);

  return (
    <Router>
      {!user ? <Login /> : (
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Emaillist />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
          {sendMessageIsOpen && <Sendmail />}
        </div>
      </div>
      )}
    </Router>
  );
}

export default App;
