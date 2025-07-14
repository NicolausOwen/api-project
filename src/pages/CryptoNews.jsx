import { useEffect, useState } from "react";
import { fetchCryptoNews } from "../services/newsdata";

export default function CryptoNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchCryptoNews();
      setArticles(data);
    };
    getNews();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Berita Crypto Terbaru</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded transition bg-gray-800 text-white"
          >
            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.pubDate}</p>
            <p className="text-sm mt-2">{item.description?.slice(0, 120)}...</p>
          </a>
        ))}
      </div>
    </div>
  );
}
