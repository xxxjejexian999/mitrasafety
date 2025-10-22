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
      },
      {
        name: "Helm Safety Kuning Standar Konstruksi",
        description: "Helm safety kuning standar untuk proyek konstruksi dan sipil dengan desain kokoh.",
        price: 85000,
        originalPrice: 110000,
        category: "helmet",
        imageUrl: "/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png",
        images: ["/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png"],
        inStock: true,
        badge: "Promo",
        specifications: [
          { label: "Material", value: "HDPE" },
          { label: "Berat", value: "380 gram" },
          { label: "Sertifikasi", value: "SNI 1811:2007" }
        ],
        protectionLevels: ["impact:hdpe-shell"],
        complianceStandards: ["SNI 1811:2007"],
        hazardClasses: ["Head Impact"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 200, note: "Standard product image" },
          { format: "WebP", sizeKB: 315, note: "Fallback format" }
        ],
      },
      {
        name: "Helm Safety dengan Face Shield Transparan",
        description: "Helm safety lengkap dengan pelindung wajah transparan untuk perlindungan maksimal.",
        price: 195000,
        category: "helmet",
        imageUrl: "/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png",
        images: ["/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Material", value: "ABS + Polycarbonate Shield" },
          { label: "Berat", value: "450 gram" },
          { label: "Face Shield", value: "Dapat Diangkat" }
        ],
        protectionLevels: ["impact:abs-shell", "facial:polycarbonate-shield"],
        complianceStandards: ["SNI 1811:2007", "EN 166"],
        hazardClasses: ["Head Impact", "Facial Debris"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 235, note: "Product with shield" },
          { format: "WebP", sizeKB: 350, note: "Browser fallback" }
        ],
      },
      {
        name: "Helm Safety Ringan Proyek Bangunan",
        description: "Helm safety ultra ringan dengan desain ergonomis untuk kenyamanan sepanjang hari.",
        price: 72000,
        category: "helmet",
        imageUrl: "/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png",
        images: ["/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "HDPE Ultra Light" },
          { label: "Berat", value: "280 gram" },
          { label: "Ventilasi", value: "Tidak Ada" }
        ],
        protectionLevels: ["impact:hdpe-light"],
        complianceStandards: ["SNI 1811:2007"],
        hazardClasses: ["Head Impact"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 185, note: "Lightweight model" },
          { format: "WebP", sizeKB: 295, note: "Standard fallback" }
        ],
      },
      {
        name: "Helm Safety Industri Premium Anti-Static",
        description: "Helm safety premium dengan fitur anti-static untuk lingkungan industri khusus.",
        price: 245000,
        originalPrice: 310000,
        category: "helmet",
        imageUrl: "/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png",
        images: ["/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png"],
        inStock: false,
        specifications: [
          { label: "Material", value: "ABS Anti-Static" },
          { label: "Berat", value: "400 gram" },
          { label: "Fitur", value: "Anti-Static, Ventilasi" }
        ],
        protectionLevels: ["impact:abs-shell", "electrical:anti-static"],
        complianceStandards: ["SNI 1811:2007", "EN 397"],
        hazardClasses: ["Head Impact", "Static Discharge"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 240, note: "Premium industrial" },
          { format: "WebP", sizeKB: 365, note: "High quality fallback" }
        ],
      },
      {
        name: "Helm Safety Tambang dengan Bracket Lampu",
        description: "Helm safety khusus pertambangan dengan bracket lampu kepala terintegrasi.",
        price: 320000,
        category: "helmet",
        imageUrl: "/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png",
        images: ["/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "ABS High Impact" },
          { label: "Berat", value: "420 gram" },
          { label: "Bracket Lampu", value: "Ya, Adjustable" }
        ],
        protectionLevels: ["impact:abs-shell", "mining:lamp-ready"],
        complianceStandards: ["SNI 1811:2007", "EN 397"],
        hazardClasses: ["Head Impact", "Mining Environment"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 250, note: "Mining helmet" },
          { format: "WebP", sizeKB: 375, note: "Standard quality" }
        ],
      },
      {
        name: "Sarung Tangan Kulit Asli Premium Grade A",
        description: "Sarung tangan dari kulit sapi asli grade A untuk ketahanan dan kenyamanan superior.",
        price: 95000,
        originalPrice: 125000,
        category: "gloves",
        imageUrl: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
        images: ["/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Material", value: "Kulit Sapi Asli Grade A" },
          { label: "Ukuran", value: "M, L, XL" },
          { label: "Lapisan", value: "Cotton Lining" }
        ],
        protectionLevels: ["hand:abrasion-a4", "surface:leather-grip"],
        complianceStandards: ["EN 388:2016"],
        hazardClasses: ["Abrasion Hazard", "General Purpose"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 105, note: "Leather gloves" },
          { format: "WebP", sizeKB: 155, note: "Quality image" }
        ],
      },
      {
        name: "Sarung Tangan Cut Resistant Level 5 Anti Sayat",
        description: "Sarung tangan dengan perlindungan maksimal dari sayatan dan goresan tajam.",
        price: 135000,
        category: "gloves",
        imageUrl: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
        images: ["/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png"],
        inStock: true,
        badge: "Promo",
        specifications: [
          { label: "Material", value: "HPPE + Nitrile Coating" },
          { label: "Cut Level", value: "Level 5" },
          { label: "Ukuran", value: "L, XL" }
        ],
        protectionLevels: ["hand:cut-level-a5", "surface:nitrile-coating"],
        complianceStandards: ["EN 388 Level 5", "ANSI/ISEA 105 A5"],
        hazardClasses: ["Cut Hazard", "Sharp Object Handling"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 110, note: "Cut resistant" },
          { format: "WebP", sizeKB: 165, note: "Standard quality" }
        ],
      },
      {
        name: "Sarung Tangan Nitrile Tahan Bahan Kimia",
        description: "Sarung tangan nitrile untuk perlindungan dari bahan kimia dan oli industri.",
        price: 58000,
        category: "gloves",
        imageUrl: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
        images: ["/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Nitrile Rubber" },
          { label: "Ketebalan", value: "0.4mm" },
          { label: "Ukuran", value: "M, L, XL" }
        ],
        protectionLevels: ["hand:chemical-resistant", "surface:oil-proof"],
        complianceStandards: ["EN 374"],
        hazardClasses: ["Chemical Hazard", "Oil Handling"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 90, note: "Chemical gloves" },
          { format: "WebP", sizeKB: 135, note: "Standard image" }
        ],
      },
      {
        name: "Sarung Tangan Las Welding Kulit Tebal",
        description: "Sarung tangan khusus pengelasan dengan kulit tebal tahan panas tinggi.",
        price: 78000,
        originalPrice: 95000,
        category: "gloves",
        imageUrl: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
        images: ["/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png"],
        inStock: false,
        specifications: [
          { label: "Material", value: "Split Leather 1.2mm" },
          { label: "Tahan Panas", value: "Hingga 350°C" },
          { label: "Panjang", value: "35cm" }
        ],
        protectionLevels: ["hand:heat-resistant", "welding:flame-proof"],
        complianceStandards: ["EN 407", "EN 12477"],
        hazardClasses: ["Heat Hazard", "Welding Sparks"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 115, note: "Welding gloves" },
          { format: "WebP", sizeKB: 170, note: "Quality fallback" }
        ],
      },
      {
        name: "Sarung Tangan Latex Disposable 100pcs",
        description: "Sarung tangan latex sekali pakai untuk kebutuhan medis dan laboratorium.",
        price: 45000,
        category: "gloves",
        imageUrl: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
        images: ["/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Natural Latex" },
          { label: "Isi", value: "100 pieces" },
          { label: "Ukuran", value: "S, M, L" }
        ],
        protectionLevels: ["hand:disposable", "medical:latex-barrier"],
        complianceStandards: ["EN 455"],
        hazardClasses: ["Contamination", "Medical Use"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 75, note: "Disposable gloves" },
          { format: "WebP", sizeKB: 120, note: "Simple image" }
        ],
      },
      {
        name: "Rompi Safety Mesh Breathable Udara",
        description: "Rompi safety dengan bahan mesh breathable untuk sirkulasi udara optimal.",
        price: 52000,
        category: "vest",
        imageUrl: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
        images: ["/assets/generated_images/Safety_vest_product_photo_f0077f14.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Mesh Polyester" },
          { label: "Berat", value: "120 gram" },
          { label: "Warna", value: "Orange, Lime" }
        ],
        protectionLevels: ["visibility:hi-vis-class2"],
        complianceStandards: ["ISO 20471 Class 2"],
        hazardClasses: ["Low-Light Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 75, note: "Mesh vest" },
          { format: "WebP", sizeKB: 125, note: "Breathable design" }
        ],
      },
      {
        name: "Rompi Safety dengan Multi Kantong Penyimpanan",
        description: "Rompi safety dilengkapi 6 kantong untuk menyimpan alat kerja dan perlengkapan.",
        price: 98000,
        originalPrice: 130000,
        category: "vest",
        imageUrl: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
        images: ["/assets/generated_images/Safety_vest_product_photo_f0077f14.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Material", value: "Polyester Premium" },
          { label: "Jumlah Kantong", value: "6 kantong" },
          { label: "Reflektif", value: "3M Scotchlite" }
        ],
        protectionLevels: ["visibility:hi-vis-class2", "utility:multi-pocket"],
        complianceStandards: ["ISO 20471 Class 2"],
        hazardClasses: ["Low-Light Hazard", "Tool Carrying"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 95, note: "Multi-pocket vest" },
          { format: "WebP", sizeKB: 145, note: "Detailed image" }
        ],
      },
      {
        name: "Rompi Safety Executive Zipper Premium",
        description: "Rompi safety premium dengan zipper untuk tampilan profesional dan eksekutif.",
        price: 115000,
        category: "vest",
        imageUrl: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
        images: ["/assets/generated_images/Safety_vest_product_photo_f0077f14.png"],
        inStock: true,
        badge: "Promo",
        specifications: [
          { label: "Material", value: "Polyester Premium" },
          { label: "Penutup", value: "Zipper + Velcro" },
          { label: "Warna", value: "Orange, Kuning, Merah" }
        ],
        protectionLevels: ["visibility:hi-vis-class2"],
        complianceStandards: ["ISO 20471 Class 2"],
        hazardClasses: ["Low-Light Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 88, note: "Executive vest" },
          { format: "WebP", sizeKB: 138, note: "Premium quality" }
        ],
      },
      {
        name: "Rompi Safety Night Shift Reflektif Tinggi",
        description: "Rompi safety dengan strip reflektif ekstra lebar untuk kerja malam hari.",
        price: 75000,
        originalPrice: 95000,
        category: "vest",
        imageUrl: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
        images: ["/assets/generated_images/Safety_vest_product_photo_f0077f14.png"],
        inStock: false,
        specifications: [
          { label: "Material", value: "Polyester" },
          { label: "Reflektif", value: "5cm Extra Wide" },
          { label: "Visibilitas", value: "300 meter" }
        ],
        protectionLevels: ["visibility:hi-vis-class3"],
        complianceStandards: ["ISO 20471 Class 3"],
        hazardClasses: ["Night Work", "Low-Light Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 82, note: "Night shift vest" },
          { format: "WebP", sizeKB: 132, note: "High visibility" }
        ],
      },
      {
        name: "Rompi Safety Surveyor Multi-Pocket Profesional",
        description: "Rompi safety khusus surveyor dengan banyak kantong untuk peralatan kerja lapangan.",
        price: 145000,
        category: "vest",
        imageUrl: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
        images: ["/assets/generated_images/Safety_vest_product_photo_f0077f14.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Ripstop Polyester" },
          { label: "Jumlah Kantong", value: "10 kantong" },
          { label: "D-Ring", value: "Ya, untuk Tool Lanyard" }
        ],
        protectionLevels: ["visibility:hi-vis-class2", "utility:surveyor-grade"],
        complianceStandards: ["ISO 20471 Class 2"],
        hazardClasses: ["Low-Light Hazard", "Field Work"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 100, note: "Surveyor vest" },
          { format: "WebP", sizeKB: 150, note: "Professional grade" }
        ],
      },
      {
        name: "Sepatu Safety Ankle Boot Pendek Ringan",
        description: "Sepatu safety model ankle boot yang ringan dan nyaman untuk mobilitas tinggi.",
        price: 285000,
        category: "boots",
        imageUrl: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
        images: ["/assets/generated_images/Safety_boots_product_photo_a89a15d4.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Material", value: "Suede Leather" },
          { label: "Tinggi", value: "Ankle (15cm)" },
          { label: "Berat", value: "1.2kg/pasang" }
        ],
        protectionLevels: ["impact:steel-toe", "surface:slip-resistant"],
        complianceStandards: ["EN ISO 20345 S1P"],
        hazardClasses: ["Impact Hazard", "Slip Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 245, note: "Ankle boot" },
          { format: "WebP", sizeKB: 295, note: "Standard quality" }
        ],
      },
      {
        name: "Sepatu Safety Waterproof Anti Air Basah",
        description: "Sepatu safety waterproof untuk area kerja basah dan kondisi hujan.",
        price: 425000,
        originalPrice: 520000,
        category: "boots",
        imageUrl: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
        images: ["/assets/generated_images/Safety_boots_product_photo_a89a15d4.png"],
        inStock: true,
        badge: "Promo",
        specifications: [
          { label: "Material", value: "Full Grain Leather" },
          { label: "Waterproof", value: "Ya, Membrane" },
          { label: "Sol", value: "PU/Rubber Anti-Slip" }
        ],
        protectionLevels: ["impact:steel-toe", "water:waterproof-membrane", "surface:slip-resistant"],
        complianceStandards: ["EN ISO 20345 S3 WR"],
        hazardClasses: ["Impact Hazard", "Wet Environment", "Slip Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 270, note: "Waterproof boots" },
          { format: "WebP", sizeKB: 325, note: "High quality" }
        ],
      },
      {
        name: "Sepatu Safety Composite Toe Detector Friendly",
        description: "Sepatu safety dengan composite toe cap yang aman untuk metal detector.",
        price: 395000,
        category: "boots",
        imageUrl: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
        images: ["/assets/generated_images/Safety_boots_product_photo_a89a15d4.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "Nubuck Leather" },
          { label: "Toe Cap", value: "Composite (Non-Metal)" },
          { label: "Midsole", value: "Kevlar Anti-Puncture" }
        ],
        protectionLevels: ["impact:composite-toe", "puncture:kevlar-midsole", "detector:non-metal"],
        complianceStandards: ["EN ISO 20345 S3", "ASTM F2413"],
        hazardClasses: ["Impact Hazard", "Airport Security", "Puncture Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 265, note: "Composite toe" },
          { format: "WebP", sizeKB: 320, note: "Premium image" }
        ],
      },
      {
        name: "Sepatu Safety Mining Boot Tambang Tinggi",
        description: "Sepatu safety boot tinggi khusus untuk lingkungan pertambangan ekstrem.",
        price: 485000,
        category: "boots",
        imageUrl: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
        images: ["/assets/generated_images/Safety_boots_product_photo_a89a15d4.png"],
        inStock: false,
        specifications: [
          { label: "Material", value: "Full Grain Leather 2.0mm" },
          { label: "Tinggi", value: "Boot (30cm)" },
          { label: "Fitur", value: "Heat Resistant, Oil Resistant" }
        ],
        protectionLevels: ["impact:steel-toe", "heat:resistant-300c", "surface:oil-resistant"],
        complianceStandards: ["EN ISO 20345 S3 HRO SRA"],
        hazardClasses: ["Impact Hazard", "Mining Environment", "Heat Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 285, note: "Mining boots" },
          { format: "WebP", sizeKB: 340, note: "Heavy duty" }
        ],
      },
      {
        name: "Sepatu Safety Chemical Resistant Tahan Kimia",
        description: "Sepatu safety dengan material tahan bahan kimia untuk industri kimia dan laboratorium.",
        price: 465000,
        originalPrice: 550000,
        category: "boots",
        imageUrl: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
        images: ["/assets/generated_images/Safety_boots_product_photo_a89a15d4.png"],
        inStock: true,
        specifications: [
          { label: "Material", value: "PVC/Nitrile" },
          { label: "Chemical Resistant", value: "Ya, Grade A" },
          { label: "Sol", value: "Nitrile Anti-Chemical" }
        ],
        protectionLevels: ["impact:steel-toe", "chemical:resistant-grade-a", "surface:chemical-proof"],
        complianceStandards: ["EN ISO 20345 S5", "EN 13832"],
        hazardClasses: ["Impact Hazard", "Chemical Hazard", "Laboratory Use"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 275, note: "Chemical resistant" },
          { format: "WebP", sizeKB: 330, note: "Industrial grade" }
        ],
      },
      {
        name: "Kacamata Safety Welding Las Gelap Otomatis",
        description: "Kacamata safety dengan lensa gelap otomatis untuk pengelasan.",
        price: 125000,
        category: "goggles",
        imageUrl: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
        images: ["/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Lensa", value: "Auto-Darkening" },
          { label: "Shade Level", value: "DIN 9-13" },
          { label: "Frame", value: "Nylon Flexible" }
        ],
        protectionLevels: ["vision:auto-darkening", "welding:arc-protection"],
        complianceStandards: ["EN 169", "EN 175"],
        hazardClasses: ["Welding Arc", "UV Exposure"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 85, note: "Welding goggles" },
          { format: "WebP", sizeKB: 130, note: "Specialized equipment" }
        ],
      },
      {
        name: "Kacamata Safety Laboratorium Clear Anti-Scratch",
        description: "Kacamata pelindung jernih untuk laboratorium dengan coating anti-gores.",
        price: 42000,
        category: "goggles",
        imageUrl: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
        images: ["/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png"],
        inStock: true,
        specifications: [
          { label: "Lensa", value: "Clear Polycarbonate" },
          { label: "Coating", value: "Anti-Scratch, Anti-Fog" },
          { label: "Ventilasi", value: "Indirect Vent" }
        ],
        protectionLevels: ["vision:clear-view", "impact:polycarbonate"],
        complianceStandards: ["EN 166:2001"],
        hazardClasses: ["Chemical Splash", "Debris"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 65, note: "Lab goggles" },
          { format: "WebP", sizeKB: 110, note: "Clear image" }
        ],
      },
      {
        name: "Kacamata Safety Sport Style Nyaman Ringan",
        description: "Kacamata safety dengan desain sporty yang ringan dan stylish untuk penggunaan seharian.",
        price: 68000,
        originalPrice: 85000,
        category: "goggles",
        imageUrl: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
        images: ["/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png"],
        inStock: false,
        badge: "Promo",
        specifications: [
          { label: "Lensa", value: "Polycarbonate UV400" },
          { label: "Berat", value: "25 gram" },
          { label: "Desain", value: "Sporty Wraparound" }
        ],
        protectionLevels: ["vision:uv-shield", "impact:lightweight"],
        complianceStandards: ["EN 166:2001", "ANSI Z87.1"],
        hazardClasses: ["UV Exposure", "Dust & Debris"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 72, note: "Sport style" },
          { format: "WebP", sizeKB: 118, note: "Stylish design" }
        ],
      },
      {
        name: "Kacamata Safety Full Seal Goggle Tertutup",
        description: "Kacamata safety full seal dengan penutup penuh untuk perlindungan maksimal dari debu dan cairan.",
        price: 88000,
        category: "goggles",
        imageUrl: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
        images: ["/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png"],
        inStock: true,
        specifications: [
          { label: "Tipe", value: "Full Seal Goggle" },
          { label: "Lensa", value: "Polycarbonate Clear" },
          { label: "Strap", value: "Adjustable Elastic" }
        ],
        protectionLevels: ["vision:full-seal", "liquid:splash-proof"],
        complianceStandards: ["EN 166:2001"],
        hazardClasses: ["Chemical Splash", "Dust Storm", "Liquid Hazard"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 78, note: "Full seal goggle" },
          { format: "WebP", sizeKB: 125, note: "Complete protection" }
        ],
      },
      {
        name: "Kacamata Safety Photochromic Transition Otomatis",
        description: "Kacamata safety dengan lensa photochromic yang berubah warna otomatis sesuai cahaya.",
        price: 165000,
        originalPrice: 205000,
        category: "goggles",
        imageUrl: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
        images: ["/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Lensa", value: "Photochromic Polycarbonate" },
          { label: "Transition", value: "Clear to Dark" },
          { label: "UV Protection", value: "100% UV400" }
        ],
        protectionLevels: ["vision:photochromic", "vision:uv-shield"],
        complianceStandards: ["EN 166:2001", "EN 172"],
        hazardClasses: ["UV Exposure", "Variable Light"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 80, note: "Photochromic lens" },
          { format: "WebP", sizeKB: 128, note: "Transition technology" }
        ],
      },
      {
        name: "Masker KN95 dengan Katup Pernapasan 10pcs",
        description: "Masker KN95 dilengkapi katup pernapasan untuk kenyamanan ekstra saat bekerja lama.",
        price: 55000,
        category: "mask",
        imageUrl: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
        images: ["/assets/generated_images/Safety_mask_product_photo_5ed8c680.png"],
        inStock: true,
        badge: "Promo",
        specifications: [
          { label: "Tingkat Filtrasi", value: "95%" },
          { label: "Katup", value: "Ya, Breathing Valve" },
          { label: "Isi", value: "10 pieces" }
        ],
        protectionLevels: ["respiratory:kn95", "comfort:valve-equipped"],
        complianceStandards: ["GB2626-2019 KN95"],
        hazardClasses: ["Dust & Particulate", "PM2.5"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 48, note: "Valved mask" },
          { format: "WebP", sizeKB: 72, note: "Comfort design" }
        ],
      },
      {
        name: "Respirator Half-Face Reusable dengan Filter",
        description: "Respirator half-face dapat digunakan kembali dengan filter ganda untuk perlindungan optimal.",
        price: 185000,
        originalPrice: 235000,
        category: "mask",
        imageUrl: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
        images: ["/assets/generated_images/Safety_mask_product_photo_5ed8c680.png"],
        inStock: true,
        badge: "Best Seller",
        specifications: [
          { label: "Tipe", value: "Half-Face Reusable" },
          { label: "Filter", value: "Dual P100 Cartridge" },
          { label: "Material", value: "Silicone Face Seal" }
        ],
        protectionLevels: ["respiratory:p100", "reusable:long-term"],
        complianceStandards: ["EN 140", "NIOSH P100"],
        hazardClasses: ["Dust & Particulate", "Organic Vapor"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 95, note: "Half-face respirator" },
          { format: "WebP", sizeKB: 145, note: "Professional grade" }
        ],
      },
      {
        name: "Masker Bedah 3-Ply Disposable 50pcs",
        description: "Masker bedah 3 lapis sekali pakai untuk penggunaan medis dan umum.",
        price: 35000,
        category: "mask",
        imageUrl: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
        images: ["/assets/generated_images/Safety_mask_product_photo_5ed8c680.png"],
        inStock: true,
        specifications: [
          { label: "Lapisan", value: "3-Ply Non-Woven" },
          { label: "BFE", value: ">95%" },
          { label: "Isi", value: "50 pieces" }
        ],
        protectionLevels: ["respiratory:surgical-mask", "medical:disposable"],
        complianceStandards: ["EN 14683 Type IIR"],
        hazardClasses: ["Droplet", "Medical Use"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 38, note: "Surgical mask" },
          { format: "WebP", sizeKB: 60, note: "Medical standard" }
        ],
      },
      {
        name: "Masker P100 Chemical Cartridge Tahan Kimia",
        description: "Masker respirator dengan cartridge P100 untuk perlindungan dari uap kimia berbahaya.",
        price: 325000,
        category: "mask",
        imageUrl: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
        images: ["/assets/generated_images/Safety_mask_product_photo_5ed8c680.png"],
        inStock: false,
        specifications: [
          { label: "Tipe", value: "Full Chemical Respirator" },
          { label: "Cartridge", value: "P100 Multi-Gas" },
          { label: "Protection", value: "Organic Vapor, Acid Gas" }
        ],
        protectionLevels: ["respiratory:p100", "chemical:multi-gas"],
        complianceStandards: ["EN 14387", "NIOSH P100"],
        hazardClasses: ["Chemical Vapor", "Toxic Gas"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 105, note: "Chemical respirator" },
          { format: "WebP", sizeKB: 160, note: "Industrial protection" }
        ],
      },
      {
        name: "Masker Carbon Activated Anti Bau Gas",
        description: "Masker dengan filter karbon aktif untuk menyerap bau dan gas tidak sedap.",
        price: 48000,
        originalPrice: 65000,
        category: "mask",
        imageUrl: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
        images: ["/assets/generated_images/Safety_mask_product_photo_5ed8c680.png"],
        inStock: true,
        specifications: [
          { label: "Filter", value: "Activated Carbon" },
          { label: "Lapisan", value: "5-Layer" },
          { label: "Tipe", value: "Reusable dengan Filter Ganti" }
        ],
        protectionLevels: ["respiratory:carbon-filter", "odor:activated-carbon"],
        complianceStandards: ["EN 149 FFP2"],
        hazardClasses: ["Odor", "Organic Vapor"],
        optimizedMedia: [
          { format: "AVIF", sizeKB: 52, note: "Carbon mask" },
          { format: "WebP", sizeKB: 78, note: "Odor protection" }
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
