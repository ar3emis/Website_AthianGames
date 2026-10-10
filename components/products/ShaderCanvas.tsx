"use client";
import { useEffect, useRef, useState } from "react";
import { ShaderValues, shaderPresets } from "@/lib/products/shaderPlayground";
import shaderSources from "@/lib/products/ultimatePostProcessShaders.json";
import { loadShaderScene, ShaderCamera } from "@/lib/products/shaderScene";

const vertex = `#version 300 es
out vec2 in_var_TEXCOORD0;
void main() {
 vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);
 in_var_TEXCOORD0=vec2(p.x,1.-p.y);
 gl_Position=vec4(p*2.-1.,0.,1.);
}`;
type Props = { id: string; name: string; values: ShaderValues; position: number; playing: boolean; onStatus: (status: "loading" | "ready" | "error") => void };
type Failure = "webgl" | "assets" | "shader" | "context";
const failureMessages: Record<Failure, string> = {
  webgl: "The browser could not start WebGL 2. Check that graphics acceleration is available, then retry.",
  assets: "The scene could not be downloaded. Check your connection or that the preview server is running, then retry.",
  shader: "This effect could not be prepared. Try another shader or retry this preview.",
  context: "The graphics connection was interrupted. The preview will recover when the browser restores it, or you can retry now.",
};

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Shader allocation failed");
  gl.shaderSource(shader, source); gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader); gl.deleteShader(shader);
    throw new Error(message ?? "Shader compilation failed");
  }
  return shader;
}

export function ShaderCanvas(props: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const latest = useRef(props); latest.current = props;
  const [retry, setRetry] = useState(0);
  const [failure, setFailure] = useState<Failure | null>(null);
  const controller = useRef<{ select: (id: string) => void } | null>(null);
  useEffect(() => {
    const element = canvas.current!;
    const gl = element.getContext("webgl2", { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: "low-power" });
    if (!gl) { setFailure("webgl"); latest.current.onStatus("error"); return; }
    let disposed = false, lost = false, program: WebGLProgram | null = null, frameId = 0, request = 0, activeId = "";
    let visible = true, camera: ShaderCamera, lastTime = 0, time = 1.5, lastDraw = 0, lastValues: ShaderValues | null = null, lastPosition = -1;
    const textures: WebGLTexture[] = [];
    const buffer = gl.createBuffer();
    const vao = gl.createVertexArray();
    const data = new Float32Array(69 * 4);
    gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
    gl.bufferData(gl.UNIFORM_BUFFER, data.byteLength, gl.DYNAMIC_DRAW);
    gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, buffer);
    gl.bindVertexArray(vao);
    gl.viewport(0, 0, 1280, 720);
    setFailure(null);
    latest.current.onStatus("loading");
    const loading = loadShaderScene().then(async (scene) => {
      if (disposed || lost) return;
      camera = scene.camera;
      await Promise.all(scene.images.map(async (blob, unit) => {
        const bitmap = await createImageBitmap(blob, { colorSpaceConversion: "none", premultiplyAlpha: "none" });
        if (disposed || lost) { bitmap.close(); return; }
        const texture = gl.createTexture();
        if (!texture) { bitmap.close(); throw new Error("Texture allocation failed"); }
        textures.push(texture);
        gl.activeTexture(gl.TEXTURE0 + unit); gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, unit === 0 ? gl.LINEAR : gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, unit === 0 ? gl.LINEAR : gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, unit === 0 ? gl.SRGB8_ALPHA8 : gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
        bitmap.close();
      }));
    });
    // Attach rejection handling immediately, including when a user leaves while loading.
    loading.catch(() => {});
    const select = async (id: string) => {
      const token = ++request;
      latest.current.onStatus("loading");
      let phase: Failure = "assets";
      try {
        await loading;
        if (disposed || lost || token !== request) return;
        phase = "shader";
        // Keep every recipe with the renderer: switching shaders must not depend
        // on another network request after the preview has loaded.
        const source = (shaderSources as Record<string, string>)[id];
        if (!source) throw new Error(`Shader recipe missing: ${id}`);
        const shaders: WebGLShader[] = []; let next: WebGLProgram | null = null;
        try {
          shaders.push(compile(gl, gl.VERTEX_SHADER, vertex));
          shaders.push(compile(gl, gl.FRAGMENT_SHADER, source));
          next = gl.createProgram(); if (!next) throw new Error("Program allocation failed");
          shaders.forEach((shader) => gl.attachShader(next!, shader)); gl.linkProgram(next);
          if (!gl.getProgramParameter(next, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(next) ?? "Link failed");
        } catch (error) { if (next) gl.deleteProgram(next); throw error; }
        finally { shaders.forEach((shader) => gl.deleteShader(shader)); }
        if (program) gl.deleteProgram(program);
        program = next; activeId = id; gl.useProgram(program);
        const block = gl.getUniformBlockIndex(program!, "type_Parameters");
        if (block !== gl.INVALID_INDEX) gl.uniformBlockBinding(program!, block, 0);
        ["sceneTexturelinearSampler", "depthTexturepointSampler", "normalTexturepointSampler", "customTexturepointSampler"].forEach((name, unit) => gl.uniform1i(gl.getUniformLocation(program!, `SPIRV_Cross_Combined${name}`), unit));
        time = 1.5; lastValues = null; lastTime = 0;
        setFailure(null); latest.current.onStatus("ready");
      } catch (error) {
        if (disposed || lost || token !== request) return;
        console.warn("Shader playground could not load", { id, phase }, error);
        setFailure(phase); latest.current.onStatus("error");
      }
    };
    controller.current = { select };
    void select(latest.current.id);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; lastTime = 0; lastValues = null; }, { rootMargin: "100px" });
    observer.observe(element);
    const render = (now: number) => {
      if (disposed || lost) return;
      frameId = requestAnimationFrame(render);
      if (!program || !visible || document.hidden) { lastTime = 0; return; }
      const p = latest.current;
      if (p.id !== activeId) return;
      const moving = p.playing && shaderPresets[p.id].animated;
      if (now - lastDraw < 32 && p.values === lastValues && p.position === lastPosition) return;
      if (moving && lastTime) time += Math.min((now - lastTime) / 1000, .1);
      lastTime = now;
      if (!moving && p.values === lastValues && p.position === lastPosition) return;
      data.fill(0);
      shaderPresets[p.id].parameters.forEach((parameter, i) => {
        const value = p.values[parameter.name];
        if (Array.isArray(value)) data.set(value.slice(0, 4), i * 4); else data[i * 4] = value;
      });
      data.set([time, p.position / 100, 0, 0], 64 * 4);
      data.set([...camera.location, Math.tan(camera.fov * Math.PI / 360)], 65 * 4);
      data.set(camera.forward, 66 * 4); data.set(camera.right, 67 * 4); data.set(camera.up, 68 * 4);
      gl.bindBuffer(gl.UNIFORM_BUFFER, buffer); gl.bufferSubData(gl.UNIFORM_BUFFER, 0, data);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      lastValues = p.values; lastPosition = p.position; lastDraw = now;
    };
    frameId = requestAnimationFrame(render);
    const onLost = (event: Event) => { event.preventDefault(); lost = true; setFailure("context"); latest.current.onStatus("error"); };
    const onRestored = () => { if (!disposed) setRetry((value) => value + 1); };
    element.addEventListener("webglcontextlost", onLost);
    element.addEventListener("webglcontextrestored", onRestored);
    return () => {
      disposed = true; controller.current = null; observer.disconnect(); cancelAnimationFrame(frameId);
      element.removeEventListener("webglcontextlost", onLost);
      element.removeEventListener("webglcontextrestored", onRestored);
      textures.forEach((texture) => gl.deleteTexture(texture));
      if (program) gl.deleteProgram(program); gl.deleteBuffer(buffer); gl.deleteVertexArray(vao);
      // Release GPU contexts when switching presets, without breaking a retry
      // or React Strict Mode reusing the same mounted canvas.
      queueMicrotask(() => { if (!element.isConnected) gl.getExtension("WEBGL_lose_context")?.loseContext(); });
    };
  }, [retry]);
  useEffect(() => { controller.current?.select(props.id); }, [props.id]);
  return <>
    <canvas key={retry} ref={canvas} width={1280} height={720} aria-label={`${props.name} interactive shader preview`} className="absolute inset-0 h-full w-full" />
    {failure && <div role="alert" className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-slate-950/95 p-6 text-center text-sm text-slate-200"><p>{failureMessages[failure]}</p><button type="button" onClick={() => setRetry((value) => value + 1)} className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">Retry preview</button></div>}
  </>;
}
