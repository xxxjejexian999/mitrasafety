import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const faqs = [
    {
      id: "faq-1",
      question: "Bagaimana cara memesan produk di Mitra Safety?",
      answer: "Anda dapat memesan produk melalui website kami dengan langkah-langkah berikut: 1) Pilih produk yang diinginkan, 2) Tambahkan ke keranjang, 3) Lakukan checkout dan isi informasi pengiriman, 4) Pilih metode pembayaran, 5) Konfirmasi pesanan. Alternatif lain, Anda bisa menghubungi tim kami via WhatsApp untuk bantuan pemesanan."
    },
    {
      id: "faq-2",
      question: "Apakah semua produk tersertifikasi SNI?",
      answer: "Ya, semua produk yang kami jual telah tersertifikasi SNI dan memenuhi standar keselamatan nasional Indonesia. Anda dapat melihat sertifikat SNI pada halaman detail produk atau menghubungi kami untuk dokumen sertifikasi."
    },
    {
      id: "faq-3",
      question: "Berapa lama waktu pengiriman?",
      answer: "Waktu pengiriman bervariasi tergantung lokasi: Jabodetabek: 1-2 hari kerja, Kota besar lainnya: 2-4 hari kerja, Area pelosok: 5-10 hari kerja. Kami menyediakan layanan tracking untuk setiap pesanan."
    },
    {
      id: "faq-4",
      question: "Apa saja metode pembayaran yang tersedia?",
      answer: "Kami menyediakan berbagai metode pembayaran: Transfer Bank (BCA, Mandiri, BNI, BRI), E-Wallet (GoPay, OVO, Dana, ShopeePay), QRIS, dan COD (Cash on Delivery) untuk area tertentu."
    },
    {
      id: "faq-5",
      question: "Bagaimana proses klaim garansi?",
      answer: "Untuk klaim garansi, silakan hubungi customer service kami dengan menyertakan foto produk rusak, nomor invoice, dan penjelasan kerusakan. Proses klaim akan diproses dalam waktu 1-3 hari kerja setelah dokumen lengkap diterima."
    },
    {
      id: "faq-6",
      question: "Apakah tersedia layanan konsultasi produk?",
      answer: "Ya, kami menyediakan layanan konsultasi produk gratis untuk membantu Anda memilih APD yang sesuai dengan kebutuhan dan lingkungan kerja Anda. Hubungi kami via WhatsApp atau telepon untuk konsultasi."
    },
    {
      id: "faq-7",
      question: "Bagaimana cara menjadi reseller/distributor?",
      answer: "Untuk menjadi reseller/distributor, silakan kirim email ke b2b@mitrasafety.co.id dengan subjek 'Permintaan Partnership' beserta informasi perusahaan Anda. Tim kami akan menghubungi Anda untuk proses selanjutnya."
    },
    {
      id: "faq-8",
      question: "Apakah ada minimum order untuk pembelian grosir?",
      answer: "Untuk pembelian grosir, minimum order adalah Rp 1.000.000 atau 50 unit per item. Kami menyediakan harga khusus grosir dengan potongan harga hingga 20% tergantung volume pembelian."
    }
  ];

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? undefined : itemId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">Pusat Bantuan</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Temukan jawaban atas pertanyaan umum seputar produk dan layanan Mitra Safety
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main FAQ Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Pertanyaan Umum</h2>
              <p className="text-muted-foreground">
                Kami telah mengumpulkan pertanyaan-pertanyaan yang sering diajukan oleh pelanggan kami.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still Need Help Section */}
            <div className="mt-12 p-6 bg-card border rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">Masih Butuh Bantuan?</h3>
              <p className="text-muted-foreground mb-6">
                Tim kami siap membantu Anda dengan pertanyaan lebih lanjut. Pilih cara yang paling nyaman untuk Anda:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <MessageCircle className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium text-foreground mb-1">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground mb-3">Respons cepat 24/7</p>
                  <Button variant="outline" className="w-full">
                    Chat Sekarang
                  </Button>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Phone className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium text-foreground mb-1">Telepon</h4>
                  <p className="text-sm text-muted-foreground mb-3">Senin-Jumat, 09.00-17.00 WIB</p>
                  <Button variant="outline" className="w-full">
                    +62 21 1234 5678
                  </Button>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <Mail className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground mb-3">Respons dalam 24 jam</p>
                  <Button variant="outline" className="w-full">
                    info@mitrasafety.co.id
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Hours */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Jam Operasional</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Senin - Jumat</span>
                  <span className="font-medium">09.00 - 17.00 WIB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sabtu</span>
                  <span className="font-medium">09.00 - 14.00 WIB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Minggu</span>
                  <span className="font-medium">Libur</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                * Respon email dalam 24 jam kerja
              </p>
            </div>

            {/* Emergency Support */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Darurat Keselamatan?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Untuk situasi darurat keselamatan kerja, hubungi kami segera:
              </p>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Hotline Darurat: 123
              </Button>
            </div>

            {/* Training Resources */}
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Materi Pelatihan</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Panduan Penggunaan APD
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Video Perawatan Produk
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    SOP Keselamatan Kerja
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
