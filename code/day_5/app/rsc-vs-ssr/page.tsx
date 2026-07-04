import Link from "next/link";
import SSRCounter from "./SSRCounter";

// This entire page is a React Server Component (RSC)
// Its code is NEVER sent to the browser
export default async function RSCvsSSR() {
  // These run ONLY on the server — code never reaches the browser
  const serverTime = new Date().toLocaleTimeString();
  const apiKey = "sk-secret-api-key-1234567890";
  const dbResult = { users: 42, lastSync: serverTime };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-50">
          🧩 RSC vs SSR — They Are NOT the Same!
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Both involve the server, but they work very differently
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* RSC side */}
          <div className="bg-green-50 dark:bg-green-950 border-2 border-green-300 dark:border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🖥️</span>
              <h2 className="text-lg font-semibold text-green-900 dark:text-green-100">
                React Server Component (RSC)
              </h2>
            </div>

            <div className="bg-green-100 dark:bg-green-900 rounded p-3 mb-4 text-xs font-mono text-green-800 dark:text-green-200">
              <p className="font-bold mb-1">
                // No &quot;use client&quot; → Server Component
              </p>
              <p>// Runs ONLY on the server</p>
              <p>// JS code is NEVER sent to browser</p>
              <p>// Only HTML result is sent</p>
            </div>

            <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
              <p>
                ⏰ Server Time:{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded font-mono">
                  {serverTime}
                </code>
              </p>
              <p>
                🔒 API Key (safe!):{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded font-mono">
                  {apiKey.slice(0, 8)}...
                </code>
              </p>
              <p>
                🗃️ DB Result:{" "}
                <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded font-mono">
                  {dbResult.users} users
                </code>
              </p>
            </div>

            <div className="mt-4 border-t border-green-200 dark:border-green-800 pt-3">
              <h4 className="text-xs font-bold text-green-900 dark:text-green-100 mb-2">
                What happens:
              </h4>
              <ul className="text-xs text-green-700 dark:text-green-300 space-y-1">
                <li>✅ Executes on server, sends only HTML</li>
                <li>✅ Zero JavaScript added to client bundle</li>
                <li>✅ Can safely use secrets &amp; DB queries</li>
                <li>❌ Cannot use hooks or event handlers</li>
              </ul>
            </div>
          </div>

          {/* SSR side */}
          <SSRCounter />
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-50"></th>
                <th className="px-4 py-3 text-left font-semibold text-green-700 dark:text-green-400">
                  🖥️ RSC
                </th>
                <th className="px-4 py-3 text-left font-semibold text-orange-700 dark:text-orange-400">
                  🔄 SSR
                </th>
              </tr>
            </thead>
            <tbody className="text-zinc-700 dark:text-zinc-300">
              <tr className="border-t border-zinc-200 dark:border-zinc-700">
                <td className="px-4 py-2 font-medium">JS to browser?</td>
                <td className="px-4 py-2 text-green-600 dark:text-green-400">
                  ❌ None
                </td>
                <td className="px-4 py-2 text-orange-600 dark:text-orange-400">
                  ✅ Yes (for hydration)
                </td>
              </tr>
              <tr className="border-t border-zinc-200 dark:border-zinc-700">
                <td className="px-4 py-2 font-medium">Hydration?</td>
                <td className="px-4 py-2 text-green-600 dark:text-green-400">
                  ❌ No
                </td>
                <td className="px-4 py-2 text-orange-600 dark:text-orange-400">
                  ✅ Yes
                </td>
              </tr>
              <tr className="border-t border-zinc-200 dark:border-zinc-700">
                <td className="px-4 py-2 font-medium">Interactive?</td>
                <td className="px-4 py-2 text-green-600 dark:text-green-400">
                  ❌ Static HTML only
                </td>
                <td className="px-4 py-2 text-orange-600 dark:text-orange-400">
                  ✅ After hydration
                </td>
              </tr>
              <tr className="border-t border-zinc-200 dark:border-zinc-700">
                <td className="px-4 py-2 font-medium">Secrets safe?</td>
                <td className="px-4 py-2 text-green-600 dark:text-green-400">
                  ✅ Yes
                </td>
                <td className="px-4 py-2 text-orange-600 dark:text-orange-400">
                  ⚠️ Only if not in component
                </td>
              </tr>
              <tr className="border-t border-zinc-200 dark:border-zinc-700">
                <td className="px-4 py-2 font-medium">Bundle impact</td>
                <td className="px-4 py-2 text-green-600 dark:text-green-400">
                  ✅ Zero
                </td>
                <td className="px-4 py-2 text-orange-600 dark:text-orange-400">
                  ⚠️ Adds to bundle
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          💡 <strong>Next.js uses both!</strong> RSC reduces bundle size. SSR
          improves initial load. Use RSC by default, SSR (
          <code>&quot;use client&quot;</code>) only when you need interactivity.
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
