<template>

    <div class="skills">

        <div class="skill" v-for="skill in skills" :key="skill.name">

            <div class="skill_image">
                 <img :src="skill.image" draggable="false" width="64" height="64">
            </div>

            <div class="skill_name">
                {{ skill.name }}
            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: "Skills",

    data() {
        return {
            skills: [
                { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
                { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
                { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
                { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
                { name: "Rust", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"},
                { name: "Haskell", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg"},
                { name: "Elixir", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg"},
                { name: "Haxe", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haxe/haxe-original.svg"},
                { name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"},
                { name: "Bash", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"},
                { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"},
                { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
                { name: "SASS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"},
                { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
                { name: "TailwindCSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
                { name: "WindiCSS", image: "https://windicss.org/assets/logo.svg"},
                { name: "PostgresSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"},
                { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
                { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
                { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},
                { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"},
                { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},
                { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"},
                { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
                { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
                { name: "Nuxt", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"},
                { name: "Next", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
                { name: "Vue3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},
                { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
                { name: "NodeJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
                { name: "Deno", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg"},
                { name: "Godot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg"},
                { name: "Unity", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"},
                { name: "OpenGL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg"},
                { name: "Vulkan", image: "https://www.vulkan.org/user/themes/vulkan/images/logo/vulkan-logo.svg"},
                { name: "SDL2", image: "https://www.libsdl.org/media/SDL_logo.png"},
                { name: "Raylib", image: "https://www.raylib.com/common/img/raylib_logo.png"},
            ]
        }
    },
}
</script>
