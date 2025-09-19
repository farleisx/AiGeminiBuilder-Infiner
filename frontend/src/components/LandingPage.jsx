import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6">Infiner - AI Website Builder</h1>
      <button
        className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-200"
        onClick={() => navigate('/login')}
      >
        Start Building
      </button>
    </div>
  );
}
