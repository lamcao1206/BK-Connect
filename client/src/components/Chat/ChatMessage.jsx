import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faUserCircle, faPaperclip, faPaperPlane, faImage } from "@fortawesome/free-solid-svg-icons";

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
          <button className="text-blue-500 text-xl p-4 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full">
            <FontAwesomeIcon icon={faVideo} size="md" />
          </button>
          <button className="text-blue-500 text-xl p-4 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full">
            <FontAwesomeIcon icon={faPhone} size="md" />
          </button>
        </div>
      </header>
      <section className="border-b-2 p-3 overflow-y-auto" style={{ height: "calc(100% - 7rem)" }}>
        <div className="text-white bg-blue-500 flex justify-end w-3/4 rounded-s-md rounded-tr-md ml-auto mb-4">
          <p className="break-normal px-[16px] py-[8px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim unde esse corrupti eum in
            praesentium aliquam debitis minima eaque quam, dignissimos dolorem quasi numquam omnis doloremque
            consectetur nam itaque?
          </p>
        </div>
        <div className=" flex justify-start w-3/4 mr-auto mb-4 items-end">
          <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-blue-500 mr-3 rounded-full" />
          <p className="break-normal px-[16px] py-[8px] bg-gray-200 rounded-e-md rounded-tl-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim unde esse corrupti eum in
            praesentium aliquam debitis minima eaque quam, dignissimos dolorem quasi numquam omnis doloremque
            consectetur nam itaque?
          </p>
        </div>
      </section>
      <section className="bg-white h-12 rounded-b-md flex items-center px-1">
        <FontAwesomeIcon
          icon={faImage}
          size="lg"
          className="text-blue-500 mr-2 cursor-pointer px-2 py-2 hover:text-gray-100 hover:bg-blue-500 hover:rounded-full"
        />
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
