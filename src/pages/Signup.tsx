
import { Link } from "react-router-dom";
import SignupForm from "@/components/Auth/SignupForm";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4">
      <div className="bg-white p-8 w-full max-w-md shadow-sm border">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-display font-bold">NewsUnwrap</h1>
          </Link>
          <div className="nyt-divider max-w-xs mx-auto"></div>
          <h2 className="mt-6 text-3xl font-display text-gray-900">Get started</h2>
          <p className="mt-2 text-gray-600 italic">
            Create an account to personalize your news experience
          </p>
        </div>
        
        <SignupForm />
        
        <p className="mt-8 text-center text-sm text-gray-500">
          By signing up, you agree to NewsUnwrap's{" "}
          <a href="#" className="font-medium text-black hover:underline underline-offset-4">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-black hover:underline underline-offset-4">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
