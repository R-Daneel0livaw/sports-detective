import { Link } from "react-router-dom";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useState } from "react";

export default function Navbar() {
  const [selectedSport, setSelectedSport] = useState("Basketball");

  // Mock data for today's games (replace with real data)
  const games = [
    { sport: "Basketball", time: "5:00 PM ET", team1: "LAL", record1: "30-22", team2: "CHA", record2: "20-33" },
    { sport: "Basketball", time: "7:30 PM ET", team1: "BOS", record1: "40-12", team2: "MIA", record2: "32-20" },
    { sport: "Baseball", time: "3:00 PM ET", team1: "NYY", record1: "50-30", team2: "BOS", record2: "48-32" },
  ];

  const filteredGames = games.filter((game) => game.sport === selectedSport);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white shadow-md">
      {/* Left side: Sport Filter + Today's Games */}
      <div className="flex items-center gap-4">
        {/* Sport Select Dropdown */}
        <Select onValueChange={setSelectedSport}>
          <SelectTrigger className="w-40 bg-gray-800 border border-gray-700 text-white">
            <SelectValue placeholder="Select Sport" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border border-gray-700 text-white">
            <SelectItem value="Basketball">🏀 Basketball</SelectItem>
            <SelectItem value="Baseball">⚾ Baseball</SelectItem>
          </SelectContent>
        </Select>

        {/* List of Today's Games */}
        <div className="flex gap-4 overflow-x-auto">
          {filteredGames.map((game, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-md shadow-md text-sm text-center min-w-[100px]">
              <p className="font-semibold">{game.time}</p>
              <p>{game.team1} {game.record1}</p>
              <p>{game.team2} {game.record2}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Navigation Links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/marketplace" className="hover:text-gray-300">Marketplace</Link>
        <Link to="/profile" className="hover:text-gray-300">Profile</Link>
      </div>
    </nav>
  );
}

