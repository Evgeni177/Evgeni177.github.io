<template>
    <div>
        <slot name="name"></slot>
        <slot name="paragraph"></slot>
        <slot name="heading"></slot>
             <!-- <account-details v-if="state == 1">
            <h2 slot="heading">account details heading size 2</h2>
        </account-details>
        <customer-details v-if="state == 2">
            <h2 slot="heading">Customer details heading size 2</h2>
        </customer-details>
        <div style="height:200px; background: yellow"></div>
        <button @click="buttonClicked()"> Change state </button>
        <div style="border: 1px solid black">
            <account-details v-if="state == 1">
                <p slot="paragraph">account details paragraph</p>
            </account-details>
            <customer-details v-if="state == 2">
                <p slot="paragraph">Customer details paragraph</p>
            </customer-details>
        </div> -->
    </div>    
</template>

<script>
export default {
    name: 'AccountDetails'
}
</script>

<style lang="css">

</style>