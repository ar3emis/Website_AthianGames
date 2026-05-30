import { redirect } from "next/navigation";
import { games } from "@/lib/games/gameData";

export default function GamesRedirectPage() {
  redirect(`/games/${games[0].slug}`);
}
