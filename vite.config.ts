import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { createRequire } from "module"
import { inspectAttr } from 'kimi-plugin-inspect-react'
const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')

const Renderer = vitePrerender.PuppeteerRenderer
const enableInspectAttrs = process.env.NODE_ENV !== 'production'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    enableInspectAttrs && inspectAttr(),
    react(),
      vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: ['/', '/especialidades', '/especialidades/', '/contato', '/contato/'],
      renderer: new Renderer({
        renderAfterDocumentEvent: 'dr-vandui-prerender-ready',
        skipThirdPartyRequests: true,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      }),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined
          }

          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion"
          }

          if (id.includes("node_modules/recharts") || id.includes("node_modules/react-day-picker")) {
            return "charts-date"
          }

          if (
            id.includes("node_modules/lucide-react") ||
            id.includes("node_modules/@radix-ui") ||
            id.includes("node_modules/@floating-ui")
          ) {
            return "ui-kit"
          }

          return "vendor"
        },
      },
    },
  },
});
