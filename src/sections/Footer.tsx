import React from "react";

export default function Footer() {
  return (
    <footer className="pb-16 pt-8 text-center text-sm text-gray-500">
      <p>Made with love for DeAndre’s big day • © {new Date().getFullYear()}</p>
      <p className="mt-1">
        Need help finding the park? Call or text Mom at (555) 123-4567
      </p>
    </footer>
  );
}
