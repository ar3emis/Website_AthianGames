import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Gamepad2 } from "lucide-react";
import { games } from "@/lib/games/gameData";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Games from Athian Games — including A Tale of Miss Valentina, a gothic mystery adventure set in the fog-bound town of MissTown.",
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/games/a-tale-of-miss-valentina/hero-key-art.png"
            alt=""
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
              <Gamepad2 className="h-4 w-4" />
              Athian Games
            </div>
            <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
              Games
            </h1>
            <p className="text-lg text-white/60">
              Story-driven worlds from Athian Games.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  <Clock className="h-3.5 w-3.5" />
                  {game.status}
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm text-purple-300">{game.genre}</p>
                <h2 className="mb-3 text-2xl font-bold">{game.title}</h2>
                <p className="mb-5 leading-relaxed text-white/70">
                  {game.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-cyan-300">
                  View game page
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
