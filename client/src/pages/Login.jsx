import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { useEffect, useState } from "react";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  useEffect(function () {
    document.title = "Login";
    return function () {
      document.title = "BK Connect";
    };
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/v1/api/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      });
      
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-teal-100 h-screen flex items-center justify-center">
      <div className="container bg-white w-[450px] shadow-2xl px-[30px] py-[25px]">
        <Header>Login</Header>
        <form className="mt-[20px]" onSubmit={handleSubmit}>
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
