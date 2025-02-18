import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">🕵️‍♂️ Welcome to Sports Detective</h1>
      <p className="text-lg mb-4">Analyze sports data and solve cases using machine learning models.</p>
      
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
            <Link to="/forensicanalysis" className="text-blue-500">View Forensics Analysis →</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
