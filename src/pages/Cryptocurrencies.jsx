import { useEffect, useState } from "react";
import { getTopCoins } from "../services/coingecko";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopCoins(count);
      setCryptos(data);
    };
    fetchData();
  }, [count]);

  const filteredCryptos = cryptos.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 text-white rounded-md">
      {!simplified && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari Cryptocurrency..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded w-full"
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCryptos.map((coin) => (
          <div key={coin.id} className="bg-gray-800 rounded shadow p-4 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">{coin.rank}. {coin.name}</h2>
              <img src={coin.icon} alt={coin.name} className="w-6 h-6" />
            </div>
            <p>Harga: ${parseFloat(coin.price).toFixed(2)}</p>
            <p>Kapitalisasi Pasar: ${Number(coin.marketCap).toLocaleString()}</p>
            <p>Perubahan Harian: {coin.change}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
