import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // In a real implementation, this would send the message to WhatsApp
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  const quickMessages = [
    "Butuh bantuan memilih produk",
    "Tanya tentang pengiriman",
    "Konfirmasi pesanan",
    "Laporan masalah produk"
  ];

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Hubungi kami via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
        </span>
      </button>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <h3 className="font-semibold">Chat dengan Kami</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 focus:outline-none"
                aria-label="Tutup chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-green-100 mt-1">
              Respon cepat • Online 24/7
            </p>
          </div>

          {/* Quick Messages */}
          <div className="p-3 bg-gray-50 border-b">
            <p className="text-xs text-gray-500 mb-2">Pesan cepat:</p>
            <div className="flex flex-wrap gap-2">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMessage(msg);
                    setTimeout(() => {
                      const textarea = document.getElementById("whatsapp-message");
                      if (textarea) textarea.focus();
                    }, 100);
                  }}
                  className="text-xs bg-white border rounded-full px-2 py-1 hover:bg-gray-100 transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4">
            <textarea
              id="whatsapp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pesan Anda..."
              className="w-full h-24 p-3 text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              aria-label="Ketik pesan WhatsApp"
            />
            <div className="flex justify-between items-center mt-3">
              <p className="text-xs text-gray-500">
                Tim kami akan merespon dalam beberapa menit
              </p>
              <Button
                onClick={handleSend}
                disabled={!message.trim()}
                className="bg-green-500 hover:bg-green-600 text-white"
                aria-label="Kirim pesan"
              >
                <Send className="h-4 w-4 mr-1" />
                Kirim
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
