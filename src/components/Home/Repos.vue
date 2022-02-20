<template>

    <div class="repositories" v-if="repos != null">

        <div class="repository" v-for="(repo, index) in repos" :key="index" :id="'repo-' + index" >

            <div class="repository_content">

                <div class="repository_name">
                    <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                </div>

                <div class="repository_description">
                        {{ repo.description }}
                </div>

                <div class="repository_info">

                    <div class="repository_lisence">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path></svg>{{ repo.license.spdx_id }}
                    </div>

                    <div class="repository_language">
                        <span id="language_color" :style="{ backgroundColor: LangColors[repo.language].color}"></span>{{ repo.language }}
                    </div>

                    <div class="repository_stars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>{{ repo.stargazers_count }}
                    </div>

                    <div class="repository_forks">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z"></path></svg>{{ repo.forks_count }}
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {
    data() {
        return {
            repos: null,
            LangColors: Object,
        }
    },
    async mounted() {

        await fetch("/json/programming_language_colors.json").then(res => res.json()).then(json => {
            this.LangColors = json
        })

        await fetch(`https://api.github.com/users/d3r1n/repos`)
        .then(res => res.json())
        .then(data => {
            this.repos = this.sortRepos(data).slice(0,3)
        })
    },
    methods: {
        sortRepos(repos) {
            // sort users repos by stars
            return repos.sort((a, b) => {
                return b.stargazers_count - a.stargazers_count
            })
        },
    }
}

</script>
