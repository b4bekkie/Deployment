import { defineConfig } from 'vite'


import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
     proxy: 'https://deployment-server-kappa.vercel.app',
  },
  plugins: [react()],
  
  
}
)

