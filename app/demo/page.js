import React from "react";
import Card from "./Card";

export default function Home() {
  const cards = [
    {
      title: "Terra",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/preview/one.png",
      link: "/one",
    },
    {
      title: "Neon Wave",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/preview/l2.png",
      link: "/l2",
    },
    {
      title: "Black Hole",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/preview/l3.png",
      link: "/l3",
    },
    {
      title: "Aurora",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/preview/l4.png",
      link: "/l4",
    },
    {
      title: "Lumen",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/preview/l5.png",
      link: "/l5",
    },
    {
      title: "Stella",
      tags: ["blog", "personal", "list", "featured"],
      date: "10.01.2025",
      image: "/preview/l6.png",
      link: "/l6",
    },
    {
      title: "Oscura",
      date: "10.01.2025",
      tags: ["blog", "personal", "list", "featured"],
      image: "/preview/l7.png",
      link: "/l7",
    },
    {
      title: "Rivus",
      date: "Coming Soon",
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
