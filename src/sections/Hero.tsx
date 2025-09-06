import React from "react";

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-[url('/public/assets/hero/image.webp')] bg-cover bg-center bg-fixed max-md:bg-bottom max-md:bg-local">
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute -top-24 -left-24 w-96 h-96 text-birthday-pink/40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M36.5,-61.8C45.9,-55.9,52.4,-45.3,59.8,-35C67.2,-24.6,75.5,-14.6,76.7,-3.3C77.9,8,71.9,20.7,64.1,31.8C56.4,42.8,46.9,52.3,36.4,58.9C25.9,65.6,13,69.4,0,69.4C-13,69.4,-26,65.7,-37.8,59C-49.7,52.3,-60.4,42.7,-66.3,31C-72.3,19.2,-73.5,6.4,-71.7,-5.8C-69.9,-18,-65.1,-29.5,-57.9,-37.6C-50.7,-45.7,-40.9,-50.5,-30.7,-57.1C-20.5,-63.8,-10.3,-72.4,0.9,-74C12.1,-75.6,24.3,-70.2,36.5,-61.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="absolute -bottom-24 -right-24 w-96 h-96 text-birthday-grape/40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M39.4,-61.8C50.5,-56.4,59.6,-47.6,65.2,-36.8C70.8,-26,72.9,-13,73.5,0.4C74.1,13.8,73.2,27.6,66.9,38.6C60.6,49.6,48.8,57.8,36.6,63.4C24.4,69,12.2,72,-0.3,72.5C-12.7,73,-25.4,71,-36.7,65.2C-48,59.4,-57.8,49.8,-64.1,38.2C-70.4,26.6,-73.1,13.3,-72.1,0.6C-71.1,-12.2,-67.4,-24.4,-60.7,-34.7C-54,-45,-45.2,-53.1,-34.5,-59.1C-23.8,-65.1,-11.9,-69.6,0.3,-70.1C12.5,-70.5,25,-65.9,39.4,-61.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pt-32 lg:px-8 h-[100dvh] max-h-[1036px] lg:h-[80vh]">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-birthday-grape shadow">
            You're invited!
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-birthday-white">
            Deandre's Birthday Bash
          </h1>
          <p className="mt-6 text-lg font-semibold leading-8 text-neutral-100">
            Join us for a day full of games, cake, and laughter as we celebrate
            Deandre turning 4! Costumes encouraged, smiles required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#rsvp" className="btn btn-primary">
              RSVP Now
            </a>
            <a
              href="#details"
              className="btn bg-white/80 text-birthday-grape ring-1 ring-birthday-grape/30 hover:bg-white"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
