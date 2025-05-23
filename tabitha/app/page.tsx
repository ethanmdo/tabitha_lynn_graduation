"use client";

import React from "react";
import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-brown-50">
      <Navbar />
      <Hero />
    </main>
  );
}
