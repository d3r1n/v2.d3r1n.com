<template>

    <div class="repositories_container" v-if="repos != null">

        <div class="repositories_title">
            Repositories
        </div>

        <div class="repositories">

            <div class="repository" v-for="(repo, index) in repos" :key="index" :id="'repo-' + index" >

                <div class="repository__name">
                    <a :href="repo.html_url" target="_blank">•{{ repo.name }}</a>
                </div>

                <div class="repository__description">
                    {{ repo.description }}
                </div>

                <div class="seperator"></div>

                <div class="repository_info">

                    <div class="repository__lisence">
                        <img src="https://img.icons8.com/small/24/f8f8f2/scales.png"/>{{ repo.license.spdx_id }}
                    </div>

                    <div class="repository__language">
                        <span id="language_color" :style="{ backgroundColor: LangColors[repo.language].color}"></span>{{ repo.language }}
                    </div>

                    <div class="repository__stars">
                    <img src="https://img.icons8.com/material/24/f8fa8a/christmas-star--v1.png"/>{{ repo.stargazers_count }}
                    </div>

                    <div class="repository__forks">
                        <img src="https://img.icons8.com/material/24/f8f8f2/code-fork--v1.png"/>{{ repo.forks_count }}
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

<style lang="scss">

    @import '../../assets/css/variables.scss';

    .repositories_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        margin-left: 30px;
        margin-right: 30px;
    }

    .repositories_title {
        font-size: 24px;
        font-weight: bold;
        color: var(--foreground);
        margin-bottom: 20px;
    }


    .repositories {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--current-line);
        border-radius: 30px;
        perspective: 500px;
		padding: 30px;
    }

    @media screen and (max-width: $medium) {
        .repositories_container {
            width: 100%;
        }
        .repositories {
            width: 80%;
        }

    }


    .repository {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 30px;
        color: var(--foreground);
        font-size: 16px;
        margin-top: 30px;
        padding: 20px;
        background: var(--comment);
        transform-style: preserve-3d;
        border: solid 5px var(--foreground);
        transition: all 0.25s linear;
    }

    .repository:hover {
       transform: scale(1.1);
    }

    .repository:first-child {
        margin-top: 0;
    }

    .repository a {
        text-decoration: none;
        color: var(--orange);
    }

    .repository .seperator {
        width: 100%;
        background: var(--current-line);
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 0;
    }

    .repository__name {
        width: fit-content;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .repository__name:hover {
        text-decoration: underline;
    }

    .repository_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .repository_info div {
        display: flex;
        align-items: center;
        margin-bottom: 3px;
    }

    .repository_info div:last-child {
        margin-bottom: 0;
    }

    .repository_info img {
        margin-right: 10px;
    }

    .repository_info span {
        margin-right: 15px;
    }

    #language_color {
        height: 20px;
        width: 20px;
        border-radius: 40%;
        display: inline-block;
    }

</style>
