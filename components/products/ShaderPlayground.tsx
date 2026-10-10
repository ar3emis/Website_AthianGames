"use client";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeftRight, Check, ChevronDown, Copy, Pause, Play, RotateCcw, SlidersHorizontal } from "lucide-react";
import { ShaderCanvas } from "./ShaderCanvas";
import { colorFromHex, colorHex, exportSettings, formatValue, groupLabel, initialValues, ParameterValue, ShaderParameter, ShaderValues, shaderPresets } from "@/lib/products/shaderPlayground";

const compact = "rounded-lg border border-border bg-background px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary";
const captions: Record<string, string> = {
  Global: "Mix the look with your scene and choose how it blends.",
  Outline: "Tune the edges picked up from brightness and scene depth.",
  Local: "Move or reshape the region receiving the effect.",
  Scan: "Control the field that travels across the scene.",
  Grade: "Balance color, contrast, and light.",
  Distortion: "Warp the scene before applying the look.",
};

function ScalarControl({ parameter, value, onChange, id }: { parameter: ShaderParameter; value: number; onChange: (n: number) => void; id: string }) {
  const { min = 0, max = 1, step = .01 } = parameter;
  const name = parameter.name.split("_").pop();
  const choices = name === "Shape" ? (id.startsWith("shader-Screen") ? ["Circle", "Box", "Wipe"] : ["Sphere", "Oriented box", "Object stencil"]) : name === "Mode" ? ["Include", "Exclude"] : null;
  const toggle = ["Split", "UseStencil", "IncludeStencil", "ExcludeStencil", "Animate", "Perforations"].includes(name ?? "");
  const change = (raw: string) => {
    if (raw.trim() === "") return;
    const n = Number(raw); if (Number.isFinite(n)) onChange(Math.max(min, Math.min(max, n)));
  };
  if (choices) return <label className="flex items-center justify-between gap-3 text-xs" htmlFor={id}><span>{parameter.label}</span><select id={id} value={Math.round(value)} onChange={(e) => change(e.target.value)} className={`${compact} max-w-[155px]`}>{choices.map((choice, i) => <option key={choice} value={i}>{choice}</option>)}</select></label>;
  if (toggle) return <label className="flex cursor-pointer items-center justify-between gap-3 text-xs" htmlFor={id}><span>{parameter.label}</span><input id={id} type="checkbox" checked={value > .5} onChange={(e) => onChange(e.target.checked ? 1 : 0)} className="h-4 w-4 accent-primary" /></label>;
  return <div>
    <div className="mb-1.5 flex items-center justify-between gap-3"><label htmlFor={id} className="text-xs text-foreground/85">{parameter.label}</label><input type="number" aria-label={`${parameter.label} value`} min={min} max={max} step={step} value={Number(value.toFixed(4))} onChange={(e) => change(e.target.value)} className={`${compact} w-[76px] text-right tabular-nums`} /></div>
    <input id={id} type="range" min={min} max={max} step={step} value={value} aria-valuetext={formatValue(value)} onChange={(e) => change(e.target.value)} style={{ background: `linear-gradient(to right, hsl(var(--primary)) ${100 * (value - min) / (max - min)}%, hsl(var(--muted)) ${100 * (value - min) / (max - min)}%)` }} className="shader-parameter-range block w-full cursor-pointer" />
  </div>;
}

function ParameterControl({ parameter, value, baseline, onChange, preset }: { parameter: ShaderParameter; value: ParameterValue; baseline: ParameterValue; onChange: (v: ParameterValue) => void; preset: string }) {
  const id = `shader-${preset}-${parameter.name}`;
  const changed = JSON.stringify(value) !== JSON.stringify(baseline);
  return <div className="group/control relative" data-parameter={parameter.name}>
    {Array.isArray(value) ? <div>
      <div className="mb-2 flex items-center justify-between gap-2"><span className="text-xs text-foreground/85">{parameter.label}</span>{parameter.kind === "color" && <label className="flex items-center gap-2 text-[10px] uppercase text-muted-foreground"><span>{colorHex(value)}</span><input aria-label={`${parameter.label} color`} type="color" value={colorHex(value)} onChange={(e) => onChange(colorFromHex(e.target.value, value))} className="h-7 w-9 cursor-pointer rounded border border-border bg-transparent p-0.5" /></label>}</div>
      <div className="grid grid-cols-3 gap-2">{value.slice(0, 3).map((n, i) => <label key={i} className="text-[10px] text-muted-foreground">{(parameter.kind === "color" ? ["R", "G", "B"] : ["X", "Y", "Z"])[i]}<input type="number" aria-label={`${parameter.label} ${(parameter.kind === "color" ? ["R", "G", "B"] : ["X", "Y", "Z"])[i]}`} value={Number(n.toFixed(4))} min={parameter.kind === "color" ? 0 : -5000} max={parameter.kind === "color" ? 4 : 5000} step={parameter.kind === "color" || parameter.name.includes("Direction") ? .01 : 5} onChange={(e) => { if (!e.target.value.trim()) return; const next = Number(e.target.value); if (!Number.isFinite(next)) return; onChange(value.map((v, k) => k === i ? Math.max(parameter.kind === "color" ? 0 : -5000, Math.min(parameter.kind === "color" ? 4 : 5000, next)) : v)); }} className={`${compact} mt-1 w-full tabular-nums`} /></label>)}</div>
    </div> : <ScalarControl parameter={parameter} value={value} onChange={onChange} id={id} />}
    <div className="mt-1 flex min-h-4 items-center justify-between gap-2"><code title={parameter.name} className="truncate text-[9px] text-muted-foreground/70">{parameter.name}</code>{changed && <button type="button" onClick={() => onChange(Array.isArray(baseline) ? [...baseline] : baseline)} aria-label={`Reset ${parameter.label}`} className="shrink-0 text-[10px] text-primary hover:underline">Reset</button>}</div>
  </div>;
}

export function ShaderPlayground({ id, name, asset, after }: { id: string; name: string; asset: string; after: string }) {
  const preset = shaderPresets[id];
  const baseline = useMemo(() => initialValues(id), [id]);
  const [values, setValues] = useState<ShaderValues>(baseline);
  const [position, setPosition] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  useEffect(() => { setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  const groups = useMemo(() => [...new Set(preset.parameters.map((p) => p.group))].filter((g) => g !== "Global").concat("Global"), [preset]);
  const changed = preset.parameters.filter((p) => JSON.stringify(values[p.name]) !== JSON.stringify(baseline[p.name])).length;
  const setValue = (key: string, value: ParameterValue) => { setValues((old) => ({ ...old, [key]: value })); setCopied(false); setCopyError(false); };
  const copy = async () => {
    try { await navigator.clipboard.writeText(exportSettings(id, asset, values)); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  };
  const control = (p: ShaderParameter) => <ParameterControl key={p.name} parameter={p} value={values[p.name]} baseline={baseline[p.name]} onChange={(value) => setValue(p.name, value)} preset={id} />;
  return <div className="border-t border-border">
    <div className="grid lg:grid-cols-[minmax(0,1fr)_260px]">
      <div className="min-w-0 p-4 md:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 text-[11px] text-muted-foreground"><span className={`h-1.5 w-1.5 rounded-full ${status === "ready" ? "bg-emerald-400" : status === "error" ? "bg-amber-400" : "bg-primary animate-pulse"}`} /><span role="status">{status === "ready" ? "Interactive preview" : status === "loading" ? "Preparing preview…" : "Preview unavailable"}</span></span>
          {preset.animated && <button type="button" onClick={() => setPlaying((old) => !old)} aria-pressed={playing} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] hover:bg-muted">{playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}{playing ? "Pause motion" : "Play motion"}</button>}
        </div>
        <figure className="relative aspect-video overflow-hidden rounded-xl bg-slate-950 ring-1 ring-white/10" aria-label={`${name} customization preview`}>
          <img src={after} alt="Original Unreal effect capture while the interactive preview loads" className="absolute inset-0 h-full w-full object-cover" />
          <ShaderCanvas id={id} name={name} values={values} position={position} playing={playing} onStatus={setStatus} />
          {status === "loading" && <div className="absolute inset-0 flex items-center justify-center bg-slate-950/85 text-xs text-slate-200">Loading scene and shader…</div>}
          {status === "ready" && <>
            <span className="pointer-events-none absolute bottom-3 left-3 rounded-md border border-white/15 bg-black/65 px-2.5 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur">{name}</span>
            {position > 0 && position < 100 && <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-white/90" style={{ left: `${position}%` }}><span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white"><ArrowLeftRight className="h-3.5 w-3.5" /></span></div>}
            <input type="range" aria-label="Compare original with customized shader" aria-valuetext={`${position}% original scene`} min={0} max={100} value={position} onChange={(e) => setPosition(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus:opacity-10" />
          </>}
        </figure>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2"><p className="text-[10px] text-muted-foreground">Drag to compare your changes</p><div className="flex rounded-full border border-border p-0.5">{[["Original", 100], ["Compare", 50], ["Effect", 0]].map(([label, value]) => <button type="button" key={label} onClick={() => setPosition(Number(value))} aria-pressed={position === value} className={`rounded-full px-2.5 py-1.5 text-[10px] ${position === value ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{label}</button>)}</div></div>
        <div className="mt-5 rounded-xl border border-border bg-background/40 p-4">
          {control(preset.parameters.find((p) => p.name === "Strength")!)}
          <p className="mt-2 text-[11px] leading-5 text-muted-foreground">A browser adaptation of the pack’s shader code, using a captured Unreal scene. Explore the controls here; final rendering and scene interactions depend on your Unreal project.</p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/20">{copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}{copied ? "Settings copied" : "Copy Unreal settings"}</button>
          <button type="button" disabled={!changed} onClick={() => { setValues(initialValues(id)); setCopied(false); setCopyError(false); }} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground hover:bg-muted disabled:opacity-40"><RotateCcw className="h-3 w-3" />Reset look</button>
          <span className="text-[10px] text-muted-foreground" aria-live="polite">{changed ? `${changed} changed` : "Demo defaults"}</span>
        </div>
        {copyError && <div className="mt-3"><p className="text-xs text-muted-foreground">Clipboard unavailable. Select and copy these settings:</p><textarea readOnly aria-label="Unreal shader settings JSON" value={exportSettings(id, asset, values)} className="mt-2 h-28 w-full rounded-lg border border-border bg-background p-3 font-mono text-[10px]" /></div>}
        <p className="mt-3 text-[10px] leading-5 text-muted-foreground">Copy exports named scalar and vector values as JSON for reference. World-space positions are centered on this demo scene.</p>
      </div>
      <aside aria-label={`${name} parameters`} className="border-t border-border bg-background/40 lg:border-l lg:border-t-0">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3"><SlidersHorizontal className="h-3.5 w-3.5 text-primary" /><h4 className="text-xs font-medium">Customize the look</h4><span className="ml-auto text-[10px] text-muted-foreground">{preset.parameters.length} parameters</span></div>
        <div className="max-h-[540px] overflow-y-auto overscroll-contain px-4 pb-3">
          {groups.map((group, index) => <details key={group} open={index < 2} className="group/section border-b border-border last:border-0">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-xs font-medium [&::-webkit-details-marker]:hidden">{group === "Global" ? "Blend & advanced" : group === "Local" ? "Region & masking" : groupLabel(group)}<ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform group-open/section:rotate-180" /></summary>
            {captions[group] && <p className="-mt-1 mb-4 text-[10px] leading-4 text-muted-foreground">{captions[group]}</p>}
            <div className="space-y-4 pb-5">{preset.parameters.filter((p) => p.group === group && p.name !== "Strength" && (p.name !== "AnimationSpeed" || preset.animated)).map(control)}</div>
          </details>)}
        </div>
      </aside>
    </div>
  </div>;
}
