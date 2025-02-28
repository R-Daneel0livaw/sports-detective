import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const models = [
  { id: 1, name: "Total Dominator", description: "Predicts game totals with AI precision.", sport: "Basketball", type: "Totals", owned: false, selling: false },
  { id: 2, name: "Moneyline Master", description: "Moneyline betting strategies for profit.", sport: "Football", type: "Moneyline", owned: true, selling: false },
  { id: 3, name: "Over/Under Expert", description: "High-accuracy Over/Under predictions.", sport: "Soccer", type: "Over/Under", owned: false, selling: true },
  { id: 4, name: "Sharp Bettor", description: "Machine learning-based betting picks.", sport: "Basketball", type: "Moneyline", owned: true, selling: true },
  { id: 5, name: "Parlay Pro", description: "Optimized parlay picks for high returns.", sport: "Hockey", type: "Parlays", owned: false, selling: false },
];

const sports = ["All", "Basketball", "Football", "Soccer", "Hockey"];
const types = ["All", "Totals", "Moneyline", "Over/Under", "Parlays"];

export default function Marketplace() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTab, setSelectedTab] = useState("available");

  const filterModels = () => {
    return models.filter((model) => {
      const matchesTab =
        (selectedTab === "available" && !model.owned && !model.selling) ||
        (selectedTab === "purchased" && model.owned) ||
        (selectedTab === "selling" && model.selling);

      const matchesSport = selectedSport === "All" || model.sport === selectedSport;
      const matchesType = selectedType === "All" || model.type === selectedType;

      return matchesTab && matchesSport && matchesType;
    });
  };
  
  type Model = {
    id: number;
    name: string;
    description: string;
    sport: string;
    type: string;
    owned: boolean;
    selling: boolean;
  };

  type ModelGridProps = {
    models: Model[];
    buttonLabel: string;
    category: string;
  };

  function ModelGrid({ models, buttonLabel, category }: ModelGridProps) {
    const [selectedModel, setSelectedModel] = useState<Model | null>(null);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.length > 0 ? (
          models.map((model) => (
            <Card key={model.id} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{model.name}</CardTitle>
                <CardDescription>{model.sport} - {model.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{model.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full cursor-pointer" onClick={() => setSelectedModel(model)}>
                      {buttonLabel}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                    <DialogHeader>
                      <DialogTitle>{selectedModel?.name}</DialogTitle>
                      <DialogDescription>
                        {category === "available" && "This is an available model. You can purchase it here."}
                        {category === "purchased" && "This is a purchased model. View its details here."}
                        {category === "selling" && "This is a selling model. Manage your listing here."}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No models found.</p>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pt-40 max-w-5xl">
      <h1 className="text-4xl font-bold mb-6">Sports Betting Models</h1>

      <Tabs defaultValue="available" onValueChange={setSelectedTab}>
        <TabsList className="flex space-x-6 bg-white text-black rounded-lg mb-10 mt-4">
          <TabsTrigger
            value="available"
            className="py-2 rounded-lg transition-all hover:bg-gray-200 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Available Models
          </TabsTrigger>
          <TabsTrigger
            value="purchased"
            className="py-2 rounded-lg transition-all hover:bg-gray-200 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Purchased Models
          </TabsTrigger>
          <TabsTrigger
            value="selling"
            className="py-2 rounded-lg transition-all hover:bg-gray-200 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Selling Models
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex gap-4 mb-6">
        <Select onValueChange={setSelectedSport}>
          <SelectTrigger className="w-52 bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer">
            <SelectValue placeholder="Filter by Sport" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 shadow-lg rounded-md">
            {sports.map((sport) => (
              <SelectItem key={sport} value={sport} className='hover:bg-gray-200'>{sport}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedType}>
          <SelectTrigger className="w-52 bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border border-gray-300 shadow-lg rounded-md">
            {types.map((type) => (
              <SelectItem key={type} value={type} className='hover:bg-gray-200'>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <ModelGrid models={filterModels()} buttonLabel={
        selectedTab === "available" ? "Buy Model" :
        selectedTab === "purchased" ? "View Details" :
        "Manage Listing"
      } category={selectedTab} />
    </div>
  );
}
