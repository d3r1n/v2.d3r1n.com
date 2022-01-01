<template>

    <Html>
        <Head>
            <Meta :content="'Listening to ' + track.name + `; ${time_left} left.`" property="og:description" />
        </Head>
    </Html>

    <div class="spotify">

        <div id="spotify_">

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
                    {{ time_left }}
                </div>

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

<style lang="scss">

    @import '../../assets/css/variables.scss';

	.spotify {
        margin-top: 25px; /* change! */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 400px;
		height: 100%;
        padding: 30px;
        border-radius: 30px;
        background: var(--current-line);
	}

	#spotify_ {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .spotify_image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        border-radius: 20%;
        border: 5px solid var(--purple);
        overflow: hidden;
        margin-right: 20px;
    }

    .spotify_image img {
        width: 100%;
        height: 100%;
        user-select: none;
        -webkit-user-drag: none;
    }

	.spotify_info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: var(--foreground);
	}

	.spotify_info_name {
		font-size: 20px;
		margin-bottom: 5px;
	}
    .spotify_info_name:hover {
        text-decoration: underline;
    }

    .spotify_info_name a {
        color: var(--foreground);
        text-decoration: none;
    }

	.spotify_info_artist {
		font-size: 16px;
        color: var(--purple);
        margin-bottom: 5px;
	}

    .spotify_info_time {
		font-size: 16px;
        color: var(--green);
	}

    @media screen and (max-width: $medium) {
        .spotify {
            width: 80%;
        }
    }
</style>
