export async function getGlobalStats() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/global");
    const json = await res.json();
    const data = json.data;
    return {
      totalCoins: data.active_cryptocurrencies,
      totalExchanges: data.markets,
      totalMarketCap: data.total_market_cap.usd,
      total24hVolume: data.total_volume.usd,
      totalMarkets: data.markets,
      btcDominance: data.market_cap_percentage.btc.toFixed(1),
    };
  } catch (err) {
    console.error("Error fetching global stats:", err);
    return null;
  }
}

export async function getTopCoins(limit = 10) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
    );
    const data = await res.json();

    return data.map((coin) => ({
      id: coin.id,
      rank: coin.market_cap_rank,
      name: coin.name,
      icon: coin.image,
      price: coin.current_price,
      marketCap: coin.market_cap,
      change: coin.price_change_percentage_24h,
    }));
  } catch (err) {
    console.error("Error fetching data koin:", err);
    return [];
  }
}

export async function getCoinHistory(id = "bitcoin", days = 30) {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching coin history:", err);
    return null;
  }
}


