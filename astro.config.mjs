// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server', // <-- AÑADE ESTA LÍNEA (no olvides la coma al final)
  adapter: vercel()
});