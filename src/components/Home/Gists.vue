<template>

    <div class="gists">

        <div class="gist" v-for="(gist, index) in gists" :key="index" :id="'gist-' + index">

            <div class="gist_title">
                <a :href="gist.html_url" target="_blank">{{ Object.keys(gist.files)[0] }}</a>
            </div>

            <div class="gist_content" style="white-space: pre;">
                {{ gist_data[index] }}
            </div>

        </div>

    </div>

</template>

<script>

export default {
    data() {
        return {
            gists: null,
            gist_data: new Array(),
        }
    },
    async mounted() {
        const filtered_ids = ["3a57916335d5a7c4657980e09ec0479d", "b85c84e9de2dba695949924582e8888e"]

        await fetch(`https://api.github.com/users/d3r1n/gists`)
        .then(res => res.json())
        .then(data => {
            this.gists = data.filter(gist => filtered_ids.includes(gist.id))
        })

        this.gists.forEach(async gist => {
            await fetch(gist.files[Object.keys(gist.files)[0]].raw_url)
                .then(res => res.text())
                .then(data => {
                    this.gist_data.push(data)
                })
        });


    }
}
</script>
