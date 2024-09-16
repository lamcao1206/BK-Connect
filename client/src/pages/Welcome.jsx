import { useNavigate } from "react-router-dom";
import Button from "../components/Authentication/Button";

function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BK Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center font-product-sans">
      <div className="w-full flex justify-around items-center">
        <div className="flex justify-center items-start">
          <img src="/welcome.jpg" style={{ width: "500px" }} />
        </div>
        <div className="w-2/6 ml-0">
          <h1 className="text-7xl inline text-blue-600">BK Connect</h1>
          <p className="font-roboto text-xl text-gray-500 mt-5 mb-5">
            A multi - platform chat application designed for students of Ho Chi Minh University of Technology (BKU)
          </p>
          <div className="w-40">
            <Button type="submit" text={"Get started"} color="bg-green-600" onClick={handleClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
