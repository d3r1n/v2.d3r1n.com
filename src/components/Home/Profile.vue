<template>

    <Html>

        <Head>

            <Meta name="twitter:card" content="summary_large_image" />
            <Meta content="d3r1n's Website" property="og:title" />
            <Meta :content="`Hello! ${['👋', '👾', '👽', '🤖', '🎃', '👊', '👉👈', '💻', '🤓'][Math.floor(Math.random() * ['👋', '👾', '👽', '🤖', '🎃', '👊', '👉👈', '💻', '🤓'].length)]}\nI'm d3r1n, 15 y.o Student, Developer & Athlete.\nI'm crazy about Programming, Maths, Physics, Electronics and Sports.`" property="og:description" />
            <Meta content="d3r1n.com" property="og:site_name" />
            <Meta name="theme-color" content="#2e3440" />
            <Meta content='/images/Background.png' property='og:image' itemprop="image" />
            <Link rel="icon" type="image/x-icon" href="/images/favicon.png" />

            <Title>Home - d3r1n</Title>

        </Head>

    </Html>

    <div class="profile">

        <div class="profile_avatar" :style="{ borderColor: user.status}">
            <Skeleton height="175px" width="175px" radius="0%" backgroundColor="#eceff4" v-if="!user.avatar" />
            <img :src="user.avatar" draggable="false" v-else>
        </div>

        <div class="profile_username">
            <Skeleton height="45px" width="125px" radius="10px" backgroundColor="#eceff4" v-if="!user.username" />
            <span id="username" v-else>
                {{ user.username }}
            </span>
            <Skeleton height="45px" width="125px" radius="10px" backgroundColor="#eceff4" v-if="!user.tag" />
            <span id="tag" v-else>
                #{{ user.tag }}
            </span>
        </div>

    </div>

    <Spotify :track="track" v-if="user.listening_to_spotify"/>

</template>

<script>

import {reactive, ref} from "vue"

import Spotify from './Spotify.vue'
import Skeleton from '../Skeleton.vue'

export default {
    data() {
        return {
            user: {
                username: null,
                tag: null,
                avatar: null,
                status: "#5e81ac",
                listening_to_spotify: false,
            },
            track: {
                image: "",
                name: "",
                artist: "",
                album: "",
                track_id: "",
                timestamps: "",
            },
        }
    },
    components: {
        Skeleton,
        Spotify
    },
    async mounted() {

        // User: Discord ID
        const USER_ID = "704758931343278162"

        // Lanyard: Websocket OPCODEs
        const OPCODES = {
            EVENT:  0,
            HELLO:  1,
            INIT:   2,
            BEAT:   3,
        }

        // Lanyard: Connect Websocket
        let ws = new WebSocket("wss://api.lanyard.rest/socket")

        ws.onmessage = ( { data } ) => {
            const msg = ref(JSON.parse(data))

            if (msg.value.op === OPCODES.HELLO) {

                // Sending OPCODE: INIT
                ws.send(JSON.stringify({
                    op: OPCODES.INIT,
                    d: {
                        subscribe_to_id: USER_ID,
                    }
                }))

                // Interval: Send heartbeat
                let beat_interval = msg.value.d.heartbeat_interval

                setInterval(() => {
                    ws.send(JSON.stringify({
                        op: OPCODES.BEAT,
                    }))
                }, beat_interval)
            }
            else if ( msg.value.op === OPCODES.EVENT ) {
                //  Event: User Update
                if ( msg.value.t === "INIT_STATE" ) {
                    let user = msg.value.d

                    this.update_user(user)
                }
                else if ( msg.value.t === "PRESENCE_UPDATE" ) {
                    let user = msg.value.d
                    this.update_user(user)
                }
            }
        }
    },
    methods: {
        update_user(user) {

            // User: Status Colors
            const STATUS_COLORS = {
                online: '#a3be8c',
                idle: '#ebcb8b',
                dnd: '#d08770',
                offline: '#5e81ac',
            }

            // User: Profile
            this.user.avatar = `https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png?size=512`
            this.user.username = user.discord_user.username
            this.user.tag = user.discord_user.discriminator
            this.user.status = STATUS_COLORS[user.discord_status]

            // User: Track

            // Filter: Spotify

            let found = false

            for (let activity of user.activities) {
                if (activity.type === 2) {

                    this.track.image = `https://i.scdn.co/image/${activity.assets.large_image.replace("spotify:", "")}`
                    this.track.name = activity.details
                    this.track.artist = activity.state
                    this.track.album = activity.assets.large_text
                    this.track.track_id = activity.sync_id
                    this.track.timestamps = activity.timestamps

                    found = true
                    break
                }
            }

            if (!found) {
                this.user.listening_to_spotify = false
            }
            else {
                this.user.listening_to_spotify = true
            }
        }
    }
}
</script>
