import FeedSection from "@/components/FeedSection";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <hr />

      <Sidebar />
      <FeedSection />
    </div>
  );
}
