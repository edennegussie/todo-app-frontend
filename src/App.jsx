import './App.css';
import "tailwindcss/tailwind.css";
import Tasks from './Tasks/Tasks';
import Registration from './Auth/Registration';
import NavBar from './NavBar';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from './Auth/Auth';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Link to="/">Auth</Link> */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/signup" element={<Auth type={'signup'} />} />
          <Route path="/login" element={<Auth type={'login'} />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
