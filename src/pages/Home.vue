<template>

    <div class="home_page">

        <div class="profile_section">

            <Profile />
            <Links />
            <About />

        </div>

        <div class="repositories_section">
            <Repos />
        </div>

        <!-- <div class="gists_and_skills_section">

            <Gists />

        </div> -->

    </div>


</template>

<script>
import { Profile, Links, About, Repos, Gists, Skills } from '../components'

export default {
    components: {
        Profile,
        Links,
        About,
        Repos,
        Gists,
        Skills
    },
}
</script>
