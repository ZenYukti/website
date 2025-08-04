import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc"; 
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0d0d1f] to-[#1a1a2e] text-white px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
        Welcome Back 👋
      </h1>
      <p className="text-lg mb-8 text-gray-400 text-center">
        Log in to your ZenYukti account
      </p>

      <div className="w-full max-w-md space-y-5 bg-[#111827] p-8 rounded-2xl shadow-lg shadow-violet-800/20">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <div className="flex items-center bg-[#1f2937] rounded-md px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@domain.com"
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
              placeholder="••••••••"
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-400">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-purple-600" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:text-purple-400">Forgot Password?</a>
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-800/40">
          Login
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
          Sign in with Google
        </Button>

        <p className="text-sm text-center text-gray-500 mt-6">
  Don’t have an account?{" "}
  <Link to="/signup" className="text-purple-400 hover:underline">Sign Up</Link>
</p>
      </div>
    </div>
  );
}
