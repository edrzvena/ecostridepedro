import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Heart } from "lucide-react";

export default function EcoStrideHome() {
  const [likedItems, setLikedItems] = useState({});

  const handleLikeToggle = (itemName) => {
    setLikedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 border-b bg-white z-10">
        <div className="text-2xl font-bold text-green-700">EcoStride Pedro</div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="/#" className="hover:text-green-600">Home</a>
          <a href="/#collection" className="hover:text-green-600">Shop</a>
          <a href="/#collection" className="hover:text-green-600">Collection</a>
          <a href="/#about" className="hover:text-green-600">About</a>
        </nav>
        <div className="space-x-4">
          <button aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-6-6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="10" r="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button aria-label="Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-13z" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 items-center bg-gray-50">
        <div>
          <h1 className="text-4xl font-bold mb-4">Eco-Friendly Footwear for Nature Lovers</h1>
          <p className="text-gray-600 mb-6">
            Step into sustainability with our collection of eco-conscious shoes made from recycled materials.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
            Shop Now
          </Button>
        </div>
        <img src="/shoe_main.png" alt="Eco shoe" className="rounded-xl" />
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 text-center bg-white">
        <div>
          <div className="text-green-600 text-3xl mb-2">♻️</div>
          <h3 className="font-semibold text-lg">Sustainable Materials</h3>
          <p className="text-sm text-gray-600">Made from recycled and eco-friendly materials</p>
        </div>
        <div>
          <div className="text-green-600 text-3xl mb-2">🌲</div>
          <h3 className="font-semibold text-lg">Nature Friendly</h3>
          <p className="text-sm text-gray-600">Zero impact on environment production</p>
        </div>
        <div>
          <div className="text-green-600 text-3xl mb-2">💚</div>
          <h3 className="font-semibold text-lg">Comfort First</h3>
          <p className="text-sm text-gray-600">Designed for maximum comfort</p>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="px-8 py-16 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">Featured Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Forest Runner",
              price: "$129.99",
              desc: "Made from recycled materials",
              image: "/shoe1.png",
            },
            {
              name: "Earth Walker",
              price: "$99.99",
              desc: "Cork and recycled canvas",
              image: "/shoe2.png",
            },
            {
              name: "Trail Blazer",
              price: "$159.99",
              desc: "Hemp and bamboo construction",
              image: "/shoe3.png",
            },
          ].map((item, i) => (
            <Card key={i} className="relative transition-transform duration-300 transform hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                className="absolute top-4 right-4 bg-white p-1 rounded-full shadow transition-colors duration-300"
                aria-label={`Add ${item.name} to wishlist`}
                onClick={() => handleLikeToggle(item.name)}
              >
                <Heart className={`w-5 h-5 ${likedItems[item.name] ? "text-red-500" : "text-gray-500"}`} />
              </button>
              <CardContent className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <p className="text-green-600 font-bold mt-2">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section id="about" className="bg-green-50 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <img
            src="/shoe_commitment.png"
            alt="Eco commitment shoes"
            className="rounded-xl w-full h-auto"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Nature</h2>
            <p className="text-gray-600 mb-4">
              Every pair of shoes is crafted with sustainable materials and eco-friendly practices,
              reducing our carbon footprint while delivering premium comfort and style.
            </p>
            <ul className="space-y-2 text-green-700">
              <li>✔️ 100% Recycled packaging</li>
              <li>✔️ Sustainable manufacturing process</li>
              <li>✔️ Tree planting initiative</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Eco-Community</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive updates about our latest collections and sustainability initiatives.
        </p>
        <form className="flex justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
            Subscribe
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">EcoStride</h3>
            <p className="text-gray-400">Sustainable footwear for a better tomorrow.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/#">About Us</a></li>
              <li><a href="/#">Shop</a></li>
              <li><a href="/#">Sustainability</a></li>
              <li><a href="/#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-gray-400">info@ecostride_pedro.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="/#" aria-label="Instagram" className="text-gray-400 hover:text-white">📷</a>
              <a href="/#" aria-label="Facebook" className="text-gray-400 hover:text-white">📘</a>
              <a href="/#" aria-label="Twitter" className="text-gray-400 hover:text-white">🐦</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 text-sm border-t border-gray-700 pt-4">
          © 2025 EcoStride Pedro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
