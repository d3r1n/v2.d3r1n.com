<template>

    <div class="about">

        <div id="about_center">
            Hello! <span id="emoji">{{ emoji }}</span><br>
            I'm <span id="name"> <b>d3r1n</b>, </span>
            15 y.o <span id="job"> <b>Student</b> </span>, <span id="job"> <b>Developer</b> </span> & <span id="job"> <b>Athlete</b> </span>. <br>
            I'm crazy about <span id="interests"> <b>Programming, Maths, Physics, Electronics and Sports</b> </span>. <br>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            emoji: '',
            emojis: ['👋', '👾', '👽', '🤖', '🎃', '👊', "👉👈", '💻', "🤓"]
        }
    },
    mounted() {
        this.emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
    },
}
</script>
