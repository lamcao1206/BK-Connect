import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ChatFeed() {
  return (
    <div className="container bg-white w-[350px] rounded-md h-[640px] shadow-2xl">
      <header className="flex justify-between items-center px-5 py-3">
        <h1 className="text-3xl font-semibold">Chats</h1>
        <button className="text-blue-500 hover:text-gray-200 hover:bg-blue-500 p-2 rounded-full">
          <FontAwesomeIcon icon={faUsers} size="lg" />
        </button>
      </header>
      <form className="relative px-5 py-2">
        <input
          type="text"
          placeholder="Search messages"
          className="p-2 pl-10 w-full outline-none underline-none bg-gray-100 focus:bg-gray-200 focus:shadow-sm rounded-md"
        />
        <span className="absolute left-7 top-1/2 transform -translate-y-1/2 text-blue-500">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
      <ul className="overflow-y-auto h-[500px] scrollbar-hide px-5 py-1">
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
        <li className="flex items-center p-2 hover:bg-gray-200 rounded-md">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <span className="font-bold text-lg">User 1</span>
            <p className="text">This is text message</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
