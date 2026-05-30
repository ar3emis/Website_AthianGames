export interface GameCharacter {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface GameLandmark {
  name: string;
  description: string;
  image: string;
}

export interface GameEntry {
  slug: string;
  title: string;
  status: string;
  genre: string;
  platform: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  thumbnail: string;
  pillars: string[];
  productionNotes: string[];
  characters: GameCharacter[];
  landmarks: GameLandmark[];
}

export const games: GameEntry[] = [
  {
    slug: "a-tale-of-miss-valentina",
    title: "A Tale of Miss Valentina",
    status: "Entering Production",
    genre: "Narrative mystery adventure",
    platform: "PC, target platforms to be announced",
    shortDescription:
      "An original Athian Games narrative mystery set around MissTown, the Valentina manor, and the shadowed paths between them.",
    description:
      "A Tale of Miss Valentina is an original game project from Athian Games, currently moving from concept and systems work into production. The project is built around a moody town, character-led mystery, nonlinear story structure, dynamic weather, crowd life, and handcrafted landmarks supported by procedural world-building tools.",
    heroImage: "/images/games/a-tale-of-miss-valentina/hero-key-art.png",
    thumbnail: "/images/games/a-tale-of-miss-valentina/hero-key-art.png",
    pillars: [
      "A character-led mystery centered on Miss Valentina and the history surrounding her town.",
      "A dense, explorable town built around landmarks, alleys, interiors, and hidden paths.",
      "Atmospheric production goals: weather, fog, lighting shifts, crowds, and cinematic traversal.",
      "Nonlinear narrative planning with quests, discoveries, and consequences shaped around player exploration.",
    ],
    productionNotes: [
      "Project state: early production and visual direction.",
      "Current focus: world layout, character direction, landmark planning, and narrative systems.",
      "Visuals shown here are concept placeholders created for the website, not final gameplay screenshots.",
    ],
    characters: [
      {
        name: "Miss Valentina",
        role: "Main protagonist",
        description:
          "The central character of the game, designed around quiet determination, elegance, and a personal connection to the town's buried history.",
        image: "/images/games/a-tale-of-miss-valentina/miss-valentina-concept.png",
      },
      {
        name: "ShadowWalker",
        role: "Mysterious presence",
        description:
          "A shadowed figure already represented in the project asset structure, used here as a placeholder for the game's stranger, more supernatural thread.",
        image: "/images/games/a-tale-of-miss-valentina/shadowwalker-concept.png",
      },
    ],
    landmarks: [
      {
        name: "MissTown Square",
        description:
          "The town center, planned as a readable hub with roads, crowd movement, warm interiors, and a clock tower silhouette.",
        image: "/images/games/a-tale-of-miss-valentina/misstown-square.png",
      },
      {
        name: "Valentina Manor",
        description:
          "A hilltop estate overlooking the town, intended as a major story landmark and visual anchor for the game.",
        image: "/images/games/a-tale-of-miss-valentina/valentina-manor.png",
      },
      {
        name: "Forest Crossing",
        description:
          "A foggy bridge and forest path outside town, shaped as an atmospheric transition into quieter, stranger spaces.",
        image: "/images/games/a-tale-of-miss-valentina/forest-crossing.png",
      },
    ],
  },
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
