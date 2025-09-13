import React from "react";

export default function Details() {
  const items = [
    { label: "When", value: "Saturday, Oct 11 • 2:00–5:00 PM" },
    { label: "Where", value: "Blk 22 Lot 16 Deca Homes Phase 1" },
    { label: "Theme", value: "Italian Brainrot!" },
  ];

  return (
    <section id="details" className="relative py-16 sm:py-24 bg-[#030d00]">
      {/* Decorative carousel (XL and up) */}
      <div className="z-0 absolute inset-x-0 max-sm:top-[2rem] top-20 block xl:block h-[26rem] overflow-hidden pointer-events-none">
        <div className="inset-0 will-change-transform animate-[carousel_10s_linear_infinite] flex items-center gap-[6rem] sm:gap-[11rem] md:gap-[17rem] lg:gap-[16rem] xl:gap-24 w-[200%]">
          {/* set A */}
          <div className="flex items-center gap-0 sm:24 w-auto">
            <img
              src="/assets/characters/bombcroc-1.png"
              className="scale-x-[-1] w-96 h-96 object-contain select-none"
              alt=""
            />
            <img
              src="/assets/characters/bombinigusini.png"
              className="w-[26rem] h-[26rem] object-contain select-none"
              alt=""
            />
          </div>
          {/* set B (duplicate for seamless loop) */}
          <div
            className="flex items-center gap-0 sm:24 w-auto"
            aria-hidden="true"
          >
            <img
              src="/assets/characters/bombcroc-1.png"
              className="scale-x-[-1] w-96 h-96 object-contain select-none"
              alt=""
            />
            <img
              src="/assets/characters/bombinigusini.png"
              className="w-[26rem] h-[26rem] object-contain select-none"
              alt=""
            />
          </div>
          <div className="flex items-center gap-0 sm:24 w-auto">
            <img
              src="/assets/characters/bombcroc-1.png"
              className="scale-x-[-1] w-96 h-96 object-contain select-none"
              alt=""
            />
            <img
              src="/assets/characters/bombinigusini.png"
              className="w-[26rem] h-[26rem] object-contain select-none"
              alt=""
            />
          </div>
          {/* set B (duplicate for seamless loop) */}
          <div
            className="flex items-center gap-0 sm:24 w-max"
            aria-hidden="true"
          >
            <img
              src="/assets/characters/bombcroc-1.png"
              className="scale-x-[-1] w-96 h-96 object-contain select-none"
              alt=""
            />
            <img
              src="/assets/characters/bombinigusini.png"
              className="w-[26rem] h-[26rem] object-contain select-none"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative z-1 mx-auto max-w-6xl px-6 lg:px-8 ">
        <h2 className="font-display text-5xl font-extrabold text-birthday-sky neon-sky text-center mt-2 mb-4">
          Party Details
        </h2>
        <p className="mt-2 text-gray-100 mb-8 text-center">
          Everything you need to know for the big day.
        </p>
        <div className="grid gap-6 md:grid-cols-3 max-sm:mt-[120px] mt-[200px]">
          {items.map((it) => (
            <div key={it.label} className="card p-8">
              <div className="text-xl font-semibold text-birthday-grape">
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
            Party Schedule
          </h3>
          <p className="mt-4 text-gray-700">
            Here's a rough outline of how the party will go down:
          </p>
          <ul className="mt-4 grid list-disc gap-2 pl-5 sm:grid-cols-2">
            <li>
              2:00 PM - Kids’ Party Starts: Guests Arrive & Welcome Drinks
            </li>
            <li>2:30 PM - Icebreaker Games</li>
            <li>2:45 PM - Main Activities (Crafts, Games)</li>
            <li>3:15 PM - Birthday Song & Cake Time</li>
            <li>3:20 PM - Food Service for Kids </li>
            <li>3:45 PM - Pabitin, Piñata & Loot Bag Fun</li>
            <li>4:00 PM - End of Kids’ Party, Free Play & Socializing</li>
            <li>5:30 PM - Dinner for Adults</li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>
              Note: Schedule is flexible and may change based on the flow of the
              party.
            </strong>
          </p>
        </div>
        <div className="mt-8 card p-8">
          <h3 className="font-display text-2xl font-extrabold text-birthday-grape">
            Wish List
          </h3>
          <ul className="mt-4 grid list-disc gap-2 pl-5 sm:grid-cols-2">
            <li>Any Lightning Mcqueen or Thomas the Train</li>
            <li>Sando</li>
            <li>Pampers Pants XXL</li>
            <li>Lactacyd Extra Milky</li>
            <li>Coloring and Story Books</li>
            <li>Titanic Toys [current favorite]</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
