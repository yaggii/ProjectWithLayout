import React from 'react';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-16 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}