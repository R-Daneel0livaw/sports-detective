import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronDown, Search } from "lucide-react";

const models = [
  { id: 1, name: "Total Dominator", description: "Predicts game totals with AI precision.", sport: "Basketball", type: "Totals" },
  { id: 2, name: "Moneyline Master", description: "Moneyline betting strategies for profit.", sport: "Football", type: "Moneyline" },
  { id: 3, name: "Over/Under Expert", description: "High-accuracy Over/Under predictions.", sport: "Soccer", type: "Over/Under" },
  { id: 4, name: "Sharp Bettor", description: "Machine learning-based betting picks.", sport: "Basketball", type: "Moneyline" },
  { id: 5, name: "Parlay Pro", description: "Optimized parlay picks for high returns.", sport: "Hockey", type: "Parlays" },
];

const sports = ["All", "Basketball", "Football", "Soccer", "Hockey"];
const types = ["All", "Totals", "Moneyline", "Over/Under", "Parlays"];

export default function Marketplace() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const filteredModels = models.filter(
    (model) =>
      (selectedSport === "All" || model.sport === selectedSport) &&
      (selectedType === "All" || model.type === selectedType)
  );

  return (
    <div className="pt-30 container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">🏆 Sports Betting Models</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <Select onValueChange={setSelectedSport}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by Sport" />
          </SelectTrigger>
          <SelectContent className='bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-md rounded-md'>
            {sports.map((sport) => (
              <SelectItem key={sport} value={sport}>
                {sport}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedType}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent className='bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-md rounded-md'>
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={() => setShowAdvanced(!showAdvanced)}>
          Advanced Search <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
      </div>

      {showAdvanced && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-3">🔎 Advanced Search</h2>
          <div className="flex flex-wrap gap-4">
            <Input placeholder="Search models by keyword..." className="w-64" />
            <Button variant="secondary">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model) => (
          <Card key={model.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{model.name}</CardTitle>
              <CardDescription className="text-gray-600">{model.sport} - {model.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{model.description}</p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">Buy Model</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Confirm Purchase</DialogTitle>
                  <p>Are you sure you want to buy the <strong>{model.name}</strong> model?</p>
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm Purchase</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
