<template>

    <div class="spotify">

        <div class="spotify_image">
            <img :src="track.image" draggable="false"/>
        </div>

        <div class="spotify_info">

            <div class="spotify_info_name">
                <a :href="'https://open.spotify.com/track/' + track.track_id" target="_blank">{{ track.name }}</a>
            </div>

            <div class="spotify_info_artist">
                {{ track.artist }}
            </div>

            <div class="spotify_info_time">
                {{ time_left }} left
            </div>

        </div>

    </div>

</template>

<script>

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export default {
    props: {
        track: {
            type: Object,
            required: true,
        },
    },
    watch: {
        track: {
            handler(track) {
                this.updater(this.image_tooltip)
            },
            deep: true,
        },
    },
    data() {

        return {
            time_left: 0,
            interval: null,
            image_tooltip: null,
            meta : null
        }
    },
    mounted() {

        const spotify_image = document.querySelector('.spotify_image')
        const name_image = document.querySelector('.spotify_info_name')

        this.image_tooltip = tippy(spotify_image, {
            animation: 'scale',
        })

        let name_tooltip = tippy(name_image, {
            content: "Click to open in Spotify",
            placement: "top",
            animation: 'scale',
        })

        this.updater(this.image_tooltip)
    },
    methods: {
        updater(image_tooltip) {
            clearInterval(this.interval)
            let now = new Date()
            let end = new Date(this.track.timestamps.end)

            // differece between end and now in seconds
            let diff = (end - now)

            this.interval = setInterval(() => {
                this.time_left = this.msToTime(diff)
                diff -= 1000
                if (diff <= 0) {
                    clearInterval(this.interval)
                }
            }, 1000)

            image_tooltip.setProps({
                content: this.track.album,
            })

            if (this.track.name.length > 15) {
                this.track.name = this.track.name.substring(0, 15) + "..."
            }

            if (this.track.artist.length > 15) {
                this.track.artist = this.track.artist.substring(0, 15) + "..."
            }

        },
        msToTime(s) {
            let ms = s % 1000;
            s = (s - ms) / 1000;
            let secs = s % 60;
            s = (s - secs) / 60;
            let mins = s % 60;
            let hrs = (s - mins) / 60;

            if (secs < 10) {
                secs = "0" + secs;
            }

            return mins + ':' + secs;
        }
    },
}
</script>
