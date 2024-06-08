import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/netflix/' // replace <REPO_NAME> with your repository name
})

