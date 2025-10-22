import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleQuickMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      const textarea = document.getElementById("whatsapp-message") as HTMLTextAreaElement;
      if (textarea) textarea.focus();
    }, 100);
  };

  const quickMessages = [
    "Butuh bantuan memilih produk",
    "Tanya tentang pengiriman",
    "Konfirmasi pesanan",
    "Laporan masalah produk"
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl transition-all focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-label="Hubungi kami via WhatsApp"
        data-testid="button-whatsapp-widget"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="h-8 w-8 text-white" />
        <span className="absolute -top-1 -right-1 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-2 border-white"></span>
        </span>
        
        <motion.div
          className="absolute -top-2 -left-2 bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          Chat Langsung
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <MessageCircle className="h-6 w-6" />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-green-500"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Chat dengan Kami</h3>
                    <p className="text-xs text-green-100 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-200 rounded-full animate-pulse"></span>
                      Online 24/7 • Respon Cepat
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-green-100 focus:outline-none p-1 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Tutup chat"
                  data-testid="button-close-whatsapp"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <p className="text-xs text-gray-600 mb-3 font-medium">Pesan Cepat:</p>
              <div className="flex flex-wrap gap-2">
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickMessage(msg)}
                    className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1.5 hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`button-quick-message-${index}`}
                  >
                    {msg}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="p-5 bg-white">
              <div className="mb-3">
                <label htmlFor="whatsapp-message" className="text-sm font-medium text-gray-700 mb-2 block">
                  Ketik pesan Anda:
                </label>
                <textarea
                  id="whatsapp-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Halo, saya ingin bertanya tentang..."
                  className="w-full h-28 p-3 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  aria-label="Ketik pesan WhatsApp"
                  data-testid="textarea-whatsapp-message"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Tim kami siap membantu
                </p>
                <Button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Kirim pesan"
                  data-testid="button-send-whatsapp"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Kirim
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
