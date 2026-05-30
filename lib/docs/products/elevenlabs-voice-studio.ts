import type { ProductDocumentation } from "../types";

const elevenLabsVoiceStudioDocs: ProductDocumentation = {
  productSlug: "elevenlabs-voice-studio",
  sections: [
    {
      slug: "overview",
      title: "Overview",
      description: "What the voice workflow includes",
      content: `
        <section>
          <h3>What it does</h3>
          <p><strong>ElevenLabs Voice Studio</strong> lets you generate voice audio inside the editor, preview it immediately, save it as SoundWave assets, design new voices, monitor credits, and prepare facial animation assets for character playback.</p>
          <p>The plugin is split into three main editor panels: the full Studio panel, the compact Quick TTS panel, and the Face Animator panel.</p>
        </section>
        <section>
          <h3>Main workflows</h3>
          <table>
            <thead><tr><th>Workflow</th><th>Use it for</th></tr></thead>
            <tbody>
              <tr><td>Voice Studio</td><td>Choose a voice, tune voice settings, generate dialogue, preview, save, and review session history.</td></tr>
              <tr><td>Quick TTS</td><td>Generate short lines quickly from a small dockable panel.</td></tr>
              <tr><td>Voice Design</td><td>Describe a custom voice, preview generated options, and save the selected voice to your ElevenLabs account.</td></tr>
              <tr><td>Credit Meter</td><td>Check character usage and account status while generating audio.</td></tr>
              <tr><td>Face Animator</td><td>Generate facial animation assets from saved SoundWave files and preview the result.</td></tr>
              <tr><td>Persona Playback</td><td>Use a Blueprint-friendly component to play an audio cue and matching face animation by ID.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      next: { slug: "setup", title: "Setup" },
    },
    {
      slug: "setup",
      title: "Setup",
      description: "Add your API key and open the panels",
      content: `
        <section>
          <h3>Enable the plugin</h3>
          <ol>
            <li>Open <strong>Edit > Plugins</strong>.</li>
            <li>Search for <strong>ElevenLabs Voice Studio</strong>.</li>
            <li>Enable it and restart the editor if prompted.</li>
          </ol>
        </section>
        <section>
          <h3>Add your API key</h3>
          <ol>
            <li>Open your ElevenLabs account and create an API key.</li>
            <li>Give the key access to user/account reading, voice reading and writing, model reading, and text-to-speech generation.</li>
            <li>In the editor, open <strong>Edit > Project Settings > Plugins > ElevenLabs Voice Studio</strong>.</li>
            <li>Paste the key into <strong>API Key</strong>.</li>
            <li>Leave <strong>API Base URL</strong> on the default value unless your account requires a regional endpoint.</li>
          </ol>
          <p>The API key is stored per project user, so each team member can keep their own key locally.</p>
        </section>
        <section>
          <h3>Open the panels</h3>
          <table>
            <thead><tr><th>Panel</th><th>How to open</th></tr></thead>
            <tbody>
              <tr><td>Voice Studio</td><td>Use the toolbar button, the Window menu entry, or the console command <code>ElevenLabs.OpenStudio</code>.</td></tr>
              <tr><td>Quick TTS</td><td>Use the toolbar/menu entry or <code>ElevenLabs.OpenQuickTTS</code>.</td></tr>
              <tr><td>Face Animator</td><td>Use the toolbar/menu entry or <code>ElevenLabs.OpenFaceAnimator</code>.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "overview", title: "Overview" },
      next: { slug: "studio", title: "Voice Studio" },
    },
    {
      slug: "studio",
      title: "Voice Studio",
      description: "Generate and save dialogue audio",
      content: `
        <section>
          <h3>Generate your first line</h3>
          <ol>
            <li>Open <strong>Voice Studio</strong>.</li>
            <li>Wait for the voice list to load.</li>
            <li>Select a voice from the dropdown.</li>
            <li>Type or paste the dialogue line.</li>
            <li>Adjust voice settings if needed.</li>
            <li>Click <strong>Generate</strong>.</li>
            <li>Preview the audio in the editor.</li>
            <li>Click <strong>Save as Asset</strong> to create a SoundWave in the Content Browser.</li>
          </ol>
        </section>
        <section>
          <h3>Voice settings</h3>
          <table>
            <thead><tr><th>Setting</th><th>Plain-language meaning</th></tr></thead>
            <tbody>
              <tr><td>Stability</td><td>Higher values keep the voice steadier. Lower values allow more expressive variation.</td></tr>
              <tr><td>Similarity Boost</td><td>How closely the output should match the selected voice.</td></tr>
              <tr><td>Style</td><td>Adds stronger performance style when the selected model supports it.</td></tr>
              <tr><td>Speed</td><td>Changes delivery speed when supported by the model.</td></tr>
              <tr><td>Speaker Boost</td><td>Helps keep the result closer to the selected speaker identity.</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Saved asset layout</h3>
          <p>Saved audio is organized by voice name under the configured audio folder. The generated SoundWave can be used like any normal project audio asset in Blueprints, sound cues, UI, level actors, or dialogue systems.</p>
        </section>
      `,
      prev: { slug: "setup", title: "Setup" },
      next: { slug: "quick-tts", title: "Quick TTS" },
    },
    {
      slug: "quick-tts",
      title: "Quick TTS",
      description: "Fast one-line generation",
      content: `
        <section>
          <h3>When to use it</h3>
          <p>Use <strong>Quick TTS</strong> when you already know the voice you want and need to generate many short lines quickly.</p>
        </section>
        <section>
          <h3>Workflow</h3>
          <ol>
            <li>Open <strong>Quick TTS</strong>.</li>
            <li>Select a voice.</li>
            <li>Type or paste a line.</li>
            <li>Press the generate button or use the keyboard shortcut shown by the panel.</li>
            <li>Listen to the preview.</li>
            <li>Turn on auto-save when you want every generated line to be saved automatically.</li>
          </ol>
        </section>
      `,
      prev: { slug: "studio", title: "Voice Studio" },
      next: { slug: "voice-design", title: "Voice Design" },
    },
    {
      slug: "voice-design",
      title: "Voice Design",
      description: "Create custom voices from descriptions",
      content: `
        <section>
          <h3>Create a designed voice</h3>
          <ol>
            <li>Open the full <strong>Voice Studio</strong> panel.</li>
            <li>Find the Voice Design area.</li>
            <li>Describe the voice you want in normal language.</li>
            <li>Enter sample text that represents the kind of line the character will speak.</li>
            <li>Generate previews.</li>
            <li>Play each preview and choose the best one.</li>
            <li>Give it a name and save it to your voice library.</li>
            <li>Use the refreshed voice list to select it for TTS generation.</li>
          </ol>
        </section>
        <section>
          <h3>Voice design controls</h3>
          <table>
            <thead><tr><th>Control</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td>Description</td><td>The natural-language voice direction.</td></tr>
              <tr><td>Sample Text</td><td>The line spoken by the preview samples.</td></tr>
              <tr><td>Guidance Scale</td><td>How strongly the preview should follow your description.</td></tr>
              <tr><td>Loudness</td><td>Target loudness for the generated preview.</td></tr>
              <tr><td>Seed</td><td>Helps repeat a similar preview when you want deterministic iteration.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "quick-tts", title: "Quick TTS" },
      next: { slug: "face-animation", title: "Face Animation" },
    },
    {
      slug: "face-animation",
      title: "Face Animation",
      description: "Generate animation from saved audio",
      content: `
        <section>
          <h3>Generate face animation assets</h3>
          <ol>
            <li>Save one or more generated voice lines as SoundWave assets.</li>
            <li>Open <strong>Face Animator</strong>.</li>
            <li>Choose the folder that contains the SoundWave assets.</li>
            <li>Scan the folder.</li>
            <li>Select the audio assets you want to process.</li>
            <li>Choose the target face mesh and animation options.</li>
            <li>Generate the animations.</li>
            <li>Use the preview viewport to check the audio and animation sync.</li>
          </ol>
        </section>
        <section>
          <h3>Face animation options</h3>
          <table>
            <thead><tr><th>Option</th><th>What it controls</th></tr></thead>
            <tbody>
              <tr><td>Target face mesh</td><td>The skeletal face mesh used for preview and generated animation setup.</td></tr>
              <tr><td>Mood</td><td>Auto or manual mood direction for the facial animation.</td></tr>
              <tr><td>Generate blinks</td><td>Adds blink motion where supported.</td></tr>
              <tr><td>Head movement</td><td>Adds broader head motion when enabled.</td></tr>
              <tr><td>Mouth only</td><td>Limits output to mouth/jaw controls when you do not want full-face motion.</td></tr>
              <tr><td>Output folder / prefix</td><td>Controls where generated animation assets are saved and how they are named.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "voice-design", title: "Voice Design" },
      next: { slug: "blueprint-playback", title: "Blueprint Playback" },
    },
    {
      slug: "blueprint-playback",
      title: "Blueprint Playback",
      description: "Use generated audio and animation in gameplay",
      content: `
        <section>
          <h3>Persona playback setup</h3>
          <ol>
            <li>Create or open a Blueprint actor or character that should speak.</li>
            <li>Add the <strong>ElevenLabs Persona Component</strong>.</li>
            <li>Create an <strong>ElevenLabs Persona Mapping Data</strong> asset.</li>
            <li>Add entries for each line. Each entry needs an <strong>Audio ID</strong>, a SoundWave or sound asset, and optionally a facial animation asset.</li>
            <li>Assign the mapping data asset to the component.</li>
            <li>Set the default face mesh component name if your character uses a specific face component.</li>
            <li>In Blueprint, call <strong>Play Persona Cue By Id</strong> with the Audio ID you want to play.</li>
          </ol>
        </section>
        <section>
          <h3>Blueprint-callable actions</h3>
          <table>
            <thead><tr><th>Action</th><th>Use it for</th></tr></thead>
            <tbody>
              <tr><td>Play Persona Cue By Id</td><td>Plays mapped audio and mapped facial animation together.</td></tr>
              <tr><td>Play Audio By Id</td><td>Plays only the mapped audio.</td></tr>
              <tr><td>Stop Persona Playback</td><td>Stops the current voice line and/or face animation.</td></tr>
              <tr><td>Has Persona Cue</td><td>Checks whether an ID exists before trying to play it.</td></tr>
              <tr><td>Get Active Audio Component</td><td>Returns the currently playing audio component for extra Blueprint control.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "face-animation", title: "Face Animation" },
      next: { slug: "troubleshooting", title: "Troubleshooting" },
    },
    {
      slug: "troubleshooting",
      title: "Troubleshooting",
      description: "Common setup issues",
      content: `
        <section>
          <h3>Common checks</h3>
          <table>
            <thead><tr><th>Problem</th><th>What to check</th></tr></thead>
            <tbody>
              <tr><td>Voice list does not load</td><td>Check the API key, scopes, internet connection, and API base URL.</td></tr>
              <tr><td>Credit meter shows an error</td><td>The key may need account read access or the account may be unreachable.</td></tr>
              <tr><td>Generate fails</td><td>Check character limits, selected model, account credits, and whether the selected voice supports the requested generation.</td></tr>
              <tr><td>Saved asset does not appear</td><td>Check the save folder and let the Content Browser refresh. Avoid invalid characters in generated clip names.</td></tr>
              <tr><td>Persona cue does not play</td><td>Confirm the Audio ID matches exactly, the mapping asset is assigned, and the audio asset exists.</td></tr>
              <tr><td>Face animation does not play</td><td>Confirm the mapping entry has an animation asset and the face mesh component name matches your character Blueprint.</td></tr>
            </tbody>
          </table>
        </section>
      `,
      prev: { slug: "blueprint-playback", title: "Blueprint Playback" },
    },
  ],
};

export default elevenLabsVoiceStudioDocs;
