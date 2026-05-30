export interface GameCharacter {
  name: string;
  role: string;
  description: string;
  image?: string;
  monogram: string;
  accent: string;
}

export interface GameLocation {
  name: string;
  description: string;
  image: string;
}

export interface GameFeature {
  title: string;
  description: string;
}

export interface GameMystery {
  heading: string;
  body: string;
  image: string;
}

export interface GameEntry {
  slug: string;
  title: string;
  tagline: string;
  status: string;
  genre: string;
  perspective: string;
  platform: string;
  setting: string;
  shortDescription: string;
  overview: string[];
  heroImage: string;
  thumbnail: string;
  features: GameFeature[];
  characters: GameCharacter[];
  locations: GameLocation[];
  mystery: GameMystery;
}

export const games: GameEntry[] = [
  {
    slug: "a-tale-of-miss-valentina",
    title: "A Tale of Miss Valentina",
    tagline: "Some doors should stay closed. Adrian is about to open every one of them.",
    status: "In Development",
    genre: "Atmospheric mystery adventure",
    perspective: "Third-person, story-driven exploration",
    platform: "PC — more platforms to be announced",
    setting:
      "MissTown — a gas-lit Victorian town caught in an endless dusk, watched over by the manor on the hill.",
    shortDescription:
      "A gothic mystery adventure. Step into MissTown, a fog-bound town frozen between night and morning, and uncover the truth about Miss Valentina, the manor on the hill, and the family secret that pulled Adrian here.",
    overview: [
      "MissTown slipped off the maps three generations ago. Inside it, the clocks have stopped, the fog never fully lifts, and it is always the quiet hour before nightfall. Adrian arrives chasing a single question: what happened to his great-grandfather, Vincent, who walked into this town decades ago and never walked back out.",
      "All Adrian has are Vincent's old letters and a key to a house that should not still exist. Guided by Clara — a townswoman who seems to have been waiting for him — he follows that trail through lamplit squares and shuttered streets toward the woman every resident speaks of only in a whisper: Miss Valentina, the mistress of the manor on the hill.",
      "The closer Adrian gets to the truth, the less the town wants to give it up. Something walks the streets after dark. The stopped clocks begin to matter. And the further he climbs toward the manor, the more his own family's past starts to unravel around him.",
    ],
    heroImage: "/images/games/a-tale-of-miss-valentina/hero-key-art.png",
    thumbnail: "/images/games/a-tale-of-miss-valentina/hero-key-art.png",
    features: [
      {
        title: "Explore a town with a memory",
        description:
          "Wander MissTown's squares, back-alleys and shuttered houses at your own pace. Every lamplit corner holds a fragment of the story, and the town slowly opens up the deeper you're willing to look.",
      },
      {
        title: "Unravel the mystery",
        description:
          "Read Vincent's letters, listen to the people who stayed, and piece together what really happened on the hill. Clues connect across the town — the answers are there if you pay attention.",
      },
      {
        title: "A living, breathing world",
        description:
          "Rolling fog, shifting weather and a perpetual dusk-into-night lighting set the mood, while townsfolk go about their lives around you and the manor watches from above.",
      },
      {
        title: "Get close to Miss Valentina",
        description:
          "At the heart of it all is Valentina herself — gracious, magnetic and impossible to read. How you approach her, and what you choose to believe, shapes how her story unfolds.",
      },
      {
        title: "Cinematic, character-led storytelling",
        description:
          "Voiced encounters and dream sequences drive an intimate, slow-burn narrative built around the people of MissTown rather than spectacle.",
      },
    ],
    characters: [
      {
        name: "Adrian",
        role: "The newcomer — you",
        description:
          "The great-grandson of Vincent, and the first stranger MissTown has seen in years. Adrian came for answers about his family and stayed for the questions no one will answer. You see the town through his eyes.",
        monogram: "A",
        accent: "from-cyan-500/25 to-blue-500/10",
      },
      {
        name: "Clara",
        role: "Your guide in MissTown",
        description:
          "A townswoman who knows MissTown's streets, its unspoken rules, and far more about Adrian's family than she first lets on. She offers a way in — and her own reasons for helping are part of the mystery.",
        monogram: "C",
        accent: "from-emerald-500/25 to-teal-500/10",
      },
      {
        name: "Miss Valentina",
        role: "Mistress of the manor",
        description:
          "The elegant, ageless figure at the centre of MissTown's story. Every resident speaks her name softly. Charming and unreadable in equal measure, she is the reason the town is the way it is — and the reason Adrian can't leave.",
        image: "/images/games/a-tale-of-miss-valentina/miss-valentina-concept.png",
        monogram: "V",
        accent: "from-rose-500/25 to-purple-500/10",
      },
      {
        name: "Vincent",
        role: "The one who came before",
        description:
          "Adrian's great-grandfather. His letters, his choices and his disappearance set everything in motion. Retracing his last days in MissTown is the thread Adrian follows all the way up the hill.",
        monogram: "V",
        accent: "from-amber-500/25 to-orange-500/10",
      },
    ],
    locations: [
      {
        name: "MissTown Square",
        description:
          "The heart of town — cobbled streets, warm windows and a clock tower stopped at an hour no one will explain. Where every road, and every rumour, eventually leads.",
        image: "/images/games/a-tale-of-miss-valentina/misstown-square.png",
      },
      {
        name: "Valentina Manor",
        description:
          "The estate on the hill, lit against the dusk and looking down on everything below. Vincent's trail ends at its gates, and so must Adrian's.",
        image: "/images/games/a-tale-of-miss-valentina/valentina-manor.png",
      },
      {
        name: "The Forest Crossing",
        description:
          "A fog-wrapped bridge on the old road out of town — the boundary between MissTown and whatever lies beyond it. Few who cross it remember the way back.",
        image: "/images/games/a-tale-of-miss-valentina/forest-crossing.png",
      },
    ],
    mystery: {
      heading: "The figure in the fog",
      body: "When the lamps gutter and the streets empty, something moves through MissTown. The residents lock their doors, draw their curtains, and pretend not to know its name. Adrian won't have that luxury for long.",
      image: "/images/games/a-tale-of-miss-valentina/shadowwalker-concept.png",
    },
  },
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
