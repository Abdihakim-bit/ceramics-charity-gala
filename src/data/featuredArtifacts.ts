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

// 2D placeholders for the Ceramics Preview section
export const preview2DPlaceholders: ArtifactItem[] = [
  {
    id: 'preview-2d-1',
    name: 'Textured Stoneware Vessel with Ash Glaze',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Contemporary Studio Potter [Artist Name]',
    period: '2025',
    medium: 'Wood-fired Stoneware, Natural Wood Ash Glaze',
    dimensions: '34 cm H × 22 cm Dia.',
    estimatedValue: '$1,800 CAD',
    description: 'Wheel-thrown and altered stoneware vessel fired for four days in an anagama wood kiln. The natural fly ash deposits produce earthy gradients of olive green, russet, and subtle carbon trapping.',
    imagePlaceholderLabel: '2D Ceramic Photo: Wood-Fired Stoneware Vessel'
  },
  {
    id: 'preview-2d-2',
    name: 'Faceted Celadon Blossom Bowl',
    type: '2d',
    category: 'Contemporary',
    artistOrCulture: 'Guest Resident Artisan [Artist Name]',
    period: '2026',
    medium: 'Porcelain with Reduction Celadon Glaze',
    dimensions: '18 cm H × 28 cm Dia.',
    estimatedValue: '$2,200 CAD',
    description: 'Carved porcelain bowl inspired by traditional Goryeo celadon techniques, featuring soft jade-toned transparency with delicate micro-crazing over carved petal fluting.',
    imagePlaceholderLabel: '2D Ceramic Photo: Carved Celadon Bowl'
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

// Additional 2D ceramic pieces for the Gallery Page
export const gallery2DItems: ArtifactItem[] = [
  ...preview2DPlaceholders,
  {
    id: 'gallery-2d-3',
    name: 'Smoke-Burnished Blackware Platter (Barro Negro)',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Oaxacan Master Ceramicist [Artist Name]',
    period: '2025',
    medium: 'Burnished Earthenware, Reduction Smoked',
    dimensions: '42 cm Dia. × 6 cm Depth',
    estimatedValue: '$1,500 CAD',
    description: 'Hand-burnished with quartz stones before entering a subterranean reduction pit kiln. Achieves a mirror-like obsidian sheen without using synthetic glazes.',
    imagePlaceholderLabel: '2D Ceramic Photo: Burnished Barro Negro Platter'
  },
  {
    id: 'gallery-2d-4',
    name: 'Kintsugi-Restored Antique Tea Bowl (Chawan)',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Historical Japanese Master & Modern Conservator',
    period: 'Edo Period / Restored 2026',
    medium: 'Coarse Stoneware, Natural Urushi Lacquer, 24k Gold Powder',
    dimensions: '8.5 cm H × 13.0 cm Dia.',
    estimatedValue: '$3,500 CAD',
    description: 'Historical Japanese chawan tea bowl featuring traditional urushi lacquer mending illuminated with genuine 24-karat gold powder, highlighting the philosophy of wabi-sabi.',
    imagePlaceholderLabel: '2D Ceramic Photo: Kintsugi Gold-Mended Chawan'
  },
  {
    id: 'gallery-2d-5',
    name: 'Architectural Ceramic Totem: "Strata"',
    type: '2d',
    category: 'Sculpture',
    artistOrCulture: 'Waterloo Emerging Ceramicist [Artist Name]',
    period: '2026',
    medium: 'Terracotta & Sculptural Paperclay',
    dimensions: '68 cm H × 24 cm W × 20 cm D',
    estimatedValue: '$2,800 CAD',
    description: 'A modular ceramic sculpture composed of interlocking grogged terracotta forms, exploring geological strata and architectural balance.',
    imagePlaceholderLabel: '2D Ceramic Photo: Architectural Terracotta Totem'
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
    description: 'Precision-fired porcelain displaying large starburst zinc-silicate crystals grown during a controlled 8-hour kiln soak cycle.',
    imagePlaceholderLabel: '2D Ceramic Photo: Crystalline Glazed Amphora'
  }
];

// Complete collection for the Gallery Page
export const fullGalleryArtifacts: ArtifactItem[] = [
  ...gallery3DModels,
  ...gallery2DItems.filter(item => !gallery3DModels.some(m => m.id === item.id))
];
