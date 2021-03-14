<template>
    <div class="container">
       <h2 class="info">{{ info }}</h2>
       <img class="image-avatar" src="https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg" alt="">
    </div>    
</template>

<script>
export default {
    name: 'LegalInformation',
    props: {
        info: String
    },
}
</script>

<style lang="css" scoped>
    .info {
        margin-right: 1rem;
    }
    .container {
        display: flex;
    }
    .image-avatar {
        height: 6rem;
        width: 6rem;
        object-fit: cover;
        border-radius: 50%;
    }
</style>