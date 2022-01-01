<template>

    <Html>

        <Head>

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta content="d3r1n's Website" property="og:title" />
            <Meta content="My Website built with Nuxt3 & Vue3" property="og:description" />
            <Meta content="d3r1n.com" property="og:site_name" />
            <Meta name="theme-color" content="#50fa7b" />
            <Meta content='/images/Background.png' property='og:image' itemprop="image" />
            <Link rel="icon" type="image/x-icon" href="/images/favicon.png" />

            <Title>Home - d3r1n</Title>

        </Head>

    </Html>

    <div class="page_home">

        <Navbar />

        <div class="page_home_contents">

            <div class="sep1">
                <Profile />
                <About />
            </div>

            <Repos />

            <Skills />

        </div>

    </div>


</template>

<script>
import Navbar from '../components/Navbar.vue'
import Profile from '../components/Home/Profile.vue'
import About from '../components/Home/About.vue'
import Repos from '../components/Home/Repos.vue'
import Skills from '../components/Home/Skills.vue'

export default {
    components: {
        Navbar,
        Profile,
        About,
        Repos,
        Skills,
    },
}
</script>

<style lang="scss">

    @import "../assets/css/variables.scss";

    .page_home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .page_home_contents {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .sep1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 30px;
    }

    @media (max-width: $medium) {
        .sep1 {
            margin-right: 0;
            margin-bottom: 30px;
            width: 100%;
        }

        .page_home_contents {
            flex-direction: column;
            justify-content: center;
        }

        .navbar {
            width: 90%;
        }
    }

</style>
