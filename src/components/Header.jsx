import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img
                //src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/solution-files/images/chemonics-logo.svg`}
                src="https://s3-alpha-sig.figma.com/img/b1ab/7121/88eb5dcb44179563ae244df2a92ba749?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVnyWZ5jpL4VZKaWSDj-wSfWkvjrdnCE1kXSf7ycQVoqTPMWISrFGGTxZTmt89UeZdglQExYR~W-sSFuPfFChDx-yfvu3E5NzltdMEyxRjvXQEzufEHHFH5H1L0SU66v1U3isdbyH9XvDo2e2-h50-QX2X5p1pmhSA3jOLS08x4g72maEDKbpAUp~MqLVvLnyP7H5UNoMCLi6eN3cTMpCDbxdTfSofCFHE3yquO3aHXFj5XQYtUJlLVVzXwUjJ4dArQiVynvsQwY0lLz9vEgCkJzrMolD8mvba53ShzvrY7hf1hSKuBqDNGx9Aq-YiyN0p94WshsjGN0PvXH3BzfVw__"
                alt="Chemonics"
                className="h-12"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
          <nav className="flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </Link>
            </nav>
            <button className="text-[#F4863B] bg-[#F4863B]/10 px-6 py-2 rounded-full hover:bg-[#F4863B]/20 transition-colors">
              Share your feedback
            </button>
            {user ? (
              <div className="flex items-center gap-4">
                <Link 
                  to="/submit-solution"
                  className="bg-[#F4863B] text-white px-6 py-2 rounded-full hover:bg-[#F4863B]/90 transition-colors"
                >
                  Submit your solution
                </Link>
                <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                  <button
                    onClick={signOut}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link 
                to="/login"
                className="bg-[#F4863B] text-white px-6 py-2 rounded-full hover:bg-[#F4863B]/90 transition-colors"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}