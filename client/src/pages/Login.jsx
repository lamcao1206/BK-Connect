import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { useEffect } from "react";

export default function Login() {
  useEffect(function () {
    document.title = "Login";
    return function () {
      document.title = "BK Connect";
    };
  }, []);

  return (
    <div className="bg-teal-100 h-screen flex items-center justify-center">
      <div className="container bg-white w-[450px] shadow-2xl px-[30px] rounded-2xl py-[25px]">
        <Header />
        <form className="mt-[20px]">
          <InputField label="Username" type="text" placeholder="Enter your username" />
          <InputField label="Password" type="password" placeholder="Enter your password" />
          <Button type="submit" text="Login" />
        </form>
        <p className="text-lg text-center mt-4">
          Do not have an account?{" "}
          <Link className="text-blue-600 hover:underline" to="/sign-up">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
