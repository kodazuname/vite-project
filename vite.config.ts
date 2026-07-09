import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 1. Базовый путь для GitHub Pages (должен быть на самом верхнем уровне)
  base: '/vite-project/', 
  
  plugins: [
    react(),
    babel({ 
      presets: [reactCompilerPreset()] 
    }),
    tailwindcss()
  ],
})