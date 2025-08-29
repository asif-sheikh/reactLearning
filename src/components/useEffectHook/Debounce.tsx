import { useEffect, useState } from "react";

export default function Debounce() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        console.log("API Call with:", searchTerm);
      }
    }, 500);

    return () => {
      clearTimeout(handler); // cleanup
    };
  }, [searchTerm]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
