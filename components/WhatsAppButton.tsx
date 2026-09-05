import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      // TODO: replace with your real WhatsApp link, e.g. https://wa.me/44XXXXXXXXXX
      href="https://wa.me/YOUR_PHONE_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)]"
    >
      <MessageCircle size={26} className="text-white" strokeWidth={2} />
    </a>
  );
}
