<template>
    <div class="container">
       <h2>{{ contactInformation }}</h2>
    </div>    
</template>

<script>
export default {
    name: 'ContactDetails',
    props: {
        contactInformation: String,
    },
}
</script>

<style lang="css" scoped>
  
</style>