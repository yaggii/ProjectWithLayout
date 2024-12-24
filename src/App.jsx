import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import RequireAuth from './components/auth/RequireAuth';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NewSolution from './pages/NewSolution';
import EditSolution from './pages/EditSolution';
import Login from './pages/Login';
import SolutionDetails from './pages/SolutionDetails';
import TechnicalAreaSolutions from './pages/TechnicalAreaSolutions';
import CountrySolutions from './pages/CountrySolutions';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/solutions/:id" element={<SolutionDetails />} />
              <Route path="/solutions/:id/edit" element={<EditSolution />} />
              <Route path="/login" element={<Login />} />
              <Route path="/technical-areas/:area" element={<TechnicalAreaSolutions />} />
              <Route path="/countries/:country" element={<CountrySolutions />} />
              <Route
                path="/submit-solution"
                element={
                  <RequireAuth>
                    <NewSolution />
                  </RequireAuth>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}