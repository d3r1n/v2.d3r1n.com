<template>

    <div class="profile">

        <div class="profile_avatar" :style="{ borderColor: user.status}">
            <img :src="user.avatar" alt="" draggable="false">
        </div>

        <div class="profile_username">
            <span id="username_name">
                {{ user.username }}
            </span>

            <span id="username_tag">
                #{{ user.tag }}
            </span>
        </div>

    </div>

    <Spotify :track="track" v-if="user.listening_to_spotify"/>

</template>

<script>

import {reactive, ref} from "vue"

import Spotify from './Spotify.vue'

export default {
    data() {
        return {
            user: {
                username: "Loading...",
                tag: "Loading...",
                avatar: "",
                status: "",
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
                online: '#50fa7b',
                idle: '#ffb86c',
                dnd: '#ff5555',
                offline: '#6272a4',
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

<style lang="scss">

    @import '../../assets/css/variables.scss';

    .profile {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 400px;
        padding: 30px;
        background-color: var(--current-line);
        border-radius: 50px;
    }

    .profile_avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 10px solid;
        overflow: hidden;
        margin-right: 20px;
    }

    .profile_avatar img {
        width: 100%;
        height: 100%;
        user-select: none;
    }

    .profile_username {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        color: var(--foreground);
    }

    .profile_username #username_name {
        font-size: 30px;
        font-weight: bold;
    }

    .profile_username #username_tag {
        font-size: 25px;
        font-weight: bold;
    }

    @media screen and (max-width: $medium) {
        .profile {
            width: 80%;
        }
    }
</style>
