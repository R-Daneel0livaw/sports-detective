import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">🕵️‍♂️ Sports Detective</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
