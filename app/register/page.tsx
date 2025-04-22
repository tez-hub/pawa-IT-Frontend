"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/apiCalls/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      router.push("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4">
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
