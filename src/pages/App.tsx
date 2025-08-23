import React from "react";
import Hero from "../sections/Hero";
import Details from "../sections/Details";
import RSVP from "../sections/RSVP";
import Gallery from "../sections/Gallery";
import Footer from "../sections/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Details />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  );
}
