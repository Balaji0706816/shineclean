"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Wrong password. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F7FC] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
          ShineClean Admin
        </p>

        <h1 className="mt-4 text-4xl font-bold text-black">
          Admin Login
        </h1>

        <p className="mt-3 text-gray-600">
          Enter your admin password to access the booking dashboard.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#6C63FF]"
            required
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#6C63FF] py-4 font-bold text-white hover:bg-[#5B52E8]"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}