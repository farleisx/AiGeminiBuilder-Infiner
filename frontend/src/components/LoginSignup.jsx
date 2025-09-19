import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // simple mock login
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login / Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
