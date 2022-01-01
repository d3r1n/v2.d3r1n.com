<template>

    <div class="navbar">

        <span class="navbar_main">
            <NuxtLink to="/home">d3r1n</NuxtLink>
        </span>

        <div class="navbar_links">
            <!-- <span id="navbar_blog">
                <NuxtLink to="/Blog">Blog</NuxtLink>
            </span> -->

            <span id="navbar_github">
                <a href="https://github.com/d3r1n/" target="_blank">GitHub</a>
            </span>

            <span id="navbar_donate">
                <a href="https://buymeacoffee.com/d3r1n/" target="_blank">Donate</a>
            </span>
        </div>

    </div>

</template>

<script>
export default {

    name: "Navbar",


}
</script>

<style lang="scss">

    @import '../assets/css/variables.scss';

    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--current-line);
        border-radius: 50px;
        overflow: hidden;
        width: 300px;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .navbar .navbar_main {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }

    .navbar .navbar_main a {
        text-decoration: none;
        color: var(--foreground);
    }


    .navbar .navbar_links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
        font-size: 20px;
    }

    .navbar .navbar_links span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
    }

    .navbar .navbar_links span:last-child {
        margin-right: 0;
    }

    .navbar .navbar_links a {
        color: var(--foreground);
        text-decoration: none;
        font-size: 20px;
    }

    @media screen and (max-width: $medium) {
        .navbar .navbar_main, .navbar .navbar_links a {
            font-size: 16px;
        }

        .navbar {
            width: 90%;
            margin-left: 0;
            margin-top: 20px;
        }
    }

</style>
