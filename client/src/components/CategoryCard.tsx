import { Card } from "@/components/ui/card";
import { ChevronRight, HardHat, Hand, Shirt, Footprints, Glasses, Shield, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: string;
  productCount?: number;
  onClick?: () => void;
}

// Mapping dari icon string/nama kategori ke Lucide icons
// Mapping from icon string/category name to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  "helmet": HardHat,
  "helm": HardHat,
  "gloves": Hand,
  "sarung": Hand,
  "vest": Shirt,
  "rompi": Shirt,
  "boots": Footprints,
  "sepatu": Footprints,
  "goggles": Glasses,
  "kacamata": Glasses,
  "mask": Shield,
  "masker": Shield,
};

// Fungsi untuk mendapatkan icon yang sesuai
// Function to get the appropriate icon
function getIconComponent(iconStr: string, categoryName: string): LucideIcon {
  const lowerIcon = iconStr.toLowerCase();
  const lowerName = categoryName.toLowerCase();
  
  // Coba match dengan icon string
  // Try to match with icon string
  if (iconMap[lowerIcon]) return iconMap[lowerIcon];
  
  // Coba match dengan bagian dari nama kategori
  // Try to match with part of category name
  for (const [key, IconComponent] of Object.entries(iconMap)) {
    if (lowerName.includes(key)) return IconComponent;
  }
  
  // Default fallback
  return AlertCircle;
}

export default function CategoryCard({ name, icon, productCount, onClick }: CategoryCardProps) {
  const IconComponent = getIconComponent(icon, name);
  return (
    <AnimatedCard>
      {/*
        Gunakan elemen <button> untuk kartu yang dapat diklik demi aksesibilitas yang lebih baik.
        Ini memastikan pengguna keyboard dan pembaca layar dapat berinteraksi dengannya dengan benar.
        Elemen ini sengaja dibuat tidak fokus untuk pengalaman visual yang lebih baik, di mana fokus akan ditangani oleh elemen anak.
        Use a <button> element for the clickable card for better accessibility.
        This ensures keyboard users and screen readers can interact with it correctly.
        The element is intentionally unfocused for a better visual experience, where focus will be handled by child elements.
      */}
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left focus:outline-none"
        aria-label={`Lihat kategori ${name}`}
        data-testid={`card-category-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Card
          className="hover-elevate active-elevate-2 cursor-pointer overflow-hidden transition-shadow"
        >
          <div className="flex items-center gap-4 p-4">
            {/* Ikon kategori dengan label aksesibilitas - Category icon with accessibility label */}
            <motion.div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />
            </motion.div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground" data-testid="text-category-name">
                {name}
              </h3>
              {productCount !== undefined && (
                <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                  {productCount} produk
                </p>
              )}
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>
        </Card>
      </button>
    </AnimatedCard>
  );
}
