import React from "react";

export default function Details() {
  const items = [
    { label: "When", value: "Saturday, Sept 6 • 2:00–5:00 PM" },
    { label: "Where", value: "Sunshine Park, Picnic Area 3" },
    { label: "Theme", value: "Superhero dress-up!" },
  ];

  return (
    <section id="details" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="card p-8">
              <div className="text-sm font-semibold text-birthday-sky">
                {it.label}
              </div>
              <div className="mt-2 text-xl font-bold text-gray-900">
                {it.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 card p-8">
          <h3 className="font-display text-2xl font-extrabold text-birthday-grape">
            What to bring
          </h3>
          <ul className="mt-4 grid list-disc gap-2 pl-5 sm:grid-cols-2">
            <li>Comfy clothes or a superhero costume</li>
            <li>Sunscreen and a hat</li>
            <li>Reusable water bottle</li>
            <li>Big smiles and energy for games!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
