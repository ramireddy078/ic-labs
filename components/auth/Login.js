"use client";

import React, { useState } from 'react';
import { loginAction } from '@/app/serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const loginHandler = async (e) => {
    e.preventDefault();
    const loginDetails = { email, password };
    console.log(loginDetails);
    try {
      const response = await loginAction(loginDetails);

      if (response.success) {
        router.push("/");
      } else {
        setError("Login failed, please try again");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Log in to your account</h1>
        <form className="space-y-4" onSubmit={loginHandler}>
          {error && <p className="text-red-500">{error}</p>}
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
            Login
          </button>
          <p className="text-center text-xl mt-4 font-semibold">
            Don't have an account?{" "}
            <Link href="/account/register" className='text-blue-600 hover:underline'>
              {/* <a className="text-blue-500 hover:underline">Signup</a> */}
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
