import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className='pt-40'>
      <h1 className="text-3xl font-bold mb-4">📊 Detective Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🏆 Rank & Points</CardTitle>
          </CardHeader>
          <CardContent>
            Your detective ranking and earned points based on correct predictions.
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>📝 Active Investigations</CardTitle>
          </CardHeader>
          <CardContent>
            View and manage your ongoing sports data analyses.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
