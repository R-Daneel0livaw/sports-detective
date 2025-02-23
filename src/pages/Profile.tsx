import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Profile() {
  const [isPublic, setIsPublic] = useState(true);
  const [favoriteSports, setFavoriteSports] = useState<string[]>([]);
  const [twitterFollowers, setTwitterFollowers] = useState("");
  const [membership, setMembership] = useState("Detective"); 

  const sportsOptions = ["Basketball", "Football", "Soccer", "Tennis", "Baseball", "Hockey"];
  const membershipOptions = [
    {
      level: "Free",
      benefits: "Basic access to features. Limited model runs. No advanced analytics.",
    },
    {
      level: "Detective",
      benefits: "Unlocks advanced stats and extra model runs. Some analytics tools.",
    },
    {
      level: "Chief Detective",
      benefits: "Full access to all features, unlimited model runs, and priority support.",
    },
  ];

  const toggleSport = (sport: string) => {
    setFavoriteSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
            <Input type="text" placeholder="John" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
            <Input type="text" placeholder="Doe" className="mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Display Name</label>
            <Input type="text" placeholder="Display Name" className="mt-1" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
            <Input type="text" placeholder="https://yourwebsite.com" className="mt-1" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
            <Input type="text" placeholder="New York, USA" className="mt-1" />
          </div>

          <div className="flex items-center space-x-3 md:col-span-2">
            <Switch checked={isPublic} onCheckedChange={setIsPublic} className='data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-gray-500' />
            <span className="text-sm">{isPublic ? "Public Profile" : "Private Profile"}</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Customizations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Favorite Sports</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sportsOptions.map((sport) => (
                <label key={sport} className="flex items-center space-x-2 cursor-pointer">
                  <Checkbox checked={favoriteSports.includes(sport)} onCheckedChange={() => toggleSport(sport)} />
                  <span className="text-sm">{sport}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">External Followers</h2>
            <Textarea
              placeholder="Enter Twitter usernames, separated by commas..."
              value={twitterFollowers}
              onChange={(e) => setTwitterFollowers(e.target.value)}
              className="placeholder-[#8e8e93] text-base p-3 border-none focus:ring-[#1E90FF] focus:ring-2"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Membership</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {membershipOptions.map(({ level, benefits }) => (
              <button
                key={level}
                onClick={() => setMembership(level)}
                className={`p-4 text-center border rounded-lg font-semibold transition-all flex flex-col items-center space-y-2 cursor-pointer
                  ${membership === level ? "bg-blue-600 text-white border-blue-700 shadow-md" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
              >
                <span className="text-lg">{level}</span>
                <p className="text-xs opacity-75">{benefits}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Button className="w-full">Save Profile</Button>
      </div>
    </div>
  );
}
