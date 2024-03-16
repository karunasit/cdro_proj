import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './pages/UsersList';
import UserDetailsPage from './pages/UserDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} exact/>
        <Route path="/user/:username" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
