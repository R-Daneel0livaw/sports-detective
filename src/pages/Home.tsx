import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1 hidden md:block sticky top-4 h-fit p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow self-start">
          <h2 className="text-3xl font-bold mb-3">🕵️‍♂️ Sports Detective</h2>
          <p className="text-sm mb-6">Analyze sports data and solve cases using machine learning models.</p>
          <nav className="space-y-2">
            <Link to="/dashboard" className="block text-blue-500 hover:underline">📊 Dashboard</Link>
            <Link to="/casefiles" className="block text-blue-500 hover:underline">📂 Case Files</Link>
            <Link to="/forensicanalysis" className="block text-blue-500 hover:underline">🔍 Forensic Analysis</Link>
          </nav>

          <div className="mt-6 bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
            <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
          </div>
          <div className="mt-6 bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
            <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
          </div>
          <div className="mt-6 bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
            <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
          </div>
          <div className="mt-6 bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
            <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
          </div>
        </aside>

        <main className="md:col-span-2 text-center">
          {/* <h1 className="text-4xl font-bold mb-6">🕵️‍♂️ Welcome to Sports Detective</h1>
          <p className="text-lg mb-4">Analyze sports data and solve cases using machine learning models.</p> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>📊 Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                Get a quick overview of your investigations, model performance, and latest insights.
                <br />
                <Link to="/dashboard" className="text-blue-500">View Dashboard →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📂 Case Files</CardTitle>
              </CardHeader>
              <CardContent>
                Manage your projects and investigations into sports outcomes.
                <br />
                <Link to="/casefiles" className="text-blue-500">View Case Files →</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🔍 Forensic Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                Dive deep into historical sports data and uncover trends.
                <br />
                <Link to="/forensicanalysis" className="text-blue-500">View Forensic Analysis →</Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
