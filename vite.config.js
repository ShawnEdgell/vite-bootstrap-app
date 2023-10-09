import { defineConfig } from 'vite';
import ViteSvg from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [ViteSvg()],
  // Base URL configuration
  base: '/vite-test-2/', // This will set the base URL to be relative, which is useful for deploying to environments like GitHub Pages.

  // Resolve configuration for module imports
  resolve: {
    alias: {
      '@': '/src' // This allows you to use "@" as a shortcut to your "src" directory in your imports
    }
  },

  // Build Configuration
  build: {
    target: 'esnext', // Specify ECMAScript target version: "esnext" (default), or a specific version like "es2020".
    outDir: 'dist',   // The output directory for the build.
    minify: 'terser', // Specifies the minifier to use. 'terser' is the default. Set to 'esbuild' for faster minification, or 'none' to skip minification.
    sourcemap: true   // Generate source map
  },

  // Server Configuration
  server: {
    port: 3000,         // The port to run the development server on.
    open: true,         // Open the browser on server start.
    strictPort: true,   // A Vite server will fail to start if the port is already in use.
    cors: true,         // Enable CORS. Set to true to configure the Access-Control-Allow-Origin header.
    https: false,       // Set to true to start the dev server over HTTPS using Node's built-in self-signed certificates.
    proxy: {            // Setup proxy to backend server during development.
      // '/api': 'http://localhost:5000'  // Example: Redirect API calls from frontend dev server to backend server.
    }
  }
});
