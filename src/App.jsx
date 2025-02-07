import './App.css';
import "tailwindcss/tailwind.css";
import Tasks from './components/Tasks/Tasks';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from './components/NavBar';
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {/* <Link to="/">Auth</Link> */}
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
