import { MessageCircle } from "lucide-react";

const FloatingChat = () => {
  const handleChat = () => {
    // Open WhatsApp chat
    window.open("https://wa.me/918167751151?text=Hi, I'm interested in renting a bike in Digha!", "_blank");
  };

  return (
    <button
      onClick={handleChat}
      className="fixed bottom-24 right-4 z-40 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 animate-bounce-subtle hover:animate-none"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingChat;
