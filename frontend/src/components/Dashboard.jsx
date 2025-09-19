import { useState } from 'react';
import axios from 'axios';
import CodeEditor from './CodeEditor';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleGenerate = async () => {
    const res = await axios.post('http://localhost:5000/api/ai', { prompt });
    setAiResponse(res.data.candidates[0].output);
  };

  return (
    <div className="flex h-screen">
      <CodeEditor code={aiResponse} />
      <div className="w-1/3 p-4 bg-gray-100">
        <textarea
          className="w-full h-40 p-2 border rounded mb-4"
          placeholder="Ask AI..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded"
          onClick={handleGenerate}
        >
          Generate
        </button>
        <div className="mt-4 p-2 bg-white h-60 overflow-auto border rounded">
          <pre>{aiResponse}</pre>
        </div>
      </div>
    </div>
  );
}
