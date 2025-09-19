import { useState, useEffect } from 'react';

export default function CodeEditor({ code }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    setHtml(code);
  }, [code]);

  return (
    <div className="w-2/3 h-full">
      <iframe
        title="live-preview"
        srcDoc={html}
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
