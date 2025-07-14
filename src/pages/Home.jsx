import React, { useEffect, useState } from "react";
import { getGlobalStats, getTopCoins, getCoinHistory } from "../services/coingecko";
import Cryptocurrencies from "./Cryptocurrencies";
import CryptoNews from "./CryptoNews";
import LineChart from "./LineChart"; 

const Home = () => {
  const [globalStats, setGlobalStats] = useState(null);
  const [coinHistory, setCoinHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  async function fetchData() {
    const stats = await getGlobalStats();
    const history = await getCoinHistory("bitcoin", 30);
    setGlobalStats(stats);
    setCoinHistory(history);
    setIsLoading(false);
  }
  fetchData();
  }, []);

  if (isLoading || !globalStats) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto text-white">

      {/* Line Chart */}
      <div className="mb-10">
        <LineChart
          coinHistory={coinHistory}
          currentPrice={globalStats?.topCoinPrice || "N/A"}
          coinName="Bitcoin"
        />
      </div>

      {/* Statistik Global */}
      <h2 className="text-2xl font-bold mb-6">Statistik Global Crypto</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Total Crypto</p>
          <p className="text-xl font-semibold">{globalStats.totalCoins}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Total Pasar</p>
          <p className="text-xl font-semibold">{globalStats.totalMarkets}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Total Pertukaran</p>
          <p className="text-xl font-semibold">{globalStats.totalExchanges}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Volume 24 Jam</p>
          <p className="text-xl font-semibold">${Number(globalStats.total24hVolume).toLocaleString()}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Total Kapitalisasi Pasar</p>
          <p className="text-xl font-semibold">${Number(globalStats.totalMarketCap).toLocaleString()}</p>
        </div>
      </div>

      {/* Tipe Crypto */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Top 10 Cryptocurrency</h2>
          <a href="/cryptocurrencies" className="text-blue-400 hover:underline">Lihat Semua</a>
        </div>
        <Cryptocurrencies simplified />
      </div>

      {/* Berita Crypto */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Berita Crypto Terbaru</h2>
          <a href="/CryptoNews" className="text-blue-400 hover:underline">Lihat Semua</a>
        </div>
        <div className="text-black">
          <CryptoNews simplified />
        </div>
      </div>
    </div>
  );
};

export default Home;
