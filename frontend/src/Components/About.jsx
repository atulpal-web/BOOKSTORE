import React from "react";

export default function About() {
  return (
    <div className="container py-5">

      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Us</h1>
        <p className="text-muted">
          Welcome to <strong>BookNest</strong> – your cozy digital library.
        </p>
      </div>

      {/* Row 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Our Story"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Story</h3>
          <p className="text-muted">
            We started this bookstore with a simple dream – to make books easily
            available for everyone. From timeless classics to the latest
            bestsellers, our collection is curated with love.
          </p>
        </div>
      </div>

      {/* Row 2 (Zig Zag) */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Our Mission"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Mission</h3>
          <p className="text-muted">
            We aim to inspire the habit of reading by offering a platform where
            every reader can discover something new. Our goal is to make reading
            fun, affordable, and accessible.
          </p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Our Vision"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Vision</h3>
          <p className="text-muted">
            To create a community where stories connect people. We believe every
            book has the power to change someone’s world – and we’re here to
            bring those stories closer to you.
          </p>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="text-center mt-5">
        <blockquote className="blockquote">
          <p className="mb-0 fst-italic text-secondary">
            "A reader Know a thousand Knowledge before he dies."
          </p>
          <footer className="blockquote-footer">Pal Atul S</footer>
        </blockquote>
      </div>
    </div>
  );
}
