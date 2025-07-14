export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", label: "Twitter" },
    { href: "#", label: "GitHub" },
    { href: "#", label: "Website" },
    { href: "#", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", path: "/",},
    { name: "Crypto News", path: "/news"},
    { name: "Crypto Lists", path: "/cryptocurrencies"},
    { name: "Market Trends", path: "/trends" }
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <span className="text-white text-xl">CryptoHub</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Website terpercaya untuk mendapatkan informasi terkini tentang cryptocurrency, 
              analisis pasar, dan berita crypto terbaru.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
                >
                  <span className="group-hover:text-blue-400"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} CryptoHub. By Nicolaus Owen Marvell.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-xs">
                Not actual financial advice only for learning purposes. Trade at your own risk.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
      </div>
    </footer>
  );
}