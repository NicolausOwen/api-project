const BASE_URL = "https://newsdata.io/api/1/news";
const API_KEY = "pub_53cb897fccf740dfb3ea05ebf7852d8b"; 

export const fetchCryptoNews = async () => {
  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&q=crypto&language=en`);
    const data = await res.json();
    return data?.results || [];
  } catch (error) {
    console.error("Gagal fetch berita:", error);
    return [];
  }
};
