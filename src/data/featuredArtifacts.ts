export interface ArtifactItem {
  id: string;
  name: string;
  type: '3d' | '2d';
  category: 'Vessels' | 'Sculpture' | 'Historical' | 'Contemporary';
  artistOrCulture: string;
  period: string;
  medium: string;
  dimensions?: string;
  estimatedValue?: string;
  description: string;
  modelPath?: string;
  sourceUrl?: string;
  imageUrl?: string;
  imagePlaceholderLabel?: string;
}

// 3D model for the Ceramics Preview section
export const preview3DModel: ArtifactItem = {
  id: 'ritual-wine-container',
  name: 'Ritual Wine Container (Fangyi) with Masks & Serpents',
  type: '3d',
  category: 'Historical',
  artistOrCulture: 'Zhou Dynasty (China)',
  period: 'Early Western Zhou dynasty (ca. 1100 BCE)',
  medium: 'Cast Bronze & Ceremonial Vessel',
  dimensions: '28.5 cm × 18.2 cm × 14.0 cm',
  description: 'Features intricate taotie animal motifs rendered in multi-tier relief. Renowned for its interior 187-character cast inscription documenting ritual ceremonies and tribute offerings. Digitized by the Smithsonian 3D Collection.',
  modelPath: '/models/ritual-wine-container.glb',
  sourceUrl: 'https://3d.si.edu/explore?edan_q=ceramics'
};

// 2D featured pieces for the Ceramics Preview section
export const preview2DPlaceholders: ArtifactItem[] = [
  {
    id: 'preview-2d-1',
    name: 'Textured Stoneware Vessel with Ash Glaze',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Contemporary Asian Studio Pottery',
    period: '2025',
    medium: 'Wood-fired Stoneware, Natural Fly Ash Glaze',
    dimensions: '34 cm H × 22 cm Dia.',
    estimatedValue: '$1,800 CAD',
    description: 'Wheel-thrown and altered stoneware vessel fired for four continuous days in an anagama wood kiln. The natural wood fly ash deposits produce earthy gradients of warm olive, russet, and subtle carbon trapping.',
    imageUrl: '/Images/pexels-sruthik-koneti-774908924-39208508-2.jpg',
    imagePlaceholderLabel: 'Wood-Fired Stoneware Vessel'
  },
  {
    id: 'preview-2d-2',
    name: 'Faceted Celadon Blossom Bowl',
    type: '2d',
    category: 'Contemporary',
    artistOrCulture: 'Guest Resident Artisan Fellowship',
    period: '2026',
    medium: 'Porcelain with Reduction Celadon Glaze',
    dimensions: '18 cm H × 28 cm Dia.',
    estimatedValue: '$2,200 CAD',
    description: 'Carved porcelain bowl inspired by traditional Goryeo celadon techniques, featuring soft jade-toned transparency with delicate micro-crazing over hand-carved petal fluting.',
    imageUrl: '/Images/pexels-anna-chyzh-1030565088-24390385.jpg',
    imagePlaceholderLabel: 'Carved Celadon Bowl'
  }
];

// All 3D models available for the Gallery Page
export const gallery3DModels: ArtifactItem[] = [
  preview3DModel,
  {
    id: 'ewer',
    name: 'Delftware Ornamental Ewer with Chinoiserie Motifs',
    type: '3d',
    category: 'Historical',
    artistOrCulture: 'Delft (Netherlands)',
    period: 'ca. 1686–1701',
    medium: 'Tin-glazed Earthenware (Delftware)',
    dimensions: '31.2 cm × 19.5 cm × 15.0 cm',
    description: 'Straight-sided circular body with pointed spout, ornate handle, and domed foot. Painted in cobalt underglaze blue on white ground with dark trek outlines depicting figures and floral reserves.',
    modelPath: '/models/ewer.glb',
    sourceUrl: 'https://3d.si.edu/object/3d/ewer:349e8fa2-9461-4e33-bae9-5e9cdd3e72bb'
  },
  {
    id: 'catherine-vainglory',
    name: 'Figurative Ceramic Study ("Catherine")',
    type: '3d',
    category: 'Sculpture',
    artistOrCulture: 'European Fine Ceramic Archive',
    period: '18th–19th Century',
    medium: 'Glazed Porcelain & Polychrome Enamel',
    dimensions: '24.0 cm × 12.5 cm × 11.0 cm',
    description: 'Sculptural porcelain figure showcasing classical figurative drapery and fine facial detailing, emblematic of courtly European decorative porcelain traditions.',
    modelPath: '/models/catherine-vainglory.glb',
    sourceUrl: 'https://3d.si.edu/explore'
  }
];

// Complete 2D ceramic collection for the Gallery Page from Americas, Africa & Asia
export const gallery2DItems: ArtifactItem[] = [
  ...preview2DPlaceholders,
  {
    id: 'gallery-2d-3',
    name: 'Smoke-Burnished Blackware Vessel (Barro Negro)',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Oaxacan Master Ceramicist (Americas)',
    period: '2025',
    medium: 'Burnished Earthenware, Reduction Smoked',
    dimensions: '42 cm Dia. × 26 cm H',
    estimatedValue: '$1,950 CAD',
    description: 'Hand-burnished with quartz stones before entering a subterranean reduction pit kiln. Achieves a deep mirror-like obsidian sheen without synthetic glazes, sustaining indigenous Zapotec pottery heritage.',
    imageUrl: '/Images/pexels-theblackhood-34004100-2.jpg',
    imagePlaceholderLabel: 'Burnished Barro Negro Vessel'
  },
  {
    id: 'gallery-2d-4',
    name: 'Kintsugi-Restored Antique Tea Bowl (Chawan)',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Historical Master & Modern Conservator (Asia)',
    period: 'Edo Period / Restored 2026',
    medium: 'Coarse Stoneware, Urushi Lacquer, 24k Gold Powder',
    dimensions: '8.5 cm H × 13.0 cm Dia.',
    estimatedValue: '$3,500 CAD',
    description: 'Historical Japanese chawan tea bowl featuring traditional urushi lacquer mending illuminated with genuine 24-karat gold powder, highlighting the philosophy of wabi-sabi and preservation through restoration.',
    imageUrl: '/Images/pexels-denis-komarov-195926247-11537248-2.jpg',
    imagePlaceholderLabel: 'Kintsugi Gold-Mended Chawan'
  },
  {
    id: 'gallery-2d-5',
    name: 'Architectural Ceramic Totem: "Strata"',
    type: '2d',
    category: 'Sculpture',
    artistOrCulture: 'Emerging Ceramic Fellow (Americas)',
    period: '2026',
    medium: 'Grogged Terracotta & Sculptural Paperclay',
    dimensions: '68 cm H × 24 cm W × 20 cm D',
    estimatedValue: '$2,800 CAD',
    description: 'A modular ceramic sculpture composed of interlocking grogged terracotta forms, exploring geological strata and architectural balance in contemporary Canadian ceramic craft.',
    imageUrl: '/Images/pexels-lam-thanh-1100392445-28867396.jpg',
    imagePlaceholderLabel: 'Architectural Terracotta Totem'
  },
  {
    id: 'gallery-2d-6',
    name: 'Matte Crystalline Glaze Amphora',
    type: '2d',
    category: 'Contemporary',
    artistOrCulture: 'Ceramic Arts Guild Invitational Piece',
    period: '2025',
    medium: 'Porcelain with Zinc Crystalline Glaze',
    dimensions: '38 cm H × 21 cm Dia.',
    estimatedValue: '$2,400 CAD',
    description: 'Precision-fired porcelain displaying large starburst zinc-silicate crystals grown during a controlled 8-hour kiln soak cycle, presenting an iridescent micro-crystalline surface.',
    imageUrl: '/Images/pexels-andreea-ch-371539-11889306.jpg',
    imagePlaceholderLabel: 'Crystalline Glazed Amphora'
  },
  {
    id: 'gallery-2d-7',
    name: 'Hand-Coiled Terracotta Water Jar',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Nupe Ceramic Heritage (Africa)',
    period: 'Early 20th Century Tradition',
    medium: 'Open-fired Earthenware, Mica Slip',
    dimensions: '36 cm H × 30 cm Dia.',
    estimatedValue: '$2,100 CAD',
    description: 'Traditional globular water storage jar shaped by hand through coiling and paddle techniques. The burnished surface is enriched with localized mica slip that sparkles under ambient light.',
    imageUrl: '/Images/pexels-theblackhood-37153519.jpg',
    imagePlaceholderLabel: 'Nupe Terracotta Water Jar'
  },
  {
    id: 'gallery-2d-8',
    name: 'Carbon-Smoked Hand-Pinched Ceramic Flask',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Oaxacan Ceramic Collective (Americas)',
    period: '2025',
    medium: 'Smoked Earthenware with Agave Fiber Polish',
    dimensions: '29 cm H × 19 cm W',
    estimatedValue: '$1,650 CAD',
    description: 'Hand-pinched sculptural bottle with subtle organic asymmetry, smoked in open wood shavings to impart velvety graphite gradations across the outer shell.',
    imageUrl: '/Images/pexels-theblackhood-34004102.jpg',
    imagePlaceholderLabel: 'Carbon-Smoked Ceramic Flask'
  },
  {
    id: 'gallery-2d-9',
    name: 'Engobe Painted Storage Urn',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Anatolian Traditional Pottery (Asia)',
    period: 'Contemporary Tribute / 2024',
    medium: 'Red Clay with Natural Earth Pigment Engobes',
    dimensions: '44 cm H × 32 cm Dia.',
    estimatedValue: '$2,600 CAD',
    description: 'Wheel-thrown storage vessel featuring geometric wave motifs applied with hand-ground mineral slip engobes, honoring millennia-old Mediterranean and Near-Eastern storage pottery.',
    imageUrl: '/Images/pexels-mikegles-33703946.jpg',
    imagePlaceholderLabel: 'Painted Storage Urn'
  },
  {
    id: 'gallery-2d-10',
    name: 'Minimalist Stoneware Cylindrical Vase',
    type: '2d',
    category: 'Contemporary',
    artistOrCulture: 'Modernist Ceramics Studio (Americas)',
    period: '2026',
    medium: 'High-fire White Stoneware, Matte Glaze',
    dimensions: '31 cm H × 14 cm Dia.',
    estimatedValue: '$1,400 CAD',
    description: 'Clean cylindrical form with razor-sharp lip beveling and a tactile satin-chalk glaze, embodying Scandinavian and Japanese modernist ceramic intersections.',
    imageUrl: '/Images/pexels-raymond-petrik-1448389535-31493659.jpg',
    imagePlaceholderLabel: 'Minimalist Stoneware Vase'
  },
  {
    id: 'gallery-2d-11',
    name: 'Artisanal Terracotta Table Pitcher',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Lombok Village Artisan Cooperative (Asia)',
    period: '2025',
    medium: 'Local Earthenware, Tamarind Seed Polish',
    dimensions: '26 cm H × 18 cm W',
    estimatedValue: '$1,200 CAD',
    description: 'Indonesian hand-thrown pitcher with ergonomic pulled handle, finished with traditional organic tamarind seed boil treatment to render the porous earthenware water-resistant.',
    imageUrl: '/Images/pexels-rian-andriani-2160798467-38023126-2.jpg',
    imagePlaceholderLabel: 'Artisanal Terracotta Pitcher'
  },
  {
    id: 'gallery-2d-12',
    name: 'Biomorphic Stoneware Study: "Genesis"',
    type: '2d',
    category: 'Sculpture',
    artistOrCulture: 'Sculptural Ceramic Arts Resident',
    period: '2026',
    medium: 'Coarse Sanded Stoneware with Rutile Wash',
    dimensions: '40 cm H × 35 cm W × 25 cm D',
    estimatedValue: '$3,200 CAD',
    description: 'Complex biomorphic sculpture exploring coral growth patterns and anatomical contours, fired to cone 10 reduction with delicate warm rutile mottling.',
    imageUrl: '/Images/pexels-andreea-ch-371539-11889218.jpg',
    imagePlaceholderLabel: 'Biomorphic Stoneware Study'
  }
];

// Complete collection for the Gallery Page
export const fullGalleryArtifacts: ArtifactItem[] = [
  ...gallery3DModels,
  ...gallery2DItems.filter(item => !gallery3DModels.some(m => m.id === item.id))
];
