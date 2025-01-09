import React from "react";
import Card from "./Card";

export default function Home() {
  const cards = [
    {
      title: "Terra",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/one.png",
      link: "https://www.google.com",
    },
    {
      title: "Aurora",
      date: "Coming Soon",
      tags: [],
      link: null, // No link for "Coming Soon"
    },
    {
      title: "Lumen",
      date: "25.01.2025",
      tags: [],
      link: null,
    },
    {
      title: "Stella",
      date: "10.02.2025",
      tags: [],
      link: null,
    },
    {
      title: "Oscura",
      date: "Coming Soon",
      tags: [],
      link: null, // No link for "Coming Soon"
    },
    {
      title: "Rivus",
      date: "10.03.2025",
      tags: [],
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
