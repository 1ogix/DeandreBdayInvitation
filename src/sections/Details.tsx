import React from "react";

export default function Details() {
  const items = [
    { label: "When", value: "Saturday, Oct 11 • 2:00–5:00 PM" },
    { label: "Where", value: "Blk 22 Lot 16 Deca Homes Phase 1" },
    { label: "Theme", value: "Italian Brainrot!" },
  ];

  return (
    <section id="details" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold text-birthday-sky text-center mt-2 mb-4">
          Party Details
        </h2>
        <p className="mt-2 text-gray-600">
          Everything you need to know for the big day.
        </p>
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
            Wish List
          </h3>
          <ul className="mt-4 grid list-disc gap-2 pl-5 sm:grid-cols-2">
            <li>Cars theme Clothes</li>
            <li>Kid lunchbox</li>
            <li>Sando</li>
            <li>Pampers Pants XXL</li>
            <li>Lactacyd Extra Milky</li>
            <li>Coloring Books</li>
            <li>Crayons</li>
            <li>Story Books</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
