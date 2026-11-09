export interface ArtifactItem {
  id: string;
  name: string;
  culture: string;
  period: string;
  medium: string;
  description: string;
  modelPath: string;
  sourceUrl: string;
}

export const catalogArtifacts: ArtifactItem[] = [
  {
    id: 'ritual-wine-container',
    name: 'Ritual Wine Container (Fangyi) with Masks & Serpents',
    culture: 'Zhou Dynasty (China)',
    period: 'Early Western Zhou dynasty (ca. 1100 BCE)',
    medium: 'Cast Bronze with carved relief',
    description: 'Features intricate taotie animal motifs rendered in multi-tier relief. Famous for its interior 187-character cast inscription documenting ritual ceremonies and tribute offerings.',
    modelPath: '/models/ritual-wine-container.glb',
    sourceUrl: 'https://3d.si.edu/explore?edan_q=ceramics'
  },
  {
    id: 'ewer',
    name: 'Ewer',
    culture: 'Delft (Netherlands )',
    period: '1686–1701',
    medium: 'Ceramics',
    description: 'Straight-sided circular body, long pointed spout one side, large looped handle opposite side; domed foot with flattened knop middle of stem; painted in underglaze blue on white with dark outlines (trek), chinoiserie designs of figures and flower vases in reserves, floral and diaper patterns.',
    modelPath: '/models/ewer.glb',
    sourceUrl: 'https://3d.si.edu/object/3d/ewer:349e8fa2-9461-4e33-bae9-5e9cdd3e72bb'
  }
];