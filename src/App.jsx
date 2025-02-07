import './App.css';
import "tailwindcss/tailwind.css";
import Tasks from './components/Tasks/Tasks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from './components/NavBar';
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from './components/LandingPage';
import { useNavigate } from 'react-router-dom';
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Link to="/">Auth</Link> */}
        <Routes>
          <Route path="*" element={<><NavBar /><LandingPage /></>} />
          <Route path="/" element={<><NavBar /><LandingPage /></>} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
