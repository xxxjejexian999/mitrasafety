import { Truck, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 py-2.5 text-sm">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
              <Truck className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="font-semibold">🚚 Gratis Ongkir Jabodetabek</span>
            <span className="hidden sm:inline text-white/90">• Pengiriman Cepat ke Seluruh Indonesia</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 bg-yellow-400 text-orange-900 px-4 py-1.5 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.5)" }}
          >
            <Sparkles className="h-4 w-4 text-orange-600" aria-hidden="true" />
            <span className="font-bold">🎉 Promo Spesial 11.11!</span>
            <span className="hidden md:inline font-medium">Diskon hingga 50% untuk pembelian grosir 📦</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
