import { FaFacebookMessenger } from "react-icons/fa";

const MessengerIcon = () => {
  return (
    <a
      href="https://www.messenger.com/?locale=vi_VN" // link Messenger của bạn
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-14 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
      <FaFacebookMessenger size={28} />
    </a>
  );
};

export default MessengerIcon;
