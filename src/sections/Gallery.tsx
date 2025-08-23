import React from "react";

const images = Array.from({ length: 8 }).map(
  (_, i) => `https://picsum.photos/seed/kids-${i}/600/400`
);

export default function Gallery() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold text-birthday-sky">
          Sneak Peek
        </h2>
        <p className="mt-2 text-gray-600">
          A colorful moodboard for the big day.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Party moodboard"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
