import React, { useState } from "react";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("yes");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, attending, note }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="rsvp" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="card p-8">
          <h2 className="font-display text-3xl font-extrabold text-birthday-pink">
            RSVP
          </h2>
          <p className="mt-2 text-gray-600">Let us know if you can make it!</p>
          {!submitted ? (
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm font-semibold text-gray-700">
                  Your Name
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-xl border border-gray-300 bg-white/80 px-4 py-2.5 shadow-sm outline-none focus:ring-2 focus:ring-birthday-pink/50"
                />
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-semibold text-gray-700">
                  Will you attend?
                </span>
                <select
                  value={attending}
                  onChange={(e) => setAttending(e.target.value)}
                  className="rounded-xl border border-gray-300 bg-white/80 px-4 py-2.5 shadow-sm outline-none focus:ring-2 focus:ring-birthday-pink/50"
                >
                  <option value="yes">Yes, we’ll be there!</option>
                  <option value="no">Sorry, can’t make it</option>
                </select>
              </label>

              <label className="grid gap-1">
                <span className="text-sm font-semibold text-gray-700">
                  Notes (allergies, requests)
                </span>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="rounded-xl border border-gray-300 bg-white/80 px-4 py-2.5 shadow-sm outline-none focus:ring-2 focus:ring-birthday-pink/50"
                />
              </label>

              <button
                className="btn btn-primary w-full sm:w-auto"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send RSVP"}
              </button>
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </form>
          ) : (
            <div className="mt-6 rounded-2xl bg-green-50 p-4 text-green-800">
              Thanks{name ? `, ${name}` : ""}! We got your RSVP. See you soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
