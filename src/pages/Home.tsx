import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
const [picks, setPicks] = useState([
    { id: 1, user: "Detective John", content: "Lakers will cover the spread tonight! 🔥" },
    { id: 2, user: "Sherlock Hoops", content: "Warriors vs. Celtics is going under 225.5 points!" },
  ]);
  const [newPick, setNewPick] = useState("");

  const handlePostPick = () => {
    if (newPick.trim() !== "") {
      setPicks([{ id: Date.now(), user: "You", content: newPick }, ...picks]);
      setNewPick(""); 
    }
  };

  return (
    <div className="pt-30 container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1 hidden md:block sticky top-24 h-fit p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow self-start">
          <h1 className="text-3xl font-bold mb-3">🕵️‍♂️ Sports Detective</h1>
          <p className="text-sm mb-6">Analyze sports data and solve cases using machine learning models.</p>

          <nav className="space-y-3">
            <Link to="/dashboard">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer mb-4">
                <h2 className="text-lg font-semibold mb-2">📊 Dashboard</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Get insights into your investigations and model performance.</p>
              </div>
            </Link>

            <Link to="/casefiles">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer mb-4">
                <h2 className="text-lg font-semibold mb-2">📂 Case Files</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Manage your sports analysis projects and investigations.</p>
              </div>
            </Link>

            <Link to="/forensicanalysis">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer mb-4">
                <h2 className="text-lg font-semibold mb-2">🔍 Forensic Analysis</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">Analyze past game data to uncover hidden trends.</p>
              </div>
            </Link>
          </nav>

          <div className="mt-6 space-y-4">
            <div className="bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-3 text-center rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300">📌 Ad Space</p>
            </div>
          </div>
        </aside>

        <main className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>📢 Share Your Pick</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="What's your prediction for today's games?"
                value={newPick}
                onChange={(e) => setNewPick(e.target.value)}
                className="border-transparent focus:ring focus:ring-blue-300 rounded-lg outline-none focus-visible:outline-2 focus-visible:ring-0 shadow-none placeholder-gray-400 font-medium placeholder:text-lg resize-none mb-3"
              />
              <Button onClick={handlePostPick} className="w-full">Post Pick</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {picks.map((pick) => (
              <Card key={pick.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{pick.user} says:</CardTitle>
                </CardHeader>
                <CardContent>{pick.content}</CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
