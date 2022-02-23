import { defineConfig } from 'vitepress'
// import { head } from './config/head'
import { themeConfig } from './config/themeConfig'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
    title: 'Vue Select',
    // head,
    themeConfig,
    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('.', import.meta.url)),
                'vue-select': fileURLToPath(
                    new URL('../../src', import.meta.url)
                ),
            },
        },
    },
})
