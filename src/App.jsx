import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aside from './components/Aside';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import styles from './App.module.scss';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <Home />
                  </div>
                </div>
              </PrivateRoute>
            )}
          />
          <Route
            path="/about"
            element={(
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <About />
                  </div>
                </div>
              </PrivateRoute>
            )}
          />
          <Route
            path="/contacts"
            element={(
              <PrivateRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <Contacts />
                  </div>
                </div>
              </PrivateRoute>
            )}
          />
          <Route
            path="/register"
            element={(
              <PublicRoute>
                <div className={styles.container}>
                  <Aside />
                  <div className={styles.content}>
                    <Register />
                  </div>
                </div>
              </PublicRoute>
            )}
          />
          <Route
            path="/login"
            element={(
              <PublicRoute>
                <Login />
              </PublicRoute>
            )}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
