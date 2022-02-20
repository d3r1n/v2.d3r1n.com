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
