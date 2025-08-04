import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";

// Dynamically determine backend URL (localhost or GitHub Pages)
const API_BASE_URL =
   "http://localhost:5000";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      console.log(response.json);
      const data = await response.json();

      if (response.ok) {
        alert("🎉 Account created successfully!");
        
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Failed to sign up. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0d0d1f] to-[#1a1a2e] text-white px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Create Account 🪄
      </h1>
      <p className="text-lg mb-8 text-gray-400 text-center">
        Join the ZenYukti community
      </p>

      <div className="w-full max-w-md space-y-5 bg-[#111827] p-8 rounded-2xl shadow-lg shadow-violet-800/20">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <div className="flex items-center bg-[#1f2937] rounded-md px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">Password</label>
          <div className="flex items-center bg-[#1f2937] rounded-md px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>
        </div>

        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-800/40"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-700" />
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-700" />
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </Button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
