<template>
    <div class="container">
       <h2>{{ name }}</h2>
    </div>    
</template>

<script>
export default {
    name: 'PersonalDetails',
    props: {
        name: String
    },
}
</script>

<style lang="css" scoped>
  
</style>