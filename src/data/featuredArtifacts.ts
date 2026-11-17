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
    id: 'stoneware-jug',
    name: 'Stoneware jug',
    type: '3d',
    category: 'Historical',
    artistOrCulture: 'African American Potter Thomas Commeraw, American',
    period: 'ca 1797 - 1819',
    medium: 'Ceramic and Glaze',
    dimensions: '38.7 cm × 24.8 cm × 24.8 cm x 80.3 cm',
    description: 'An ovoid saltglaze stoneware jug with incised blue clamshell and bell flower decoration around the front shoulder over inscription. A loop handle extends from neck and is attached on side opposite from inscription, with blue glaze surrounding the attachment location. The jug is marked on side with maker’s name and location: COMMERAW.S / STONEWARE / N.YORK.',
    modelPath: '/models/stoneware-jug.glb',
    sourceUrl: 'https://3d.si.edu/object/3d/stoneware-jug-created-thomas-commeraw:82adf5d6-5ec4-46cc-9e68-6a4d7c5ea824'
  };

// 2D featured pieces for the Ceramics Preview section
export const preview2DPlaceholders: ArtifactItem[] = [
  {
    id: 'preview-2d-1',
    name: 'Hand-Thrown Terracotta Kulhar Vessels',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Traditional Indian Potter Community (Asia)',
    period: 'Contemporary Heritage Craft',
    medium: 'Unglazed Red Clay, Wheel-Thrown Earthenware',
    dimensions: '14 cm H × 12 cm Dia. (Set of 6)',
    estimatedValue: '$1,800 CAD',
    description: 'Hand-thrown from unrefined iron-rich earthenware, these traditional porous drinking vessels celebrate centuries of village pottery craft. Formed swiftly on a manual kick wheel without templates or calipers, each piece features a subtly ribbed exterior from the potter\'s fingers, a trimmed foot, and a porous clay body that naturally cools liquids through evaporation.',
    imageUrl: '/Images/pexels-sruthik-koneti-774908924-39208508-2.jpg',
    imagePlaceholderLabel: 'Hand-Thrown Terracotta Kulhar Vessels'
  },
  {
    id: 'preview-2d-2',
    name: 'Tamegroute Emerald Glaze Ceramic Collection',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Moroccan Artisan Guild of Tamegroute (Africa)',
    period: '17th Century Living Tradition',
    medium: 'High-Silica Earthenware, Copper & Manganese Glaze',
    dimensions: 'Urn: 58 cm H × 34 cm Dia.; Plates: 32 cm Dia.',
    estimatedValue: '$3,400 CAD',
    description: 'Crafted in the village of Tamegroute on the Saharan frontier, this ensemble features hand-molded earthenware glazed in a signature compound of silica, manganese, and copper oxide. Fired in subterranean earth kilns fueled by palm fronds and acacia wood, the fluctuating atmosphere yields a distinctive mottled malachite glaze characterized by crystalline drippings, scars, and metallic iridescence.',
    imageUrl: '/Images/pexels-denis-komarov-195926247-11537248-2.jpg',
    imagePlaceholderLabel: 'Tamegroute Emerald Glaze Ensemble'
  }
];

// All 3D models available for the Gallery Page
export const gallery3DModels: ArtifactItem[] = [
  preview3DModel,
  {
    id: 'incense-burner.glb',
    name: 'Incense Burner',
    type: '3d',
    category: 'Vessels',
    artistOrCulture: 'Qing dynasty, China',
    period: 'late 17th century',
    medium: 'Porcelain with cobalt pigment under clear glaze',
    dimensions: '14.2 cm × 23.5 cm',
    description: 'Incense burner; round with bulging sides, contracted neck and flaring rim; low foot, trimmed above the rim on the outside. Decorated in underglaze blue, continuous landscape around exterior, comprising of rocks, trees, water, figures, boats, and pavilions, executed primarily in outline and wash, the water in parallel horizontal lines in typical K\'ang-hsi manner; around the neck, a band of motifs comprising five of the Eight Precious Things, each alternating with a cloud scroll.',
    modelPath: '/models/incense-burner.glb',
    sourceUrl: 'https://3d.si.edu/object/3d/incense-burner:fbcc6998-41a8-41cf-af57-81a82098f3ca'
  }, 
  {
    id: 'kylix',
    name: 'Kylix',
    type: '3d',
    category: 'Vessels',
    artistOrCulture: 'Greek',
    period: 'ca. 800 BC',
    medium: 'Painted earthenware',
    dimensions: '7.3 cm × 22 cm × 18 cm',
    description: 'An ancient Greek drinking cup with a broad, shallow body raised on a stem and foot, with two horizontal handles. Both the interior and exterior are decorated with red paint featuring geometric patterns and motifs.',
    modelPath: '/models/kylix.glb',
    sourceUrl: 'https://3d.si.edu/object/3d/kylix:547c78d1-620b-40c4-982e-01928870fef4'
  },
  {
    id: 'Dish',
    name: 'Dish with floral decoration',
    type: '3d',
    category: 'Vessels',
    artistOrCulture: 'Qing dynasty, China',
    period: 'late 17th-early 18th century',
    medium: 'Porcelain with cobalt pigment under clear glaze',
    dimensions: '4.5 cm × 20.1 cm',
    description: 'One of a pair of blue and white glazed plates. Shallow flat center, with thick rim and deep ring base. Stylized floral designs in dark blue glaze over blue-white glaze.',
    modelPath: '/models/dish.glb',
    sourceUrl: 'https://3d.si.edu/object/3d/dish-one-pair-f1992342:b4ac83ec-8ac6-4d95-8e8b-33c853ca4efa'
  }
];

// Complete 2D ceramic collection for the Gallery Page from Americas, Africa & Asia
export const gallery2DItems: ArtifactItem[] = [
  ...preview2DPlaceholders,
  {
    id: 'gallery-2d-3',
    name: 'Mediterranean Folk Earthenware Pitchers & Storage Vessels',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Mediterranean Ceramicists Cooperative (Americas & Southern Europe)',
    period: 'Traditional Living Heritage',
    medium: 'High-Fired Terracotta, Polychrome Slip Glazes',
    dimensions: 'Flagon: 34 cm H × 22 cm Dia.; Bowls: 20 cm Dia.',
    estimatedValue: '$2,900 CAD',
    description: 'Handcrafted according to enduring vernacular pottery traditions, these utilitarian earthenware pieces include bulbous water flagons with pulled strap handles, tapered carafes, and wide-rimmed serving bowls. Dipped in honey-amber, deep forest green, and cream slip glazes over coarse red terracotta, each vessel is designed for thermal insulation and communal food preparation.',
    imageUrl: '/Images/pexels-anna-chyzh-1030565088-24390385.jpg',
    imagePlaceholderLabel: 'Mediterranean Folk Earthenware Pitchers'
  },
  {
    id: 'gallery-2d-4',
    name: 'Artisanal Terracotta Offering Bowls (Collection)',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Village Pottery Collective (Asia)',
    period: 'Contemporary Heritage Craft',
    medium: 'Natural Alluvial Clay, Hand-Turned Earthenware',
    dimensions: '18 cm Dia. × 9 cm H each (Collection of 12)',
    estimatedValue: '$1,500 CAD',
    description: 'Thrown in rapid succession on a traditional wooden flywheel, these wide shallow bowls are shaped from alluvial clay rich in natural mica. Distinct concentric throwing rings spiral up the flared walls toward a soft, rounded rim, creating an ergonomic vessel traditionally utilized for cooling yogurt, serving grain, or holding ceremonial offerings.',
    imageUrl: '/Images/pexels-theblackhood-34004100-2.jpg',
    imagePlaceholderLabel: 'Artisanal Terracotta Offering Bowls'
  },
  {
    id: 'gallery-2d-5',
    name: 'Jingdezhen Porcelain Pedestal Compote & Ritual Tea Set',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Jingdezhen Porcelain Heritage (Asia)',
    period: 'Early 20th Century Tradition',
    medium: 'Kaolin Porcelain, Underglaze Cobalt & Polychrome Overglaze',
    dimensions: 'Compote: 22 cm H × 26 cm Dia.; Teacups: 6.5 cm H',
    estimatedValue: '$2,600 CAD',
    description: 'Sculpted from pure white kaolin clay and high-fired at 1,300°C, this footed tazza compote features a scalloped fluted basin raised on a hollow pedestal stem. Accompanied by bell-shaped tea cups hand-painted in traditional cobalt blue underglaze and delicate enamel floral reserves, this work embodies classical Jingdezhen imperial court ceramic traditions.',
    imageUrl: '/Images/pexels-lam-thanh-1100392445-28867396.jpg',
    imagePlaceholderLabel: 'Jingdezhen Porcelain Pedestal Compote'
  },
  {
    id: 'gallery-2d-6',
    name: 'Sculptural "Crown of Flora" Petal Vase',
    type: '2d',
    category: 'Sculpture',
    artistOrCulture: 'Contemporary Studio Ceramicist (Americas)',
    period: '2026',
    medium: 'Wheel-Thrown & Altered Stoneware, Amber Ash Glaze',
    dimensions: '36 cm H × 20 cm Dia.',
    estimatedValue: '$2,750 CAD',
    description: 'A dramatic sculptural vessel thrown on the wheel and hand-altered while leather-hard, featuring an eight-pointed organic petal crown pulled along the flared rim. Finished in a high-iron wood-ash glaze fired in reduction to cone 10, creating pooling caramel runs, micro-crystalline textures, and deep honey-brown tones across the curving silhouette.',
    imageUrl: '/Images/pexels-andreea-ch-371539-11889306.jpg',
    imagePlaceholderLabel: 'Crown of Flora Petal Vase'
  },
  {
    id: 'gallery-2d-7',
    name: 'Hand-Turned Terracotta Utility Basins (Set)',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Heritage Clay Guild (Americas & Asia)',
    period: 'Traditional Craft',
    medium: 'Native Silt Clay, Natural Mineral Wash',
    dimensions: '24 cm Dia. × 11 cm H each',
    estimatedValue: '$1,650 CAD',
    description: 'Formed from unrefined riverbed silt with natural sand inclusions, these robust conical basins feature thick footrings and reinforced rolled rims designed to withstand daily culinary and ceremonial use. The exterior surface reveals rhythmic spiral tooling marks left by manual wooden rib burnishing, giving the unglazed clay a warm, grounded tactile finish.',
    imageUrl: '/Images/pexels-theblackhood-37153519.jpg',
    imagePlaceholderLabel: 'Hand-Turned Terracotta Basins'
  },
  {
    id: 'gallery-2d-8',
    name: 'Ceremonial Terracotta Oil Lamps & Offering Saucers (Diyas)',
    type: '2d',
    category: 'Historical',
    artistOrCulture: 'Traditional Ceremonial Potters (Asia)',
    period: 'Ancient Living Heritage',
    medium: 'Riverbed Alluvial Clay, Pit-Fired Earthenware',
    dimensions: '10 cm Dia. × 3.5 cm H (Collection of 24)',
    estimatedValue: '$1,200 CAD',
    description: 'Hand-pressed from smooth alluvial silt and pinched with a precise, tapered wick spout at the lip. Fired in communal open-pit bonfires fueled by rice husks, these porous earthenware saucers develop a warm, smoke-blushed terracotta patina, crafted specifically to hold vegetable oils and cotton wicks during festival light offerings.',
    imageUrl: '/Images/pexels-theblackhood-34004102.jpg',
    imagePlaceholderLabel: 'Ceremonial Terracotta Oil Lamps'
  },
  {
    id: 'gallery-2d-9',
    name: 'Hand-Thrown Stoneware Yunomi Tea Bowls',
    type: '2d',
    category: 'Contemporary',
    artistOrCulture: 'Artisan Studio Residency (Americas)',
    period: '2026',
    medium: 'Buff Stoneware with Fine Chamotte Grog',
    dimensions: '11 cm Dia. × 7.5 cm H each (Set of 4)',
    estimatedValue: '$1,450 CAD',
    description: 'Wheel-thrown from coarse buff stoneware compounded with fine chamotte grog for thermal shock resistance and tactile grip. Each cylindrical chawan cup features a carved spiral footring (kodai) and a gently contoured lip shaped for tea tasting. Retained in an unglazed bisqued state, the piece showcases the subtle earth tones and natural mineral flecks of high-fired clay.',
    imageUrl: '/Images/pexels-mikegles-33703946.jpg',
    imagePlaceholderLabel: 'Stoneware Yunomi Tea Bowls'
  },
  {
    id: 'gallery-2d-10',
    name: 'Studded Stoneware Bottle Vessels with Glazed Finial',
    type: '2d',
    category: 'Sculpture',
    artistOrCulture: 'Modernist Ceramic Studio (Americas & Northern Europe)',
    period: '2026',
    medium: 'White Stoneware, Slip Trailing, Chalk-Matte & Oxidized Copper Glaze',
    dimensions: 'Tall Bottle: 52 cm H × 14 cm Dia.; Spherical Orb: 18 cm Dia.',
    estimatedValue: '$3,800 CAD',
    description: 'An architectural ensemble of elongated ceramic bottle forms meticulously embellished with hand-piped slip beading that forms a tactile relief grid across the slender fluted necks. Coated in a chalk-matte titanium white glaze and crowned with a distressed, oxidized copper-turquoise spherical finial, juxtaposing minimalist silhouette with organic texture.',
    imageUrl: '/Images/pexels-raymond-petrik-1448389535-31493659.jpg',
    imagePlaceholderLabel: 'Studded Stoneware Bottle Vessels'
  },
  {
    id: 'gallery-2d-11',
    name: 'Monumental Terracotta Water & Grain Basin (Gentong)',
    type: '2d',
    category: 'Vessels',
    artistOrCulture: 'Indonesian Traditional Pottery (Asia)',
    period: 'Traditional Heritage',
    medium: 'Coarse Volcanic Red Clay, Hand-Burnished Earthenware',
    dimensions: '54 cm Dia. × 42 cm H',
    estimatedValue: '$1,750 CAD',
    description: 'Hand-formed from dense, iron-saturated volcanic earthenware using paddle-and-anvil shaping over a rotating turntable. Heavy horizontal throwing grooves encircle the swelling belly to reinforce structural strength during wood firing, complemented by a substantial rolled lip and a stone-burnished interior formulated for grain and water storage.',
    imageUrl: '/Images/pexels-rian-andriani-2160798467-38023126-2.jpg',
    imagePlaceholderLabel: 'Monumental Terracotta Storage Basin'
  },
  {
    id: 'gallery-2d-12',
    name: 'Biomorphic Droplet Relief Urn: "Metamorphosis"',
    type: '2d',
    category: 'Sculpture',
    artistOrCulture: 'Guest Fellowship Sculptor (Americas)',
    period: '2026',
    medium: 'Sculptural Paperclay Stoneware, Multi-Layer Amber Caramel Glaze',
    dimensions: '42 cm H × 28 cm W × 26 cm D',
    estimatedValue: '$3,100 CAD',
    description: 'A tactile biomorphic urn built from fine paperclay stoneware and overlaid with hand-modeled teardrop scales that cascade downward from the shoulder like seed pods. Glazed in a viscous amber-caramel reduction formula, the high-gloss glaze thins across the sharp relief edges to reveal golden undertones while pooling into deep, molasses-brown glass in the crevices.',
    imageUrl: '/Images/pexels-andreea-ch-371539-11889218.jpg',
    imagePlaceholderLabel: 'Biomorphic Droplet Ceramic Urn'
  }
];

// Complete collection for the Gallery Page
export const fullGalleryArtifacts: ArtifactItem[] = [
  ...gallery3DModels,
  ...gallery2DItems.filter(item => !gallery3DModels.some(m => m.id === item.id))
];
