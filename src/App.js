import React, { useState } from "react";

const mockData = [
  {
    id: 1,
    title: "2-комнатная квартира",
    city: "Алматы",
    price: 250000,
    type: "Аренда",
  },
  {
    id: 2,
    title: "Дом с участком",
    city: "Астана",
    price: 450000,
    type: "Аренда",
  },
  {
    id: 3,
    title: "1-комнатная квартира",
    city: "Алматы",
    price: 180000,
    type: "Аренда",
  },
];

export default function RealEstateApp() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const filtered = mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      item.city.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Поиск недвижимости</h1>

      <div className="bg-white p-4 rounded-2xl shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Поиск по названию"
          className="p-2 border rounded-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Город"
          className="p-2 border rounded-xl"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="bg-blue-500 text-white rounded-xl p-2">Найти</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">Город: {item.city}</p>
            <p className="text-gray-600">Тип: {item.type}</p>
            <p className="text-blue-600 font-bold mt-2">{item.price} ₸</p>
            <button className="mt-3 w-full bg-green-500 text-white p-2 rounded-xl">
              Связаться
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
