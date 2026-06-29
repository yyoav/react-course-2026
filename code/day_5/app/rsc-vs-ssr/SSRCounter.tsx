"use client";

import { useState } from "react";

// This is a CLIENT component that gets SSR'd:
// - Server pre-renders it to HTML (fast first paint)
// - JS bundle is STILL sent to the browser
// - Component "hydrates" and becomes interactive
export default function SSRCounter() {
  const [count, setCount] = useState(0);
  const renderTime = new Date().toLocaleTimeString();

  return (
    <div className="bg-orange-50 dark:bg-orange-950 border-2 border-orange-300 dark:border-orange-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">🔄</span>
        <h2 className="text-lg font-semibold text-orange-900 dark:text-orange-100">
          SSR (Server-Side Rendering)
        </h2>
      </div>

      <div className="bg-orange-100 dark:bg-orange-900 rounded p-3 mb-4 text-xs font-mono text-orange-800 dark:text-orange-200">
        <p className="font-bold mb-1">// This component has &quot;use client&quot;</p>
        <p>// Step 1: Server pre-renders HTML (fast first paint)</p>
        <p>// Step 2: JS bundle sent to browser</p>
        <p>// Step 3: React &quot;hydrates&quot; → becomes interactive</p>
      </div>

      <div className="space-y-3 text-sm text-orange-800 dark:text-orange-200">
        <p>
          🕐 Render time:{" "}
          <code className="bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded font-mono">
            {renderTime}
          </code>
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
          >
            Hydrated! Count: {count}
          </button>
          <span className="text-xs text-orange-600 dark:text-orange-400">
            ← Works after hydration
          </span>
        </div>
      </div>

      <div className="mt-4 border-t border-orange-200 dark:border-orange-800 pt-3">
        <h4 className="text-xs font-bold text-orange-900 dark:text-orange-100 mb-2">
          What happens:
        </h4>
        <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1">
          <li>✅ HTML appears immediately (server-rendered)</li>
          <li>⚠️ JS bundle is downloaded to browser</li>
          <li>⚠️ Component hydrates (React attaches event handlers)</li>
          <li>⚠️ Increases client bundle size</li>
        </ul>
      </div>
    </div>
  );
}
