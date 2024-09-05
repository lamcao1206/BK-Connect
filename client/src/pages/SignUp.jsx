import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { useEffect, useState } from "react";

function InputAvatarField({ label, onChange }) {
  const [image, setImage] = useState(null);
  const [isPreview, setIsPreview] = useState(false);

  // Change the page title when rendering Sign Up page
  useEffect(function () {
    document.title = "Sign Up";
    return function () {
      document.title = "BK Connect";
    };
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const handleTogglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div className="flex flex-col mb-[15px] relative">
      <label className="text-md text-gray-700 font-semibold mb-2">{label}</label>
      <div className="flex justify-center items-center">
        {isPreview && image ? (
          <img src={image} alt="Avatar Preview" className="mt-2 w-24 h-24 rounded-full object-cover" />
        ) : (
          <input
            className="w-full text-md rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        )}
      </div>
      {image && (
        <button type="button" onClick={handleTogglePreview} className="mt-2 text-blue-600 hover:underline">
          {isPreview ? "Change Image" : "Preview Image"}
        </button>
      )}
    </div>
  );
}

export default function SignUp() {
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    setFormInput((data) => ({
      ...data,
      avatar: file,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formInput.email)) {
      setError("Email is not invalid");
    }

    if (!validatePassword(formInput.password)) {
      setError("Password must be at least 6 characters");
    }

    // Create a new FormData, not append 'avatar' key in case undefined (allowed)
    const formData = new FormData();
    Object.entries(formInput).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    if (!error) {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/v1/sign-up", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        if (response.ok) {
          navigate("/login");
        } else {
          let errorMessage = "";
          if (result.errors) {
            Object.entries(result.errors).forEach(([key, value]) => {
              errorMessage += `${key}: ${value}\n`;
            });
          }
          setError(errorMessage || "An error occurred during sign up.");
        }
      } catch (error) {
        console.log("Caught error:", error);
        // Handle network or other unexpected errors
        setError(error.message || "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="bg-teal-100 h-screen flex items-center justify-center">
      <div className="container bg-white w-[450px] shadow-2xl px-[30px] py-[25px]">
        <Header>Sign up</Header>
        {error && (
          <div className=" bg-red-200 p-2 rounded-md border-red-300 mt-3">
            <span className="font-semibold">Error:</span> {error}
          </div>
        )}
        <form className="mt-[20px]" onSubmit={handleSubmit} encType="multipart/form-data">
          <InputField
            label="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formInput.username}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formInput.email}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formInput.password}
            onChange={handleChange}
            required={true}
          />
          <InputAvatarField label="Avatar" onChange={handleImageChange} />
          <Button type="submit" text={isLoading ? "Loading..." : "Sign up"} />
        </form>
        <p className="text-lg text-center mt-4">
          Have an account?{" "}
          <Link className="text-blue-600 hover:underline" to="/login">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}
