export type ShaderCamera = { location: number[]; forward: number[]; right: number[]; up: number[]; fov: number };
type Scene = { camera: ShaderCamera; images: Blob[] };
const assets = "/images/products/art-of-shader-ultimate-post-process/playground";

// Share the downloaded scene across canvas mounts and preset changes. A failed
// request is evicted so Retry can recover; successful data survives disconnection.
export function createSceneLoader(request: typeof fetch = fetch) {
  let cached: Promise<Scene> | null = null;
  return function loadScene(): Promise<Scene> {
    if (cached) return cached;
    const abort = new AbortController();
    const timeout = setTimeout(() => abort.abort(), 15000);
    const read = async (name: string) => {
      const response = await request(`${assets}/${name}`, { signal: abort.signal });
      if (!response.ok) throw new Error(`Scene asset ${name}: HTTP ${response.status}`);
      return response;
    };
    const pending = Promise.all([
      read("camera.json").then((response) => response.json() as Promise<ShaderCamera>),
      Promise.all(["color", "depth", "normal", "custom"].map((name) => read(`${name}.png`).then((response) => response.blob()))),
    ]).then(([camera, images]) => ({ camera, images })).finally(() => clearTimeout(timeout));
    cached = pending;
    void pending.catch(() => { abort.abort(); if (cached === pending) cached = null; });
    return pending;
  };
}

export const loadShaderScene = createSceneLoader();
