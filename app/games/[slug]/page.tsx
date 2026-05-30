import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Camera, Compass, Gamepad2, MapPinned, Moon, Sparkles } from "lucide-react";
import { games, getGameBySlug, type GameCharacter } from "@/lib/games/gameData";

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

function CharacterCard({ character }: { character: GameCharacter }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-black">
      <div className="relative aspect-[16/11]">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5">
          <p className="text-sm text-cyan-300">{character.role}</p>
          <h3 className="text-2xl font-bold text-white">{character.name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="leading-relaxed text-white/70">{character.description}</p>
      </div>
    </article>
  );
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[82vh] overflow-hidden pt-24">
        <Image
          src={game.heroImage}
          alt={game.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="container-custom relative z-10 flex min-h-[82vh] items-end pb-16">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center text-sm text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
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
            <h1 className="mb-5 text-5xl font-bold leading-tight md:text-7xl">
              {game.title}
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
              {game.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="container-custom grid gap-8 py-10 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Genre</p>
            <p className="mt-2 text-lg font-semibold">{game.genre}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Perspective</p>
            <p className="mt-2 text-lg font-semibold">{game.perspective}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Platform</p>
            <p className="mt-2 text-lg font-semibold">{game.platform}</p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="container-custom py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">The Story</h2>
            <p className="leading-relaxed text-white/55">{game.setting}</p>
          </div>

          <div className="space-y-5">
            {game.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed text-white/75">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The figure in the fog */}
      <section className="relative overflow-hidden border-y border-white/10">
        <Image
          src={game.mystery.image}
          alt={game.mystery.heading}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="container-custom relative z-10 py-24">
          <div className="max-w-xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
              <Moon className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">{game.mystery.heading}</h2>
            <p className="text-lg leading-relaxed text-white/75">{game.mystery.body}</p>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className="bg-white/[0.03] py-20">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-3xl font-bold">Who You&apos;ll Meet</h2>
            <p className="leading-relaxed text-white/55">
              Four lives tangled together by the same town. Their choices made
              Eldenmere what it is, and yours will decide how its story ends.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {game.characters.map((character) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </div>
        </div>
      </section>

      {/* World */}
      <section className="container-custom py-20">
        <div className="mb-10 max-w-2xl">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/15 text-amber-300">
            <MapPinned className="h-6 w-6" />
          </div>
          <h2 className="mb-3 text-3xl font-bold">The World of Eldenmere</h2>
          <p className="leading-relaxed text-white/55">
            A town of records, locked doors, stopped clocks, and places that
            remember more than the people inside them want to say.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {game.locations.map((location) => (
            <article key={location.name} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-3 text-xl font-bold">{location.name}</h3>
                <p className="leading-relaxed text-white/65">{location.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Rendered shots */}
      <section className="border-t border-white/10 bg-white/[0.03] py-20">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
              <Camera className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-3xl font-bold">Rendered Shots</h2>
            <p className="leading-relaxed text-white/55">
              Current-era Eldenmere and dream-space renders that show how the
              ordinary city and Piazza della Voce begin to mirror each other.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {game.showcaseShots.map((shot) => (
              <article key={shot.name} className="overflow-hidden rounded-lg border border-white/10 bg-black">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={shot.image}
                    alt={shot.name}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-xl font-bold">{shot.name}</h3>
                  <p className="leading-relaxed text-white/65">{shot.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll do */}
      <section className="border-t border-white/10 bg-black py-20">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-3xl font-bold">What You&apos;ll Do</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {game.features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-white/10 bg-black/40 p-6">
                <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-white/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
