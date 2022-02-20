<template>

    <!-- Skeleton Loader -->
    <div
        :style="{
            width: width,
            height: height,
            borderRadius: radius,
            backgroundColor: backgroundColor,
            display: 'flex',
        }"
    >
    </div>

</template>

<script>
export default {
    name: "Skeleton",
    props: {
        width: String,
        height: String,
        radius: String,
        backgroundColor: String,
    },
}
</script>
