# Mitra Safety Indonesia - Toko Online Perlengkapan Keselamatan Kerja

## Tentang Proyek

Mitra Safety Indonesia adalah platform e-commerce terlengkap untuk perlengkapan keselamatan kerja (Alat Pelindung Diri / APD) di Indonesia. Website ini menyediakan solusi keselamatan kerja untuk belanja retail maupun kebutuhan korporat dengan katalog produk lengkap dan sistem pemesanan yang mudah.

## Fitur Utama

### 🛒 Platform E-Commerce Lengkap
- **Katalog Produk Komprehensif**: 36 produk safety terbagi dalam 6 kategori utama
- **Sistem Keranjang Belanja**: Pengelolaan keranjang dengan perhitungan otomatis
- **Proses Checkout**: Form pemesanan lengkap dengan validasi
- **Filter & Pencarian**: Pencarian produk dengan filter kategori, harga, dan ketersediaan
- **Detail Produk**: Modal detail dengan spesifikasi lengkap dan informasi kepatuhan standar

### 🎯 Segmentasi Pasar
- **Belanja Retail**: Untuk pembelian individual dan skala kecil
- **Solusi Korporat**: Paket khusus untuk kebutuhan perusahaan dan proyek besar

### 📱 Antarmuka Modern & Responsif
- Desain yang bersih dan profesional
- Navigasi yang intuitif dengan ikon kategori
- Promo banner untuk penawaran spesial
- Optimasi untuk perangkat mobile dan desktop

## Struktur Kategori Produk

Setiap kategori memiliki **6 produk** dengan berbagai pilihan spesifikasi, harga, dan ketersediaan:

### 🪖 Helm Safety (6 produk)
Perlindungan kepala untuk berbagai jenis pekerjaan konstruksi dan industri
- Helm MSA V-Gard dengan ventilasi
- Helm Proyek 3M kuning
- Helm industri Honeywell
- Helm tambang Bullard
- Helm konstruksi ekonomis
- Helm climbing JSP (stok habis)

### 🧤 Sarung Tangan (6 produk)
Sarung tangan pelindung untuk berbagai aplikasi kerja
- Sarung tangan anti-slip premium
- Sarung tangan las kulit
- Sarung tangan nitril tahan kimia
- Sarung tangan mekanik MaxiFlex
- Sarung tangan katun
- Sarung tangan anti-potong Kevlar (stok habis)

### 🦺 Rompi Safety (6 produk)
Rompi high-visibility untuk visibilitas maksimal
- Rompi reflektif high-visibility
- Rompi mesh berventilasi
- Rompi surveyor multi-kantong
- Jaket safety waterproof
- Rompi LED malam hari
- Vest safety ekonomis (stok habis)

### 👢 Sepatu Safety (6 produk)
Sepatu pelindung dengan berbagai tingkat perlindungan
- Sepatu steel toe cap
- Sepatu sport safety ringan
- Boot tinggi tahan air
- Sepatu boot industri berat
- Sepatu safety kulit
- Sepatu anti-statis ESD (stok habis)

### 🥽 Kacamata Pelindung (6 produk)
Perlindungan mata untuk berbagai hazard
- Kacamata anti-fog UV protection
- Kacamata las gelap
- Goggles kimia anti-splash
- Kacamata safety clear
- Kacamata sport protective
- Face shield full protection (stok habis)

### 😷 Masker & Respirator (6 produk)
Perlindungan pernapasan dari partikel dan gas berbahaya
- Masker N95 3M
- Respirator half-face
- Masker bedah medis
- Respirator full-face kimia
- Masker debu P2
- Masker karbon aktif organik (stok habis)

## Log Perubahan & Implementasi

### Migrasi Database (22 Oktober 2025)

#### 1. Perubahan Sistem Penyimpanan
**Sebelum**: Menggunakan MySQL database dengan Drizzle ORM
**Sesudah**: Implementasi In-Memory Storage untuk deployment yang lebih sederhana

**Alasan Perubahan**:
- Menghilangkan ketergantungan pada MySQL server eksternal
- Mempercepat development dan testing
- Menyederhanakan deployment tanpa konfigurasi database tambahan
- Mengatasi error koneksi MySQL (ECONNREFUSED pada port 3306)

**Detail Teknis**:
- Dibuat class `MemStorage` yang mengimplementasikan interface `IStorage`
- Semua operasi CRUD tetap konsisten dengan interface yang sama
- Storage menggunakan array in-memory untuk users, products, categories, dan orders
- Seed data otomatis dijalankan saat server startup

#### 2. Sistem Seed Data Baru
**File**: `server/seed-memory.ts`

**Konten Seed**:
- 6 kategori produk dengan ikon emotikon yang profesional
- 36 produk lengkap dengan spesifikasi detail
- Semua deskripsi dalam Bahasa Indonesia
- Variasi harga dari Rp 20.000 - Rp 500.000
- 11 produk dengan harga diskon (originalPrice)
- 7 produk dengan badge "Best Seller" atau "Promo"
- 6 produk ditandai sebagai stok habis untuk realisme

### Ekspansi Katalog Produk

#### Penambahan Gambar Produk
**Lokasi**: `attached_assets/generated_images/`

**Gambar yang Digunakan**:
1. `Red_safety_helmet_product_photo_b5570fe7.png` - Helm merah
2. `Yellow_hard_hat_product_photo_a25e423f.png` - Helm kuning
3. `Yellow_safety_gloves_product_photo_58de2dd7.png` - Sarung tangan kuning
4. `Safety_vest_product_photo_f0077f14.png` - Rompi safety
5. `Safety_boots_product_photo_a89a15d4.png` - Sepatu safety
6. `Safety_goggles_product_photo_3808d9b3.png` - Kacamata pelindung
7. `Safety_mask_product_photo_5ed8c680.png` - Masker N95
8. `Indonesian_worker_safety_hero_image_db7e2279.png` - Hero image

**Strategi Penggunaan Gambar**:
- Gambar digunakan untuk produk utama di setiap kategori
- Gambar yang sama digunakan untuk variasi produk sejenis (berbeda spesifikasi/warna)
- Total coverage: semua 36 produk memiliki gambar representatif

#### Detail Produk yang Ditambahkan

Setiap produk mencakup informasi lengkap:
- **Nama Produk**: Deskriptif dalam Bahasa Indonesia
- **Deskripsi**: Penjelasan singkat fitur utama
- **Harga**: Dalam Rupiah (IDR)
- **Harga Asli** (opsional): Untuk produk diskon
- **Kategori**: Link ke kategori induk
- **Gambar URL**: Path ke gambar produk
- **Status Stok**: In-stock atau habis
- **Badge** (opsional): "Best Seller" atau "Promo"
- **Spesifikasi**: Array detail teknis (material, berat, ukuran, dll)
- **Protection Levels**: Tingkat perlindungan (impact, cut, chemical, dll)
- **Compliance Standards**: Standar kepatuhan (SNI, ISO, ANSI, EN, dll)
- **Hazard Classes**: Jenis bahaya yang dilindungi
- **Optimized Media**: Info optimasi gambar (AVIF, WebP)

### Pembaruan Navigasi & Layout

#### Navigasi Kategori
**Desain Sebelumnya**: Navigasi kategori standar
**Desain Sekarang**: Navigasi horizontal dengan ikon emotikon

**Label Navigasi**:
- 🪖 Helm Safety - Kategori helm pelindung kepala
- 🧤 Sarung Tangan - Kategori sarung tangan pelindung
- 🦺 Rompi - Kategori rompi high-visibility
- 👢 Sepatu Safety - Kategori sepatu pelindung kaki
- 🥽 Kacamata - Kategori pelindung mata
- 😷 Masker - Kategori pelindung pernapasan

**Fungsi Navigasi**:
- Klik kategori untuk filter produk otomatis
- Visual feedback saat kategori aktif
- Responsif untuk mobile dan desktop

#### Sistem Emotikon/Ikon

**Pendekatan**: Menggunakan emoji Unicode native untuk konsistensi dan kualitas

**Alasan Pemilihan**:
- ✅ **Kualitas Tinggi**: Emoji Unicode selalu tajam di semua resolusi
- ✅ **Konsistensi**: Tampilan seragam di berbagai perangkat
- ✅ **Profesional**: Emoji dipilih yang relevan dengan industri safety
- ✅ **Performa**: Tidak memerlukan file gambar tambahan
- ✅ **Aksesibilitas**: Dukungan screen reader yang baik

**Emotikon yang Dipilih**:
- 🪖 Helm militer - Merepresentasikan helm safety/hard hat
- 🧤 Sarung tangan - Universal untuk hand protection
- 🦺 Rompi safety - Langsung menunjukkan high-vis vest
- 👢 Sepatu boot - Merepresentasikan safety footwear
- 🥽 Goggles - Jelas untuk eye protection
- 😷 Masker medis - Universal untuk respiratory protection

#### Struktur Layout Halaman

**Hero Section**:
- Background image: Pekerja Indonesia dengan APD lengkap
- Headline besar: "Perlengkapan Keselamatan Kerja Terlengkap untuk Indonesia"
- Subheadline: Informasi 500+ perusahaan percaya dan solusi B2C/B2B
- CTA buttons: "Belanja Retail" dan "Solusi Korporat"

**Promo Bar** (Top of page):
- 🚚 Gratis Ongkir Jabodetabek
- Pengiriman Cepat ke Seluruh Indonesia
- 💛 Promo Spesial 11.11! Diskon hingga 50%

**Category Navigation**:
- Sticky navigation dengan kategori horizontal
- Ikon dan label untuk setiap kategori
- Smooth scroll ke section produk

**Product Grid**:
- Responsive grid layout (1-4 kolom tergantung screen size)
- Product cards dengan gambar, nama, harga, badge
- Filter sidebar untuk pencarian advanced
- Loading skeleton saat fetch data

**Footer**:
- Informasi perusahaan
- Link navigasi penting
- Kontak dan social media

### Konfigurasi Workflow & Deployment

#### Development Workflow
**Nama**: Server
**Command**: `npm run dev`
**Port**: 5000
**Status**: ✅ Running

**Fitur Development**:
- Hot Module Replacement (HMR) dengan Vite
- Auto-restart saat code changes
- Console logging untuk API requests
- Browser console integration

#### Deployment Configuration
**Target**: Autoscale
**Build Command**: `npm run build`
**Start Command**: `npm run start`

**Optimasi Deployment**:
- In-memory storage untuk stateless deployment
- Automatic seed data initialization
- No external database dependencies
- Fast cold start times

## Teknologi yang Digunakan

### Backend
- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Storage**: In-Memory Storage (MemStorage)
- **Validation**: Zod dengan Drizzle-Zod
- **TypeScript**: Full type safety

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: Wouter
- **State Management**: 
  - Zustand (cart & product state)
  - TanStack Query v5 (server state)
- **UI Library**: Shadcn/UI + Radix UI
- **Styling**: Tailwind CSS + CSS Variables
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React

### Development Tools
- **Language**: TypeScript
- **Package Manager**: npm
- **Process Manager**: tsx (TypeScript executor)
- **Environment**: cross-env untuk cross-platform compatibility

## Struktur Project

```
workspace/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── pages/            # Page components
│   │   ├── stores/           # Zustand stores
│   │   ├── lib/              # Utilities
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Global styles
│   └── index.html
├── server/                    # Backend Express application
│   ├── storage.ts            # Storage interface & implementations
│   ├── seed-memory.ts        # In-memory storage seed data
│   ├── routes.ts             # API route handlers
│   ├── index.ts              # Server entry point
│   └── vite.ts               # Vite dev server integration
├── shared/                    # Shared types & schemas
│   └── schema.ts             # Drizzle schemas & Zod validators
├── attached_assets/           # Static assets
│   └── generated_images/     # Product images
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS config
├── vite.config.ts            # Vite build config
└── README.md                 # This file
```

## Cara Menjalankan Aplikasi

### Development Mode

```bash
# Install dependencies (jika belum)
npm install

# Jalankan development server
npm run dev
```

Server akan berjalan di `http://localhost:5000`

### Production Build

```bash
# Build aplikasi
npm run build

# Jalankan production server
npm run start
```

## API Endpoints

### Products
- `GET /api/products` - Ambil semua produk
- `GET /api/products/:id` - Ambil detail produk
- `POST /api/products` - Tambah produk baru (admin)

### Categories
- `GET /api/categories` - Ambil semua kategori
- `GET /api/categories/:id` - Ambil detail kategori

### Orders
- `POST /api/orders` - Buat pesanan baru
- `GET /api/orders/:id` - Ambil detail pesanan

### Search & Filter
- Query parameters yang didukung:
  - `query` - Pencarian teks
  - `categories` - Filter berdasarkan kategori
  - `minPrice` - Harga minimum
  - `maxPrice` - Harga maksimum
  - `inStockOnly` - Hanya produk tersedia

## Standar Keamanan & Kepatuhan

Produk di katalog kami memenuhi berbagai standar internasional:

- **SNI** (Standar Nasional Indonesia)
- **ISO** (International Organization for Standardization)
- **ANSI** (American National Standards Institute)
- **EN** (European Norms)
- **ASTM** (American Society for Testing and Materials)
- **NIOSH** (National Institute for Occupational Safety and Health)

## Roadmap & Pengembangan Selanjutnya

### Fitur yang Direncanakan
- [ ] Sistem autentikasi user & admin
- [ ] Dashboard admin untuk manajemen produk
- [ ] Sistem review & rating produk
- [ ] Integrasi payment gateway (Midtrans, etc)
- [ ] Tracking pengiriman real-time
- [ ] Notifikasi email & WhatsApp
- [ ] Program loyalty & point rewards
- [ ] Multi-currency support
- [ ] Export catalog ke PDF
- [ ] Bulk order system untuk korporat

### Optimasi yang Direncanakan
- [ ] Migrasi ke PostgreSQL untuk production
- [ ] Implementasi Redis untuk caching
- [ ] CDN untuk static assets
- [ ] Image optimization & lazy loading
- [ ] Progressive Web App (PWA)
- [ ] Server-Side Rendering (SSR)

## Kontak & Dukungan

Untuk pertanyaan, saran, atau dukungan teknis:

- **Email**: support@mitrasafety.id
- **WhatsApp**: +62 812-3456-7890
- **Website**: www.mitrasafety.id
- **Alamat**: Jakarta, Indonesia

## Lisensi

© 2025 Mitra Safety Indonesia. All rights reserved.

---

**Terakhir Diperbarui**: 22 Oktober 2025
**Versi**: 1.0.0
**Developer**: Replit Agent 
