import React, { useState } from "react";
import Nav from "./Components/Nav";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AuthProvider } from "./Configuration/AuthContext";
import AlertPopup from "./Components/AlertPopup";
import { SiTicktick } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./Configuration/PrivateRoute";
import MovieDetail from "./Sections/MovieDetail";
import Copyright from "./Components/Copyright";

const App = () => {
  const [isSearchBoxVisible, setSearchBoxVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Router>
        <AuthProvider>
          <Nav setSearchBoxVisible={setSearchBoxVisible} />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Homepage
                    searchTerm={searchTerm}
                    searchVisible={isSearchBoxVisible}
                    setSearchBoxVisible={setSearchBoxVisible}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/movies/:id"
              element={
                <PrivateRoute>
                  <MovieDetail
                    visible={isSearchBoxVisible}
                    setSearchBoxVisible={setSearchBoxVisible}
                  />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
      <Copyright />
    </div>
  );
};

export default App;
