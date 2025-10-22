export interface CategoryImage {
  url: string;
  caption: string;
  alt: string;
}

export interface CategoryImageMap {
  [categoryId: string]: CategoryImage[];
}

export const categoryImages: CategoryImageMap = {
  helmet: [
    {
      url: "/assets/generated_images/Red_safety_helmet_product_photo_b5570fe7.png",
      caption: "Helm Keselamatan Merah",
      alt: "Helm keselamatan warna merah dengan tali pengikat yang dapat disesuaikan"
    },
    {
      url: "/assets/generated_images/Yellow_hard_hat_product_photo_a25e423f.png",
      caption: "Helm Konstruksi Kuning",
      alt: "Helm konstruksi warna kuning untuk proyek bangunan"
    },
    {
      url: "/assets/generated_images/White_safety_helmet_product_45e5818a.png",
      caption: "Helm Safety Putih",
      alt: "Helm keselamatan putih dengan ventilasi udara"
    }
  ],
  gloves: [
    {
      url: "/assets/generated_images/Yellow_safety_gloves_product_photo_58de2dd7.png",
      caption: "Sarung Tangan Safety Kuning",
      alt: "Sarung tangan keselamatan kuning untuk pekerjaan berat"
    },
    {
      url: "/assets/generated_images/Black_work_gloves_product_2655aff4.png",
      caption: "Sarung Tangan Kerja Hitam",
      alt: "Sarung tangan kerja kulit hitam dengan pelindung telapak"
    },
    {
      url: "/assets/generated_images/Blue_grip_gloves_product_85a08fb4.png",
      caption: "Sarung Tangan Grip Biru",
      alt: "Sarung tangan dengan lapisan grip karet biru untuk konstruksi"
    }
  ],
  vest: [
    {
      url: "/assets/generated_images/Safety_vest_product_photo_f0077f14.png",
      caption: "Rompi Keselamatan Reflektif",
      alt: "Rompi keselamatan dengan strip reflektif untuk visibilitas tinggi"
    },
    {
      url: "/assets/generated_images/Orange_reflective_safety_vest_f894abdb.png",
      caption: "Rompi Safety Orange",
      alt: "Rompi keselamatan orange dengan pita reflektif perak"
    },
    {
      url: "/assets/generated_images/Yellow_mesh_safety_vest_95d2bc76.png",
      caption: "Rompi Jaring Kuning",
      alt: "Rompi keselamatan jaring kuning dengan pita reflektif"
    }
  ],
  boots: [
    {
      url: "/assets/generated_images/Safety_boots_product_photo_a89a15d4.png",
      caption: "Sepatu Safety Industri",
      alt: "Sepatu keselamatan industri dengan pelindung baja"
    },
    {
      url: "/assets/generated_images/Black_steel_toe_boots_204b2b93.png",
      caption: "Sepatu Safety Hitam",
      alt: "Sepatu safety hitam dengan pelindung jari kaki baja"
    },
    {
      url: "/assets/generated_images/Brown_waterproof_safety_boots_0c90e08d.png",
      caption: "Sepatu Safety Tahan Air",
      alt: "Sepatu safety coklat tahan air dengan sol anti-slip"
    }
  ],
  goggles: [
    {
      url: "/assets/generated_images/Safety_goggles_product_photo_3808d9b3.png",
      caption: "Kacamata Pelindung Safety",
      alt: "Kacamata pelindung untuk keselamatan kerja"
    },
    {
      url: "/assets/generated_images/Clear_protective_safety_goggles_988f8c95.png",
      caption: "Kacamata Safety Bening",
      alt: "Kacamata pelindung bening dengan tali elastis yang dapat disesuaikan"
    },
    {
      url: "/assets/generated_images/Tinted_welding_goggles_d5e49610.png",
      caption: "Kacamata Las Gelap",
      alt: "Kacamata las dengan lensa gelap dan pelindung samping"
    }
  ],
  mask: [
    {
      url: "/assets/generated_images/Safety_mask_product_photo_5ed8c680.png",
      caption: "Masker Keselamatan Kerja",
      alt: "Masker pelindung untuk keselamatan kerja"
    },
    {
      url: "/assets/generated_images/White_N95_respiratory_mask_4eaecc81.png",
      caption: "Masker Respirator N95",
      alt: "Masker respirator N95 putih dengan klip hidung yang dapat disesuaikan"
    },
    {
      url: "/assets/generated_images/Gray_respirator_mask_filters_e17b9dfb.png",
      caption: "Masker Respirator Filter",
      alt: "Masker respirator abu-abu dengan filter kartrid ganda untuk industri"
    }
  ]
};
