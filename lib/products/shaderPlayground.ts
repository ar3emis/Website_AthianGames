import presets from "./ultimatePostProcessParameters.json";

export type ParameterValue = number | number[];
export type ShaderValues = Record<string, ParameterValue>;
export type ShaderParameter = {
  name: string; label: string; group: string; default: ParameterValue;
  kind?: string; min?: number; max?: number; step?: number;
};
export type ShaderPreset = { parameters: ShaderParameter[]; animated: boolean };
export const shaderPresets = presets as Record<string, ShaderPreset>;
export const formatValue = (n: number) => Number(n.toFixed(3)).toString();
export const groupLabel = (s: string) => s.replace(/([a-z])([A-Z])/g, "$1 $2");

// Place world-space controls on the photographed exhibit. Asset defaults remain
// in the parameter reference; exported settings include these scene coordinates.
export function initialValues(id: string): ShaderValues {
  return Object.fromEntries(shaderPresets[id].parameters.map((p) => {
    let value = Array.isArray(p.default) ? [...p.default] : p.default;
    if (p.name.endsWith("_Origin")) value = [520, 0, 140, 0];
    if (p.name === "Local_Center") value = [520, 0, 180, 0];
    if (!id.startsWith("Screen")) {
      if (p.name === "Local_CenterX") value = 520;
      if (p.name === "Local_CenterY") value = 0;
      if (p.name === "Local_CenterZ") value = 180;
      if (p.name === "Local_Yaw") value = 0;
    }
    return [p.name, value];
  }));
}

export function exportSettings(id: string, asset: string, values: ShaderValues) {
  return JSON.stringify({ preset: id, asset, scalars: Object.fromEntries(Object.entries(values).filter(([, v]) => typeof v === "number")), vectors: Object.fromEntries(Object.entries(values).filter(([, v]) => Array.isArray(v))) }, null, 2);
}

export function colorHex(value: number[]) {
  return "#" + value.slice(0, 3).map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, "0")).join("");
}

export function colorFromHex(hex: string, previous: number[]): number[] {
  return [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255).concat(previous[3] ?? 1);
}
