<template>
    <div class="button-container">
       <div class="button" :class="setStyle" @click="dynamicButtonClicked()">
           <div v-if="text" class="text-container">
               <div>{{ text }}</div>
           </div>
       </div>
    </div>    
</template>

<script>
export default {
    name: 'DynamicButton',
    props: {
        text: String,
        small: Boolean,
        medium: Boolean,
        large: Boolean
    },
    computed: {
        setStyle() {
            if(this.small) {
                return 'small';
            }
            if(this.medium) {
                return 'medium';
            }
            if(this.large) {
                return 'large';
            }
            return '';
        }        
    },
    methods: {
        dynamicButtonClicked() {
            this.$emit('dynamicButtonClicked');
        }
    }
}
</script>

<style lang="css" scoped>
    .text-container {
        text-align: center;
    }
    .button {
        background: rgb(175, 175, 175);
        overflow: hidden;
        padding: .2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s linear;
    }
    .button:hover {
        color: rgb(102, 102, 102);
        background: rgba(175, 175, 175, .6)
    }
    .small {
        height: 10pt;
        width: 40pt;
        border-radius: 2pt;
        font-size: 10pt;
    }
    .medium {
        height: 15pt;
        width: 50pt;
    }
    .large {
        height: 20pt;
        width: 80pt;
        font-size: 10pt;
    }
</style>