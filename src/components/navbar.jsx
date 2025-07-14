import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navClass = (path) =>
    `px-4 py-2 rounded transition ${
      isActive(path)
        ? "bg-white text-blue-500 font-semibold"
        : "text-white hover:text-blue-500 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-gray-800 shadow">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <span className="text-white font-bold">CryptoHub</span>
              </div>
        <div className="flex gap-4">
          <Link to="/" className={navClass("/")}>Home</Link>
          <Link to="/news" className={navClass("/news")}>Crypto News</Link>
          <Link to="/cryptocurrencies" className={navClass("/tokens")}>Crypto lists</Link>
        </div>
      </div>
    </nav>
  );
}
