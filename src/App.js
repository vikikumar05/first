import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [userDetails, setUserDetails] = React.useState(null);

  const updateUserDetails = (user) => {
    setUserDetails(user);
  };

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage userDetails={userDetails} />} />
          <Route path="/login" element={<LoginForm updateUserDetails={updateUserDetails} />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
