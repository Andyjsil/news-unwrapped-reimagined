
import { Link } from "react-router-dom";
import LoginForm from "@/components/Auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-12 px-4">
      <div className="text-center mb-8">
        <Link to="/" className="inline-block">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500">NewsUnwrap</h1>
        </Link>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-gray-600">
          Log in to access your personalized news experience
        </p>
      </div>
      
      <LoginForm />
      
      <p className="mt-8 text-center text-sm text-gray-500">
        By continuing, you agree to NewsUnwrap's{" "}
        <a href="#" className="font-medium text-green-600 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="font-medium text-green-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}
