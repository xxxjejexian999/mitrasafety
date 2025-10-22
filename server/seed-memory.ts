import { storage } from "./storage";
import type { InsertProduct, InsertCategory } from "@shared/schema";

export async function seedMemoryStorage() {
  try {
    console.log("🌱 Starting in-memory storage seeding...");

    const sampleCategories: InsertCategory[] = [
      { id: "helmet", name: "Helm Safety", icon: "🪖", productCount: 0 },
      { id: "gloves", name: "Sarung Tangan", icon: "🧤", productCount: 0 },
      { id: "vest", name: "Rompi Safety", icon: "🦺", productCount: 0 },
      { id: "boots", name: "Sepatu Safety", icon: "👢", productCount: 0 },
      { id: "goggles", name: "Kacamata Pelindung", icon: "🥽", productCount: 0 },
      { id: "mask", name: "Masker & Respirator", icon: "😷", productCount: 0 },
    ];
    
    for (const category of sampleCategories) {
      await storage.createCategory(category);
    }

    const sampleProducts: InsertProduct[] = [
      {
        name: "Helm Safety Proyek MSA V-Gard dengan Ventilasi",
        description: "Helm safety premium dengan teknologi ventilasi terbaik untuk kenyamanan maksimal.",
        price: 125000,
        originalPrice: 175000,
        category: "helmet",
        imageUrl: "/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png",
        images: ["/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Material", value: "ABS High Impact" },
          { label: "Berat", value: "350 gram" },
          { label: "Sertifikasi", value: "SNI, ISO 9001" }
        ],
        protectionLevels: ["impact:composite-shell", "electrical:class-e"],
        complianceStandards: ["SNI 1811:2007", "ANSI Z89.1 Class E"],
        hazardClasses: ["Head Impact", "Electrical Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 220, note: "Target <250KB untuk hero mobile" },
          { format: "WebP", sizeKB: 340, note: "Fallback modern untuk desktop" }
        ],
      },
      {
        name: "Sarung Tangan Safety Premium Anti-Slip",
        description: "Sarung tangan dengan grip anti-slip untuk pekerjaan presisi.",
        price: 45000,
        category: "gloves",
        imageUrl: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
        images: ["/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Kulit Sintetis" },
          { label: "Ukuran", value: "L, XL" }
        ],
        protectionLevels: ["hand:cut-level-a3", "surface:grip-support"],
        complianceStandards: ["ANSI/ISEA 105 A3"],
        hazardClasses: ["Abrasion Hazard", "Oil & Slip Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 95, note: "Foto katalog mobile" },
          { format: "WebP", sizeKB: 140, note: "Fallback browser lama" }
        ],
      },
      {
        name: "Rompi Safety High-Visibility dengan Reflektif",
        description: "Rompi safety dengan strip reflektif untuk visibilitas maksimal.",
        price: 65000,
        originalPrice: 85000,
        category: "vest",
        imageUrl: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
        images: ["/assets/generated_images/Safety_vest_product_photo_f0077f14.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Polyester" },
          { label: "Warna", value: "Orange, Kuning" }
        ],
        protectionLevels: ["visibility:hi-vis-class2"],
        complianceStandards: ["ISO 20471 Class 2"],
        hazardClasses: ["Low-Light Hazard", "Roadway Work Zone"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 80, note: "List produk mobile" },
          { format: "WebP", sizeKB: 130, note: "Fallback universal" }
        ],
      },
      {
        name: "Sepatu Safety Boot Steel Toe Cap",
        description: "Sepatu safety dengan pelindung baja pada ujung kaki.",
        price: 350000,
        category: "boots",
        imageUrl: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
        images: ["/assets/generated_images/Safety_boots_product_photo_a89a15d4.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Kulit Asli" },
          { label: "Sol", value: "Anti-slip Rubber" }
        ],
        protectionLevels: ["impact:steel-toe", "puncture:kevlar-midsole", "surface:slip-resistant"],
        complianceStandards: ["EN ISO 20345 S3", "ASTM F2413 EH"],
        hazardClasses: ["Impact Hazard", "Oil & Slip Hazard", "Electrical Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 260, note: "Foto katalog HD" },
          { format: "WebP", sizeKB: 310, note: "Fallback untuk Safari" }
        ],
      },
      {
        name: "Kacamata Safety Anti-Fog UV Protection",
        description: "Kacamata pelindung dengan teknologi anti-fog dan perlindungan UV.",
        price: 55000,
        originalPrice: 75000,
        category: "goggles",
        imageUrl: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
        images: ["/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png"],
        inStock: true,
        badge: "Promo",
        specifications: [
          { label: "Lensa", value: "Polycarbonate" },
          { label: "Fitur", value: "Anti-Fog, UV400" }
        ],
        protectionLevels: ["vision:anti-fog", "vision:uv-shield"],
        complianceStandards: ["EN 166:2001"],
        hazardClasses: ["Dust & Debris", "UV Exposure"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 70, note: "Thumbnail produk" },
          { format: "WebP", sizeKB: 115, note: "Fallback lintas browser" }
        ],
      },
      {
        name: "Masker N95 Respirator 3M",
        description: "Masker N95 untuk perlindungan pernapasan dari partikel berbahaya.",
        price: 25000,
        category: "mask",
        imageUrl: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
        images: ["/assets/generated_images/Safety_mask_product_photo_5ed8c680.png"],
        inStock: false,
        specifications: [
          { label: "Tingkat Filtrasi", value: "95%" },
          { label: "Standar", value: "N95, NIOSH" }
        ],
        protectionLevels: ["respiratory:n95"],
        complianceStandards: ["NIOSH N95"],
        hazardClasses: ["Dust & Particulate"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 40, note: "Katalog mass upload" },
          { format: "WebP", sizeKB: 65, note: "Fallback minimal" }
        ],
      }
    ];

    for (const product of sampleProducts) {
      await storage.createProduct(product);
    }

    for (const category of sampleCategories) {
      const productCount = sampleProducts.filter(p => p.category === category.id).length;
      await storage.updateCategoryProductCount(category.id, productCount);
    }

    console.log("✅ In-memory storage seeding completed successfully!");
    console.log(`📊 Inserted ${sampleCategories.length} categories and ${sampleProducts.length} products`);

  } catch (error) {
    console.error("❌ Error seeding in-memory storage:", error);
    throw error;
  }
}
