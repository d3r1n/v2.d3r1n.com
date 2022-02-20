<template>

    <Html>

        <Head>

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta content="d3r1n's Website" property="og:title" />
            <Meta :content="`Hello! ${['👋', '👾', '👽', '🤖', '🎃', '👊', '👉👈', '💻', '🤓'][Math.floor(Math.random() * ['👋', '👾', '👽', '🤖', '🎃', '👊', '👉👈', '💻', '🤓'].length)]}\nI'm d3r1n, 15 y.o Student, Developer & Athlete.\nI'm crazy about Programming, Maths, Physics, Electronics and Sports.`" property="og:description" />
            <Meta content="d3r1n.com" property="og:site_name" />
            <Meta name="theme-color" content="#50fa7b" />
            <Meta content='/images/Background.png' property='og:image' itemprop="image" />
            <Link rel="icon" type="image/x-icon" href="/images/favicon.png" />

            <Meta property="og:image:width" content="300" />
            <Meta property="og:image:height" content="200" />

            <Title>Home - d3r1n</Title>

        </Head>

    </Html>

</template>

<script>
export default {
    beforeCreate() {
        this.$router.push("/Home")
    },
}
</script>

<style>

</style>
