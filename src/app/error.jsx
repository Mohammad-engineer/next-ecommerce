"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-wrapper">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="main">
        <h1>404</h1>
        <p>
          It looks like you're lost...
          <br />
          That's a trouble?
        </p>
        <button onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        } type="button">Go back</button>
      </div>
    </div>
  );
}
