import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CryptoNews from '../pages/CryptoNews'
import Cryptocurrencies from '../pages/Cryptocurrencies'

export default function AppRoutes() {
  return (
    <main className="min-h-screen">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<CryptoNews />} />
            <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
        </Routes>

    </main>
  )
}
