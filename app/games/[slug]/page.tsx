import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Compass, Gamepad2, MapPinned, Sparkles } from "lucide-react";
import { games, getGameBySlug } from "@/lib/games/gameData";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: game.title,
    description: game.shortDescription,
    openGraph: {
      title: `${game.title} | Athian Games`,
      description: game.shortDescription,
      images: [game.heroImage],
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-[78vh] overflow-hidden pt-24">
        <Image
          src={game.heroImage}
          alt={game.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[78vh] items-end pb-16">
          <div className="max-w-3xl">
            <Link
              href="/games"
              className="mb-8 inline-flex items-center text-sm text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Games
            </Link>
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <Gamepad2 className="h-4 w-4" />
                {game.status}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
                {game.genre}
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              {game.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {game.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="container-custom grid gap-8 py-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Status</p>
            <p className="mt-2 text-lg font-semibold">{game.status}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Genre</p>
            <p className="mt-2 text-lg font-semibold">{game.genre}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Platform</p>
            <p className="mt-2 text-lg font-semibold">{game.platform}</p>
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Production Direction</h2>
            <p className="leading-relaxed text-white/65">
              This page is intentionally framed as an early-production game page.
              The goal is to present the tone, world, characters, and landmarks
              clearly while the project moves toward playable production.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {game.pillars.map((pillar) => (
              <div key={pillar} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="leading-relaxed text-white/75">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="container-custom">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Main Characters</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/55">
              Placeholder concept art for the website. Final character designs
              may change during production.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {game.characters.map((character) => (
              <article key={character.name} className="overflow-hidden rounded-lg border border-white/10 bg-black">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-2 text-sm text-cyan-300">{character.role}</p>
                  <h3 className="mb-3 text-2xl font-bold">{character.name}</h3>
                  <p className="leading-relaxed text-white/65">{character.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
              <MapPinned className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold">Landmarks and World Targets</h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/55">
            These images are visual targets for tone and layout. They are not
            final in-game captures.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {game.landmarks.map((landmark) => (
            <article key={landmark.name} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={landmark.image}
                  alt={landmark.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold">{landmark.name}</h3>
                <p className="leading-relaxed text-white/65">{landmark.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03] py-16">
        <div className="container-custom">
          <h2 className="mb-6 text-3xl font-bold">Current Production Notes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {game.productionNotes.map((note) => (
              <div key={note} className="rounded-lg border border-white/10 bg-black/40 p-5">
                <p className="leading-relaxed text-white/70">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
