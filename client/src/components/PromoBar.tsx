import { Truck, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 py-3 text-sm">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Truck className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium">Gratis Ongkir Jabodetabek</span>
            <span className="hidden sm:inline">• Pengiriman Cepat ke Seluruh Indonesia</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Gift className="h-4 w-4" aria-hidden="true" />
            <span className="font-bold">🎉 Promo Spesial 11.11!</span>
            <span className="hidden sm:inline">Diskon hingga 50% untuk pembelian grosir</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
