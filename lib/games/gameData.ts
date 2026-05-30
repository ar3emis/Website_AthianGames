export interface GameCharacter {
  name: string;
  role: string;
  description: string;
  image: string;
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
  showcaseShots: GameLocation[];
  mystery: GameMystery;
}

export const games: GameEntry[] = [
  {
    slug: "a-tale-of-miss-valentina",
    title: "A Tale of Miss Valentina",
    tagline:
      "A recurring dream leads Adrian to Eldenmere, a beautiful town hiding one night that never ended.",
    status: "Coming Soon",
    genre: "Horror action-adventure",
    perspective: "Third-person mystery and exploration",
    platform: "PC",
    setting:
      "Eldenmere, a European town built around Piazza della Voce, where a photograph from 1947 matches the plaza Adrian has been seeing in his dreams.",
    shortDescription:
      "Follow Adrian and Clara into Eldenmere, trace Vincent's last steps, and uncover why the lady in the red hat still walks through the same dream.",
    overview: [
      "For three months Adrian has seen the same plaza in his dreams: wet cobblestones, a clock tower, a fountain, and a woman in a red hat walking away before he can reach her.",
      "The dream becomes real when an old family photograph points him to Eldenmere and to Piazza della Voce, the exact place he has been drawing again and again in his notebook.",
      "Clara helps Adrian follow the trail through archives, letters, and Vincent's unfinished journal. The deeper they search, the more the town slips between modern daylight and the night of November 12th, 1947.",
      "At the center of everything is Miss Valentina, never quite seen, never fully gone, and tied to the silence Vincent carried for the rest of his life.",
    ],
    heroImage: "/images/games/a-tale-of-miss-valentina/miss-valentina-red-hat.png",
    thumbnail: "/images/games/a-tale-of-miss-valentina/miss-valentina-red-hat.png",
    features: [
      {
        title: "Investigate Eldenmere",
        description:
          "Search apartments, archives, streets, cafes, and old family rooms for photographs, letters, sketches, and clues that connect Adrian's dreams to a real place.",
      },
      {
        title: "Cross between present day and 1947",
        description:
          "The plaza changes around you. A clock face, a lamp, or a doorway can pull the town from modern daylight into the night Vincent never escaped.",
      },
      {
        title: "Survive the Unspoken",
        description:
          "Something without a voice walks the plaza after dark. It does not rush. It does not stop. It only gets closer while fear takes hold of Adrian's body.",
      },
      {
        title: "Listen instead of fighting everything",
        description:
          "Not every spirit is an enemy. Some are trapped by grief, memory, or unfinished words, and understanding them can matter more than a weapon.",
      },
      {
        title: "Follow the red hat",
        description:
          "Miss Valentina is seen in fragments: a brim, a silhouette, a dark coat crossing the plaza. Reaching her means understanding what Vincent refused to say.",
      },
    ],
    characters: [
      {
        name: "Adrian",
        role: "The dreamer",
        description:
          "Adrian is pulled into Eldenmere by a dream he cannot explain and a photograph that proves the dream is real. He is observant, tired, and stubborn enough to follow Vincent's trail even when the town starts answering back.",
        image: "/images/games/a-tale-of-miss-valentina/adrian-concept.png",
      },
      {
        name: "Clara",
        role: "The researcher",
        description:
          "Clara knows how to read the town's records, but the case becomes personal when the documents begin pointing toward something she cannot file away as history. She helps Adrian connect the clues and challenges what he thinks he knows.",
        image: "/images/games/a-tale-of-miss-valentina/clara-concept.png",
      },
      {
        name: "Miss Valentina",
        role: "The lady in the red hat",
        description:
          "Valentina is the figure Adrian keeps seeing at the edge of the dream. Elegant, distant, and impossible to fully read, she is the key to the stopped night and the person everyone in Eldenmere is afraid to name.",
        image: "/images/games/a-tale-of-miss-valentina/miss-valentina-red-hat.png",
      },
      {
        name: "Vincent",
        role: "Adrian's great-grandfather",
        description:
          "Vincent visited Eldenmere in 1947 and returned home changed, carrying a silence that lasted the rest of his life. His journal, photograph, and final unfinished entry are the path Adrian follows into the truth.",
        image: "/images/games/a-tale-of-miss-valentina/vincent-concept.png",
      },
    ],
    locations: [
      {
        name: "Piazza della Voce",
        description:
          "The plaza from Adrian's dream, ordinary by day and impossible by night. Its clock tower, fountain, and red door hold the shape of the mystery.",
        image: "/images/games/a-tale-of-miss-valentina/dream-plaza-wide.png",
      },
      {
        name: "Vincent's Ancestral Home",
        description:
          "The old rural estate where Vincent kept his study, his journals, and the silence that shaped Adrian's family for generations.",
        image: "/images/games/a-tale-of-miss-valentina/vincent-concept.png",
      },
      {
        name: "The Red Door",
        description:
          "A door in the east wall of the plaza, the same red as Valentina's hat. It waits like an answer to a question Adrian has not learned how to ask.",
        image: "/images/games/a-tale-of-miss-valentina/dream-plaza-red-door.png",
      },
    ],
    showcaseShots: [
      {
        name: "Dream Plaza",
        description:
          "A floating memory of Piazza della Voce: fountain, statues, trees, lamps, and an open sky that feels too calm to trust.",
        image: "/images/games/a-tale-of-miss-valentina/dream-plaza-wide.png",
      },
      {
        name: "Inside the Gate",
        description:
          "The fountain view from inside the plaza gate, where the dream first looks beautiful before the wrong details begin to appear.",
        image: "/images/games/a-tale-of-miss-valentina/dream-plaza-fountain.png",
      },
      {
        name: "The Red Door",
        description:
          "The night version of the plaza, with one red door pulling the eye through the dark.",
        image: "/images/games/a-tale-of-miss-valentina/dream-plaza-red-door.png",
      },
    ],
    mystery: {
      heading: "The Unspoken",
      body:
        "When Eldenmere slips into 1947, the plaza is no longer empty. The Unspoken walks slowly, without a mouth and without a voice, turning fear itself into part of the chase.",
      image: "/images/games/a-tale-of-miss-valentina/shadowwalker-concept.png",
    },
  },
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
