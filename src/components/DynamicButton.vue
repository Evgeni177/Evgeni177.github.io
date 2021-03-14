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
        large: Boolean,
        disabled: Boolean
    },
    computed: {
        setStyleDisabled() {
            return 'disabled'

        },
        setStyle() {
            let style = '';
            if(this.small) {
                style = 'small';
            }
            if(this.medium) {
                style = 'medium';
            }
            if(this.large) {
                style = 'large';
            }
            if(this.disabled) {
                style += ' disabled';
            }
            return  style;
        }        
    },
    methods: {
        dynamicButtonClicked() {
            this.$emit('dynamicButtonClicked', this.disabled);
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
        padding: .4rem;
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
    .disabled {
        cursor: no-drop;
    }
    .disabled:hover {
        background: rgb(175, 175, 175);
        color: black;
    }
</style>