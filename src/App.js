import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import WebcamVideo from "./pages/WebcamVideo";
import TestFirst from "./pages/TestFirst";
import Movie from "./pages/Movie";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import React, { useEffect, useState } from 'react';
import { checkLoginStatus } from './firebase/AuthFunctions';
import Loading from "./pages/Loading";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check login status
    const unsubscribe = checkLoginStatus((user) => {
      if (user) {
        // User is logged in
        setIsLoggedIn(true);
      } else {
        // No user is logged in
        setIsLoggedIn(false);
      }

      // Set loading to false once authentication check is complete
      setLoading(false);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Render loading state while checking authentication status
  if (loading) {
    return <Loading/>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(isLoggedIn)?<Home />:<Landing />} />
        <Route path="/commingSoon" element={(isLoggedIn)?<Report />: <Login/>} />
        <Route path="/movies" element={(isLoggedIn)?<Home />:<Login/>} />
        <Route path="/home" element={(isLoggedIn)?<Home />:<Login/>} />
        <Route path="/videoRecorder" element={(isLoggedIn)?<WebcamVideo />:<Login/>} />
        <Route path="/signup" element={(isLoggedIn)?<Profile />:<SignUp />} />
        <Route path="/login" element={(isLoggedIn)?<Profile />:<Login />} />
        <Route path="/profile" element={(isLoggedIn)?<Profile />:<Login />} />
        <Route path="/movie/:id" element={(isLoggedIn)?<Movie />:<Login />} />
        <Route path="/testfirst/:id" element={(isLoggedIn)?<TestFirst />:<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
