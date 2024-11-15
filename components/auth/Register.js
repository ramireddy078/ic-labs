"use client";

import React, { useState } from "react";
import { registerAction } from "@/app/serverActions/registerAction";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const registerHandler = async (e) => {
    e.preventDefault();
    const registerDetails = { username, email, password };
    console.log("this is register details", registerDetails);
    try {
      await registerAction(registerDetails);
      router.push("/login");
      alert("User Registered successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-indigo-700 font-bold mb-6 text-center">
          Create your account
        </h1>
        <form className="space-y-4" onSubmit={registerHandler}>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
          <p className="text-center text-xl mt-4 font-semibold">
            Already Registered?{" "}
            <Link
              href="/account/login/"
              className="text-blue-600 hover:underline"
            >
              {/* <a className="text-blue-500 hover:underline">Login</a> */}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
