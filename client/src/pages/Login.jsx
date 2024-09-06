import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { useEffect, useState } from "react";
import authUtil from "../utils/auth.utils.js";

export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(function () {
    document.title = "Login";
    return function () {
      document.title = "BK Connect";
    };
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      authUtil.setToken(data.token);
      navigate("/");
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
        {error && (
          <div className=" bg-red-200 p-2 rounded-md border-red-300 mt-3">
            <span className="font-semibold">Error:</span> {error}
          </div>
        )}
        <form className="mt-[20px]" onSubmit={handleSubmit}>
          <InputField
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            onChange={handleInput}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleInput}
          />
          <Button type="submit" text={isLoading ? "Loading..." : "Login"} />
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
