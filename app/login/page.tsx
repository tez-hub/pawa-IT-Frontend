"use client";

import { useEffect, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../apiCalls/api";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.access_token);
      router.push("/");
    } catch (err: any) {
      alert("Login failed: " + (err.message || "Unknown error"));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="border p-2 w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
