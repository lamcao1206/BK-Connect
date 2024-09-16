import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faUserCircle,
  faUser,
  faUserAstronaut,
  faFile,
  faFileArchive,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function ChatMessage() {
  return (
    <div className="container bg-white w-[950px] rounded-md h-[640px] shadow-lg">
      <header className="flex items-center justify-between px-5 py-2 border-b-2 h-16">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUserCircle} size="3x" className="text-blue-500 mr-3 rounded-full" />
          <div>
            <h1 className="font-bold text-lg">User 1</h1>
            <p className="text-green-600">Active now</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="text-blue-500 text-xl px-2 py-2 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full">
            <FontAwesomeIcon icon={faVideo} size="lg" />
          </button>
          <button className="text-blue-500 text-xl px-2 py-2 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full">
            <FontAwesomeIcon icon={faPhone} size="lg" />
          </button>
        </div>
      </header>
      <section className="border-b-2" style={{ height: "calc(100% - 7rem)" }}>
        <p>Hello</p>
      </section>
      <section className="bg-white h-12 rounded-b-md flex items-center px-1">
        <FontAwesomeIcon
          icon={faPaperclip}
          size="lg"
          className="text-blue-500 mr-2 cursor-pointer px-2 py-2 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full"
        />
        <input
          type="text"
          placeholder="Aa"
          className="w-full p-1 pl-4 border border-gray-300 bg-gray-200 rounded-3xl outline-none "
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          size="lg"
          className="text-blue-500 ml-2 cursor-pointer px-2 py-2 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full"
        />
      </section>
    </div>
  );
}
