import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config

// Override default options
export default defineNuxtConfig({

    srcDir: "src/",
    buildDir: "dist/",

    // Vite Configuration
    vite: {
        css: {
            postcss: {
                plugins: [
                    require('autoprefixer')
                ]
            }
        }
    },

    // Global Styles
    css: [
        "@/assets/css/nord.scss",
        "@/assets/css/main.scss"
    ],

    // Meta tags
    head: {

        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "d3r1n" },
        ],

        link: [
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap" },
        ],
    }
})
