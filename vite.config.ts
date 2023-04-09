import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "dist",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/main.tsx"),
      name: "CookieConsentUI",
      // the proper extensions will be added
      fileName: "cookie-consent-ui",
    },
    minify: "terser",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'cookie-consent-ui.css';
          return assetInfo.name;
        },
      }
    }
  },
})
