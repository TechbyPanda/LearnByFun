'use client';

import { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export default function SearchUserPage() {
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const query = searchText.trim();

    if (!query) {
      setUsers([]);
      setLoading(false);
      setError("");
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        // https://dummyjson.com/docs/users
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data.users);
      } catch (err) {
        if (controller.signal.aborted) return;

        setError("Something went wrong");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.map(user => (
        <p key={user.id}>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
}