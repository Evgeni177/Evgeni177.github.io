<template>
    <div class="tab-container">
       <div class="tab" @click="tabClicked">
           {{ text }}
       </div>
    </div>    
</template>

<script>
export default {
    name: 'PersonalDetails',
    props: {
        text: String
    },
    methods: {
        tabClicked() {
            console.log('clicked')
        }
    }
}
</script>

<style scoped>
    .tab-container {
        cursor: pointer;
        height: 100%;
        width: 100%;
        align-self: flex-start;
    }
    .tab {
        text-align: center;
        padding: .3rem;
        transition: color,background-color 0.5s linear;
        border-radius: 8px;
    }
    .tab:hover {
        color: grey;
        background: white;
        border-radius: 8px;
    }
</style>