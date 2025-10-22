import { Card } from "@/components/ui/card";
import { ChevronRight, HardHat, Hand, Shirt, Footprints, Glasses, Shield, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import type { LucideIcon } from "lucide-react";
import { categoryImages, type CategoryImage } from "@shared/categoryImages";

interface CategoryCardProps {
  name: string;
  icon: string;
  productCount?: number;
  onClick?: () => void;
}

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

function getIconComponent(iconStr: string, categoryName: string): LucideIcon {
  const lowerIcon = iconStr.toLowerCase();
  const lowerName = categoryName.toLowerCase();
  
  if (iconMap[lowerIcon]) return iconMap[lowerIcon];
  
  for (const [key, IconComponent] of Object.entries(iconMap)) {
    if (lowerName.includes(key)) return IconComponent;
  }
  
  return AlertCircle;
}

function getCategoryId(icon: string, categoryName: string): string {
  const lowerIcon = icon.toLowerCase();
  const lowerName = categoryName.toLowerCase();
  
  if (iconMap[lowerIcon]) return lowerIcon;
  
  for (const key of Object.keys(iconMap)) {
    if (lowerName.includes(key)) return key;
  }
  
  return 'helmet';
}

export default function CategoryCard({ name, icon, productCount, onClick }: CategoryCardProps) {
  const IconComponent = getIconComponent(icon, name);
  const categoryId = getCategoryId(icon, name);
  const images: CategoryImage[] = categoryImages[categoryId] || [];

  return (
    <AnimatedCard>
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left focus:outline-none"
        aria-label={`Lihat kategori ${name}`}
        data-testid={`card-category-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Card className="hover-elevate active-elevate-2 cursor-pointer overflow-hidden transition-all duration-300 group">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-foreground" data-testid="text-category-name">
                    {name}
                  </h3>
                  {productCount !== undefined && (
                    <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                      {productCount} produk
                    </p>
                  )}
                </div>
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-muted/30 border border-border/50 group-hover:border-primary/30 transition-colors">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground line-clamp-2 leading-tight">
                      {image.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </Card>
      </button>
    </AnimatedCard>
  );
}
