"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeftRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import catalog from "@/lib/products/ultimatePostProcessCatalog.json";
import { ShaderPlayground } from "./ShaderPlayground";

export function ShaderExplorer() {
  const [selectedId, setSelectedId] = useState("PrintedComic");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState(50);
  const [customizing, setCustomizing] = useState(true);
  const [loaded, setLoaded] = useState<string[]>([]);
  const [failed, setFailed] = useState<string[]>([]);
  const beforeImage = useRef<HTMLImageElement>(null);
  const afterImage = useRef<HTMLImageElement>(null);
  const selected = catalog.find((look) => look.id === selectedId) ?? catalog[0];
  const categories = useMemo(() => ["All", ...Array.from(new Set(catalog.map((look) => look.category)))], []);
  const filtered = useMemo(() => catalog.filter((look) => (category === "All" || look.category === category) && `${look.name} ${look.id} ${look.description}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const ready = loaded.includes(selected.before) && loaded.includes(selected.after);
  const error = failed.includes(selected.before) || failed.includes(selected.after);
  const select = (id: string) => { setSelectedId(id); setPosition(50); };
  const move = (direction: number) => {
    if (!filtered.length) return;
    const index = filtered.findIndex((look) => look.id === selectedId);
    select(filtered[index < 0 ? (direction < 0 ? filtered.length - 1 : 0) : (index + direction + filtered.length) % filtered.length].id);
  };
  const imageLoaded = (path: string) => setLoaded((items) => [...new Set([...items, path])]);
  const imageFailed = (path: string) => setFailed((items) => [...new Set([...items, path])]);
  useEffect(() => {
    // Cached images can finish before hydration attaches a load handler.
    for (const [element, path] of [[beforeImage.current, selected.before], [afterImage.current, selected.after]] as const) {
      if (element?.complete) {
        if (element.naturalWidth > 0) imageLoaded(path);
        else imageFailed(path);
      }
    }
  }, [selected.before, selected.after]);

  return (
    <section id="shader-explorer" aria-labelledby="shader-explorer-title" className="mb-16 scroll-mt-24">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">The shader library</p>
          <h2 id="shader-explorer-title" className="text-3xl font-semibold tracking-tight md:text-4xl">Find your look. Make it yours.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Pick a shader, explore its parameters, and see your changes live. Compare your look with the original scene or browse the Unreal captures.</p>
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs text-primary">66 core looks · 18 additional presets</span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/10">
        <div className="grid lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="border-b border-border p-4 lg:border-b-0 lg:border-r" aria-label="Choose a shader">
            <label className="relative block">
              <Search aria-hidden="true" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input aria-label="Search shaders" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search looks or effects" className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="mt-3 block text-xs font-medium text-muted-foreground">Collection
              <select aria-label="Shader collection" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-primary">
                {categories.map((name) => <option key={name}>{name}</option>)}
              </select>
            </label>
            <p className="my-3 text-xs text-muted-foreground" aria-live="polite">{filtered.length} {filtered.length === 1 ? "look" : "looks"}</p>
            <select aria-label="Choose shader preset" value={filtered.some((look) => look.id === selectedId) ? selectedId : ""} onChange={(e) => select(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-primary lg:hidden">
              <option value="" disabled>{filtered.length ? "Choose a matching look" : "No matching looks"}</option>
              {filtered.map((look) => <option key={look.id} value={look.id}>{look.name}</option>)}
            </select>
            <div className="hidden max-h-[570px] space-y-1.5 overflow-y-auto pr-1 lg:block" role="group" aria-label="Shader presets">
              {filtered.map((look) => (
                <button key={look.id} type="button" aria-pressed={look.id === selectedId} onClick={() => select(look.id)} className={`flex w-full items-center gap-3 rounded-lg border p-2 text-left transition-colors focus-visible:ring-2 focus-visible:ring-primary ${look.id === selectedId ? "border-primary/40 bg-primary/10" : "border-transparent hover:bg-muted/70"}`}>
                  <img src={look.thumbnail} alt="" width="48" height="27" loading="lazy" decoding="async" className="aspect-video w-12 shrink-0 rounded object-cover" />
                  <span className="min-w-0 break-words"><span className="block text-sm font-medium">{look.name}</span><span className="block text-[11px] text-muted-foreground">{look.category}</span></span>
                </button>
              ))}
              {!filtered.length && <p className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">No matching looks. Try another collection or search.</p>}
            </div>
          </aside>
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
              <div aria-live="polite"><span className="text-[11px] uppercase tracking-wider text-muted-foreground">{selected.category}</span><h3 className="text-lg font-medium tracking-tight">{selected.name}</h3></div>
              <div className="flex gap-2">
                <button type="button" onClick={() => move(-1)} disabled={!filtered.length} aria-label="Previous shader" className="rounded-full border border-border p-2 hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary"><ChevronLeft className="h-4 w-4" /></button>
                <button type="button" onClick={() => move(1)} disabled={!filtered.length} aria-label="Next shader" className="rounded-full border border-border p-2 hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3">
              <div className="inline-flex gap-1 rounded-full border border-border bg-background p-1" role="group" aria-label="Preview mode">
                <button type="button" aria-pressed={customizing} onClick={() => setCustomizing(true)} className={`rounded-full px-4 py-2 text-xs font-medium ${customizing ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}>Customize</button>
                <button type="button" aria-pressed={!customizing} onClick={() => setCustomizing(false)} className={`rounded-full px-4 py-2 text-xs font-medium ${!customizing ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}>Unreal captures</button>
              </div>
              <a href={`/docs/art-of-shader-ultimate-post-process/shader-reference#${selected.id}`} className="text-[11px] font-medium text-primary hover:underline">Parameter reference ↗</a>
            </div>
            <div hidden={!customizing}><ShaderPlayground key={selected.id} id={selected.id} name={selected.name} asset={selected.asset} after={selected.after} /></div>
            <div hidden={customizing}>
            <figure className="relative aspect-video overflow-hidden bg-slate-950" aria-label={`${selected.name} before and after comparison`}>
              <img key={`${selected.id}-after`} ref={afterImage} src={selected.after} alt={`${selected.name} applied in Unreal Engine`} width="1920" height="1080" decoding="async" onLoad={() => imageLoaded(selected.after)} onError={() => imageFailed(selected.after)} className="absolute inset-0 h-full w-full object-contain" />
              <img key={`${selected.id}-before`} ref={beforeImage} src={selected.before} alt="The same scene without the effect" width="1920" height="1080" decoding="async" onLoad={() => imageLoaded(selected.before)} onError={() => imageFailed(selected.before)} style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} className="absolute inset-0 h-full w-full object-contain" />
              {!ready && <div className="absolute inset-0 flex items-center justify-center bg-slate-950 text-sm text-slate-300" role="status">{error ? "Comparison unavailable. Please reload to try again." : "Loading Unreal capture…"}</div>}
              <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">Original</span>
              <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">Effect</span>
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/65 text-white backdrop-blur"><ArrowLeftRight className="h-4 w-4" /></span></div>
              <input type="range" min="0" max="100" step="1" value={position} onChange={(e) => setPosition(Number(e.target.value))} aria-label={`Compare original with ${selected.name}`} aria-valuetext={`${position}% original scene, ${100 - position}% effect`} disabled={!ready} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus:opacity-10" />
            </figure>
            <div className="border-t border-border p-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">Drag to compare · arrow keys when focused</p>
                <div className="flex gap-1 rounded-full border border-border p-1">
                  {[["Original", 100], ["Compare", 50], ["Effect", 0]].map(([label, value]) => <button key={label} type="button" onClick={() => setPosition(Number(value))} aria-pressed={position === value} className={`rounded-full px-3 py-1 text-xs ${position === value ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{label}</button>)}
                </div>
              </div>
              <p className="text-sm leading-6 text-foreground/85">{selected.description}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{selected.note} Still captures show a single moment; time-driven effects animate in Unreal.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">{selected.controls.map((name) => <span key={name} className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[11px] text-muted-foreground">{name}</span>)}</div>
              <div className="mt-4 flex flex-wrap justify-between gap-2 border-t border-border pt-3"><code className="break-all text-[10px] text-muted-foreground">{selected.asset}</code><a href={`/docs/art-of-shader-ultimate-post-process/shader-reference#${selected.id}`} className="text-xs font-medium text-primary hover:underline">Parameter reference →</a></div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted-foreground">Scene imagery and surface data captured in Unreal. Customize uses a browser adaptation; Unreal captures show the original engine renders. No AI-generated imagery.</p>
    </section>
  );
}
